import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { FavoritesService } from 'src/favorites/favorites.service';
import { PrismaService } from 'src/prisma.service';


@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService, FavoritesService, PrismaService],
})
export class RestaurantsModule {}
