import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from 'mongodb'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, MONGO_DB_NAME, MONGO_URL } from "$env/static/private"
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { anonymous } from "better-auth/plugins";

const client = new MongoClient(MONGO_URL)
const db = client.db(MONGO_DB_NAME)

export const auth = betterAuth({
  database: mongodbAdapter(db),
  socialProviders: {
    google: {
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    }
  },
  plugins: [
    anonymous({
      emailDomainName: "example.com"
    }),
    sveltekitCookies(getRequestEvent)
  ]

})
