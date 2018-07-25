import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist';
import { Track } from '../../models/track';
import { Album } from '../../models/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistName: string;
  artist: Artist;
  topTracks: Track[];
  topAlbums: Album[];

  constructor(private artistService: ArtistService,
    private route: ActivatedRoute) {
   
      this.artistName = route.snapshot.params['artistName'];
    
  }

  ngOnInit() {
    if (this.artistName !== null && this.artistName !== undefined && this.artistName !== "") {
      this.artistService.searchArtist(this.artistName).subscribe(result => {
        this.artist = result;
      });
    }
  }

  onClickSearchArtist(artistNameSearch: string) {
    this.artistService.searchArtist(artistNameSearch).subscribe(result => {
      this.artist = result;
    });

    this.artistService.searchArtistTopTracks(artistNameSearch).subscribe(result => {
      this.topTracks = result;
    });

    this.artistService.searchArtistTopAlbums(artistNameSearch).subscribe(result => {
      this.topAlbums = result;
    });
  }
}
