import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';

import { ArtistComponent } from './components/artist/artist.component';
import { ArtistItemComponent } from './components/artist-item/artist-item.component';

import { AlbumService } from './services/album.service';
import { ArtistService } from './services/artist.service';

import { AppRoutingModule } from './/app-routing.module';
import { RouterLinkDirectiveStub } from './testing/router-link-directive-stub';



@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    ArtistItemComponent,
    AlbumListComponent,
    AlbumItemComponent,
    RouterLinkDirectiveStub
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AlbumService,
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
