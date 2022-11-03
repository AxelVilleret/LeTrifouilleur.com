import { Injectable } from '@angular/core';
import { Utilisateur } from './data/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  public seConnecter(userData: Utilisateur) { // on crée une fonction qui va se charger de faire le login
    localStorage.setItem('ACCESS_TOKEN', "access_token");  // on stocke le token dans le localStorage
  }
  public estConnecte() { // on crée une fonction qui va se charger de vérifier si l'utilisateur est connecté
    return localStorage.getItem('ACCESS_TOKEN') !== null; // on vérifie si le token est présent dans le localStorage
  }
  public seDeconnecter() { // on crée une fonction qui va se charger de se déconnecter
    localStorage.removeItem('ACCESS_TOKEN'); // on supprime le token du localStorage
  }
}
