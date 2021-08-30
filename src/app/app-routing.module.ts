import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodesDetailPageComponent } from './pages/episodes-page/pages/episodes-detail-page/episodes-detail-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationsDetailPageComponent } from './pages/locations-page/pages/locations-detail-page/locations-detail-page.component';

const routes: Routes = [
  
    {path: '', component: HomePageComponent},
    {path: 'characters', component: CharactersPageComponent},
    {path: 'characters/:idCharacter', component: CharactersDetailPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'locations', component: LocationsPageComponent},
    {path: 'locations/:idLocation', component: LocationsDetailPageComponent},
    {path: 'episodes', component: EpisodesPageComponent},
    {path: 'episodes/:idEpisode', component: EpisodesDetailPageComponent},
    {path: 'favorites', component: FavoritesPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
