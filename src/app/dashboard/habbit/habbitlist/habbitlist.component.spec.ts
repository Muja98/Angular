import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabbitlistComponent } from './habbitlist.component';

describe('HabbitlistComponent', () => {
  let component: HabbitlistComponent;
  let fixture: ComponentFixture<HabbitlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabbitlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabbitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
