import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { FamiliasService} from '../../core/services/familias/familias.service';
import { Familia } from '../../familia.model';

@Component({
  selector: 'app-familias-detalle',
  templateUrl: './familias-detalle.component.html',
  styleUrls: ['./familias-detalle.component.scss']
})
export class FamiliasDetalleComponent implements OnInit {

  public familiarDetalle: Familia;

  constructor(
    private route: ActivatedRoute,
    private familiasService: FamiliasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.familiarDetalle =  this.familiasService.getFamiliar(id);
    });
  }

}
