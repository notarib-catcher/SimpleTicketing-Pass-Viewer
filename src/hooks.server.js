import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/core/providers/google"

// import * as SentryNode from '@sentry/node';
// import '@sentry/tracing';
import * as dotenv from 'dotenv'
dotenv.config()


export const handle = SvelteKitAuth({
    providers:[ Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
})],

secret: process.env.SECRET,
    trustHost: true
})