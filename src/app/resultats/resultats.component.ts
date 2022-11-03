import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pc } from '../data/Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {

  query: string = '';
  public pcListe: Pc[] = [];
  constructor(private route: ActivatedRoute, private pcService: PcService) {
    route.queryParams.subscribe((params: any) => this.query = params.query) 
  }

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData
    })
  }

  valide(sub: string, pc: Pc): boolean {
    return pc.nom.includes(sub) || pc.marque?.includes(sub) || pc.type.includes(sub); // on vérifie si le nom, la marque ou le type contient la sous-chaine
  }

}
