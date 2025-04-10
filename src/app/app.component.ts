import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import '@maplibre/maplibre-gl-leaflet';
import {filterByDate, dateRangeFromISODate } from '@openhistoricalmap/maplibre-gl-dates';


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
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // var map = (L as any).map("map").setView([38.912753, -77.032194], 15);

    // const map = new maplibregl.Map({
    //   container: 'map',
    //   style: 'https://www.openhistoricalmap.org/map-styles/main/main.json',
    //   attributionControl: {
    //     customAttribution: '<a href="https://www.openhistoricalmap.org/">OpenHistoricalMap</a>',
    //   },
    // });

    // // const maplibreMap = map.getMaplibreMap();
    // // const maplibreMap = (map as any).getMaplibreMap();
    // map.once('styledata', function (e: any) {
    //    filterByDate(map, '1890-04-14');
    // });


  }
  title = 'kerkvaders-app';

  items: Record[] = [
    {
      icon: 'hiking',
      label: 'Clement of Alexandria',
      iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivTpOkL0X6cz_vplnK1Pzup9i09cPPxok3w&s",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: 'directions_run',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Origen.jpg/250px-Origen.jpg',
      label: 'Origen',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      iconUrl: 'https://breakpoint.org/wp-content/uploads/2023/12/Copy-of-BP-Picture-219.png',
      label: 'Athanasius ',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      icon: 'directions_bike',
      label: 'Augustine',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarHK20HLc3Y5sLvDw4mU6ah0INM4NXQqXoQ&s',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      icon: 'language',
      iconUrl: 'https://fatima.org/wp-content/uploads/2021/01/Fatima-Messages_Saints-St.-John-Chrysostom-01-800x518.jpg',
      label: 'John Chrysostom',
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
