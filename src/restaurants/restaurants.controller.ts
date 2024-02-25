import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateDto } from './restaurants.dto';
import { FavoritesService } from '../favorites/favorites.service';




@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService, private readonly favoritesService: FavoritesService) {}


  @Get()
  async getRestaurants() {
    return this.restaurantsService.getRestaurants()
  }

  
  @Post()
  @UsePipes(new ValidationPipe())
  async addRestaurant(@Body() dto: CreateDto) {
    return this.restaurantsService.addRestaurant(dto)
  }

  // @Get(':id/add-to-favorites') 
  //   addToFavorites(@Param('id') id: number) {
  //     const restaurant = this.restaurantsService.findById(id);
  //     if (restaurant) {
  //       return this.favoritesService.addFavorite(restaurant)
  //     } else {
  //       return {message: 'Restaurant not found'}
  //     }
  //   }
    
}
