import {Injectable} from '@angular/core';
import {AppService} from "../../core/net/app.service";
import {environment} from "../../../environments/environment";
import {PostData} from "./post-data";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private appService: AppService
  ) {
  }

  getSimpleResult(options: PostData) {
    const url = `${environment.apiUrl}administrative?postStr=${JSON.stringify(options)}&tk=${environment.mapToken}`;
    return this.appService.getData(url, {});
  }
}
