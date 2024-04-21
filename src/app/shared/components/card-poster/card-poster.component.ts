import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-poster',
  templateUrl: './card-poster.component.html',
  styleUrl: './card-poster.component.scss'
})
export class CardPosterComponent {
  @Input() poster = ''
  @Input() title = ''
  @Input() id = 0
}
