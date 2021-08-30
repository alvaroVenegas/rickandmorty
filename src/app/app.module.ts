import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesDetailPageComponent } from './pages/episodes-page/pages/episodes-detail-page/episodes-detail-page.component';
import { LocationsDetailPageComponent } from './pages/locations-page/pages/locations-detail-page/locations-detail-page.component';
import { GalleryLocationsComponent } from './shared/components/gallery-locations/gallery-locations.component';
import { GalleryEpisodesComponent } from './shared/components/gallery-episodes/gallery-episodes.component';
//import { SimplebarAngularModule } from 'simplebar-angular';
import { MarkTextPipe } from './shared/pipes/mark-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { BtnAddComponent } from './shared/components/btn-add/btn-add.component';
import { GalleryFavoritesComponent } from './shared/components/gallery-favorites/gallery-favorites.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    LocationsPageComponent,
    CharactersDetailPageComponent,
    EpisodesPageComponent,
    EpisodesDetailPageComponent,
    LocationsDetailPageComponent,
    GalleryLocationsComponent,
    GalleryEpisodesComponent,
    MarkTextPipe,
    FavoritesPageComponent,
    BtnAddComponent,
    GalleryFavoritesComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    FormsModule,
    ReactiveFormsModule,
    
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
