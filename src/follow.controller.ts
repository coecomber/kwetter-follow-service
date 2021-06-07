import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { FollowService } from './follow.service';
import Follow from './Follow/entities/follow.entity';
import { CreateFollow, RemoveFollow } from './Follow/dto/follow.dto';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) { }

  private readonly logger = new Logger(FollowController.name);

  @Get('/checkIfFollowing/:ownerId/:followOwnerId')
  async checkIfFollowing(@Param('ownerId') ownerId: string, @Param('followOwnerId') followOwnerId: string) {
    this.logger.log('Check if following. ownerId: ' + ownerId + '. And followOwnerId: ' + followOwnerId)

    return this.followService.checkIfFollowing(ownerId, followOwnerId)
  }

  @Get('getFollowing/:ownerId')
  async getFollowing(@Param('ownerId') ownerId: string) {
    this.logger.log('Getting all following for ownerId: ' + ownerId)

    return this.followService.getAllFollowing(ownerId)
  }

  @Get()
  async getAll() {
    this.logger.log('Getting all following')

    return this.followService.getAll()
  }

  @Post()
  async createFollow(
    @Body() followDto: CreateFollow,
  ): Promise<Follow> {
    this.logger.log('New follow created' + followDto)
    const follow: Follow = { ...followDto }
    console.log(follow)
    return await this.followService.createFollow(follow);
  }

  @Delete()
  async removeFollow(
    @Body() followDto: RemoveFollow) {
    this.logger.log('Trying to remove follow ' + followDto)
    const follow: Follow = { ...followDto }
    console.log(follow)
    return await this.followService.removeFollow(follow)
  }  
}
