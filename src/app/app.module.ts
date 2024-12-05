import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetModalComponent } from './planet-modal/planet-modal.component';
import { TransformationsModalComponent } from './transformations-modal/transformations-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    CardPersonajeComponent,
    PlanetModalComponent,
    TransformationsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
