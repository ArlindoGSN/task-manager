import { Database } from 'sqlite';
import { getConnection } from '../db/connection';
import TaskDTO from '../dto/TaskDTO';
import Task from '../models/Task';

export default class TaskService {
    private constructor() {}

    public static async save(task: Task): Promise<void> {
        try {
            const db = await getConnection();

            await db.run(
                'INSERT INTO tasks (title, description, completed, due_date) VALUES (?, ?, ?, ?)',
                task.title,
                task.description,
                task.completed ? 1 : 0,
                task.due_date
            );
        } catch (err) {
            console.error('Error saving task:', err);
            throw err;
        }
    }

    public static async list(): Promise<TaskDTO[]> {
        try {
            const db: Database = await getConnection();

            const tasks = await db.all('SELECT * FROM tasks WHERE completed = 0');
            return tasks.map((task: Task) => new TaskDTO(task));
        } catch (error) {
            console.error('An error occurred while retrieving tasks:', error);
            throw error;
        }
    }

    public static async getById(id: number): Promise<TaskDTO> {
        try {
            const db: Database = await getConnection();

            const task = await db.get('SELECT * FROM tasks WHERE id = ?', id);

            return new TaskDTO(task);
        } catch (error) {
            console.error('An error occurred while retrieving task by id:', error);
            throw error;
        }
    }

    public static async deleteById(id: number): Promise<void> {
        try {
            const db: Database = await getConnection();

            await db.get('DELETE FROM tasks WHERE id = ?', id);
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
            const db: Database = await getConnection();

            await db.run(
                'UPDATE tasks SET title = ?, description = ?, completed = ?, due_date = ? WHERE id = ?',
                task.title,
                task.description,
                task.completed ? 1 : 0,
                task.due_date,
                task.id
            );
        } catch (error) {
            console.error('An error occurred while updating task ' + task.id + ':', error);
            throw error;
        }
    }

    public static async completeTaskById(id: number): Promise<void> {
        try {
            const db: Database = await getConnection();

            await db.run('UPDATE tasks SET completed = 1 WHERE id = ?', id);
        } catch (error) {
            console.error('An error occurred while updating task ' + id + ':', error);

            throw error;
        }
    }
}
