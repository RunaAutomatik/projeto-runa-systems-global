import { Resend } from "resend";
import { OnboardingEmail } from "@/emails/OnboardingEmail";

export async function triggerOnboardingEmail(params: {
  userId: string;
  menteeSlug: string;
  email: string;
}): Promise<void> {
  const { menteeSlug, email } = params;
  const firstName = email.split("@")[0];

  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "arthur@runa.ai",
      to: email,
      subject: "Bem-vindo ao RUNA OS",
      react: OnboardingEmail({ firstName, menteeSlug }),
    });
  } catch (error) {
    console.error("triggerOnboardingEmail failed:", error);
  }
}
