import { redirect } from "@sveltejs/kit";
import axios from 'axios'

import * as dotenv from 'dotenv' ;
dotenv.config()
import { MongoClient } from 'mongodb';

import jwt from 'jsonwebtoken'
const {sign} = jwt

const webprivkey = process.env.WEBPRIVKEY?.replaceAll("$n$","\n")

const client = new MongoClient(process.env.MONGO_URL_STRING);
const database = client.db(process.env.TICKETING_DB_NAME);
const passes = database.collection(process.env.PASSES_COLLECTION)

export const load= async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        return {session: session, slug:event.params.slug}
    }

    /*
    Check if slug is valid*?
    if slug is valid assign to email and move on
    */

    if(process.env.LIMIT_PASSES_TO_ONE === "yes"){
        let existingpass = await passes.findOne({email:session.user.email})
        if(existingpass){
            throw redirect(303,'/pass')
        }
    }
    let unclaimedpass = await passes.findOne({slug:event.params.slug, unclaimed: true});
    if(!unclaimedpass){
        throw redirect(302, '/pass?vfail')
    }

    let type = unclaimedpass.type || "DEFAULT"
    await passes.findOneAndUpdate({slug:event.params.slug}, {$set:{unclaimed:false, email:session.user.email}})

    let ticketServerPayload = sign({
        "name": session.user.name,
        "phone": "+910000000000",
        "email": session.user.email,
        "type" : type
        // @ts-ignore
    },webprivkey,{
        algorithm: 'RS256'
    })

    let returned = (await axios.post(process.env.TICKETINGHOST + "/sign",{token: ticketServerPayload})).data


    await passes.findOneAndUpdate({slug:event.params.slug}, {$set:{generated:true, token:returned}})

    return {session: session, slug:event.params.slug}

};