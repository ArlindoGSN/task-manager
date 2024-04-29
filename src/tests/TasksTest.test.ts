import Task from '../models/Task';
import TaskService from '../service/TaskService';

describe('TaskService test', () => {
    beforeAll(async () => {
        jest.clearAllMocks();
    });
    it('should save a task', async () => {
        const task = new Task(1, 'Test', 'Test description', false, '2022-01-01');

        await TaskService.save(task);

        expect(task.id).toBe(1);
    });

    it('should get a task by id', async () => {
        const task = await TaskService.getById(8);

        expect(task.getId()).toBe(8);
    });

    it('should list tasks', async () => {
        const tasks = await TaskService.list();

        expect(tasks.length).toBeGreaterThan(0);
    });

    it('should delete a task by id', async () => {
        await TaskService.deleteById(3);
    });
});
