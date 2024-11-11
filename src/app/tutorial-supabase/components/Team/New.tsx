import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useHelpers } from "@/app/tutorial-supabase/hooks/useHelpers";
import { supabase } from "@/app/tutorial-supabase/lib/supabase";

import CustomButton from "../CustomButton";
import Roles from "./Members/Option/Roles";

export default function NewMember({ team_id }: { team_id: string }) {
  const { open, setOpen, loading, setLoading } = useHelpers();
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "member",
  });

  const saveMember = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("team_members")
        .insert({ ...member, team_id })
        .select();

      if (data) {
        toast.success("Team members successfully added.");
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button>
          <span>New member</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new member</DialogTitle>
          <DialogDescription>
            Please enter name and email of member. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              defaultValue={member.name}
              className="col-span-3"
              onChange={(e: any) =>
                setMember((prev: any) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue={member.email}
              placeholder="johndoe@gmail.com"
              className="col-span-3"
              onChange={(e: any) =>
                setMember((prev: any) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Select role
            </Label>
            <div className="w-[240px]">
              <Roles
                selected={member.role}
                setSelected={(v: string) => {
                  setMember((prev: any) => ({ ...prev, role: v }));
                }}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <CustomButton
            {...{ label: "Send invitation", loading, onClick: saveMember }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
