'use client';
import 'dotenv/config';

import createUser from '@/services/services_postgres_drizzel/createUserService';
import getUser from '@/services/services_postgres_drizzel/getUserService';

import CreateUserDrizzle from './components/CreateUserDrizzle';
import UserTableDrizzle from './components/UserTableDrizzle';

interface PostgresDrizzleProps {}

function PostgresDrizzle({}: PostgresDrizzleProps): JSX.Element {
  // const createUserData: typeof usersTable.$inferInsert = {
  //   name: 'John',
  //   age: 30,
  //   email: 'john@example.com',
  // };

  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  // await db
  //   .update(usersTable)
  //   .set({
  //     age: 31,
  //   })
  //   .where(eq(usersTable.email, user.email));
  // console.log('User info updated!');

  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log('User deleted!');

  return (
    <>
      <h1>Vercel Postgres with Drizzle</h1>
      <UserTableDrizzle />

      <CreateUserDrizzle />
    </>
  );
}

export default PostgresDrizzle;
