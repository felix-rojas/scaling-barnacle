import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";
import { POKEMONLIST } from './mock-poke';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemon(): Pokemon[] {
    return POKEMONLIST
  }
}
