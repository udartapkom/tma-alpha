import { IsNumber, IsString } from 'class-validator';
export class DummyPropertyDto {
  @IsNumber()
  id: number;
  @IsNumber()
  imageID: number;
  @IsString()
  name: string;
  @IsString()
  location: string;
  @IsNumber()
  sharesAvailable: number;
  @IsNumber()
  sharePriceTON: number;
}
