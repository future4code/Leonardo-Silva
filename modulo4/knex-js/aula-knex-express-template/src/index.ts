import express, { Request, Response } from "express"
import connection from "./connection"
import app from "./app"
import { AddressInfo } from "net";

const getActorById = async (id: string): Promise<any> => {
    app.get("/users/:id", async (req: Request, res: Response) => {
        try {
          const id = req.params.id
      
          console.log(await getActorById(id))
      
          res.end()
        } catch (error) {
              console.log(error.message)
          res.status(500).send("Unexpected error")
        }
    })
}


app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });