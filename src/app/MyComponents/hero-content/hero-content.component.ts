import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent {
  faplayIcon = faPlay;

}
