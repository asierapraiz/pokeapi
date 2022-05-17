import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class SharedMaterialModule { }
