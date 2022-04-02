import express, {Express} from 'express'
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());