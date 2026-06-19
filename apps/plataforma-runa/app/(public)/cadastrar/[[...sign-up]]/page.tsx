import { SignUp } from "@clerk/nextjs";

export default function CadastrarPage() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <SignUp
        forceRedirectUrl="/bem-vindo"
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
