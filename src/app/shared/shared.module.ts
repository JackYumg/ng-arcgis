import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayerToolComponent } from './layer-tool/layer-tool.component';

const SHARED_COMPONENTS = [
  LayerToolComponent
];

const SHARED_DIRECTIVES = [

];

const SHARED_MODULES = [
  FormsModule
];

const SHARED_PIPES = [

];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
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
