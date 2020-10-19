import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.styl']
})
export class AulaComponent implements OnInit {

  constructor(
    public motor: MotorService,
    public router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => { this.startVideo(); }, 5000);
  }

  startVideo() {
    const videoAula = document.getElementById('video-aula') as HTMLVideoElement;
    videoAula.muted = true;
    videoAula.play();

    document.getElementById('corpo-espirito').animate(
      [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(' + (this.motor.grade[this.motor.atual].equilibrio + 360) + 'deg)'},
      ],
      { duration: 2000, iterations: 1, fill: 'forwards', }
    );

    const m = this.motor.grade[this.motor.atual].chakara;
    document.querySelector('#painel span').animate(
      [
        {left: '24%'},
        {left: '90%;'},
        {left: (((m / 100) * 62) + 28) + '%'},
      ],
      { duration: 2000, iterations: 1, fill: 'forwards', }
    );

    setTimeout(() => { this.router.navigate(['/resposta']); }, 10000);
  }

}
