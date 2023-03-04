import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css'],
})
export class HeroContentComponent {
  buttonText = 'Lorem ipsum';
  texts = ['Lorem ipsum', 'Lorem ', 'Lorem Ipsum Sit'];
  bgColor = '#6184D8';
  bg = ['#23CE6B', '#E86F3A', '#316EFF'];
  currentTextIndex = 0;

  changeText() {
    this.currentTextIndex++;
    if (this.currentTextIndex >= this.texts.length) {
      this.currentTextIndex = 0;
    }
    this.buttonText = this.texts[this.currentTextIndex];
  }
  changeBg() {
    this.currentTextIndex++;
    if (this.currentTextIndex >= this.bg.length) {
      this.currentTextIndex = 0;
    }
    this.bgColor = this.bg[this.currentTextIndex];
  }

  faplayIcon = faPlay;
}
