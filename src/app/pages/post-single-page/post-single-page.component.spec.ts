import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSinglePageComponent } from './post-single-page.component';

describe('PostSinglePageComponent', () => {
  let component: PostSinglePageComponent;
  let fixture: ComponentFixture<PostSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
