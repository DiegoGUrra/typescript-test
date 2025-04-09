import L from 'leaflet';


interface Mappable {
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
    // L.marker([-33.4489, -70.6693]).addTo(this.customMap)
    //   .bindPopup('Santiagooo!')
    //   .openPopup();
  }

  addMarker(mappable: Mappable): void {
    L.marker([mappable.location.lat, mappable.location.lng]).addTo(this.customMap)
      .bindPopup(mappable.markerContent())
      .openPopup();
  }
};