import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config"
import { login,setNewUser,seeAllUsers,changeEmail,setLvl,seeUser,changePassword,setScore, changeName, changeHtmlReward, changeCssReward, changeSassReward, changeJsReward, changeVolumeMusica, changeVolumeEffetti, changeNotifiche, deleteById } from "./controller/userController.mjs";
const app = express();
const port = process.env.port
const host = process.env.host
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())


app.get("/users/:id",seeUser)
app.get("/users",seeAllUsers)


app.put("/users/name/:id",changeName)
app.put("/users/email/:id",changeEmail)
app.put("/users/password/:id",changePassword)
app.put("/users/score/:id",setScore)
app.put("/users/lvl/:id",setLvl)
app.put("/users/html/:id",changeHtmlReward)
app.put("/users/css/:id",changeCssReward)
app.put("/users/sass/:id",changeSassReward)
app.put("/users/js/:id",changeJsReward)
app.put("/users/volumemusica/:id",changeVolumeMusica)
app.put("/users/volumeeffetti/:id",changeVolumeEffetti)
app.put("/users/notifiche/:id",changeNotifiche)

app.post("/newuser",setNewUser)
app.post("/login",login)

app.delete("/users/delete/:id",deleteById)

app.listen(port,()=>console.log(`the server running to ${host}:${port}`))