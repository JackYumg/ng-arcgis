import {Component, OnInit} from '@angular/core';
import {LayerToolDatas} from './layer-tool.data';

@Component({
  selector: 'app-layer-tool',
  templateUrl: './layer-tool.component.html',
  styleUrls: ['./layer-tool.component.less']
})
export class LayerToolComponent implements OnInit {

  layerTools: any[] = LayerToolDatas;
  activeTool: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  activeTools(layerTool) {
    for (const tool of this.layerTools) {
      if (tool.name === layerTool.name) {
        tool.active = !tool.active;
        if (tool.active) {
          this.activeTool = tool;
        } else {
          this.activeTool === {};
        }
      } else {
        tool.active = false;
      }
    }
  }

}
