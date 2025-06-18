import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';

let server: Server;

const PORT = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://NoteApp:iamsujonnoteapp@nextlevel.fdygipl.mongodb.net/NoteApp?retryWrites=true&w=majority&appName=NoteApp');

        console.log("Database connect successfully 😎")

        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        });

    } catch (error) {
        console.log(error);
    };
};
main();