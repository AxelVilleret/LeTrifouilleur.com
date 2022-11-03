import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pc } from '../data/Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-filtre3',
  templateUrl: './filtre3.component.html',
  styleUrls: ['./filtre3.component.css']
})
export class Filtre3Component implements OnInit {
  public pcListe: Pc[] = []; 
  selectFormGroup: FormGroup = new FormGroup({ // on crée un formulaire de type FormGroup
    select: new FormControl('') // on crée un champ de type FormControl
  })

  constructor(private pcService: PcService, private router: Router) { } // on injecte le service pcService et le router

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData
    })

  }
  onSubmit() {
    this.router.navigate(['res'], { queryParams: { query: this.selectFormGroup.value.select } }) // on redirige l'utilisateur vers la page de résultat avec la valeur de la sélection
  }

}
