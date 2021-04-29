import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcountrydetailComponent } from './selectedcountrydetail.component';

describe('SelectedcountrydetailComponent', () => {
  let component: SelectedcountrydetailComponent;
  let fixture: ComponentFixture<SelectedcountrydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedcountrydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedcountrydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
