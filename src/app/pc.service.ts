import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pc } from './data/Pc';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  constructor(private http: HttpClient) { }
  getPc(): Subject<Pc[]> {

    let sub = new Subject<Pc[]>(); // on crée un observable

    let urlService = `https://letrifouilleur.netlify.app/assets/pcs.json`; // on définit l'url du json

    this.http.get<Pc[]>(urlService).subscribe( // on récupère les données du json
      (pc: Pc[]) => {
        sub.next(pc); // on envoie les données au subject
      }
    )
    return sub;

  }
}
