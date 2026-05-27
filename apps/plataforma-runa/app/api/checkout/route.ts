import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.redirect(
      new URL(
        `/entrar?redirect_url=${encodeURIComponent("/planos")}`,
        process.env.NEXT_PUBLIC_APP_URL,
      ),
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-04-22.dahlia",
  });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: process.env.STRIPE_PRICE_ID_MENTORIA!, quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/pagamento/sucesso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/planos`,
    metadata: { clerk_user_id: userId },
  });

  return NextResponse.json({ url: session.url });
}
