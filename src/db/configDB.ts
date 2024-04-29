import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export const openDb = () => {
    return open({
        filename: path.join(__dirname, './database.sqlite'),
        driver: sqlite3.Database
    });
};
