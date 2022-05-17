import { Component, OnInit } from '@angular/core';
import { InnerServiceService } from 'src/app/core/services/inner-service.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Pokemon } from 'src/app/core/models/pokemon';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonName!: string;
  constructor(private innerServiceService: InnerServiceService, private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.innerServiceService.pokemonSeleccionado$.subscribe(
      (pokemon) =>{
        this.showPokemon(pokemon);
      }
    );
  }

  showPokemon(pokemon: string){
    this.pokemonService.finfByNamePokemon(pokemon).subscribe(
      (pokemonName) =>{
        this.pokemonName = pokemonName;
        console.log(this.pokemonName);
      }
    );
  }

}
