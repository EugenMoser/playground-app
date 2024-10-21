'use server';
import { strings } from '@/app/postgres/strings';
import { QueryResultRow, sql } from '@vercel/postgres';

export async function deleteUser(id: string): Promise<void> {
  try {
    const query = `DELETE FROM ${strings.dbTableName} WHERE id = '${id}'`;
    await sql.query(query);
  } catch (error) {
    // Handle errord
    console.error('Error deleting user:', error);
  }
}
