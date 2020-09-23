import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodOnlineComponent } from './add-food-online.component';

describe('AddFoodOnlineComponent', () => {
  let component: AddFoodOnlineComponent;
  let fixture: ComponentFixture<AddFoodOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
