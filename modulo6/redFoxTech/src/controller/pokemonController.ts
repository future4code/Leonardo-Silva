import { Request, Response } from "express";
import { BaseDatabase } from "../data/connection";
import pokemonBussiness from "../bussiness/pokemonBussiness";

class PokemonController {
  async signup(req: Request, res: Response): Promise<void> {
    try {
     
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
    
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async getProfile(req: Request, res: Response): Promise<void> {
    try {
    
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async getOtherProfile(req: Request, res: Response): Promise<void> {
    try {
     
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async getFeed(req: Request, res: Response): Promise<void> {
    try {
    
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async forgotPassword(req: Request, res: Response): Promise<void> {
    try {
     
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }
}

export default new PokemonController()
