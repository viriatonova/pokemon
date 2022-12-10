import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id_pk!: number

    @Column()
    name_uq!: string

    @Column()
    photo_uq!: string
}