import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';

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
}
