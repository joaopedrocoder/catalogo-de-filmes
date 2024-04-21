import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeRoutingModule } from './filme-routing.module';
import { FilmesViewComponent } from './pages/filmes-view/filmes-view.component';
import { FilmeDetalhesComponent } from './pages/filme-detalhes/filme-detalhes.component';
import { SharedModule } from '../../shared/shared.module';

import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FilmesViewComponent,
    FilmeDetalhesComponent
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    SharedModule,
    MatTooltipModule,
    HttpClientModule
  ],
})
export class FilmeModule { }
