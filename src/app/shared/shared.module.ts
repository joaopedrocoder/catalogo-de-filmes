import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPosterComponent } from './components/card-poster/card-poster.component';
import { ListCardComponent } from './components/list-card/list-card.component';



@NgModule({
  declarations: [
    CardPosterComponent,
    ListCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardPosterComponent,
    ListCardComponent
  ]
})
export class SharedModule { }
