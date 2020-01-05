import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { ServeService } from './services/serve.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
