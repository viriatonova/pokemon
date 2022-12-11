import { Router } from 'express';
import { getAllPokemon, getPokemon, postPokemon } from '../pokemon/Controller';
import { healthChecker } from './middlewares';

export const ROUTER: Router = Router()

// Defaults routes
ROUTER.get('/', healthChecker)

// Apps routes
ROUTER.get('/pokemon', getAllPokemon)
ROUTER.get('/pokemon/:name', getPokemon)
ROUTER.post('/pokemon', postPokemon)
  

