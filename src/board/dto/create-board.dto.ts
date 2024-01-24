import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty({
    description: 'name',
    required: true,
    example: 'rachel',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'content',
    required: true,
    example: 'hello',
  })
  content: string;
}
