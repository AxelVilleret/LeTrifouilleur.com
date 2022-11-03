import { Component, Input, OnInit } from '@angular/core';
import { Pc } from '../data/Pc';


@Component({
  selector: 'app-pc-card',
  templateUrl: './pc-card.component.html',
  styleUrls: ['./pc-card.component.css']
})
export class PcCardComponent implements OnInit {
  @Input()
  public pc: Pc; 
  public imagePath: string; 

  constructor() { }

  ngOnInit(): void {
    this.imagePath = 'assets/' + this.pc.marque + this.pc.type + '.png'; // on définit le chemin de l'image à partir de la marque et du type
   }

}
