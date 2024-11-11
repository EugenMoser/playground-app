"use server";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { usersTable } from "@/app/postgres-drizzle/db/schema";

async function deleteUser(id: number) {
  const db = drizzle();

  await db.delete(usersTable).where(eq(usersTable.id, id));
  console.log("New user deleted!");
}

export default deleteUser;
