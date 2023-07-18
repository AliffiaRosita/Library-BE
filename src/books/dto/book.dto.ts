import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsInt } from 'class-validator';

export class BookDto {
  @ApiProperty({
    description: "Book title",
    default: "a hundred cat"
  })
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Book author",
    default: "Luna Maria"
  })
  author: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Book category",
    default: "Slice Of Life"
  })
  category: string;

  @ApiProperty({
    description: "Book publication year",
    minimum: 1000,
    default: 1999
  })
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  year: string;
}