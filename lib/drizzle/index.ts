import { drizzle as dz } from 'drizzle-orm/postgres-js'
import postgres from "postgres"
import * as schema from "./schema"

const pgClient = postgres(process.env.POSTGRES_URL!)
export const drizzle = dz(pgClient, {
    schema
})