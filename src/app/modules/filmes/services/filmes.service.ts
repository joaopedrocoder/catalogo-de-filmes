import { IApiResponse } from './../../../shared/models/api-response.model';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IFilme } from '../models/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private url = environment.API_URL
  private apiKey = environment.API_KEY

  http = inject(HttpClient)

  params = new HttpParams()
    .set('api_key', `${this.apiKey}`)
    .set('language', 'pt-BR')
    .set('page', '1')
    .set('region', 'br')

  getFilmes(): Observable<IApiResponse<IFilme>>{
    return this.http.get<IApiResponse<IFilme>>(`${this.url}top_rated`, { params: this.params })
  }

  getFilmeById(id: number): Observable<IFilme>{
    return this.http.get<IFilme>(`${this.url}${id}`)
  }

}
