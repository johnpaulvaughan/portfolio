import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectParallaxImageComponent } from './project-parallax-image.component';

describe('ProjectParallaxImageComponent', () => {
  let component: ProjectParallaxImageComponent;
  let fixture: ComponentFixture<ProjectParallaxImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectParallaxImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectParallaxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
