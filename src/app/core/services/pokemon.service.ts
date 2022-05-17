import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.pokemonApiUrl;

  constructor(private http: HttpClient) {}


  findAllPokemon(): Observable <Pokemon[]>{
    const url = `${this.baseUrl}pokemon?limit=25`;
    return this.http.get<any>(url)
    .pipe(
      map((res) => res.results)
    );
  }


  finfByNamePokemon(nombre: string): Observable<any> {
    const url = `${this.baseUrl}pokemon/${nombre}`;

    return this.http.get<any>(url).pipe(
      map((res) => res.name)
    );
  }
}