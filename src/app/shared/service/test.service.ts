import {Injectable} from '@angular/core';
import {MapService} from '../map/map.service';
import {loadModules} from 'esri-loader';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private mapService: MapService
  ) {
  }

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

  async addLine() {
    const [Map, SceneView, GraphicsLayer, Graphic] = await loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/GraphicsLayer",
      "esri/Graphic"
    ]);
    var graphicsLayer = new GraphicsLayer();
    var polygon = {
      type: "polygon",
      rings: [
        [-118.818984489994, 34.0137559967283],
        [-118.806796597377, 34.0215816298725],
        [-118.791432890735, 34.0163883241613],
        [-118.79596686535, 34.008564864635],
        [-118.808558110679, 34.0035027131376]
      ]
    };

    var simpleFillSymbol = {
      type: "simple-fill",
      color: [227, 139, 79, 0.8],  // orange, opacity 80%
      outline: {
        color: [255, 255, 255],
        width: 1
      }
    };

    var polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: simpleFillSymbol
    });


    graphicsLayer.add(polygonGraphic);

    var map = this.mapService.getMap();
    var view = this.mapService.getView();
    map.add(graphicsLayer);
  }

//  绘制线条
  async drawLine(points) {
    const [Map, SceneView, GraphicsLayer, Graphic] = await loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "esri/layers/GraphicsLayer",
      "esri/Graphic"
    ]);

    var map = this.mapService.getMap();

    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);


    // Create a line geometry
    var simpleLineSymbol = {
      type: "simple-line",
      color: [226, 119, 40], // orange
      width: 2
    };

    var polyline = {
      type: "polyline",
      paths: points
    };

    var polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol
    });

    graphicsLayer.add(polylineGraphic);
  }

}
