import { Component, OnInit } from '@angular/core';
import { InnerServiceService } from 'src/app/core/services/inner-service.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Ability, Pokemon } from 'src/app/core/models/pokemon';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon!: Pokemon;
  abilities!: Ability[];
  panelOneState=false;
  panelSecondState=false;

  constructor(private innerServiceService: InnerServiceService, private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.innerServiceService.pokemonSeleccionado$.subscribe(
      (pokemon) =>{
        this.showPokemon(pokemon);
      }
    );
  }

  showPokemon(pokemon: string){
    console.log("En show pokemon", pokemon);
    this.pokemonService.finfByNamePokemon(pokemon).subscribe(
      (pokemon) =>{
        this.pokemon = pokemon;
        this.abilities=pokemon.abilities;
        console.log("pokemon abilities=>", this.abilities);
      }
    );
  }

}
