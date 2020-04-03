import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AppService} from "../service/app.service";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LayerMenuService {

  constructor(
    private appService: AppService,
    private datePipe: DatePipe
  ) {
  }


}
