import connection from '../db/connection';
import TaskDTO from '../dto/TaskDTO';
import Task from '../models/Task';

export default class TaskService {
    private constructor() {}

    public static async save(task: Task): Promise<void> {
        try {
            const db = await connection();
            await db.run(
                'INSERT INTO tasks (title, description, completed, due_date) VALUES (?, ?, ?, ?)',
                task.title,
                task.description,
                task.completed ? 1 : 0,
                task.due_date
            );
            await db.close();
        } catch (err) {
            console.error('Error saving task:', err);
            throw err;
        }
    }

    public static async list(): Promise<TaskDTO[]> {
        try {
            const db = await connection();
            const tasks = await db.all('SELECT * FROM tasks');
            db.close();
            return tasks.map((task) => new TaskDTO(task));
        } catch (error) {
            console.error('An error occurred while retrieving task by id:', error);

            throw error;
        }
    }
    public static async getById(id: number): Promise<TaskDTO> {
        try {
            const db = await connection();
            const task = await db.get('SELECT * fROM tasks WHERE id = ?', id);
            db.close();
            return new TaskDTO(task);
        } catch (error) {
            console.error('An error occurred while retrieving task by id:', error);

            throw error;
        }
    }
    public static async deleteById(id: number): Promise<void> {
        try {
            const db = await connection();
            await db.run('DELETE FROM tasks WHERE id = ?', id);
            db.close();
        } catch (error) {
            console.error('An error occurred while retrieving task by id:', error);
            throw error;
        }
    }

    public static async update(task: Task): Promise<void> {
        if (!task) {
            throw new Error('Task is null or undefined.');
        }
        if (task.id == null) {
            throw new Error('Task.id is null or undefined.');
        }
        try {
            const db = await connection();
            await db.run(
                'UPDATE tasks SET title = ?, description = ?, completed = ?, due_date = ? WHERE id = ?',
                task.title,
                task.description,
                task.completed ? 1 : 0,
                task.due_date,
                task.id
            );
            db.close();
        } catch (error) {
            console.error('An error occurred while updating task ' + task.id + ':', error);
            throw error;
        }
    }
}
