import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-find',
  templateUrl: './pokemon-find.component.html',
  styleUrls: ['./pokemon-find.component.scss']
})
export class PokemonFindComponent implements OnInit {

  text!: string;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }


}
