import db from './db/db';

console.log('db', db)
import * as jsonServer from 'json-server';

const server      = jsonServer.create();

const router      = jsonServer.router({db});
const middlewares = jsonServer.defaults(); 
const port        = 3100;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});