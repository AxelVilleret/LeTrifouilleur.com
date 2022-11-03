import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcCardComponent } from './pc-card/pc-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultatsComponent } from './resultats/resultats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltresComponent } from './filtres/filtres.component';
import { Filtres2Component } from './filtres2/filtres2.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PanierComponent } from './panier/panier.component';
import { Filtre3Component } from './filtre3/filtre3.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    PcCardComponent,
    ResultatsComponent,
    FiltresComponent,
    Filtres2Component,
    AuthentificationComponent,
    PanierComponent,
    Filtre3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
