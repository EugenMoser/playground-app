"use server";

import { strings } from "@/app/postgres/strings";
import { QueryResultRow, sql } from "@vercel/postgres";

export async function getUsers(): Promise<QueryResultRow[]> {
  //! zuerst Datenbank als Standard festlegen!!!
  try {
    const queryText: string = `SELECT * FROM ${strings.dbTableName}`;
    const { rows: users } = await sql.query<User>(queryText);

    return users;
  } catch (error: any) {
    console.error("Error getting users:", error.message);
    return [];
  }
}
