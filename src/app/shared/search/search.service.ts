import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AppService} from "../service/app.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private appService: AppService
  ) {
  }

  // 获取行政区划
  getAdministrative( options) {
    const url = `${environment.apiUrl}administrative?`;
    const str = JSON.stringify(options);
    return this.appService.getData(url, {postStr: str, tk: environment.mapToken});
  }
}
