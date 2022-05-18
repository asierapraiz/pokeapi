import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonChatComponent } from './pokemon-chat.component';

describe('PokemonChatComponent', () => {
  let component: PokemonChatComponent;
  let fixture: ComponentFixture<PokemonChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
