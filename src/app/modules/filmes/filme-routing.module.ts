import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesViewComponent } from './pages/filmes-view/filmes-view.component';
import { FilmeDetalhesComponent } from './pages/filme-detalhes/filme-detalhes.component';

const routes: Routes = [
  { path: '', component: FilmesViewComponent },
  { path: 'filme/:id', component: FilmeDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmeRoutingModule { }
