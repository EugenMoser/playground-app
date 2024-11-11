"use client";

import { useEffect, useState } from "react";

import { toast } from "sonner";

import { useHelpers } from "../../hooks/useHelpers";
import { supabase } from "../../lib/supabase";
import { DataTable } from "../Datatable";
import LoadingTeam from "../Loading/Team";
import { columns } from "./Members/Columns";
import New from "./New";

interface TeamMembersProps {
  name: string;
  email: string;
  role: string;
  status: string;
}

function Team(): JSX.Element {
  const [team, setTeam] = useState({
    id: "a35b428a-8301-477e-bbdb-9a74f3237ae5",
  });

  const [members, setMembers] = useState<TeamMembersProps[]>([]);

  const { loading, setLoading } = useHelpers();

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("teams")
        .select("*, team_members(*)")
        .eq("id", "a35b428a-8301-477e-bbdb-9a74f3237ae5")
        .single();

      if (data) {
        console.log("data", data);
        const { team_members, ...teamData } = data;
        setTeam(teamData);
        setMembers(team_members);
      }
    } catch (error) {
      toast.error("An error occurred while fetching the team members.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
    // if the supabase table has changed, fetch automatically the team members  again
    supabase
      .channel("channel_team_members")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "team_members",
          filter: `team_id=eq.${team.id}`,
        },
        (payload: any) => {
          fetchTeam();
        },
      )
      .subscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingTeam />;
  }

  return (
    <div className="grid w-full max-w-[800px] gap-6 rounded-lg border px-5 py-4 shadow">
      <header className="flex items-start justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl">Team</h1>
          <p>Invite new members in your team.</p>
        </div>
        <New team_id={team.id} />
      </header>
      <main>
        <DataTable columns={columns} data={members} />
      </main>
    </div>
  );
}

export default Team;
