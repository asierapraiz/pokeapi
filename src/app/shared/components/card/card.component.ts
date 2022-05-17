import { Component, OnInit , Input} from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { InnerServiceService } from 'src/app/core/services/inner-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;


  constructor(private inerService: InnerServiceService) { }

  ngOnInit(): void {
  }

  mostrarDetalle($event: any){
    console.log(this.pokemon?.name);
    this.inerService.pokemonSeleccionado(this.pokemon!.name);

  }

  sendMessage($event: any){
    console.log($event.target.value);
  }

}
