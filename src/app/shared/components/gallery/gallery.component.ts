import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesLocalService } from '../../services/local/favorites-local.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private favoritesService:FavoritesLocalService) { }

  ngOnInit(): void {
    
  }

  @Input() items:any[]= []


  addNewFavorites(newFavorite:any){
    this.favoritesService.addFavorites(newFavorite)
    
  }

}




