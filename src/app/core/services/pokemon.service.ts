import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, mergeMap, Observable } from 'rxjs';
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
      map((res: any) => res.results.map((poke: any) => ({...poke, id: this.getPokeId(poke)}))),
    );
  }
/*
  all(): Observable<Partial<Pokemon[]>> {
    return this.http.get(this.baseUrl).pipe(
      map((res: any) => res.results.map((poke: any) => ({...poke, id: this.getPokeId(poke)}))),
      mergeMap((pokemon: Partial<Pokemon[]>) => forkJoin(pokemon.map((poke: any) => poke = this.getPoke(poke.id)))),
      map((pokemon: Partial<Pokemon[]>) => pokemon.map(poke => this.mapPokemonData(poke)))
    )
  }*/

  mapPokemonData(poke: any): Partial<Pokemon> {
    return poke = { name: poke.name, url: poke.url }
  }


  getPokeId(poke: any): number {
    return poke.url.split('/')[6];
  }

  getPoke(id: any): Observable<Partial<Pokemon>> {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      map(poke => poke)
    )
  }



  finfByNamePokemon(nombre: string): Observable<any> {
    const url = `${this.baseUrl}pokemon/${nombre}`;

    return this.http.get<any>(url).pipe(
      map((res) => res.name)
    );
  }
}
