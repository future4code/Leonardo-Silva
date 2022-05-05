import app from "./app";
import pokemonController from "./controller/pokemonController";

// Requisições
app.get("/listAll", pokemonController.listAllPokemon);
app.get("/search", pokemonController.searchPokemon);
