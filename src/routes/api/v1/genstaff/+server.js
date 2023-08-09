import * as dotenv from 'dotenv' ;
dotenv.config()

import {error} from "@sveltejs/kit";
import {v4 as uuidv4} from 'uuid';
const webprivkey = process.env.WEBPRIVKEY?.replaceAll("$n$","\n")
const staff_secret = process.env.PRESHARED_SECRET

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL_STRING);
const database = client.db(process.env.TICKETING_DB_NAME);
const passes = database.collection(process.env.PASSES_COLLECTION)

export const POST = async ({request}) => {
    let {secret, email, name, phone, approve} = await request.json()

    if(email.trim() == "" || name.trim() == "" || phone.trim() == ""){
        throw error(400,"INVALID_REQUEST")
    }
    if(!secret){
        throw error(401,"NO_SECRET")
    }
    if(secret !== staff_secret){
        console.log(secret + "!=" + staff_secret)
        throw error(403, "INVALID_SECRET")
    }

    //secret is valid
    if(!approve){
        return new Response()
    }



    let ticketServerPayload = sign({
        "name": name,
        "phone": phone,
        "email": email,
        "type" : "!STAFF!"
        // @ts-ignore
    },webprivkey,{
        algorithm: 'RS256'
    })
    console.count()


    let stringreturned = (await axios.post("https://ticketing.mitblrfest.in/sign",{token: ticketServerPayload})).data
    console.count()


    //stop displaying any older passES

    await passes.updateMany({
        email: {$eq: email}
    },{
        $set:{
            generated: false
        }
    })



    await passes.insertOne({
        email: email,
        token: stringreturned,
        generated: true,
        type: "STAFF",
        paymentID: "",
        refCode: ""
    }).catch(error => console.error)
    console.count()

    return new Response()
    return new Response(newID, {status: 201} )

}