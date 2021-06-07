import * as typeorm from 'typeorm';
import { Transform } from 'class-transformer';

@typeorm.Entity()
export default class Follow {
    constructor() {
        this.followId = '';
        this.ownerId = '';
        this.followOwnerId = '';
        this.followCreated = new Date();
        this.followUpdated = new Date();
    }

    @typeorm.PrimaryGeneratedColumn('uuid')
    followId?: string;

    @typeorm.Column()
    ownerId!: string;

    @typeorm.Column()
    followOwnerId!: string;

    @typeorm.CreateDateColumn()
    followCreated?: Date;
  
    @typeorm.UpdateDateColumn()
    followUpdated?: Date;
}