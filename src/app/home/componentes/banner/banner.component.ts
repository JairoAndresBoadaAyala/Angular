import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  imagenesBannerFamilia: string[] = [
    'assets/imagenes/amo_mi_familia.jpg',
    'assets/imagenes/familia_arbol.jpg',
    'assets/imagenes/la_familia_es_todo.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
