import express from 'express';

import '../typeorm';

const app = express();

app.use(express.json());

export default app;
