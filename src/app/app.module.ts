import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './shared/map/map.component';
import { NgMapButtonComponent } from './components/ng-map-button/ng-map-button.component';
import { VirusComponent } from './pages/home/virus/virus.component';
const SHARED_MODULES = [

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    NgMapButtonComponent,
    VirusComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    SharedModule,
    NgMapButtonComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
