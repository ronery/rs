import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { QueFacoComponent } from './que-faco/que-faco.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quem-sou',
    component: QuemSouComponent
  },
  {
    path: 'que-faco',
    component: QueFacoComponent
  },
  {
    path: 'trabalhos',
    component: TrabalhosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
