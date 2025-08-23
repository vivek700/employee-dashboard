import { betterAuth } from "better-auth";
import Database from "better-sqlite3"
import { BETTER_AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private"

export const auth = betterAuth({
	secret: BETTER_AUTH_SECRET,
	database: new Database("./sqlite.db"),
	socialProviders: {
		google: {
			clientId: GOOGLE_CLIENT_ID as string,
			clientSecret: GOOGLE_CLIENT_SECRET as string
		}
	}
})
