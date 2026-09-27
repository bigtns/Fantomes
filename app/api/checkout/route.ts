import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Audit Fantômes — abonnements oubliés",
          },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/merci`,
    cancel_url: `${origin}/paiement`,
  });

  return NextResponse.redirect(session.url as string, 303);
}
