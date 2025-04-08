import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';

interface Record {
  icon?: string | null;
  svgIcon?: string | null;
  iconUrl?: string | null;
  label: string;
  content: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgxMatTimelineModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kerkvaders-app';

  items: Record[] = [
    {
      icon: 'hiking',
      label: '1998',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: 'directions_run',
      label: '2003',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      iconUrl: 'avatar.jpg',
      label: '2007',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      icon: 'directions_bike',
      label: '2012',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      icon: 'language',
      label: '2020',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    },
  ];

  getImageUrl(img: string | null): string {
    if (img) {
      return (
        'https://raw.githubusercontent.com/w3soto/ngx-mat-timeline/master/projects/demo/src/assets/' +
        img
      );
    }
    return null!;
  }

}
