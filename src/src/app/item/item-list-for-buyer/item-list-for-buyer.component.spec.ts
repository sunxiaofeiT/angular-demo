import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListForBuyerComponent } from './item-list-for-buyer.component';

describe('ItemListForBuyerComponent', () => {
  let component: ItemListForBuyerComponent;
  let fixture: ComponentFixture<ItemListForBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListForBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListForBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
