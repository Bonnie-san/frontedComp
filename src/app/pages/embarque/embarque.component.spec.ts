import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmbarqueComponent } from './embarque.component';

describe('EmbarqueComponent', () => {
  let component: EmbarqueComponent;
  let fixture: ComponentFixture<EmbarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbarqueComponent]
    });
    fixture = TestBed.createComponent(EmbarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
