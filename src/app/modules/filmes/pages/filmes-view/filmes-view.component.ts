import { Component, inject } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { IFilme } from '../../models/filme.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filmes-view',
  templateUrl: './filmes-view.component.html',
  styleUrl: './filmes-view.component.scss'
})
export class FilmesViewComponent {
  filmesService = inject(FilmesService)

  filmes$: Observable<IFilme[]> = new Observable() 

  ngOnInit(): void {
    this.filmes$ = this.filmesService.getFilmes()
  }
}
