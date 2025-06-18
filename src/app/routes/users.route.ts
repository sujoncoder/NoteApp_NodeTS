import express from "express";
import { createUser, deleteSingleUser, getAllUser, getSingleUser, updateUser } from "../controllers/users.controller";

const usersRoute = express.Router();

usersRoute.get('/', getAllUser);
usersRoute.post('/create-user', createUser);
usersRoute.get('/:userId', getSingleUser);
usersRoute.patch('/:userId', updateUser);
usersRoute.delete('/:userId', deleteSingleUser);

export default usersRoute;