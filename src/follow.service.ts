import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Follow from './Follow/entities/follow.entity';

@Injectable()
export class FollowService {
  private readonly logger = new Logger(FollowService.name);

  constructor(
    @InjectRepository(Follow)
      private followRepository: Repository<Follow>,
  ) {}

  async createFollow(follow: Follow): Promise<Follow> {
    return await this.followRepository.save(follow);
  }

  async checkIfFollowing(ownerId: string, followOwnerId: string){
    return await this.followRepository.find({
      where: { ownerId:ownerId, followOwnerId:followOwnerId },
    })
  }

  async getAll(){
    return await this.followRepository.find();
  }

  async getAllFollowing(ownerId: string){
    return await this.followRepository.find({
      where: { ownerId: ownerId }
    })
  }

  async removeFollow(follow: Follow) {
    return await this.followRepository.delete(follow)
  }
}
