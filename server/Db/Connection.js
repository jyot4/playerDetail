// import mongoose from "mongoose";

// const connection = mongoose.connect()


import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017/'

export const dbname = 'player'

const connection = MongoClient.connect(url)
export default connection