import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.styl']
})
export class AulaComponent implements OnInit {

  chakara = 0;
  equilibrio = 0;
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
    this.setAnimationCSS();
    setInterval(() => {
      if (this.chakara !== this.motor.grade[this.motor.atual].chakara) {
        this.chakara++;
      }
    }, (this.motor.grade[this.motor.atual].chakara) / 1000);
    setInterval(() => {
      if (this.equilibrio !== this.motor.grade[this.motor.atual].equilibrio) {
        this.equilibrio++;
      }
    }, (this.motor.grade[this.motor.atual].equilibrio) / 1000);
    setTimeout(() => { this.router.navigate(['/resposta']); }, 5000);
  }

  setAnimationCSS() {
    const bodyFunction = document.querySelector('#animation-aula');
    const chakara = (((this.motor.grade[this.motor.atual].chakara / 100) * 66) + 24);
    const equilibrio = this.motor.grade[this.motor.atual].equilibrio + 360;
    bodyFunction.innerHTML = `
    <style>
      #painel span{
        animation: slide-chakara 3s forwards
      }
      #corpo-espirito{
        animation: rotate-equilibrio 3s forwards
      }
      @keyframes slide-chakara{
        0%{ left: 24%; }
        40%{ left: 90%; }
        60%{ left: ${chakara}%; }
        70%{ left: ${chakara}%; transform: scale(1.2) }
        80%{ left: ${chakara}%; transform: scale(1) }
        90%{ left: ${chakara}%; transform: scale(1.2) }
        100%{ left: ${chakara}%; }
      }
      @keyframes rotate-equilibrio{
        0%{ transform: rotate(0deg); }
        40%{ transform: rotate(360deg); }
        60%{ transform: rotate(${equilibrio}deg); }
        70%{ transform: rotate(${equilibrio}deg) scale(1.2); }
        80%{ transform: rotate(${equilibrio}deg) scale(1); }
        90%{ transform: rotate(${equilibrio}deg) scale(1.2); }
        100%{ transform: rotate(${equilibrio}deg); }
      }
    </style>
    `;
  }

}
