import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaComponent } from './aula/aula.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
