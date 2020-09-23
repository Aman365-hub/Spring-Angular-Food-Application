import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoodOnlineComponent } from './update-food-online.component';

describe('UpdateFoodOnlineComponent', () => {
  let component: UpdateFoodOnlineComponent;
  let fixture: ComponentFixture<UpdateFoodOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFoodOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFoodOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
