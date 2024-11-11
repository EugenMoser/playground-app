import "dotenv/config";

import { defineConfig } from "drizzle-kit";
import { drizzle } from "drizzle-orm/vercel-postgres";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/postgres-drizzle/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
