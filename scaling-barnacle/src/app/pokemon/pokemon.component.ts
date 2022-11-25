import { Component, OnInit } from '@angular/core';
import { POKEMONLIST } from '../mock-poke';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
  };
  
  pokemonlist = POKEMONLIST;
  selectedPokemon?: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

}
