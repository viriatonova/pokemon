import { Router } from 'express';
import { healthChecker } from './middlewares';

export const ROUTER: Router = Router()

ROUTER.get('/', healthChecker)