import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayerToolComponent } from './layer-tool/layer-tool.component';
import { SearchComponent } from './search/search.component';
import { BaseMapManageComponent } from './layer-tool/base-map-manage/base-map-manage.component';

const SHARED_COMPONENTS = [
  LayerToolComponent,
  SearchComponent
];

const SHARED_DIRECTIVES = [

];

const SHARED_MODULES = [
  FormsModule,
];

const SHARED_PIPES = [

];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
    BaseMapManageComponent
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_MODULES,
    ...SHARED_PIPES
  ],
  imports: [
    CommonModule,
  ],

})
export class SharedModule { }
