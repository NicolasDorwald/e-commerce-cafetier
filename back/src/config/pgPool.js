import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Choisir la bonne URL selon l'environnement
const isProduction = process.env.NODE_ENV === "production";

const connectionString = isProduction
  ? process.env.DATABASE_URL   // sur Render - Neon
  : process.env.LOCAL_PG_URL;  // en local, dans ton .env

if (!connectionString) {
  throw new Error("Aucune URL de base de données fournie !");
}

export const pgPool = new Pool({
  connectionString,
  ssl: isProduction
    ? { rejectUnauthorized: false }  // Render exige SSL
    : false                          // En local, pas besoin
});
