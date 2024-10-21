'use server';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import { usersTable } from '@/db/drizzle/schema';

async function createUser(user) {
  const db = drizzle();

  await db.insert(usersTable).values(user);
  console.log('New user created!');
}

export default createUser;
