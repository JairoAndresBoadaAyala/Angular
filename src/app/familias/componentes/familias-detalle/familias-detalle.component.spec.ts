import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasDetalleComponent } from './familias-detalle.component';

describe('FamiliasDetalleComponent', () => {
  let component: FamiliasDetalleComponent;
  let fixture: ComponentFixture<FamiliasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
