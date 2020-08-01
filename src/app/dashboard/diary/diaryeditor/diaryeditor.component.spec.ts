import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryeditorComponent } from './diaryeditor.component';

describe('DiaryeditorComponent', () => {
  let component: DiaryeditorComponent;
  let fixture: ComponentFixture<DiaryeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
