import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { ReginstroComponent } from './public/reginstro/reginstro.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./home/home.module').then((x) => x.HomeModule),
  },
  { path: 'login', component: LoginComponent  },
  { path: 'resgister', component: ReginstroComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
