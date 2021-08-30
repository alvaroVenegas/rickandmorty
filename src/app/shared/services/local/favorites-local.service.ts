import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalService {

  private favorites:any = [];

  constructor() { }

  addFavorites(newFavorite:any){
    
    if(!this.favorites){
      return
    }
    let existFavorite = this.favorites.some( (characterFavorite:any) => characterFavorite.name === newFavorite.name);
    if(!existFavorite){
      this.favorites.push(newFavorite)
      //localStorage.setItem('favoritesRick', newFavorite);
    }
    //console.log(localStorage.getItem('favoritesRick'))


  }
  removeFavorites(newFavorite:any){
    
    let itemfavorite = this.favorites.find( (characterFavorite:any) => characterFavorite.name === newFavorite.name);
    console.log(itemfavorite)
   //
      this.favorites.pop(itemfavorite)
    console.log(this.favorites)
  }



  getFavorites(){
     return this.favorites;
  }

}
