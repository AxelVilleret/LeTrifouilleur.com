import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pc } from '../data/Pc';
import { PcService } from '../pc.service';

@Component({
  selector: 'app-filtres2',
  templateUrl: './filtres2.component.html',
  styleUrls: ['./filtres2.component.css']
})
export class Filtres2Component implements OnInit {
  public pcListe: Pc[] = [];
  selectFormGroup: FormGroup = new FormGroup({
    select: new FormControl('')
  })

  constructor(private pcService: PcService, private router: Router) { }

  ngOnInit(): void {
    this.pcService.getPc().subscribe(fullData => {
      this.pcListe = fullData
    })

  }
  onSubmit() {
    this.router.navigate(['res'], { queryParams: { query: this.selectFormGroup.value.select } })
  }


}
