import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaComponent } from './aula/aula.component';
import { RespostaComponent } from './resposta/resposta.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'aula',
    component: AulaComponent
  },
  {
    path: 'resposta',
    component: RespostaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
