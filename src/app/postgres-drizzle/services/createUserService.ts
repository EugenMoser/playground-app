'use server';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import { usersTable } from '@/app/postgres-drizzle/db/schema';

async function createUser(user: UserDrizzle) {
  const db = drizzle();

  await db.insert(usersTable).values(user);
  console.log('New user created!');
}

export default createUser;
