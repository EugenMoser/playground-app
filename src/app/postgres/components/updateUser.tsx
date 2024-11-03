import { useState } from 'react';

import { updateUser } from '@/app/postgres/services/updateUser';
import { QueryResultRow } from '@vercel/postgres';

function UpdateUser({ user }: QueryResultRow): JSX.Element {
  const [formData, setFormData] = useState<QueryResultRow>({
    id: user.id,
    name: '',
    age: 0,
  });
  console.log('user!!!', user);

  async function updateHandler(formData: QueryResultRow) {
    await updateUser(formData);
  }
  return (
    <>
      <h2>update user</h2>
      <p>ID: {user.id}</p>
      <label htmlFor='first_name'>Name:</label>
      <input
        type='text'
        name='name'
        placeholder={`${user.name}`}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <label htmlFor='age'>Age:</label>
      <input
        type='number'
        name='age'
        placeholder={`${user.age}`}
        onChange={(e) => {
          setFormData({ ...formData, age: e.target.value });
        }}
      />

      <button
        type='submit'
        onClick={() => updateHandler(formData)}
      >
        update user
      </button>
    </>
  );
}

export default UpdateUser;
