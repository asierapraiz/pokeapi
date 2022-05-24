import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class InnerServiceService {

  constructor() { }

  private mostrarDetalleSource = new Subject<any>();
  pokemonSeleccionado$ = this.mostrarDetalleSource.asObservable();

  pokemonSeleccionado(pokemonName: string){
    this.mostrarDetalleSource.next(pokemonName);
  }
}
