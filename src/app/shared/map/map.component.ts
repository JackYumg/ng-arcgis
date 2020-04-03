import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import { MapService } from './map.service';
import { LayerControlService } from '../service/layer-control.service';
import { LAYER_TYPES, BASE_LAYERS } from '../service/base-layer.data';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  constructor(
    private mapService: MapService,
    private layerControlServcie: LayerControlService
  ) {
  }

  ngOnInit(): void {
    this.initMap().then((view) => {
      this.mapService.setView(view);
      console.info('地图初始化完成');
      console.info('开始加载底图------------------');
      const layer = BASE_LAYERS[0];
      this.layerControlServcie.loadBaseLayer(layer).then(() => {
        layer.active = true;
      });
    });
  }

  @ViewChild("map", { static: false })
  mapElm: ElementRef;

  async initMap() {
    const [Map, MapView] = await loadModules([
      'esri/Map', 'esri/views/MapView',
      "esri/layers/MapImageLayer",
    ]);
    const map = new Map({

    });
    this.mapService.setMap(map);
    return new MapView({
      container: this.mapElm.nativeElement,
      map,
      qualityProfile: 'medium',
      highlightOptions: {
        color: [0, 255, 255],
        fillOpacity: 0,
        haloOpacity: 1
      },
      padding: { left: 0, top: 0, right: 0, bottom: 0 },
      camera: {
        position: { y: 30.35908, x: 107.74266, z: 1404539, spatialReference: { wkid: 4326 } }
      },
      ui: {
        components: []
      }
    });
  }

}
