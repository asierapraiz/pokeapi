import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'pokemon-list', component: PokemonListComponent },
      { path: 'pokemon-list/:id', component: PokemonDetailComponent }

    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeRoutingModule { }
