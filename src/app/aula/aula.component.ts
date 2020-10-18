import { Component, OnInit } from '@angular/core';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.styl']
})
export class AulaComponent implements OnInit {

  constructor(
    public motor: MotorService
  ) { }

  ngOnInit() {
  }

}
