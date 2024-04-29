import Task from '../models/Task';
export default class TaskDTO {
    private id: number;
    private title: string;
    private description: string;
    private completed: boolean;
    private due_date: string;

    constructor(Task: Task) {
        this.id = Task.id;
        this.title = Task.title;
        this.description = Task.description;
        this.completed = Task.completed;
        this.due_date = Task.due_date;
    }

    //geters and seters
    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
    }

    getCompleted(): boolean {
        return this.completed;
    }

    setCompleted(completed: boolean) {
        this.completed = completed;
    }

    getDueDate(): string {
        return this.due_date;
    }
}
