import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabbiteditorComponent } from './habbiteditor.component';

describe('HabbiteditorComponent', () => {
  let component: HabbiteditorComponent;
  let fixture: ComponentFixture<HabbiteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabbiteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabbiteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
