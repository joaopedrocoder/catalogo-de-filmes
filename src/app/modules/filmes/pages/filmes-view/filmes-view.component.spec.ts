import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesViewComponent } from './filmes-view.component';

describe('FilmesViewComponent', () => {
  let component: FilmesViewComponent;
  let fixture: ComponentFixture<FilmesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
