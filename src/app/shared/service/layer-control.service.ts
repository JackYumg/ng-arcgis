import {Injectable} from '@angular/core';
import {MapService} from '../map/map.service';
import {loadModules} from 'esri-loader';
import {BASE_LAYERS, LAYER_TYPES, BASE_MAPS} from './base-layer.data';
import {environment} from 'src/environments/environment';
import {TDTLayer} from './TDTLayer';

@Injectable({
  providedIn: 'root'
})
export class LayerControlService {

  constructor(
    private mapService: MapService
  ) { }

  async addLayer(layerType, layer, options?) {
    const [MapImageLayer, TileLayer, VectorTileLayer, IntegratedMeshLayer, FeatureLayer] = await loadModules([
      'esri/layers/MapImageLayer',
      'esri/layers/TileLayer',
      'esri/layers/VectorTileLayer',
      'esri/layers/IntegratedMeshLayer',
      'esri/layers/FeatureLayer'
    ]);

    let layerObj: any = {}
    const map = this.mapService.getMap();
    switch (layerType) { // 瓦片图层
      case LAYER_TYPES.TileLayer:
        layerObj = new TileLayer({
          url: `${environment.mapUrl}${layer.serviceName}/tk=${environment.mapToken}&request=${layer.request}&service=${layer.service}`,
          id: layer.id
        });
        break;
    }
    map.layers.add(layer, options);
    return layer;
  }

  async loadBaseLayer(layer) {
    const map = this.mapService.getMap();
    const [Map, MapView, WebTileLayer] = await loadModules([
      "esri/Map", "esri/views/MapView", "esri/layers/WebTileLayer"
    ]);
    // 眩晕投影
    var tiledLayer = new WebTileLayer({
      urlTemplate: `${environment.mapUrl}${layer.layers[0].serviceName}?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${layer.layers[0].layer}&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${environment.mapToken}`,
      subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    });

    // 标记
    var titedLayerMark = new WebTileLayer({
      urlTemplate: `${environment.mapUrl}${layer.layers[1].serviceName}?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${layer.layers[1].layer}&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${environment.mapToken}`,
      subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    });

    // 底图
    map.basemap = {
      baseLayers: [tiledLayer, titedLayerMark]
    };
  }

  clearLayerByIds(layerIds: string[]) {
    const map = this.mapService.getMap();
    for (let layerId of layerIds) {
      // 如果找到了图层
      const layer = map.findLayerById(layerId);
      if (layer) {
        map.remove(layer);
      }
    }
  }

  public getBaseLayers() {
    return BASE_LAYERS;
  }

}
