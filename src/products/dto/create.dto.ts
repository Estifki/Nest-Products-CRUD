import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  title: string;

  @IsString()
  discription: string;

  @IsNumber()
  price: number;
}
