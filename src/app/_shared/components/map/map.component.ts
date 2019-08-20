import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env';
import { icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latLong: number[] = [46.879966, -121.726909];

  tileLayerOptions: any;
  options: any;
  layer: any;

  ngOnInit() {
    this.tileLayerOptions = {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors, © OpenMapTiles'
    };

    this.options = {
      layers: [
        tileLayer(
          `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${environment.mapApiKey}`,
          this.tileLayerOptions
        )
      ],
      zoom: 5,
      center: latLng(this.latLong[0], this.latLong[1])
    };

    this.layer = marker([this.latLong[0], this.latLong[1]], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });
  }
}
