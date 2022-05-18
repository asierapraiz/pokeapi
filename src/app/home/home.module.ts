import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { SharedMaterialModule } from '../shared/material/shared-material.module';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonFindComponent } from './pokemon/pokemon-find/pokemon-find.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonChatComponent } from './pokemon/pokemon-chat/pokemon-chat.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokemonListComponent,
    PokemonFindComponent,
    PokemonDetailComponent,
    PokemonChatComponent
  ],
  providers: [ ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedMaterialModule
  ]
})
export class HomeModule { }
