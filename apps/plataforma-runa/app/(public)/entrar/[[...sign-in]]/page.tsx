import { SignIn } from "@clerk/nextjs";

export default async function EntrarPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  const redirectUrl = redirect?.startsWith("/") ? redirect : "/biblioteca";

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <SignIn
        forceRedirectUrl={redirectUrl}
        appearance={{
          variables: {
            colorBackground: "#111712",
            colorText: "#E8EDE9",
            colorPrimary: "#3D4842",
          },
        }}
      />
    </div>
  );
}
