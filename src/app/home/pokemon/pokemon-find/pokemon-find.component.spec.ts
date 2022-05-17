import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFindComponent } from './pokemon-find.component';

describe('PokemonFindComponent', () => {
  let component: PokemonFindComponent;
  let fixture: ComponentFixture<PokemonFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
