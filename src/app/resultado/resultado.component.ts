import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.styl']
})
export class ResultadoComponent implements OnInit {

  constructor(
    public motor: MotorService,
    public router: Router,
  ) { }

  ngOnInit() {}

  avancar() {
    this.motor.chaveResposta = 0;
    this.motor.resposta = { maos: [], equilibrio: 0, chakara: 0 };
    this.motor.atual++;
    this.router.navigate(['/aula']);
  }
  repetir() {
    this.motor.chaveResposta = 0;
    this.motor.resposta = { maos: [], equilibrio: 0, chakara: 0 };
    this.router.navigate(['/aula']);
  }

}
