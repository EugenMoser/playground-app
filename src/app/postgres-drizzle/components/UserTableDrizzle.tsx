'use client';
import {
  useEffect,
  useState,
} from 'react';

import getUsers from '@/services/services_postgres_drizzel/getUserService';

// import { QueryResultRow } from '@vercel/postgres';

// import { strings } from '../postgres/strings';
// import DeleteUser from './deleteUser';
// import UpdateUser from './updateUser';

function UserTableDrizzle(): JSX.Element {
  const [users, setUsers] = useState<UserDrizzle[]>([]);
  const [openUpdateUserId, setOpenUpdateUserId] = useState<string | ''>(
    ''
  );

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
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
        {users.map((user: UserDrizzle, index: number) => (
          <li key={index}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            {/* <DeleteUser id={user.id} />
            <button onClick={() => handleUpdateClick(user.id)}>
              Daten ändern
            </button>
            {openUpdateUserId === user.id && <UpdateUser user={user} />} */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserTableDrizzle;
