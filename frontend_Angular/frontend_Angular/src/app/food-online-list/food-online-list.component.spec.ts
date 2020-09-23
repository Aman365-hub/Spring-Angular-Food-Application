import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOnlineListComponent } from './food-online-list.component';

describe('FoodOnlineListComponent', () => {
  let component: FoodOnlineListComponent;
  let fixture: ComponentFixture<FoodOnlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodOnlineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOnlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
