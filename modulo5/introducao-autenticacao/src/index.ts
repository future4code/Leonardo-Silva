import express, {Express, Request, Response} from "express";
import { AddressInfo } from "net";
import { geradorId } from "./services/geradorID";
import { generateToken } from "./services/geradorToken";
import { connection } from "./connection/connection";
import { getData } from "./services/geradorToken"
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
const userTableName = "User";

async function createUser(id:string, email:string, password:string) {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);

}

async function getUserById(id: string): Promise<any>  {
        const result = await connection
        .select("*")
        .from(userTableName)
        .where({ id });
  
      return result[0];
}

const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
}

app.post('/user/signup',async (req: Request, res:Response) => {
    try{
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
      
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const id = geradorId();
        console.log(id)
        const userData = {
            email: req.body.email,
            password: req.body.password,
          };
  
        await createUser(id, userData.email, userData.password);
    
        const token = generateToken({id});

        res.status(200).send({token,});
    }
    catch (error:any) {
        res.status(400).send({
            message: error.message,
          });
    }
})

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (error:any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });
