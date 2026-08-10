import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user?.email) {
      const { data: member } = await supabase
        .from("league_members")
        .select("email")
        .eq("email", data.user.email)
        .maybeSingle();

      if (member) {
        return NextResponse.redirect(`${origin}${next}`);
      }

      await supabase.auth.signOut();
      return NextResponse.redirect(`${origin}/login?error=not_a_member`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
