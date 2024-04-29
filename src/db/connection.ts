import { Database } from 'sqlite';
import { openDb } from './configDB';

let dbInstance: Database | null = null;

export async function getConnection() {
    if (!dbInstance) {
        dbInstance = await openDb();
        await dbInstance.exec(
            'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed INTEGER, due_date TEXT)'
        );
    }
    return dbInstance;
}
