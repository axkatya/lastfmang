import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';

import { AlbumService } from './services/album.service';
import { ArtistService } from './services/artist.service';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent
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
