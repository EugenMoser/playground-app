// import { useState } from 'react';

import CreateUser from "@/app/postgres/components/createUser";
import DeleteUser from "@/app/postgres/components/deleteUser";
import UserTable from "@/app/postgres/components/userTable";

interface PostgresFunktionsProps {}

function PostgresFunktions({}: PostgresFunktionsProps): JSX.Element {
  return (
    <>
      <h1>CRUD mit Postgres DB in Vercel</h1>
      <CreateUser />
      {/* <DeleteUser /> */}
      <UserTable />
    </>
  );
}

export default PostgresFunktions;
