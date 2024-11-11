"use client";
import Team from "./components/Team";

interface SupabaseHomeProps {}

function SupabaseHome({}: SupabaseHomeProps): JSX.Element {
  return (
    <div className="m-4 flex items-center justify-center">
      <Team />
    </div>
  );
}

export default SupabaseHome;
