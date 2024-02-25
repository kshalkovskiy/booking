import { IsInt, IsString } from "class-validator"



export class CreateDto {

    @IsInt()
    id: number;

    @IsString()
    name: string;
}