import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  text!: string;
  pokemons: Pokemon[] = [];
  pokemonCopy: Pokemon[] =[];
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {

    this.service.findAllPokemon().subscribe(
      res => {
        //console.log(pokemons);
        this.pokemons = res;
        this.pokemonCopy = this.pokemons;
      }
    );
  }


  filter(text: any) {
    const searchValue: string = text.target.value;
    console.log({ searchValue });
    this.pokemonCopy = this.pokemons.filter(({ name }: Pokemon) => {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

}
