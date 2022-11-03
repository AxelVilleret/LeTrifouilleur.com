import { System } from "./System";

export interface Pc { // on crée une interface Pc
    nom: string,
    marque: string,
    type: string,
    ecran?: any,
    clavier?: any,
    system?: System,
    batterie?: any,
    prix: number
}
