import dayjs from 'dayjs';
import Task from '../models/Task';
export default class TaskDTO {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    due_date: dayjs.Dayjs;

    constructor(Task: Task) {
        this.id = Task.id;
        this.title = Task.title;
        this.description = Task.description;
        this.completed = Task.completed;
        this.due_date = Task.due_date;
    }
}
