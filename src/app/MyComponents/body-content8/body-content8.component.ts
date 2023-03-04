import { Component } from '@angular/core';
interface Card {
  imgurl1: string;
  imgurl2: string;
  title: string;
  desc: string;
  content: string;
  bgcolor: string;
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
      bgcolor: '#23CE6B',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People2.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      bgcolor: '#08083D',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People3.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bgcolor: '#6184D8 ',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People4.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bgcolor: '#23CE6B ',
    },
    {
      imgurl1: '../../../assets/quote.svg',
      imgurl2: '../../../assets/People5.png',
      title: 'Lorem Ipsum',
      desc: 'Lorem ipsum dolor sit',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore!',
      bgcolor: '#6184D8 ',
    },
  ];
}
