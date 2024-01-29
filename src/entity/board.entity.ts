import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '유저 ID' })
  @Column()
  userId: number;

  @ApiProperty({ description: '내용' })
  @Column()
  content: string;

  @ApiProperty({ description: '수정일' })
  @UpdateDateColumn()
  updateAt: Date;

  @ApiProperty({ description: '생성일' })
  @CreateDateColumn()
  createAt: Date;

  @ApiProperty({ description: '유저정보' })
  @ManyToOne(() => User)
  user: User;
}
