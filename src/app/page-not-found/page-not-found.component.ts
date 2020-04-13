import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  paginaNoEncontrada = 'assets/imagenes/pagina_no_encontrada.jpg';

  ngOnInit(): void {
  }

}
