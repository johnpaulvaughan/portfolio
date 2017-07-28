import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBackButtonComponent } from './menu-back-button.component';

describe('MenuBackButtonComponent', () => {
  let component: MenuBackButtonComponent;
  let fixture: ComponentFixture<MenuBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
