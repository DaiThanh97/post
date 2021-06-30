import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { PREFIX } from './constants/route';
import authRouter from './routes/auth';

const app: Express = express();
dotenv.config({ path: path.join(__dirname, 'configs', '.env') });

app.use(express.json());

app.use(PREFIX, authRouter);

export default app;