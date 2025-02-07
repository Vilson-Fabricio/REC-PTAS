import { Schema, model } from 'mongoose';

const cafeSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  localidade: {
    type: String,
    required: true,
  },
  fabricante: {
    type: Number,  //codigo do mesmo
    required: true,
  }
});

const CafeModel = model('Cafe', cafeSchema)
 export {CafeModel}
