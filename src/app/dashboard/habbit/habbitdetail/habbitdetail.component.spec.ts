import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabbitdetailComponent } from './habbitdetail.component';

describe('HabbitdetailComponent', () => {
  let component: HabbitdetailComponent;
  let fixture: ComponentFixture<HabbitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabbitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabbitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
