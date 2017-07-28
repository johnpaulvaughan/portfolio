import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNittyGrittyComponent } from './project-nitty-gritty.component';

describe('ProjectNittyGrittyComponent', () => {
  let component: ProjectNittyGrittyComponent;
  let fixture: ComponentFixture<ProjectNittyGrittyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectNittyGrittyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNittyGrittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
