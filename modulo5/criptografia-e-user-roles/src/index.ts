import { connection } from "./data/connection";
import app from "./app";
import hashManager from "./services/hashManager";
import idGenerated from "./services/generatorId"
import authenticator from "./services/authenticator"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/profile";

app.post("/signup", createUser)
app.post("/login", login)
app.put("/user/edit", editUser)
app.get("/user/profile", getProfile)

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1NmM0NTY5LTQ2ZWYtNGFlYi04YjUzLTJlYjhmOTZjNjg1OSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY0NTU1MzI2NiwiZXhwIjoxNjQ1NjM5NjY2fQ.p4f0EBLRgFnR55EeYVcJ-ZUdN9OBSR7T4f8GtF_dBmk

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1NmM0NTY5LTQ2ZWYtNGFlYi04YjUzLTJlYjhmOTZjNjg1OSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY0NTU1MzM5MSwiZXhwIjoxNjQ1NjM5NzkxfQ.bFXM4UY9GGAowsHBTXvkfPACs1pLZG0F0bxmx1-4cfg