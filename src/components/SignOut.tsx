"use client";

import { createClient } from "@/utils/supabase/client";
import { redirect, useRouter } from "next/navigation";

export const SignOut = () => {
  const supabase = createClient();
  const { replace } = useRouter();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error", error);
    }
    replace("/");
  };
  return <button onClick={signOut}>Sign out</button>;
};
