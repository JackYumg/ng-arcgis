import { Component, OnInit } from '@angular/core';
import {LayerToolDatas  } from './layer-tool.data';
@Component({
  selector: 'app-layer-tool',
  templateUrl: './layer-tool.component.html',
  styleUrls: ['./layer-tool.component.less']
})
export class LayerToolComponent implements OnInit {

  layerTools:any[] = LayerToolDatas
  constructor() { }

  ngOnInit(): void {
  }

}
