import { AppDataSource } from '../api/settings'
import { Pokemon } from './Entity'

/**
 * Find all items in database
 * @returns Array of database objects
 */
export const findAllPokemon = async () => {
    const db_pokemon = await AppDataSource.getRepository(Pokemon).find()
    return db_pokemon
}

/**
 * Find database item by name
 * @param name 
 * @returns database objects
 */
export const findPokemonByName = async (name: string) => {
    const db_pokemon = await AppDataSource.getRepository(Pokemon).findOneBy({
        name_uq: name,
    })
    return db_pokemon
}

/**
 * Create database item
 * @param data 
 * @returns Message form database 
 */
export const createPokemon = async (data: {name: string, photo: string}) => {
    const pokemon = AppDataSource.getRepository(Pokemon).create({
        name_uq: data.name,
        photo_uq: data.photo
    })
    const result = await AppDataSource.getRepository(Pokemon).save(pokemon)
    return result
}