"use server";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { usersTable } from "@/app/postgres-drizzle/db/schema";

async function createUser(id: number, updatedUser: UserDrizzle) {
  const db = drizzle();

  await db
    .update(usersTable)
    .set({
      name: updatedUser.name,
      age: updatedUser.age,
      email: updatedUser.email,
    })
    .where(eq(usersTable.id, id));
  console.log("New user updated!");
}

export default createUser;
