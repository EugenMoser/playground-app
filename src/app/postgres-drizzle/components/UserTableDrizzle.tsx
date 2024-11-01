'use client';
import {
  useEffect,
  useState,
} from 'react';

import { Skeleton } from '@/app/components/ui/skeleton';
import deleteUser from '@/services/services_postgres_drizzel/deleteUserService';
import getUsers from '@/services/services_postgres_drizzel/getUserService';
import { QueryResultRow } from '@vercel/postgres';

import UpdateUserDrizzel from './UpdateUserDrizzle';

function UserTableDrizzle(): JSX.Element {
  const [users, setUsers] = useState<UserDrizzle[] | null>(null);
  const [openUpdateUserId, setOpenUpdateUserId] = useState<number | ''>(
    ''
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const users = await getUsers();
    setUsers(users);
  }

  function handleUpdateClick(userId: number) {
    setOpenUpdateUserId(openUpdateUserId === userId ? '' : userId);
  }

  function handleDeleteClick(userId: number) {
    deleteUser(userId).then(() => {
      fetchData();
    });
  }

  if (!users) {
    return <SkeletonUserDrizzle />;
  }

  console.log('users', users);
  return (
    <>
      <h2>get users</h2>
      <ul>
        {users.map((user: UserDrizzle, index: number) => (
          <li key={index}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>

            <button onClick={() => handleDeleteClick(user.id!)}>
              User löschen
            </button>
            <button onClick={() => handleUpdateClick(user.id!)}>
              User bearbeiten
            </button>
            {openUpdateUserId === user.id && (
              <UpdateUserDrizzel user={user} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export function SkeletonUserDrizzle() {
  return (
    <div className='flex  items-start space-x-4 '>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
}

export default UserTableDrizzle;
