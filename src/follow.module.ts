import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Follow from './Follow/entities/follow.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      Follow
    ]),
    TypeOrmModule.forRoot(),
  ],
  controllers: [FollowController],
  providers: [FollowService],
})
export class FollowModule {}
