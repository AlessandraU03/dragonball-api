import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetModalComponent } from './planet-modal/planet-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    CardPersonajeComponent,
    PlanetModalComponent
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
