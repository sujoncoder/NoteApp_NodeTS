import express, { Application, Response, Request } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Wellcome to my Note App.")
});

export default app;