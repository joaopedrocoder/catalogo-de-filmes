import { Injectable, inject } from '@angular/core';
import { FilmeModule } from '../filme.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IFilme } from '../models/filme.model';

@Injectable({
  providedIn: FilmeModule
})
export class FilmesService {
  private url = environment.API_URL
  http = inject(HttpClient)

  params = new HttpParams().set('language', 'en-US').set('page', '1');

  getFilmes(): Observable<IFilme[]>{
    return this.http.get<IFilme[]>(`${this.url}top_rated`, { params: this.params })
  }

  getFilmeById(id: number): Observable<IFilme>{
    return this.http.get<IFilme>(`${this.url}${id}`)
  }

}
