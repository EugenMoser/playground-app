"use client";
import { useState } from "react";

import createUserService from "@/app/postgres-drizzle/services/createUserService";

function CreateUserDrizzle(): JSX.Element {
  const [formData, setFormData] = useState<UserDrizzle>({
    name: "",
    age: 0,
    email: "",
  });

  function submitHandler(formData: UserDrizzle) {
    createUserService(formData);
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
        Create User
      </button>
    </>
  );
}

export default CreateUserDrizzle;
