import { Component, OnInit } from '@angular/core';
import { POKEMONLIST } from '../mock-poke';
import { Pokemon } from '../pokemon';
import { PokemonService } from "../pokemon.service";

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
  
  pokemonlist: Pokemon[] = [];
  selectedPokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  getPokemon(): void {
    this.pokemonService.getPokemon()
    .subscribe(pokemonlist => this.pokemonlist = pokemonlist)
  }

}
