import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodOnlineComponent } from './delete-food-online.component';

describe('DeleteFoodOnlineComponent', () => {
  let component: DeleteFoodOnlineComponent;
  let fixture: ComponentFixture<DeleteFoodOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFoodOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFoodOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
