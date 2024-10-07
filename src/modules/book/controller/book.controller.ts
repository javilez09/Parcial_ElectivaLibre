import { Types } from "mongoose";
import { IBook } from "../interface/book.interface";
import { BookModel } from "../models/book.model";

export const createBook = async (book: IBook) => {
    try {
        const newBook = new BookModel(book);
        return await newBook.save();
    } catch (error) {
        throw new Error("Error could not save in database");
    }
};

export const getAllBooks = async () => {
    try {
        return await BookModel.find();
    } catch (error) {
        throw new Error("Error could not get the book stored");
    }
};

export const getBookById = async (id: string) => {
    try {
        return await BookModel.findById(id);
    } catch (error) {
        throw new Error("Error could not find the book");
    }
};

export const DeletedBook = async (id: string) => {
    try {
        return await BookModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error could not find the book");
    }
};


export const UpdateBook = async (id: string,body:Body) => {
    try {
        return await BookModel.findByIdAndUpdate(id,body);
    } catch (error) {
        throw new Error("Error could not find the book");
    }
};