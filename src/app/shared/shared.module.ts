import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayerToolComponent } from './layer-tool/layer-tool.component';
import { SearchComponent } from './search/search.component';
import { BaseMapManageComponent } from './layer-tool/base-map-manage/base-map-manage.component';
import {HttpClientModule} from "@angular/common/http";
import { LayerMenusComponent } from './layer-menus/layer-menus.component';

const SHARED_COMPONENTS = [
  LayerToolComponent,
  SearchComponent,
  BaseMapManageComponent,
  LayerMenusComponent
];

const SHARED_DIRECTIVES = [

];

const SHARED_MODULES = [
  FormsModule,
  HttpClientModule,
];

const SHARED_PIPES = [
  DatePipe
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    // ...SHARED_PIPES,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_MODULES,
    ...SHARED_PIPES
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ...[SHARED_PIPES]
  ]

})
export class SharedModule { }
