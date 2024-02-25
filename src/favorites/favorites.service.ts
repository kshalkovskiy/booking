import { Injectable } from '@nestjs/common';
import { Favorites } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';



@Injectable()
export class FavoritesService {
    constructor(private prisma: PrismaService) {}

    async addToFavorites(restaurantId: number): Promise<Favorites> {
        const restaurant = await this.prisma.restaurants.findUnique({
          where: { id: restaurantId },
        });
    
        if (!restaurant) {
          throw new Error('Restaurant not found');
        }
    
        return this.prisma.favorites.create({
          data: {
            id: restaurantId,
            name: restaurant.name,
          },
        });
      }

    getFavorites(){
        return this.prisma.favorites.findMany()
    }
}
