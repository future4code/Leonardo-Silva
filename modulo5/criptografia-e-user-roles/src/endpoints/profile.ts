import { Request, Response } from "express";
import { connection } from "../data/connection";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import idGenerated from "../services/generatorId";
import { authenticationData, user } from "../types";

export default async function getProfile(
   req: Request,
   res: Response
): Promise<void> {
   try {
    const token = req.headers.authorization as string;
    if(!token){
        res.statusCode = 401
        res.statusMessage = "token invalido ou nao passado no headers"
        throw new Error("token invalido ou nao passado no headers")
    }

    const authenticationData = authenticator.getTokenData(token);

    if (authenticationData.role !== "NORMAL") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      role: authenticationData.role,
    });
    
   } catch (error:any) {
        res.status(400).send({
        message: error.message,
      });
   }
}

async function getUserById(id:string): Promise<any>{
    const [user] = await connection('to_do_list_user')
    .where({ id })

    return user;
}