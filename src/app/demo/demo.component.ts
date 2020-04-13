import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  items = ['Jairo', 'Jeimy', 'Selena', 'Austin'];

  ngOnInit(): void {
  }

  addItem() {
    this.items.push('Nuevo Item');
  }

  deleteItems(posicion: number) {
    this.items.splice(posicion, 1);
  }
}
