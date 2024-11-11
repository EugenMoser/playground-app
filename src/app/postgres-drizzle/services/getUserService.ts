"use server";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { usersTable } from "@/app/postgres-drizzle/db/schema";

async function getUsers() {
  const db = drizzle();

  const user = await db.select().from(usersTable);
  return user;
}

export default getUsers;
