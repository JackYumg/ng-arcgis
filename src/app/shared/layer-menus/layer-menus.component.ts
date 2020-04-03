import {Component, OnInit} from '@angular/core';
import {LayerMenus} from "./layer-menu.data";
import {LayerMenuService} from "./layer-menu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layer-menus',
  templateUrl: './layer-menus.component.html',
  styleUrls: ['./layer-menus.component.less'],
})
export class LayerMenusComponent implements OnInit {

  layerMenus: any[] = LayerMenus;
  showSubMenus: any[] = [];
  showModal: boolean = false;

  constructor(
    private layerMenusService: LayerMenuService,
    private  router: Router
  ) {
  }

  ngOnInit(): void {
  }

  selectMenu(menu) {
    let activeCount = 0;
    for (const item of this.layerMenus) {
      if (menu.id === item.id) {
        menu.active = !menu.active;
        if (menu.active) {
          activeCount += 1;
          this.showSubMenus = menu.children;
        }
      } else {
        menu.active = false;
      }
    }

    if (activeCount > 0) {
      this.showModal = true;
    } else {
      this.showModal = false;
    }
  }

  activeSubMenu(menu) {
    const { url } = menu;
    this.router.navigate([url])
  }

  callFn(fnName , args:any[]) {
    this.layerMenusService[fnName](...args);
  }



}
