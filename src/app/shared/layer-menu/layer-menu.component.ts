import { Component, OnInit } from '@angular/core';
import { LayerMenus } from './layer-menu.data';
@Component({
  selector: 'app-layer-menu',
  templateUrl: './layer-menu.component.html',
  styleUrls: ['./layer-menu.component.less']
})
export class LayerMenuComponent implements OnInit {

  constructor() { }
  menus: any[] = LayerMenus;
  ngOnInit(): void {
  }

}
