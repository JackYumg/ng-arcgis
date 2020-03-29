export const enum LAYER_TYPES {
  FeatureLayer = 'FeatureLayer',
  MapImageLayer = 'MapImageLayer',
  TileLayer = 'TileLayer',
  IntegratedMeshLayer = 'IntegratedMeshLayer'
}

export const enum BASE_MAPS {
  vec = 'vec',
  img = 'img'
}

export const BASE_LAYERS = [
  {
    name: '影像底图',
    layers: [
      { serviceName: 'img_w/wmts', layer: 'img' },
      { serviceName: 'cia_w/wmts', layer: 'cia' }
    ],
    id: 'base-layer-img',
    layerType: LAYER_TYPES.TileLayer,
    request: 'GetTile',
    service: 'WMTS',
    static: 'img',
    active: false
  },
  {
    name: '矢量底图', layers: [
      { serviceName: 'vec_w/wmts', layer: 'vec' },
      { serviceName: 'cva_w/wmts', layer: 'cva' }
    ], id: 'base-layer-vec', layerType: LAYER_TYPES.TileLayer, request: 'GetTile', service: 'WMTS', static: 'vec',
    active: false
  },
  {
    name: '地形晕渲',
    layers: [
      { serviceName: 'ter_w/wmts', layer: 'ter' },
      { serviceName: 'cta_w/wmts', layer: 'cta' }
    ],
    id: 'base-layer-ter_w',
    layerType: LAYER_TYPES.TileLayer,
    request: 'GetTile',
    service: 'WMTS',
    static: 'ter',
    active: false
  }
];
