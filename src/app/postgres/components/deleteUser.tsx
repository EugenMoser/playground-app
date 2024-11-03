'use client';
import { useState } from 'react';

import { deleteUser } from '@/app/postgres/services/deleteUser';

interface DeleteUserProps {
  id: string;
}

function DeleteUser({ id }: DeleteUserProps): JSX.Element {
  return (
    <>
      <h2>delete user</h2>

      <button onClick={() => deleteUser(id)}>delete user</button>
    </>
  );
}

export default DeleteUser;
