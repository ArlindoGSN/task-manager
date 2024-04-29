import { openDb } from './configDB';

const db = openDb();

async function connection() {
    (await db).exec(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed INTEGER, due_date TEXT)'
    );
    return db;
}

export default connection;
