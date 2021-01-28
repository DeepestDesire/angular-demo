import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderPageComponent } from './sider-page.component';

describe('SiderPageComponent', () => {
  let component: SiderPageComponent;
  let fixture: ComponentFixture<SiderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
