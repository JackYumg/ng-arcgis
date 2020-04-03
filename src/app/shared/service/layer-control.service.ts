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
  ) {
  }

  async addLayer(layerType, layer, options?) {
    const [MapImageLayer, TileLayer, VectorTileLayer, IntegratedMeshLayer, FeatureLayer] = await loadModules([
      'esri/layers/MapImageLayer',
      'esri/layers/TileLayer',
      'esri/layers/VectorTileLayer',
      'esri/layers/IntegratedMeshLayer',
      'esri/layers/FeatureLayer'
    ]);

    let layerObj: any = {};
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

  public async addFeatureLayerByPoints(points: any[], renderer, layerId, fields) {
    const [GraphicsLayer, Graphic, Polygon, FeatureLayer, Point] = await loadModules([
      'esri/layers/GraphicsLayer',
      "esri/Graphic",
      "esri/geometry/Polygon",
      "esri/layers/FeatureLayer",
      "esri/geometry/Point"
    ]);
    var symbol = {
      type: "picture-marker",
      url: "/assets/images/map/layer-tools/marker-1.svg",//图片地址
      width: "32px",
      height: "32px"
    };
    const features = points.map((item) => {// 要素集合，即同类几何图形的集合
      item.pointtype = layerId;// 类型pointtype，便于点击事件处理
      item.x = item.longitude;
      item.y = item.latitude;
      item.type = '疫情点';
      return new Graphic(new Point(item), symbol);
    });

    const renderear = this.getRenderer();

    var gLayer = new GraphicsLayer();
    // gLayer.visible = false;
    this.mapService.getMap().add(gLayer);


    gLayer.graphics.addMany(features);//添加到图层中显示
  }

  // (3)获取隐患点的渲染器
  private getRenderer() {
    let renderer = {
      type: 'unique-value',
      field: 'type',
      defaultSymbol: {type: 'picture-marker'},
      uniqueValueInfos: []
    };
    renderer.uniqueValueInfos.push({
      value: '疫情点',
      symbol: {
        type: 'picture-marker',
        url: './assets/images/map/layer-tools/marker-1.svg',
        width: '30px',
        height: '30px'
      }
    });
    return renderer;
  }
}
