import express, { Express, Request, Response } from 'express';
import knex from "knex";
import cors from 'cors';
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {User, Product, Purchase} from "./types"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// ----------------------------------------------------------------------------------

const createUser = async (
   name: string,
   email: string,
   password: string,
 ): Promise<void> => {
   await connection.raw(`
         INSERT INTO labecommerce_users
           (name, email, password)
         VALUES (
         "${name}",
         "${email}",
         "${password}"
     );
 `);
};

const createProduct = async (
   name: string,
   price: number,
   image_url: string,
 ): Promise<void> => {
   await connection.raw(`
         INSERT INTO labecommerce_products
           (name, price, image_url)
         VALUES (
         "${name}",
         ${price},
         "${image_url}"
     );
 `);
};

const createPurchase = async (
  user_id: number,
  product_id: number,
  quantity: number,
): Promise<void> => {
  const preco = await connection.raw(`SELECT price FROM labecommerce_products WHERE id = ${product_id}`)
  const precoTotal = preco[0][0].price * quantity
  await connection.raw(`
        INSERT INTO labecommerce_purchases
          (user_id, product_id, quantity, total_price)
        VALUES (
        ${user_id},
        ${product_id},
        ${quantity},
        ${precoTotal}
    );
`);
};

//-------------------------------------------------------------------------------------

app.get("/users", async (req: Request, res: Response): Promise<void> => {
   try {
     let result = await connection.raw(`SELECT id, name, email FROM labecommerce_users ORDER BY id;`)
     let compras = await connection.raw(`SELECT user_id, name, quantity, total_price FROM labecommerce_products JOIN labecommerce_purchases WHERE id = product_id;`)
     let purchases = []
     let newArray = []
     for(let user of result[0]){
       for(let compra of compras[0]){
         if(user.id === compra.user_id){
            purchases.push(compra)
         }
       }
       newArray.push({...user, purchases: purchases})
       purchases = []
     }
     const newResult = {users: newArray}
     if(result[0][0] === undefined){
       throw new Error("Nenhum usuário encontrado")
     }
     res.status(200).send(newResult)
   } catch (error: any) {
     res.status(500).send(error.sqlMessage || error.message);
   }
 });

 app.post("/users", async (req:Request, res:Response):Promise<void> =>{
   try{
     const {name, email, password} = req.body
     const user: User = {name,email,password}
     Object.keys(user).forEach(function(item){
       if(!user[item] || user[item] === ""){
           throw new Error(`Tem um item vazio: ${item}`)
       }
     })
       await createUser(name,email,password)
       res.status(201).send("Usuário criado!");
   }
   catch(error:any){
     res.status(500).send(error.sqlMessage || error.message);
   }
})

//-------------------------------------------------------------------------------------

app.get("/products", async (req: Request, res: Response): Promise<void> => {
   try {
     let result = await connection.raw(`SELECT id, name, price FROM labecommerce_products ORDER BY id;`)
     const search: any = req.query.search
     const order: any = req.query.order

    if (search) {
      result = await connection.raw(`
      SELECT id, name, price FROM labecommerce_products
      WHERE name like '%${search}%'
      `)
    } 
    if (order) {
      result = await connection.raw(`
      SELECT id, name, price FROM labecommerce_products
      ORDER BY name ${order};
      `)
    } 

     const newResult = {products: result[0]}
     if(result[0][0] === undefined){
       throw new Error("Nenhum produto encontrado")
     }
     res.status(200).send(newResult)
   } catch (error: any) {
     res.status(500).send(error.sqlMessage || error.message);
   }
 });

 app.post("/products", async (req:Request, res:Response):Promise<void> =>{
   try{
     const {name, price, image_url} = req.body
     const product: Product = {name,price,image_url}
     Object.keys(product).forEach(function(item){
       if(!product[item] || product[item] === ""){
           throw new Error(`Tem um item vazio: ${item}`)
       }
     })
       await createProduct(name,price,image_url)
       res.status(201).send("Produto inserido com sucesso!");
   }
   catch(error:any){
     res.status(500).send(error.sqlMessage || error.message);
   }
})

//-------------------------------------------------------------------------------------

app.post("/purchases", async (req:Request, res:Response):Promise<void> =>{
  try{
    const {user_id, product_id, quantity, total_price} = req.body
    const purchase: Purchase = {user_id,product_id,quantity}
    Object.keys(purchase).forEach(function(item){
      if(!purchase[item] || purchase[item] === null){
          throw new Error(`Tem um item vazio: ${item}`)
      }
    })
      await createPurchase(user_id,product_id,quantity)
      res.status(201).send("Compra registrada com sucesso!");
  }
  catch(error:any){
    res.status(500).send(error.sqlMessage || error.message);
  }
})

app.get("/users/:id/purchases", async (req: Request, res: Response): Promise<void> => {
  try {
    let userId = req.params.id
    let result = await connection.raw(`SELECT user_id, product_id, quantity, total_price FROM labecommerce_purchases WHERE user_id = ${userId};`)
    const newResult = {compras: result[0]}
    if(result[0][0] === undefined){
      throw new Error("Nenhuma compra encontrada")
    } else {
      res.status(200).send(newResult)
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});