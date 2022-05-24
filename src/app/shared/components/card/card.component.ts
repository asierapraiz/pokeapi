import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { InnerServiceService } from 'src/app/core/services/inner-service.service';
import { Message } from 'src/app/core/models/message';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  @Output() passMessage = new EventEmitter<Message>();
  @Output() typing = new EventEmitter<Pokemon>();

  message!: Message ;


  constructor(private inerService: InnerServiceService) { }

  ngOnInit(): void {
  }

  mostrarDetalle($event: any){

    this.inerService.pokemonSeleccionado(this.pokemon!.name);

  }

  sendMessage( $event: any){

    console.log("En el card",$event.target.value);
    this.message = {'message': $event.target.value, 'pokemon': this.pokemon! };
    this.passMessage.emit(this.message);

  }

  onKey(){
    this.typing.emit(this.pokemon);
  }

}
