import { Injectable } from '@angular/core';
import { MapService } from '../map/map.service';
import { loadModules } from 'esri-loader';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private mapService: MapService
  ) { }

  async addLayer() {
    const [Map, SceneView, GraphicsLayer, Graphic] = await loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/GraphicsLayer",
      "esri/Graphic"
    ]);

    var map = this.mapService.getMap();

    var view = this.mapService.getView();

    /*********************
     * Add graphics layer
     *********************/

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    /*************************
     * Add a 3D point graphic
     *************************/

    // London
    var point = {
      type: "point", // autocasts as new Point()
      x: 106.54,
      y: 29.59,
      z: 1010
    };

    var markerSymbol = {
      type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
      color: [226, 119, 40],
      outline: { // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 2
      }
    };

    var pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    graphicsLayer.add(pointGraphic);

    /****************************
     * Add a 3D polyline graphic
     ****************************/

    var polyline = {
      type: "polyline", // autocasts as new Polyline()
      paths: [
        [106.54, 29.59, 0],
        [106.54, 29.59, 1000]
      ]
    };

    var lineSymbol = {
      type: "simple-line", // autocasts as SimpleLineSymbol()
      color: [226, 119, 40],
      width: 9
    };

    var polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: lineSymbol
    });

    graphicsLayer.add(polylineGraphic);

    /***************************
     * Add a 3D polygon graphic
     ***************************/

    var polygon = {
      type: "polygon", // autocasts as new Polygon()
      rings: [
        [106.54, 29.29, 400],
        [106.54, 29.39, 500],
        [106.42, 29.49, 500],
        [106.42, 29.79, 400],
        [106.54, 29.89, 400]
      ]
    };

    var fillSymbol = {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: [227, 139, 79, 0.8],
      outline: { // autocasts as new SimpleLineSymbol()
        color: [255, 255, 255],
        width: 1
      }
    };

    var polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: fillSymbol
    });

    graphicsLayer.add(polygonGraphic);
  }
}
