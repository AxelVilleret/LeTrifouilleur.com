import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationGuard } from './authentification.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PanierComponent } from './panier/panier.component';
import { ResultatsComponent } from './resultats/resultats.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'res', component: ResultatsComponent},
  {path: 'pan', component: PanierComponent, canActivate: [AuthentificationGuard]}, // on ajoute le canActivate pour vérifier si l'utilisateur est connecté
  {path: 'auth', component: AuthentificationComponent},
  {path: '**', redirectTo: ''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
