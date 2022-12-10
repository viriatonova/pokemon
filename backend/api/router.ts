import { Router } from 'express';
import { getAllPokemon, getPokemon, postPokemon } from '../pokemon/Controller';
import { healthChecker } from './middlewares';

export const ROUTER: Router = Router()

ROUTER.get('/', healthChecker)
ROUTER.get('/pokemon', getAllPokemon)
ROUTER.get('/pokemon/:name', getPokemon)
ROUTER.post('/pokemon', postPokemon)
  

