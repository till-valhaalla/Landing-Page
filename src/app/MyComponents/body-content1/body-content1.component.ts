import { Component } from '@angular/core';
interface ImageData {
  imageUrl: string;
  desc: string;
}

@Component({
  selector: 'app-body-content1',
  templateUrl: './body-content1.component.html',
  styleUrls: ['./body-content1.component.css']
})
export class BodyContent1Component {
  imageData: ImageData[] = [
    {
      imageUrl: '../../../assets/check.png',
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Aliquam tincidunt mauris eu risus.',
    },
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Morbi in sem quis dui placerat ornare, Pellentesque.',
    },
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Nunc dignissim risus id metus.',
    },   
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Integer vitae libero ac risus egestas placerat. ',
    },
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Vivamus vestibulum ntulla nec ante. ',
    },
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Praesent placerat risus quis eros. ',
    },
    {
      imageUrl: '../../../assets/check.png',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
  ];

}
