import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { ChatService } from 'src/app/core/services/chat.service';
import { Message } from 'src/app/core/models/message';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  text!: string;
  pokemons: Pokemon[] = [];
  pokemonCopy: Pokemon[] =[];
  inputNameControl = new FormControl();
  formCtrlSub!: Subscription;

  constructor(private service: PokemonService, private chatService: ChatService) { }



  ngOnInit() {

      this.findAll();
  }


  findAll() {

    this.service.findAllPokemon().subscribe(
      res => {
        //console.log(pokemons);
        this.pokemons = res;
        this.pokemonCopy = this.pokemons;
        console.log(res);
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

  sendMessage(message: Message){
    console.log("Mensaje =>", message);
    this.chatService.sendMessage(message);

  }

  isTyping(pokemon: Pokemon){
    this.chatService.isTyping(pokemon);

  }

}
