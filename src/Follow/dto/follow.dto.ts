import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFollow {
  @IsString()
  @ApiProperty({ type: String })
  ownerId: string;

  @IsString()
  @ApiProperty({ type: String })
  followOwnerId: string;
}

export class RemoveFollow {
  @IsString()
  @ApiProperty({ type: String })
  ownerId: string;

  @IsString()
  @ApiProperty({ type: String })
  followOwnerId: string;
}