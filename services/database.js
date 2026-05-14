import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('capix.db');

export const initDB = async () => {
  try {
    // Inicialización de tablas con el nuevo API execSync
    db.execSync(`
      CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, amount REAL, date TEXT, category TEXT);
      CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, isCompleted INTEGER, priority INTEGER);
      CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, notes TEXT);
    `);
    console.log('Base de datos inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    throw error;
  }
};

export const insertExpense = (title, amount, date, category) => {
  try {
    const result = db.runSync(
      'INSERT INTO expenses (title, amount, date, category) VALUES (?, ?, ?, ?);',
      [title, amount, date, category]
    );
    return result;
  } catch (error) {
    console.error('Error al insertar gasto:', error);
    throw error;
  }
};

export const getExpenses = () => {
  try {
    const allRows = db.getAllSync('SELECT * FROM expenses ORDER BY date DESC;');
    return allRows;
  } catch (error) {
    console.error('Error al obtener gastos:', error);
    return [];
  }
};

// ... similar helpers for tasks and customers can be added here
