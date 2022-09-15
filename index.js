const express = require('express');
const fs = require('fs');

let file = fs.readFileSync(__dirname + '/contador.txt', 'utf8');
file = parseInt(file);

file++;

const writeFile = (count) => {
  fs.writeFile(__dirname + '/contador.txt', String(count), (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

const newFile = fs.readFileSync(__dirname + '/contador.txt', 'utf8');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  file++;
  writeFile(file);
  const count = {
    count: `${file}`,
  };
  res.json({ cout: `${file}` });
});

app.listen(app.get('port'), () => {
  console.log(`aplicacion corriendo en el puerto ${app.get('port')}`);
});
