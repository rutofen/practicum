// const jsonPath = '../Backend/data/db.json';

// const fs = require('fs').promises;
// const { createTableIfNotExists } = require('./config_db');

// async function readJsonFile() {
//   try {
//     const jsonData = await fs.readFile(jsonPath, 'utf-8');
//     return JSON.parse(jsonData);
//   } catch (error) {
//     throw error;
//   }
// }
// async function createTablesFromJson() {
//     const tables = await readJsonFile();

//     for (const table of tables) {
//       const { tableName, columnsDefinition } = table;
//       await createTableIfNotExists(tableName, columnsDefinition);
    

//     console.log('All tables created successfully');

// }}

// module.exports = {
//   createTablesFromJson
// };
