class Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    due_date: string;

    constructor(id: number, title: string, description: string, completed: boolean, due_date: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.due_date = due_date;
    }
}

export default Task;
