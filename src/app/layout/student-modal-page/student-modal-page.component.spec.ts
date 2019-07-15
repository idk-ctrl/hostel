import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModalPageComponent } from './student-modal-page.component';

describe('StudentModalPageComponent', () => {
  let component: StudentModalPageComponent;
  let fixture: ComponentFixture<StudentModalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
