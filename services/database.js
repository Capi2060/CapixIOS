import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('capix.db');

export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Expenses table
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, amount REAL, date TEXT, category TEXT);'
      );
      // Tasks table
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, isCompleted INTEGER, priority INTEGER);'
      );
      // Customers table
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, notes TEXT);'
      );
    }, (err) => reject(err), () => resolve());
  });
};

export const insertExpense = (title, amount, date, category) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO expenses (title, amount, date, category) VALUES (?, ?, ?, ?);',
        [title, amount, date, category],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
};

export const getExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM expenses ORDER BY date DESC;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, err) => reject(err)
      );
    });
  });
};

// ... similar helpers for tasks and customers can be added here
