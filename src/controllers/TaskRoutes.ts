import express, { Request, Response, Router } from 'express';
import Task from '../models/Task';
import TaskService from '../service/TaskService';

const router: Router = express.Router();

router.post('/', (req: Request, res: Response): void => {
    const { id, title, description, completed, due_date } = req.body;

    const task = new Task(id, title, description, completed, due_date);

    TaskService.save(task);

    res.send(task).json();
});

router.get('/', async (_req: Request, res: Response) => {
    const tasks = await TaskService.list();

    res.send(tasks).json();
});

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const task = await TaskService.getById(Number(id));

    res.send(task).json();
});

router.get('/:id/complete', async (req: Request, res: Response) => {
    const { id } = req.params;

    const task = await TaskService.getById(Number(id));

    task.completed = true;

    await TaskService.update(new Task(task.id, task.title, task.description, task.completed, task.due_date));

    res.send(task).json();
});

router.get('/:id/complete', async (req: Request, res: Response) => {
    const { id } = req.params;

    const task = await TaskService.getById(Number(id));

    task.completed = false;

    await TaskService.update(new Task(task.id, task.title, task.description, task.completed, task.due_date));

    res.send(task).json();
});

export default router;
