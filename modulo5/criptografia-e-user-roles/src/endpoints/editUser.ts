import { Request, Response } from "express";
import { connection } from "../data/connection";
import authenticator from "../services/authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body;

      const token = req.headers.authorization
    
      if(!token){
        res.statusCode = 401
        res.statusMessage = "token invalido ou nao passado no headers"
        throw new Error("token invalido ou nao passado no headers")
      }
    
      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error("Informe o(s) novo(s) 'name' ou 'nickname'")
      }

      const tokenData = authenticator.getTokenData(token as string)

      if (!tokenData) {
         res.statusCode = 401
         res.statusMessage = "token invalido ou nao passado no headers"
         throw new Error("token invalido ou nao passado no headers")
      }

      if(tokenData.role !== "ADMIN") {
         res.statusCode = 403  // forbidden
         res.statusMessage = "usuário não permitido"
         throw new Error("usuário não permitido")
      }

      await connection('to_do_list_user')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.send({ message: "User updated sucessfully!"})

   } catch (error:any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}