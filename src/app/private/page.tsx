import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { SignOut } from "@/components/SignOut";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      Hello {data.user.email}
      <br />
      <SignOut />
    </div>
  );
}
