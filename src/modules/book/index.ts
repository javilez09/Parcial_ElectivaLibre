import { Request, Response, Router } from "express";
import { createBook,DeletedBook,getAllBooks,getBookById, UpdateBook } from "./controller/book.controller";
import { schemaValidator } from "../../middleware/schema.middleware";
import { BookSchemaCreate } from "./schemas/book.schema";

const bookRouter = Router();

let books: any[] = [];

bookRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const book = await getBookById(id);
    if(!book) {
        res.status(404).send({
            msg: "Book not found"
        });
    } else {
        res.status(200).send(book);
    }
});

bookRouter.post("/", schemaValidator(BookSchemaCreate), async (req: Request, res: Response) => {
    try {
        console.log("Enter to route");
        const body = req.body; // Payload -> Carga util de la peticion
        const newbook = await createBook(body);
        res.status(201).send({ msg: "Creado con exito", book: newbook });
    } catch (error) {
        res.status(400).send({
            msg: "Error to create a book"
        })
    }
});

bookRouter.get("/", async (req: Request, res: Response) => {
    try {
        const books = await getAllBooks();
        res.status(200).send({
            books: books
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error could get the Book"
        });
    }
});

bookRouter.patch("/:id", schemaValidator(BookSchemaCreate),async(req: Request, res: Response) => {

    try{
    const id = req.params.id;
    const book = await getBookById(id)
    if(!book) {
        res.status(404).send({
            msg: "Book not found"
        });
    } else {
        const body = req.body;
        const UpdatedBook = await UpdateBook(id,body);
        const newUpdatedBook = await getBookById(id)
        res.status(200).send({ msg: "Actualizado con exito" , newUpdatedBook});
    }
}catch(error){
    res.status(500).send({
        msg: "Error could get the Book"
    });
}
});
bookRouter.delete("/:id", async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const book = await getBookById(id)
    if(!book) {
        res.status(404).send({
            msg: "Book not found"
        });
    } else {
        const BookDeleted = await DeletedBook(id);
        res.status(200).send({ msg: "Deleted with success" });
    }
    } catch (error) {
        res.status(500).send({
            msg: "Error could no delete the book"
        });
    }
});
export { bookRouter };