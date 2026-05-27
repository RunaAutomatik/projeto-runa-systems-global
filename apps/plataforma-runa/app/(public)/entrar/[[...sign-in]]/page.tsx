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
            colorPrimary: "#3D4842",
            colorText: "#E8EDE9",
            colorTextSecondary: "#7A8C7C",
            colorInputBackground: "#1A201B",
            colorInputText: "#E8EDE9",
          },
        }}
      />
    </div>
  );
}
