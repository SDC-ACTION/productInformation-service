const fs = require('fs');
const { createNewProducts } = require('../seeding/seedScript.js');
const writeData = fs.createWriteStream('seed.csv');

writeData.write('description, title, brand, name, age, playerCount, part_Number, GTIN\n', 'utf8');

const generateCSV = (writer, encoding, callback) => {
  let i = 10000000;

  const writeRecord = () => {
    let ok = true;

    do {
      i -= 1;

      const record = createNewProducts();
      const data = `${record.description},${record.title}, ${record.brand},${record.name},${record.age},${record.playerCount},${record.part_Number},${record.GTIN}\n`;

      i === 0 ? writer.write(data, encoding, callback) : ok = writer.write(data, encoding);
    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', writeRecord);
    }
  }
  writeRecord();
}

generateCSV(writeData, 'utf-8', () => {
  writeData.end();
  process.exit();
});