import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilme } from '../../../modules/filmes/models/filme.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {
  @Input() filmes: IFilme[] | null = []

  @Output() cardClick: EventEmitter<number> = new EventEmitter<number>();

  onCardClick(id: number) {
    this.cardClick.emit(id);
  }
}
