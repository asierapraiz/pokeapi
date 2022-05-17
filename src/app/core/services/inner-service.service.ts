import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InnerServiceService {

  constructor() { }

  private mostrarDetalleSource = new Subject<any>();
  pokemonSeleccionado$ = this.mostrarDetalleSource.asObservable();

  pokemonSeleccionado(pokemon: string){
    this.mostrarDetalleSource.next(pokemon);
  }
}
