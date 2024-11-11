"use client";

import { useState } from "react";

import updateUserService from "@/app/postgres-drizzle/services/updateUserService";

interface UpdateUserDrizzelProps {
  user: UserDrizzle;
}

function UpdateUserDrizzel({ user }: UpdateUserDrizzelProps): JSX.Element {
  const [formData, setFormData] = useState<UserDrizzle>({
    id: user.id,
    name: `${user.name}`,
    age: user.age,
    email: `${user.email}`,
  });

  function submitHandler(formData: UserDrizzle) {
    updateUserService(user.id!, formData);
  }
  return (
    <>
      <h1>create user drizzle</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => {
          setFormData({ ...formData, age: Number(e.target.value) });
        }}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />

      <button type="submit" onClick={() => submitHandler(formData)}>
        update User
      </button>
    </>
  );
}

export default UpdateUserDrizzel;
