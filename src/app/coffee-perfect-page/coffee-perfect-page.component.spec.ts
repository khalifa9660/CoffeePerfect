import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePerfectPageComponent } from './coffee-perfect-page.component';

describe('CoffeePerfectPageComponent', () => {
  let component: CoffeePerfectPageComponent;
  let fixture: ComponentFixture<CoffeePerfectPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeePerfectPageComponent]
    });
    fixture = TestBed.createComponent(CoffeePerfectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
