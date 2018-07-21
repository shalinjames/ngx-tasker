import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewboardDialogComponent } from './newboard-dialog.component';

describe('NewboardDialogComponent', () => {
  let component: NewboardDialogComponent;
  let fixture: ComponentFixture<NewboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
