import { Request, Response } from 'express';
import { SERVER, PORT } from '../api/settings';
import { findPokemonByName, findAllPokemon, createPokemon } from "./Helper"

/**
 * Get all Pokemons items in database
 * @param req 
 * @param res 
 * @returns Express status and message
 */
export const getAllPokemon = async (req: Request, res: Response) => {
    const db_pokemon = await findAllPokemon() 
    if (!db_pokemon) return res.status(204).json({'message': 'No Pokemon eat'})
    return res.status(200).json({data: [...db_pokemon]})
}

/**
 * Get expecific Pokemon by params name
 * @param req 
 * @param res 
 * @returns Express status and message
 */
export const getPokemon = async (req: Request, res: Response) => {
    const db_pokemon = await findPokemonByName(req.params.name)
    if (!db_pokemon) return res.status(204)
    return res.status(200).json({data: db_pokemon})
}

/**
 * Create a list of Pokemons items in database using Pokemon name
 * @param req 
 * @param res 
 * @returns Express status and message
 */
export const postPokemon = async (req: Request, res: Response) => {
    const db_pokemon = await findPokemonByName(req.body.name) 
    if (db_pokemon) return res.status(409).json({'message': "This Pokemon already exist in database"})
    try {
        const pokemonList = req.body.list
        pokemonList.forEach( async (element: string) => {
            const newPokemonPhoto = `http://${SERVER}:${PORT}/static/${element}.png`
            const newPokemon = await createPokemon({name: element, photo: newPokemonPhoto})
        });
    } catch (error) {
        return new Error(JSON.stringify(error))
    }
    return res.status(200).json({'message': "success"})
}
