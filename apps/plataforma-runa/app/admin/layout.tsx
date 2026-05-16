import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (userId !== process.env.ARTHUR_CLERK_USER_ID) {
    redirect("/entrar");
  }

  return (
    <div className="min-h-screen bg-bg flex">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
