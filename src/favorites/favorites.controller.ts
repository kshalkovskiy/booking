import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}


  @Get() 
  async getFavorites() {
    return this.favoritesService.getFavorites()
  }

  @Post(':restaurantId')
  addToFavorites(@Param('restaurantId') restaurantId: string){
    const id = parseInt(restaurantId, 10);
    return this.favoritesService.addToFavorites(id)
  }
}
