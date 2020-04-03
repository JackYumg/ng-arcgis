import {AfterViewInit, Component, OnInit} from '@angular/core';
import {VirusService} from "./virus.service";
import {LayerControlService} from "../../../shared/service/layer-control.service";

@Component({
  selector: 'app-virus',
  templateUrl: './virus.component.html',
  styleUrls: ['./virus.component.less']
})
export class VirusComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.findChinaData();
      this.findChinaPeelCity();
    }, 3000);
  }

  layerId: string = 'virus-layer-id';

  constructor(
    private virusService: VirusService,
    private layerControlService: LayerControlService
  ) {
  }

  ngOnInit(): void {

  }

  findChinaData() {
    const date = new Date();
    const obs = this.virusService.getDataInChina(date);
    obs.subscribe((result) => {
      const {code, msg, data} = result;
      const {gb} = data[0];
      this.findAllChinaData(gb)
    });
  }

  findAllChinaData(gb) {
    const obs = this.virusService.getDataByGB(gb);
    obs.subscribe((result) => {
      console.log(result);
    });
  }

  findChinaPeelCity() {
    const date = new Date();
    const obs = this.virusService.getDataInCity(date);
    obs.subscribe((result) => {
      this.addPoints(result.data);
    });
  }

  addPoints(datas) {
    const allPoints = [];
    for (let data of datas) {
      if (data.children) {
        for (let child of data.children) {
          if (child.children) {
            delete data.children;
          }
          child.longitude = child.lng;
          child.latitude = child.lat;
          allPoints.push(child);
        }
        delete data.children;
      }
      data.longitude = data.lng;
      data.latitude = data.lat;
      allPoints.push(data);
    }
    const renderer = {
      type: "simple",
      symbol: {
        type: "point",
        color: [50, 50, 50, 0.75],
        outline: {
          color: "white",
          width: 0.5
        }
      }
    };

    const fields = [
      {type: 'string', name: 'gb', alias: '区域编码'},
      {type: 'string', name: 'name', alias: '区域名称'},
      {type: 'string', name: 'healToday', alias: '今日治愈'},
      {type: 'string', name: 'confirmToday', alias: '今日确诊'},
      {type: 'string', name: 'deadToday', alias: '今日死亡'},
      {type: 'string', name: 'suspectToday', alias: '及尼日疑似'},
      {type: 'string', name: 'healTotal', alias: '总共治愈'},
      {type: 'string', name: 'confirmTotal', alias: '总共确诊'},
      {type: 'string', name: 'deadTotal', alias: '总共死亡'},
      {type: 'string', name: 'suspectTotal', alias: '总共疑似'},
      {type: 'string', name: 'updateTime', alias: '更新时间'},
      {type: 'string', name: 'nowConfirm', alias: '新增确认'},
      {type: 'string', name: 'confirmCompare', alias: '确诊比较'},
      {type: 'string', name: 'nowConfirmCompare', alias: '新增确证比较'},
      {type: 'string', name: 'healCompare', alias: '治愈比较'},
      {type: 'string', name: 'deadCompare', alias: '死亡比较'},
      {type: 'double', name: 'lat', alias: '纬度'},
      {type: 'double', name: 'lng', alias: '经度'},
      {type: 'double', name: 'longitude', alias: '经度'},
      {type: 'double', name: 'latitude', alias: '纬度'},
      {type: 'double', name: 'x', alias: '纬度'},
      {type: 'double', name: 'y', alias: '纬度'},
      {type: 'string', name: 'type', alias: '类型'}
    ];
    this.layerControlService.clearLayerByIds([this.layerId]);
    this.layerControlService.addFeatureLayerByPoints(allPoints, renderer, this.layerId, fields);

  }

}
