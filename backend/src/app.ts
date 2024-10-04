import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin:'*',
    credentials: true
}))

//midllewares

app.use(express.urlencoded({limit:'16kb',extended:true}));
app.use(cookieParser());
app.use(express.json({limit:'16kb'}));
app.use(express.static("public"));

export default app