

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
    { name: '矢量底图', serviceName: 'vec_w/wmts', id: 'base-layer-vec', layerType: LAYER_TYPES.TileLayer, request: 'GetTile', service: 'WMTS' },
    { name: '影像底图', serviceName: 'img_w/wmts', id: 'base-layer-img', layerType: LAYER_TYPES.TileLayer, request: 'GetTile', service: 'WMTS' },
    { name: '地形晕渲', serviceName: 'ter_w/wmts', id: 'base-layer-ter_w', layerType: LAYER_TYPES.TileLayer, request: 'GetCapabilities', service: 'WMTS' }
];
