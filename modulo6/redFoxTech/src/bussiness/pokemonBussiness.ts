import { USER_ROLES, user, userBasic, feed, authenticationData } from "../types";
import pokemonDatabase from "../data/pokemonData";
import { MissingToken } from "../error/missingToken";
import { MissingFields } from "../error/missingFields";
import { UnauthorizedAcess } from "../error/unauthorizedAcess";
import { InvalidCredentials, InvalidEmail } from "../error/invalidCredentials";
import { UserNotFound, EmailNotFound , UsersNotFound} from "../error/notFound";
import { EmailExists, PasswordShort } from "../error/generalError";

class PokemonBussiness {
  async signup(name: string, email: string, password: string, role: USER_ROLES) {
   
  }

  async login(email: string, password: string) {
    
  }

  async getProfile(token: string) {
  
  }

  async getOtherProfile(token: string, user_id: string) {
    
  }

  async deleteUser(token: string, user_id: string) {
  
  }

  async getFeed(token: string) {
   
  }

  async getAllUsers(token: string) {
   
  }

  async forgotPassword(email: string) {

  }
}

export default new PokemonBussiness();
