import { IsInt, IsString } from "class-validator"



export class CreateDto {
    @IsString()
    name: string;

    @IsInt()
    averageRaiting: number;

    @IsInt()
    averageBill: number;  
}