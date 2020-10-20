import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.styl']
})
export class RespostaComponent implements OnInit {

  selectMaos = 0;
  selos = [
    {
      name: 'Rato',
      img: '1.png',
      number: 0,
      slect: 0
    },
    {
      name: 'Boi',
      img: '2.png',
      number: 1,
      slect: 0
    },
    {
      name: 'Tigre',
      img: '3.png',
      number: 2,
      slect: 0
    },
    {
      name: 'Coelho',
      img: '4.png',
      number: 3,
      slect: 0
    },
    {
      name: 'Dragão',
      img: '5.png',
      number: 4,
      slect: 0
    },
    {
      name: 'Serpente',
      img: '6.png',
      number: 5,
      slect: 0
    },
    {
      name: 'Cavalo',
      img: '7.png',
      number: 6,
      slect: 0
    },
    {
      name: 'Bode',
      img: '8.png',
      number: 7,
      slect: 0
    },
    {
      name: 'Macaco',
      img: '9.png',
      number: 8,
      slect: 0
    },
    {
      name: 'Galo',
      img: '10.png',
      number: 9,
      slect: 0
    },
    {
      name: 'Cão',
      img: '11.png',
      number: 10,
      slect: 0
    },
    {
      name: 'Porco',
      img: '12.png',
      number: 11,
      slect: 0
    },
  ];
  resposta: FormGroup;
  respostaFinal = {
    maos: [],
    equilibrio: 0,
    chakara: 0
  };

  constructor(
    public fb: FormBuilder,
    public motor: MotorService,
  ) { }
  ngOnInit() {
    this.resposta = this.fb.group({
      rotateEquilibrio: new FormControl(0),
      slide: new FormControl(0),
    });
  }

  selectSelo(id, index) {
    const inputControl = document.querySelector(id);
    if (inputControl.checked === true) {
      this.selectMaos++;
      this.selos[index].slect = this.selectMaos;
    } else {
      this.respostaFinal.maos = [];
      this.selos.forEach(e => {
        if (e.slect !== 0 && e.slect > this.selos[index].slect) {
          e.slect = e.slect - 1;
        }
      });
      this.selectMaos--;
      this.selos[index].slect = 0;
    }
    this.selos.forEach(e => {
      if (e.slect !== 0) { this.respostaFinal.maos[e.slect - 1] = e.number; }
    });
  }

  changeRotate() {
    const circle = document.querySelector('#espirito-corpo img') as HTMLElement;
    circle.style.transform = 'rotate(' + this.resposta.controls.rotateEquilibrio.value + 'deg)';
    this.respostaFinal.equilibrio = this.resposta.controls.rotateEquilibrio.value;
  }

  saveChakara() {
    this.respostaFinal.chakara = this.resposta.controls.slide.value;
    console.log(this.respostaFinal.chakara);
  }

  responder() {
    const cer = this.motor.grade[this.motor.atual];
    const res = this.respostaFinal;
    if (res.chakara > (cer.chakara - 10) && res.chakara < (cer.chakara + 10) ) {
      if (res.equilibrio > (cer.equilibrio - 10) && res.equilibrio < (cer.equilibrio + 10) ) {
        if (res.maos.length === cer.maos.length && res.maos.every((e, i) => e === cer.maos[i])) {
          this.motor.chaveResposta = 1;
        }
      }
    }
  }




}
