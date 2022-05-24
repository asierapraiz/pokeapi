import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import { Message } from 'src/app/core/models/message';
import { Pokemon } from 'src/app/core/models/pokemon';

@Component({
  selector: 'app-pokemon-chat',
  templateUrl: './pokemon-chat.component.html',
  styleUrls: ['./pokemon-chat.component.scss']
})
export class PokemonChatComponent implements OnInit {

  messageList: Message[]=[];



  constructor(private chatService: ChatService) {

   }

  ngOnInit(): void {
    this.chatService.mostrarMensajeSource$.subscribe(
      (message: Message) =>{

        this.messageList.push(message);
        console.log("Mensajes =>",this.messageList);
      }
    );

  }

}
