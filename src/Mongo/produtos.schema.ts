import { Schema } from "mongoose";


export const ProdutoSchema = new Schema({
    nome: String,
    categoria: String,
    descricao: String,
    preco: Number
})