import * as dotenv from 'dotenv' ;
dotenv.config()

import {error} from "@sveltejs/kit";
import {v4 as uuidv4} from 'uuid';

const staff_secret = process.env.PRESHARED_SECRET

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL_STRING);
const database = client.db(process.env.TICKETING_DB_NAME);
const passes = database.collection(process.env.PASSES_COLLECTION)

export const POST = async ({request}) => {
    let {secret,type} = await request.json().catch(err => {throw error(415, "INVALID_REQUEST")})
    type = type || (process.env.EVENT_TYPE || "DEFAULT")
    if(!secret){
        throw error(401,"NO_SECRET")
    }
    if(secret != staff_secret){
        throw error(403, "INVALID_SECRET")
    }

    let newID = uuidv4()

    await passes.insertOne({
        slug: newID,
        unclaimed:true,
        generated:false,
        type: type
    })

    return new Response(newID, {status: 201} )

}