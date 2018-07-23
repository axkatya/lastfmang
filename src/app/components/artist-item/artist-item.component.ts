import { Component, Input, OnChanges } from '@angular/core';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnChanges {
  @Input() artist: Artist;
  largeImages: any[];
  largeImage: any;

  constructor() {

  }

  ngOnChanges() {
    if (this.artist != null && this.artist != undefined) {
      this.largeImages = this.artist.image
        .filter((img: any) => img['size'] === 'large');
      this.largeImage = this.largeImages[0];
    }
  }
}
