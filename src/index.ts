import  Express, { Request, Response }  from "express";
import { initDatabase } from "./database/db";
import { Parameters } from "./utils/constants";
import { bookRouter } from "./modules/book";
const app = Express()
const PORT = 3007;
app.use(Express.json())
app.use("/book",bookRouter );

app.get("/",(req:Request,res:Response)=>{
    res.status(400).send({Parcial_Electiva:"Jamir Yessid Avilez Cienfuego"})
})


app.listen(PORT, async () => {
    const url = `mongodb://${Parameters.DATABASE_HOST}:${Parameters.DATABASE_PORT}/${Parameters.DATABASE_NAME}`;
    await initDatabase(url);
    console.log("Server running at port 3007");
});
