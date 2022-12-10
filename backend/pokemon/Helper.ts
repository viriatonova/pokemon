import { AppDataSource } from '../api/settings'
import { Pokemon } from './Entity'


export const findAllPokemon = async () => {
    const db_pokemon = await AppDataSource.getRepository(Pokemon).find()
    return db_pokemon
}

export const findPokemonByName = async (name: string) => {
    const db_pokemon = await AppDataSource.getRepository(Pokemon).findOneBy({
        name_uq: name,
    })
    return db_pokemon
}

export const createPokemon = async (data: {name: string, photo: string}) => {
    const pokemon = AppDataSource.getRepository(Pokemon).create({
        name_uq: data.name,
        photo_uq: data.photo
    })
    const result = await AppDataSource.getRepository(Pokemon).save(pokemon)
    return result
}