'use server';
import { strings } from '@/app/postgres/strings';
import { QueryResultRow, sql } from '@vercel/postgres';

export async function updateUser(formData: QueryResultRow): Promise<void> {
  console.log('fomrDate server', formData);

  try {
    const query = `UPDATE ${strings.dbTableName} SET name = '${formData.name}', age = ${formData.age} WHERE id = '${formData.id}'`;
    console.log('query', query);
    await sql.query(query);
  } catch (error) {
    // Handle error
    console.error('Error updating user:', error);
    throw error;
  }
}
