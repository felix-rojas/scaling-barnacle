import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";
import { POKEMONLIST } from './mock-poke';
import { Observable, of } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon(): Observable<Pokemon[]> {
    const pokemonlist = of(POKEMONLIST);
    return pokemonlist;
  }
}
