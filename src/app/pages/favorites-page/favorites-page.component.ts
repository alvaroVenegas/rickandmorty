import { Component, OnInit } from '@angular/core';
import { FavoritesLocalService } from 'src/app/shared/services/local/favorites-local.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favorites:any;

  constructor(private favoritesService:FavoritesLocalService) { }

  ngOnInit(): void {
    // aqui guardamos en una variable, habria que meterlo en el local para mejorar la app
    this.favorites =this.favoritesService.getFavorites()
    console.log(this.favorites)
  }

}
