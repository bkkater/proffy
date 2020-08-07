import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// GET: Buscar ou listar uma informação
// POST: Criar alguma informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar informação

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso quero atualizar ou deletar
// Query Params: Ordenação, Filtro, Paginação


app.listen(3333);