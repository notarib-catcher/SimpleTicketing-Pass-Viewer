import { redirect } from "@sveltejs/kit";
import * as dotenv from 'dotenv' ;
dotenv.config()
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL_STRING);
const database = client.db(process.env.TICKETING_DB_NAME);
const passes = database.collection(process.env.PASSES_COLLECTION)
const projection = {
    _id: 0, type: 1, token: 1
}

const options = {
    projection: projection
}
export const load= async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) throw redirect(302, "/");

    const query = { email: {$eq: session.user.email}, generated: { $eq: true } }
    const cursor = await passes.find(query, options)

    const foundpasses = await cursor.toArray()

    if(foundpasses.length == 0){
        return {session:session};
    }

    return {passes: foundpasses, session:session};
};