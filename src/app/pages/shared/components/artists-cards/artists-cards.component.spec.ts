import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsCardsComponent } from './artists-cards.component';

describe('ArtistsCardsComponent', () => {
  let component: ArtistsCardsComponent;
  let fixture: ComponentFixture<ArtistsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
