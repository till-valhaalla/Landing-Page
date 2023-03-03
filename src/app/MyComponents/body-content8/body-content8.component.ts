import { Component } from '@angular/core';
interface Card {
  imgurl1: string;
  imgurl2: string;
  title: string;
  desc: string;
  content: string;
}
@Component({
  selector: 'app-body-content8',
  templateUrl: './body-content8.component.html',
  styleUrls: ['./body-content8.component.css'],
})
export class BodyContent8Component {
  cardData: Card[] = [
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People1.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People2.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People3.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People4.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People5.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore!',
    },
  ];
}
