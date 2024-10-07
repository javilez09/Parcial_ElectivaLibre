import Joi from "joi";

    const title = Joi.string()
    const author= Joi.string()
    const publicationDate = Joi.date()
    const isbn = Joi.string()
    const genre = Joi.string()


export const BookSchemaCreate = Joi.object({
    title: title.required(),
    author: author.required(),
    publicationDate: publicationDate.required(),
    isbn: isbn.required(),
    genre: genre.required()
});

