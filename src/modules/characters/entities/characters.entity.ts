import { CitiesEntity } from 'src/modules/cities/entities/cities.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('characters')
export class Character {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 128, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  sex: string;

  @Column({ type: 'int', width: 255, nullable: false })
  level: number;

  @Column({ type: 'int', nullable: false })
  exp: number;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @Column({ type: 'varchar', length: 128, nullable: false })
  vocation: string;

  @Column({ type: 'int' })
  gold: number;

  @ManyToOne(() => CitiesEntity, (city) => city.characters, {
    eager: true,
  })
  @JoinColumn({ name: 'id_residence' })
  residence: CitiesEntity;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.characters, {
    eager: true,
  })
  @JoinColumn({ name: 'id_user' })
  user: UserEntity;
}
