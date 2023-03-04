import { Component } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body-content2',
  templateUrl: './body-content2.component.html',
  styleUrls: ['./body-content2.component.css'],
})
export class BodyContent2Component {
  faleft = faChevronLeft;
  faright = faChevronRight;
  images = ['assets/amazon.png', 'assets/cent.png', 'assets/giga.png'];
  currentIndex = 0;

  showPrev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  showNext() {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }
}
