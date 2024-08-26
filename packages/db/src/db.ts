import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "./env.mjs";

const sql = neon(env.DRIZZLE_DATABASE_URL);
export const db = drizzle(sql);
