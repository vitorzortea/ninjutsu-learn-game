import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AulaComponent } from './aula/aula.component';
import { RespostaComponent } from './resposta/resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AulaComponent,
    RespostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
