import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchFormGroup: FormGroup = new FormGroup({ // on crée un formulaire de type FormGroup
    search: new FormControl('') // on crée un champ de type FormControl
  })

  constructor(private router: Router, private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['res'], { queryParams: { query: this.searchFormGroup.value.search } }) // on redirige l'utilisateur vers la page de résultat avec la valeur de la recherche
  }

  get estConnecte() {
    return this.auth.estConnecte(); // on récupère la valeur de la propriété estConnecte du service auth
  }

  logout() {
    this.auth.seDeconnecter(); // on appelle la fonction seDeconnecter du service auth
    this.router.navigate(['']); // on redirige l'utilisateur vers la page d'accueil
  }
}
