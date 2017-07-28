import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGridStubComponent } from './portfolio-grid-stub.component';

describe('PortfolioGridStubComponent', () => {
  let component: PortfolioGridStubComponent;
  let fixture: ComponentFixture<PortfolioGridStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGridStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGridStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
