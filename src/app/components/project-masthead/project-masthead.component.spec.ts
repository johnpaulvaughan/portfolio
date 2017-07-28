import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMastheadComponent } from './project-masthead.component';

describe('ProjectMastheadComponent', () => {
  let component: ProjectMastheadComponent;
  let fixture: ComponentFixture<ProjectMastheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMastheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
