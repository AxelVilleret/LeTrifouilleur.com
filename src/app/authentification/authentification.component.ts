import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { Utilisateur } from '../data/utilisateur';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public user: Utilisateur;
  loginForm: FormGroup = new FormGroup({ // on crée un formulaire de type FormGroup
    email: new FormControl(''), // on crée un champ de type FormControl
    password: new FormControl(''), // on crée un champ de type FormControl
    pseudo: new FormControl('') // on crée un champ de type FormControl
  })

  constructor(private auth: AuthentificationService, private router: Router) { } // on injecte le service auth et le router

  ngOnInit(): void {
  }

  login() { // on crée une fonction qui va se charger de faire le login
    this.user = this.loginForm.value; // on récupère les données du formulaire et on les stocke dans un objet utilisateur
    this.auth.seConnecter(this.user); // on appelle la fonction seConnecter du service auth
    this.router.navigate(['']); // on redirige l'utilisateur vers la page d'accueil
  }

}
