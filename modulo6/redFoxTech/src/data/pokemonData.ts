import { BaseDatabase } from "./connection";

class PokemonDatabase extends BaseDatabase {
  private static TABLE_NAME = "pokemon_list";

  public async listAllPokemon(page: string, orderBy: string): Promise<any> {
    try {
      if (!page && !orderBy) {
        const result = await this.getConnection()
          .select("pokedex_number", "name", "atk", "def", "sta", "cp100_lvl40")
          .from(PokemonDatabase.TABLE_NAME);
        return result;
      } else if (!page) {
        const result = await this.getConnection()
          .select("pokedex_number", "name", "atk", "def", "sta", "cp100_lvl40")
          .from(PokemonDatabase.TABLE_NAME)
          .orderBy([{ column: `${orderBy}`, order: "desc" }])
          .limit(20)
          .offset(0);
        return result;
      } else if (!orderBy) {
        const result = await this.getConnection()
          .select("pokedex_number", "name", "atk", "def", "sta", "cp100_lvl40")
          .from(PokemonDatabase.TABLE_NAME)
          .limit(20)
          .offset(Number(page) * 20);
        return result;
      } else {
        const result = await this.getConnection()
          .select("pokedex_number", "name", "atk", "def", "sta", "cp100_lvl40")
          .from(PokemonDatabase.TABLE_NAME)
          .orderBy([{ column: `${orderBy}`, order: "desc" }])
          .limit(20)
          .offset(Number(page) * 20);
        return result;
      }
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchPokemonByType(type: string): Promise<any> {
    try {
      console.log(type);
      const result = await this.getConnection()
        .select("pokedex_number", "name", "type_1", "type_2")
        .from(PokemonDatabase.TABLE_NAME)
        .where({ type_1: type })
        .orWhere({ type_2: type });

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchPokemonByName(name: string): Promise<any> {
    try {
      console.log(name);
      const result = await this.getConnection()
        .select("pokedex_number", "name")
        .from(PokemonDatabase.TABLE_NAME)
        .whereLike("name", `%${name}%`);

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchPokemonById(id: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select()
        .from(PokemonDatabase.TABLE_NAME)
        .where({ pokedex_number: id });
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async searchPokemonByGeneration(generation: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("pokedex_number", "name")
        .from(PokemonDatabase.TABLE_NAME)
        .where({ generation: generation });
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new PokemonDatabase();
