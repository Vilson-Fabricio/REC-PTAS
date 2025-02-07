import express from 'express'
import mongoose from 'mongoose'
import { router } from './routes/caferoutes.js';

const app = express()
app.use(express.json());

app.use('/cafe', router);

mongoose.connect('mongodb://localhost:27017/')  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB: ', err);
  });

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})