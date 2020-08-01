import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarydetailComponent } from './diarydetail.component';

describe('DiarydetailComponent', () => {
  let component: DiarydetailComponent;
  let fixture: ComponentFixture<DiarydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
