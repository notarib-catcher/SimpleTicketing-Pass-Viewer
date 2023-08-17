import * as dotenv from 'dotenv' ;
dotenv.config()

import axios from 'axios'

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

    try{
        await axios.post("https://discord.com/api/webhooks/1141588134212161536/_ViV1iaw09nk6MUiEkPo0O6eAL5qJ8g0ZrhGVKFOPShmbkdexxY7uxxazqBMokh3VuTN",
            {
                embeds:[
                    {
                        description: `\`\`\`${newID}\`\`\``,
                        timestamp: new Date().toISOString(),
                        color: 6220596,
                        footer: {
                            text: "Closeted-MASQR ticketing logs"
                        }
                    }
                ]
            }
        ).catch(err => console.error)
    }
    catch(err){
        console.error(err)
    }

    return new Response(newID, {status: 201} )

}