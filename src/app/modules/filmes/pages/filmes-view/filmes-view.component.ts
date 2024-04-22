import { Component, inject } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { IFilme } from '../../models/filme.model';
import { Subject, map, takeUntil } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-filmes-view',
  templateUrl: './filmes-view.component.html',
  styleUrl: './filmes-view.component.scss'
})
export class FilmesViewComponent {
  filmesService = inject(FilmesService)
  
  filmes: IFilme[] = []
  numeroPagina = 0

  urlImg = environment.TMDB_IMG

  unsubscribe$ = new Subject<void>()

  ngOnInit(): void {
    this.filmesService.getFilmes().pipe(
      takeUntil(this.unsubscribe$),
      map((res) => {
        res.results.map(filme => filme.poster_path = this.urlImg+filme.poster_path)
        console.log('MAP',res)
        return res
      })
    ).subscribe({
      next: res => {
        this.filmes = res.results
        this.numeroPagina = res.page
      },
      error: err => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
