import { Component } from '@angular/core';
interface Card {
  title: string;
  imgUrl: string;
  desc: string;
  imgUrl2: string;
  srno: string;
}
@Component({
  selector: 'app-body-content5',
  templateUrl: './body-content5.component.html',
  styleUrls: ['./body-content5.component.css'],
})
export class BodyContent5Component {
  cardData: Card[] = [
    {
      title: 'Lorem Ipsum',
      imgUrl: '../../../assets/card01.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      imgUrl2: '../../../assets/next.png',
      srno: 'STEP 1',
    },
    {
      title: 'Lorem Ipsum',
      imgUrl: '../../../assets/card02.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl2: '../../../assets/next.png',
      srno: 'STEP 2',
    },
    {
      title: 'Lorem Ipsum',
      imgUrl: '../../../assets/card03.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      imgUrl2: '../../../assets/next.png',
      srno: 'STEP 3',
    },
    {
      title: 'Lorem Ipsum',
      imgUrl: '../../../assets/card04.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl2: '../../../assets/next.png',
      srno: 'STEP 4',
    },
    {
      title: 'Lorem Ipsum',
      imgUrl: '../../../assets/card05.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      imgUrl2: '../../../assets/next.png',
      srno: 'STEP 5',
    },
    {
      title: 'Lorem Ipsum',
      imgUrl: '../../../assets/card06.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      imgUrl2: '../../../assets/next.png',
      srno: 'STEP 6',
    },
  ];
}
