import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotorService {

  constructor() { }

  grade = [
    {
      aula: 'Bunshin no Jutsu',
      traducao: 'Jutsu de Clonagem',
      descricao: 'Cria uma cópia intangível de seu próprio corpo',
      video: 0,
      maos: [7, 5, 2],
      equilibrio: 180,
      chakara: 30
    },
    {
      aula: 'Henge no Jutsu',
      traducao: 'Jutsu de Transformação',
      descricao: 'Se transforma em outras pessoas, animais, plantas ou objetos inanimados',
      video: 1,
      maos: [10, 11, 7],
      equilibrio: 70,
      chakara: 60
    },
    {
      aula: 'Kawarimi no Jutsu',
      traducao: 'Jutsu de Substituição',
      descricao: 'Quando em perigo, o ninja põe algo no lugar dele, não se machucando',
      video: 2,
      maos: [7, 11, 1, 10, 5],
      equilibrio: 200,
      chakara: 35
    },
    {
      aula: 'Chidori',
      traducao: 'Corte Relâmpago',
      descricao: 'Uma grande quantidade de chakra de Liberação de Relâmpago na mão do usuário.',
      video: 3,
      maos: [1, 3, 8],
      equilibrio: 90,
      chakara: 80
    },
  ];
  atual = 0;
  chaveResposta = 0;
  resposta = { maos: [], equilibrio: 0, chakara: 0 };
}
