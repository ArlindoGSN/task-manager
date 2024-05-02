import express, { Request, Response, Router } from 'express';
import TaskDTO from '../dto/TaskDTO';
import Task from '../models/Task';
import TaskService from '../service/TaskService';

const router: Router = express.Router();

router.post('/tasks', (req: Request, res: Response): void => {
    const { id, title, description, completed, due_date } = req.body;

    const task = new Task(id, title, description, completed, due_date);

    TaskService.save(task);

    res.send(task);
});

router.get('/tasks', async (req: Request, res: Response) => {
    try {
        const tasks: TaskDTO[] = await TaskService.list();
        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

router.get('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const task = await TaskService.getById(Number(id));

    res.send(task);
});

router.put('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const { title, description, completed, due_date } = req.body;
    const task = await TaskService.update(new Task(Number(id), title, description, completed, due_date));

    res.status(200).send(task);
});

router.get('/tasks/:id/complete', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await TaskService.getById(Number(id));
        task.completed = true;
        await TaskService.update(task);
        res.send(task);
    } catch (error) {
        console.error('Error marking task as complete:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/tasks/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    await TaskService.deleteById(Number(id));

    res.send();
});

export default router;
