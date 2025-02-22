import { Router } from 'express';
import * as controller from '@controllers/controller';

export const router = Router();

router.post('/', controller.maxArray)