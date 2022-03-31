import { Character } from 'src/modules/characters/entities/characters.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cities')
export class CitiesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 128 })
  map: string;

  @OneToMany(() => Character, (character) => character.residence)
  characters: Character[];
}
