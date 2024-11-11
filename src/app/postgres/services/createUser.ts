"use server";
import { log } from "console";
import { v4 as uuidv4 } from "uuid";

import { strings } from "@/app/postgres/strings";
import { sql } from "@vercel/postgres";

export async function createUser(formData: User): Promise<void> {
  console.log("formData", formData);

  try {
    const queryCountText: string = `SELECT COUNT(id) FROM ${strings.dbTableName}`;

    const { rows: count } = await sql.query(queryCountText);

    console.log("count", count);
    const newId: string = uuidv4();

    const queryInsertText = `INSERT INTO ${strings.dbTableName} (id, name, age) VALUES ($1, $2, $3)`;

    await sql.query(queryInsertText, [newId, formData.name, formData.age]);
  } catch (error) {
    // Handle error
    console.error("Error creating user:", error);
    throw error;
  }
}
