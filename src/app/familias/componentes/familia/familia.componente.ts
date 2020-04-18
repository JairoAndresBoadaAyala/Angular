import { Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Familia } from '../../../familia.model';

@Component({
    selector: 'app-familia',
    templateUrl: './familia.componente.html',
    styleUrls: ['./familia.componente.scss']
})

export class FamiliaComponent implements  OnInit, DoCheck, OnDestroy {
    @Input() familiaCompleta: Familia;
    @Output() familiarClickeado: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. Constructor');
    }

    // ngOnChanges(change: SimpleChanges){
    //    console.log('2. ngOnChanges' , change);
    // }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }

    agregarFamiliar() {
        console.log('llego agregar el familiar');
        this.familiarClickeado.emit(this.familiaCompleta.id);
    }

}
