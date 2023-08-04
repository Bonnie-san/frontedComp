import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrarPorReferenciaComponent } from './enviosporreferencia.component';

describe('RastrarPorReferenciaComponent', () => {
  let component: RastrarPorReferenciaComponent;
  let fixture: ComponentFixture<RastrarPorReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RastrarPorReferenciaComponent]
    });
    fixture = TestBed.createComponent(RastrarPorReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(RastrarPorReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
