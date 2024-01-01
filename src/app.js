import express, { application } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"

/*
a middleware will be used as before we use to write a 
router in app as routes were declared in app only but here
we have created a different folder and then we are importing.
app.use("/users". userRouter)  */

// routes delaration

app.use("/api/v1/users", userRouter)



export {app}