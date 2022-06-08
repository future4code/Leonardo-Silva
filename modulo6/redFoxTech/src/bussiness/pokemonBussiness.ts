import pokemonDatabase from "../data/pokemonData";

class PokemonBussiness {
  async listAllPokemon(offset: string, orderBy: string) {
    let page = "";
    if (offset === "1") {
      page = "0";
    } else {
      page = offset;
    }

    const result = await pokemonDatabase.listAllPokemon(page, orderBy);

    if (!result[0]) {
      return "Página Vazia";
    }

    return result;
  }

  async searchPokemon(
    type: string,
    name: string,
    id: string,
    generation: string
  ) {
    if (type) {
      const result = await pokemonDatabase.searchPokemonByType(type);
      if (!result[0]) {
        throw new Error("Digite um tipo válido");
      }
      return result;
    }
    if (name) {
      const result = await pokemonDatabase.searchPokemonByName(name);
      if (!result[0]) {
        throw new Error("Nenhum pokemon encontrado");
      }
      return result;
    }
    if (id) {
      const result = await pokemonDatabase.searchPokemonById(id);
      if (!result[0]) {
        throw new Error("Pokemon não encontrado");
      }
      return result;
    }
    if (generation) {
      const result = await pokemonDatabase.searchPokemonByGeneration(
        generation
      );
      if (!result[0]) {
        throw new Error("Nenhum pokemon encontrado");
      }
      return result;
    }

    if (!type && !name && !id && !generation) {
      throw new Error("Nenhum parâmetro de busca selecionado.");
    }
  }
}

export default new PokemonBussiness();
