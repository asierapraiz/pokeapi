import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SharedMaterialModule } from '../material/shared-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    HeaderComponent,
    CardComponent

  ]
})
export class SharedComponentsModule { }
