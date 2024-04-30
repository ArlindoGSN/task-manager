import cors from 'cors';
import express, { Request, Response } from 'express';
import router from './routes/TaskRoutes';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use('/', router);

app.use((err: any, _req: Request, res: Response, _next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Tasks app listening at http://localhost:${PORT}`);
});

export default app;
