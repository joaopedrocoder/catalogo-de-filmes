import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {
  @Input() posters: { poster: string, title: string, id: number }[] = []

  @Output() cardClick: EventEmitter<number> = new EventEmitter<number>();

  onCardClick(id: number) {
    this.cardClick.emit(id);
  }
}
