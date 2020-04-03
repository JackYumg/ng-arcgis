import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../shared/search/search.service";
import {TestService} from "../../shared/service/test.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  filterSimpleOption: any = {
    searchWord: "中国",
    needPolygon: "true",
    needPre: "false",
    needSubInfo: "true",
    searchType: "1",
    needAll: "false",
  };


  constructor(
    private searchService: SearchService,
    private testService: TestService
  ) {
  }

  ngOnInit(): void {
    this.initMap();
  }

  /**
   * 初始化进行绘制行政区划图
   */
  initMap() {
    const obs = this.searchService.getAdministrative(this.filterSimpleOption);
    obs.subscribe((result) => {
      const dd = this.getAllPolyline(result.data[0].child);
      var pointList = [];
      for (const e of dd) {
        const ps = e.split(',');
        pointList = [...pointList, ...ps]
      }
      var dl = [];
      for (const g of pointList) {
        dl.push(g.split(' '));
      }
      this.testService.drawLine(dl);
    });
  }

  // 处理数组
  getAllPolyline(arr) {
    var result = [];
    for (let point of arr) {
      result.push(point.points[0].region);
    }
    return result;
  }
}
