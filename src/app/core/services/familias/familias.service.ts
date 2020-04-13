import { Injectable } from '@angular/core';
import { Familia } from '../../../familia.model';

@Injectable({
  providedIn: 'root'
})
export class FamiliasService {

  familiaCompleta: Familia[] = [
    {
      id: '1',
      image: 'assets/imagenes/jairo.png',
      title: 'Jairo',
      price: 2000,
      fechaNacimiento: new Date('1991/07/31'),
      description: 'es flaquito'
    },
    {
      id: '2',
      image: 'assets/imagenes/vayaine.png',
      title: 'Jeimy',
      price: 2000,
      fechaNacimiento: new Date('1989/12/31'),
      description: 'es la mas vayaines de todas'
    },
    {
      id: '3',
      image: 'assets/imagenes/pachita.png',
      title: 'Selenita',
      price: 2000,
      fechaNacimiento: new Date('2016/10/05'),
      description: 'es la mas Bombita de todas'
    },
    {
      id: '4',
      image: 'assets/imagenes/pachito.png',
      title: 'Juan-chitis',
      price: 2000,
      fechaNacimiento: new Date('2018/12/05'),
      description: 'es la mas cabenzoncito de todos'
    },
    {
      id: '5',
      image: 'assets/imagenes/roger.png',
      title: 'Roger',
      price: 2000,
      fechaNacimiento: new Date('2014/12/05'),
      description: 'Que en paz descanse'
    }
  ];

  constructor() { }

  getAllFamilia(){
    return this.familiaCompleta;
  }

  getFamiliar(id: string){
    return this.familiaCompleta.find(r => r.id === id);
  }
}
