import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map: any;
  private view:any;
  constructor() { }

  public setMap(map) {
    this.map = map;
  }

  public getMap(){
    return this.map;
  }

  public getView() {
    return this.view;
  }

  public setView(view) {
    this.view = view;
  }
}
