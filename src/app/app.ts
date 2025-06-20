import express, { Application, Response, Request } from 'express';
import notesRoute from './routes/notes.route';
import usersRoute from './routes/users.route';

const app: Application = express();

// APPLICATION LAYER
app.use(express.json());
app.use('/notes', notesRoute);
app.use('/users', usersRoute);

// ROOT ROUTE
app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to my Note App.")
});

export default app;