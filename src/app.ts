import express from 'express';
import { router } from '@routers/router'
import 'module-alias/register';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

const PORT=process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err));