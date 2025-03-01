import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv'
import { resolve } from "path";

dotenv.configDotenv({
    path: resolve(process.cwd(), '.env.local')
})

export default defineConfig({
    dialect: "postgresql",
    schema: "./lib/drizzle/schema.ts",
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    },
});