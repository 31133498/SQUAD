import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv'
import { resolve } from "path";

dotenv.configDotenv({
    path: resolve(process.cwd(), '.env.local'),
    override: true
})

export default defineConfig({
    dialect: "postgresql",
    schema: "./lib/drizzle/schema.ts",
    out: './lib/drizzle/migrations',
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    },
});