import L from 'leaflet';


export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  markerContent(): string;
}

export class CustomMap {
  customMap: L.Map;

  constructor(divId: string) {
    this.customMap = L.map(divId).setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.customMap);
  }

  addMarker(mappable: Mappable): void {
    console.log(mappable);
    L.marker([mappable.location.lat, mappable.location.lng]).addTo(this.customMap)
      .bindPopup(mappable.markerContent())
      .openPopup()
  }
};