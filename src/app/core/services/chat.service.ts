import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private mostrarMensajeSource = new Subject<Message>();
  mostrarMensajeSource$ = this.mostrarMensajeSource.asObservable();

  sendMessage(message: Message){
    console.log("En ChatService", message);
    this.mostrarMensajeSource.next(message);
  }


  private isTypingSource = new Subject<Pokemon>();
  isTypingSource$ = this.isTypingSource.asObservable();

  isTyping(pokemon: Pokemon){
    console.log("En ChatService", pokemon);
    this.isTypingSource.next(pokemon);
  }
}
