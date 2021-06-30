import { Router } from 'express';

import { register } from './../controllers/auth';
import { ENDPOINT } from '../constants/route';

const router = Router();

router.post(ENDPOINT.REGISTER, register);

export default router;