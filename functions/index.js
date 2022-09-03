import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import {
  getMeta,
  postMeta,
  deleteMeta,
  putMeta,
} from "./src/routers/routers.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/get", getMeta)
app.post("/post", postMeta)
app.delete("/delete", deleteMeta)
app.put("/put", putMeta)

export const api = functions.https.onRequest(app)