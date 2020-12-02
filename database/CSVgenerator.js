const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { createNewProducts } = require('../seeding/seedScript.js');
const csvWriter = createCsvWriter({
  path: 'seed.csv',
  header: [
    {id: 'description', title: 'description'},
    {id: 'title', title: 'title'},
    {id: 'brand', title: 'brand'},
    {id: 'name', title: 'name'},
    {id: 'age', title: 'age'},
    {id: 'playerCount', title: 'playerCount'},
    {id: 'part_Number', title: 'part_Number'},
    {id: 'GTIN', title: 'GTIN'}
  ]
});

csvWriter.writeRecords(createNewProducts())
  .then(() => {
    console.log('CSV file was successfully created');
    process.exit();
  })