import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private auth: AuthentificationService, public router: Router) {}
  canActivate(): boolean { // on crée une fonction qui va se charger de vérifier si l'utilisateur est connecté
    if (!this.auth.estConnecte()) { // on vérifie si le token est présent dans le localStorage
      this.router.navigate(['auth']); // on redirige l'utilisateur vers la page d'authentification
      return false; // on retourne false pour empêcher l'accès à la page
    }
    return true; // on retourne true pour autoriser l'accès à la page
  }
  
}
