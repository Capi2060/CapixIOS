import * as SQLite from 'expo-sqlite';

export const initDB = async () => {
  const db = await SQLite.openDatabaseAsync('capix.db');
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, amount REAL, date TEXT, category TEXT);
      CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, isCompleted INTEGER, priority INTEGER);
      CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, notes TEXT);
    `);
    console.log('Base de datos inicializada');
  } catch (error) {
    console.error('Error al inicializar la DB:', error);
  }
};

export const insertExpense = async (title, amount, date, category) => {
  const db = await SQLite.openDatabaseAsync('capix.db');
  try {
    const result = await db.runAsync(
      'INSERT INTO expenses (title, amount, date, category) VALUES (?, ?, ?, ?);',
      [title, amount, date, category]
    );
    return result;
  } catch (error) {
    console.error('Error al insertar gasto:', error);
  }
};

export const getExpenses = async () => {
  const db = await SQLite.openDatabaseAsync('capix.db');
  try {
    const allRows = await db.getAllAsync('SELECT * FROM expenses ORDER BY date DESC;');
    return allRows;
  } catch (error) {
    console.error('Error al obtener gastos:', error);
    return [];
  }
};
