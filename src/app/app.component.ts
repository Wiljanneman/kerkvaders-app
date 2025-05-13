import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import maplibregl from 'maplibre-gl';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import '@maplibre/maplibre-gl-leaflet';
import { filterByDate, dateRangeFromISODate } from '@openhistoricalmap/maplibre-gl-dates';
import { FathersService } from './services/fathers.service';
import { HttpClientModule } from '@angular/common/http';

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
  styleUrl: './app.component.scss',
  providers: [FathersService]
})
export class AppComponent implements OnInit {
  title = 'kerkvaders-app';
  items: Record[] = [];
  map?: maplibregl.Map;
  markers?: maplibregl.Marker[] = [];
  selectedPeriod = 0; // default
  currentFather;
  apostolic;
  constructor(private _fatherService: FathersService) {

  }

  get currentMap(): maplibregl.Map {
    return (this.map! as maplibregl.Map);
  }

  ngOnInit(): void {

    // init map
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://www.openhistoricalmap.org/map-styles/main/main.json',
      attributionControl: {
        customAttribution: '<a href="https://www.openhistoricalmap.org/">OpenHistoricalMap</a>',
      },
      center: [10, 45], // Longitude, Latitude (Europe center-ish)
      zoom: 4 // Good continent-level zoom
    });

    this.map.once('styledata', (e: any) => {
      filterByDate(this.map, '099-01-01');
    });

    this.selectedPeriod = 1;
    this.setupMarkers();
  }

  setupMarkers(): void {
    // clear previous markers

    this.markers?.forEach(e => {
      e.remove();
    })

    this.apostolic = this._fatherService.getFathersData();

    this.apostolic.filter(x => this.selectedPeriod === x.periodId || this.selectedPeriod === 0).forEach(e => {
      this.addMarker(e);
    })
  }

  addMarker(itemData) {
    
    const markerHtml = document.createElement('div');
    markerHtml.className = `relative cursor-pointer group w-20 h-20`;
    markerHtml.setAttribute('data-item', itemData.id);
    markerHtml.innerHTML = `
      <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-stone-700 shadow-md">
        <img 
          src="${itemData.iconUrl}" 
          alt="Clement of Rome" 
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-stone-700 rotate-45 mt-1 shadow-md"></div>
    `;

    let markerContent = new maplibregl.Marker({ element: markerHtml, anchor: 'bottom' })
      .setLngLat(itemData.location.coordinates)
      .addTo(this.map!);

      markerContent.getElement().addEventListener('click', (ev) => {
        const id = (ev.currentTarget as HTMLElement)!.getAttribute('data-item');

        this.currentFather = this.apostolic.find(x => x.id === +id!);

      })

    this.markers?.push(markerContent);
  }


  getImageUrl(img: string | null): string {
    if (img) {
      return (
        'https://raw.githubusercontent.com/w3soto/ngx-mat-timeline/master/projects/demo/src/assets/' +
        img
      );
    }
    return null!;
  }

  setSelectedPeriod(period: number) {
    this.selectedPeriod = period;
    this.setupMarkers();
  }

}
