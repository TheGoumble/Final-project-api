import { ObjectId } from "mongodb"
import {db} from "../dbConnect/dbConnect.js"


const metas = db.collection("metas")
// Get
export const getMeta = async (req, res) => {
  const allMetas = await metas.find({}).toArray()
  res.send(allMetas)
}

// Post
export const postMeta = async (req, res) => {
  await metas.insertOne(req.body)
  const allMetas = await metas.find({}).toArray()
  res.send(allMetas)
}

// Delete
export const deleteMeta = async (req, res) => {
  let id = new ObjectId(req.query._id)
  await metas.findOneAndDelete({ _id: id }, { $set: req.body })
  const allMetas = await metas.find({}).toArray()
  res.send(allMetas)
}

// Put
export const putMeta = (req, res) => {
  metas.findOneAndUpdate(req.query, { $set: req.body })
}
