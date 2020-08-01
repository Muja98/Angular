import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarylistComponent } from './diarylist.component';

describe('DiarylistComponent', () => {
  let component: DiarylistComponent;
  let fixture: ComponentFixture<DiarylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
