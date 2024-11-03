'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { createUser } from '@/app/postgres/services/createUser';
import {
  QueryResultRow,
  sql,
} from '@vercel/postgres';

interface CreateUserProps {}
interface User {
  id?: string;
  name: string;
  age: number;
}

function CreateUser({}: CreateUserProps): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
  });
  const route = useRouter();

  function submitHandler(formData: User) {
    createUser(formData);
    route.refresh();
  }
  return (
    <>
      <h2>Create User</h2>
      <input
        type='text'
        placeholder='Name'
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type='number'
        placeholder='Age'
        onChange={(e) => {
          setFormData({ ...formData, age: Number(e.target.value) });
        }}
      />

      <button
        type='submit'
        onClick={() => submitHandler(formData)}
      >
        Create User
      </button>
    </>
  );
}

export default CreateUser;
