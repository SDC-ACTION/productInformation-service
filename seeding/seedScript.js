const { randNum, gtinStr } = require('../public/helper-functions.js');

const descriptionChoice = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'Nunc quis aliquet ex', 'vitae porta massa', 'Donec congue turpis est', 'nec molestie risus auctor vel', 'Sed ornare bibendum varius', 'Etiam maximus nulla tristique pulvinar auctor', 'Fusce sed nulla tempor', 'eleifend justo a', 'interdum ante', 'Curabitur in blandit diam', 'Aenean vehicula congue tortor', 'a malesuada tortor sodales eget', 'Vestibulum eu ultricies eros', 'Vestibulum a erat vel libero tincidunt semper', 'Suspendisse sollicitudin', 'erat vel fermentum molestie', 'mi nulla sodales ligula', 'eu pretium diam libero ullamcorper ante', 'Morbi lacinia ultrices neque vel accumsan', 'Vestibulum finibus arcu in nibh eleifend ullamcorper', 'Vivamus eleifend sed nulla nec tempor', 'Sed pretium', 'arcu luctus ornare euismod', 'diam orci auctor libero '];

const titleChoice = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'In', 'tristique', 'dolor', 'vel', 'porta', 'porta', 'Mauris', 'non', 'leo', 'ac', 'lectus', 'venenatis', 'egestas', 'pellentesque', 'et', 'dui', 'Curabitur', 'varius', 'quis', 'quam', 'non', 'ornare', 'In', 'sed', 'iaculis', 'odio', 'bibendum', 'hendrerit', 'lacus', 'Ut', 'in', 'pellentesque', 'turpis', 'et', 'viverra', 'odio', 'Vestibulum', 'et', 'tortor', 'iaculis', 'metus', 'porttitor', 'auctor', 'in', 'a', 'ex', 'Fusce', 'facilisis', 'purus', 'ac', 'ultrices', 'facilisis', 'lectus', 'turpis', 'efficitur', 'sem', 'id', 'suscipit', 'felis', 'quam', 'sed', 'ex', 'In', 'nisi', 'ante', 'molestie', 'ac', 'sapien', 'eget', 'rutrum', 'convallis', 'lorem', 'Praesent', 'vestibulum', 'placerat', 'massa', 'sit', 'amet', 'hendrerit', 'Aliquam', 'erat', 'volutpat', 'In', 'ut', 'ligula', 'vel', 'odio', 'venenatis', 'lobortis', 'Sed', 'in', 'tincidunt'];

const brandName = [
  'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

const categoryName = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

const playerCount = ['1 Player', '2 Player', '3 Player', '4 Player', '5 Player', '6 Player'];
const partNumber = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Sed', 'volutpat', 'feugiat', 'consequat', 'Donec', 'id', 'faucibus', 'ligula', 'Maecenas', 'lobortis', 'laoreet', 'maximus', 'Donec', 'vel', 'nunc', 'mi', 'Nam', 'rutrum', 'rutrum', 'convallis', 'Donec', 'tempus', 'gravida', 'risus', 'laoreet', 'elementum', 'Fusce', 'congue', 'rhoncus', 'sollicitudin', 'Nunc', 'quis'];

function createNewProducts() {
    const productObject = {};

    productObject.description = `${descriptionChoice[randNum(0, 24)]}${
      descriptionChoice[randNum(0, 24)]
    }${descriptionChoice[randNum(0, 24)]
    }${descriptionChoice[randNum(0, 24)]
    }${
      descriptionChoice[randNum(0, 24)]
    }${
      descriptionChoice[randNum(0, 24)]}`;
    productObject.title = titleChoice[Math.floor(Math.random(0, titleChoice.length))];
    productObject.brand = brandName[randNum(1, 8)];
    productObject.name = categoryName[randNum(0, 4)];
    productObject.age = (randNum(3, 18)).toString().concat(' Player');
    productObject.playerCount = playerCount[randNum(0, 6)];
    // eslint-disable-next-line max-len
    productObject.part_Number = partNumber[randNum(0, 40)] + gtinStr(4).toString();
    productObject.GTIN = gtinStr(14);
    return productObject;
}

const seed = async () => {
  await helper.delete();
  await createNewProducts();
  await helper.insertProducts(products);
};

module.exports = {
  createNewProducts
};
