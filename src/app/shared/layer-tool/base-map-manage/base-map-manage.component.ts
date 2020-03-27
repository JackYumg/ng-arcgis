import {Component, OnInit} from '@angular/core';
import {LayerControlService} from "../../service/layer-control.service";

@Component({
  selector: 'app-base-map-manage',
  templateUrl: './base-map-manage.component.html',
  styleUrls: ['./base-map-manage.component.less']
})
export class BaseMapManageComponent implements OnInit {
  baseLayers: any[ ] = [];

  constructor(
    private layerControlService: LayerControlService
  ) {
  }

  ngOnInit(): void {
    this.baseLayers = this.layerControlService.getBaseLayers();
  }

  switchLayer(layer) {
    for (let baseLayer of this.baseLayers) {
      if (layer.id === baseLayer.id) {
        baseLayer.active = true;
        this.switchBaseMap(layer);
      } else {
        baseLayer.active = false;
      }
    }
  }

  private switchBaseMap(layer) {
    const pms = this.layerControlService.loadBaseLayer(layer);
  }

}
