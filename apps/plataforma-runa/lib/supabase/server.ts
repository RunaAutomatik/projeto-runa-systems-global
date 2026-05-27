import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { auth } from "@clerk/nextjs/server";

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();
  const { getToken } = await auth();
  const clerkToken = await getToken();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: clerkToken
          ? { Authorization: `Bearer ${clerkToken}` }
          : {},
      },
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        },
      },
    },
  );
}
