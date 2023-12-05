import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojadevidaComponent } from './hojadevida.component';

describe('HojadevidaComponent', () => {
  let component: HojadevidaComponent;
  let fixture: ComponentFixture<HojadevidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HojadevidaComponent]
    });
    fixture = TestBed.createComponent(HojadevidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
