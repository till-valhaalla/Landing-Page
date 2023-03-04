import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
interface Card {
  title: string;
  bgcolor: string;
  clicked: boolean;
}
@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css'],
})
export class HeroContentComponent {
  cardData: Card[] = [
    {
      title: 'Lorem ipsum',
      bgcolor: '#6184D8',
      clicked: false,
    },
    {
      title: 'Lorem ',
      bgcolor: '#316EFF',
      clicked: false,
    },
    {
      title: 'Lorem Ipsum',
      bgcolor: '#E86F3A',
      clicked: false,
    },
    {
      title: 'Lorem Ipsum Sit',
      bgcolor: 'FFFFFF',
      clicked: false,
    },
  ];
  faplayIcon = faPlay;
}
