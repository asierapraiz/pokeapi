import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReginstroComponent } from './reginstro.component';

describe('ReginstroComponent', () => {
  let component: ReginstroComponent;
  let fixture: ComponentFixture<ReginstroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReginstroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReginstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
