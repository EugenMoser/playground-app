// import { QueryResultRow, sql } from '@vercel/postgres';
'use client';
import { useEffect, useState } from 'react';

import { getUsers } from '@/services/services_postgres/getUsers';
import { QueryResultRow } from '@vercel/postgres';

import DeleteUser from '../components/deleteUser';
import UpdateUser from '../components/updateUser';
import { strings } from '../strings';

function UserTable(): JSX.Element {
  const [users, setUsers] = useState<QueryResultRow[]>([]);
  const [openUpdateUserId, setOpenUpdateUserId] = useState<string | ''>(
    ''
  );

  console.log('openUpdateUserId', openUpdateUserId);
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
    console.log('users', strings.dbTableName);
  }, []);

  function handleUpdateClick(userId: string) {
    // Setzt die ID des Users, der aktualisiert werden soll
    setOpenUpdateUserId(openUpdateUserId === userId ? '' : userId);
  }
  console.log('row', users);
  return (
    <>
      <h2>get users</h2>
      <ul>
        {users.map((user: QueryResultRow, index: number) => (
          <li key={index}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <DeleteUser id={user.id} />
            <button onClick={() => handleUpdateClick(user.id)}>
              Daten ändern
            </button>
            {openUpdateUserId === user.id && <UpdateUser user={user} />}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserTable;
