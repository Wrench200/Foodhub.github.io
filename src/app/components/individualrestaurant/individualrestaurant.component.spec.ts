import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualrestaurantComponent } from './individualrestaurant.component';

describe('IndividualrestaurantComponent', () => {
  let component: IndividualrestaurantComponent;
  let fixture: ComponentFixture<IndividualrestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualrestaurantComponent]
    });
    fixture = TestBed.createComponent(IndividualrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
