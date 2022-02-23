import app from "./app";
import createUser from './endpoints/signup'
import login from "./endpoints/login"
import getProfile from "./endpoints/profileInfo";
import createRecipe from "./endpoints/createRecipe"
import getOtherProfile from "./endpoints/otherProfileInfo"
import getRecipe from "./endpoints/getRecipe"

app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getProfile)
app.get("/user/:id", getOtherProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)