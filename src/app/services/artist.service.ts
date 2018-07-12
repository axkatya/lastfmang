import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Artist } from '../models/artist';
import { environment } from '../../environments/environment';


@Injectable()
export class ArtistService {
  constructor(private http: Http) {

  }

  searchArtist(artistNameSearch: string) {
    return this.http.get(environment.endPoint + '?method=artist.getinfo&artist=' +
        artistNameSearch +
        '&api_key=' + environment.apiKey + '&format=json')
      .pipe(map(result => result.json().artist as Artist));
  }
}
