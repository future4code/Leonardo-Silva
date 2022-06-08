import { Request, Response } from "express";
import { BaseDatabase } from "../data/connection";
import pokemonBussiness from "../bussiness/pokemonBussiness";

class PokemonController {
  async listAllPokemon(req: Request, res: Response): Promise<void> {
    try {
      const offset = req.query.page as string;
      const orderBy = req.query.orderBy as string;
      const pokemons = await pokemonBussiness.listAllPokemon(offset, orderBy);
      res.status(200).send({ pokemons });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }

  async searchPokemon(req: Request, res: Response): Promise<void> {
    try {
      const type = req.query.type as string;
      const name = req.query.name as string;
      const id = req.query.id as string;
      const generation = req.query.generation as string;
      const pokemons = await pokemonBussiness.searchPokemon(
        type,
        name,
        id,
        generation
      );
      res.status(200).send({ pokemons });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  }
}

export default new PokemonController();
