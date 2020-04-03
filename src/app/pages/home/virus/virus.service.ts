import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {AppService} from "../../../shared/service/app.service";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class VirusService {

  constructor(
    private  appService: AppService,
    private datePipe: DatePipe
  ) {
  }

  //  查找中国全国的情况
  getDataInChina(date: Date) {
    const datestr = this.datePipe.transform(date, 'yyyy-MM-dd');
    const url = `${environment.apiUrlt}coronavirusmap/api/epidemicInfos/china?`;
    return this.appService.getData(url, {date: datestr});
  }

  // 查询全球情况
  getDataInWorld(date: Date) {
    const datestr = this.datePipe.transform(date, 'yyyy-MM-dd');
    const url = `${environment.apiUrlt}coronavirusmap/api/epidemicInfos/china/foreignCountry?`;
    return this.appService.getData(url, {date: datestr});
  }

  //通过国家编码查询
  getDataByGB(gb: string) {
    const url = `${environment.apiUrlt}coronavirusmap/api/epidemicInfos/country/${gb}?`;
    return this.appService.getData(url, {});
  }

  // 通过事件查看每个省的情况
  getDataInCity(date: Date) {
    const datestr = this.datePipe.transform(date, 'yyyy-MM-dd');
    const url = `${environment.apiUrlt}coronavirusmap/api/epidemicInfos/provinceCity?`;
    return this.appService.getData(url, {date: datestr});
  }
}
