import { Component } from '@angular/core';
interface card {
  imageUrl: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-body-content4',
  templateUrl: './body-content4.component.html',
  styleUrls: ['./body-content4.component.css']
})
export class BodyContent4Component {
  cardData: card[] = [
    {
      imageUrl:'../../../assets/1.png',
      title:'Lorem Ipsum Dolor',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      imageUrl:'../../../assets/2.png',
      title:'Lorem Ipsum Dolor',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      imageUrl:'../../../assets/3.png',
      title:'Lorem Ipsum Dolor',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      imageUrl:'../../../assets/4.png',
      title:'Lorem Ipsum Dolor',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      imageUrl:'../../../assets/5.png',
      title:'Lorem Ipsum Dolor',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      imageUrl:'../../../assets/6.png',
      title:'Lorem Ipsum Dolor',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
      
  ];

}
