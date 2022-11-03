import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Pc } from '../data/Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public pcListe: Pc[] = []; // on déclare une liste de pc

  constructor(private pcService: PcService) { }

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData // on récupère la liste de pc avec les données issues du json
    })
  }

}
