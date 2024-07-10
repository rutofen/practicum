const fs = require('fs').promises;
const { createTableIfNotExists } = require('./config_db');

async function createTablesFromJson(jsonPath) {
  try {
    const jsonData = await fs.readFile(jsonPath, 'utf-8');
    const tables = JSON.parse(jsonData);

    for (const table of tables) {
      const { tableName, columnsDefinition } = table;
      await createTableIfNotExists(tableName, columnsDefinition);
    }

    console.log('All tables created successfully');
  } catch (error) {
    console.error('Error creating tables from JSON:', error.message);
    throw error;
  }
}
module.exports = {
    createTablesFromJson
  };
  
