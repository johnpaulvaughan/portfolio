import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGridItemComponent } from './portfolio-grid-item.component';

describe('PortfolioGridItemComponent', () => {
  let component: PortfolioGridItemComponent;
  let fixture: ComponentFixture<PortfolioGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
