import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDto } from './restaurants.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestaurantsService {
    constructor(private prisma: PrismaService) {}

    async getById(id: string) {
        const restaurant = await this.prisma.restaurants.findUnique({
            where: {
                id: +id
            }
        })

        if(!restaurant) throw new NotFoundException('Restaurant not found')
    }

    getRestaurants() {
        return this.prisma.restaurants.findMany()
    }

    addRestaurant(dto: CreateDto) {
        return this.prisma.restaurants.create({
            data: {
                name: dto.name,
                averageRaiting: dto.averageRaiting,
                averageBill: dto.averageBill
            }
        })
    }

}
