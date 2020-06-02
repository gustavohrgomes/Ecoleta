import express from 'express';

const app = express();

app.get('/user', (request, response) => {
  console.log('Listagem de usuários');

  response.send([
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
  ]);
});

app.listen(3333);

