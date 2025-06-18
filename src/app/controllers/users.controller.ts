import { Response, Request } from "express";
import User from "../models/user.model";


// CREATE USER
export const createUser = async (req: Request, res: Response) => {
    const body = req.body;
    console.log(body)

    const user = await User.create(body);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: user,
    });
};

// GET All USERS
export const getAllUser = async (req: Request, res: Response) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        message: "Get all users successfully",
        users
    });
};

// GET SINGLE USER
export const getSingleUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    res.status(200).json({
        success: true,
        message: "Get single user successfully",
        user,
    });
};

// UPDATE A USER
export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const updateBody = req.body;

    const user = await User.findByIdAndUpdate(userId, updateBody, { new: true });

    res.status(200).json({
        success: true,
        message: "Updated user successfully",
        user,
    });
};

// DELETE SINGLE USER
export const deleteSingleUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const user = await User.findByIdAndDelete(userId, { new: true });

    res.status(200).json({
        success: true,
        message: "User delete successfully",
        user,
    });
};