import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabbitComponent } from './habbit.component';

describe('HabbitComponent', () => {
  let component: HabbitComponent;
  let fixture: ComponentFixture<HabbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
