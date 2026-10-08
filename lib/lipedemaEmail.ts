import Stripe from "stripe";
import { Resend } from "resend";

export async function sendLipedemaEbookAccess(session: Stripe.Checkout.Session) {
  if (session.metadata?.product !== "lipedema-ebook" || session.payment_status !== "paid") {
    throw new Error("Lipedema email requires verified paid checkout");
  }
  const email = session.customer_details?.email || session.customer_email;
  if (!email) throw new Error("Missing customer email for lipedema ebook");
  const from = process.env.LIPEDEMA_EMAIL_FROM;
  const key = process.env.RESEND_API_KEY;
  if (!from || !key) throw new Error("Lipedema email service not configured");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ghctraining.com";
  const accessUrl = `${siteUrl}/lipedema/gracias?session_id=${encodeURIComponent(session.id)}`;

  const resend = new Resend(key);
  const { data, error } = await resend.emails.send({
    from,
    to: [email],
    subject: "Tu ebook GHC Academy · Lipedema: que no decida por ti",
    text: `Gracias por tu compra.\n\nTu ebook «Lipedema: que no decida por ti» está disponible aquí:\n${accessUrl}\n\nEste enlace lleva a la página que verifica tu compra y permite descargarlo.\n\nSi necesitas ayuda, escríbenos a info@ghctraining.com.\n\nGHC Academy`,
    html: `<!doctype html><html lang="es"><head><meta charset="utf-8"></head><body style="margin:0;padding:35px 15px;background:#f7f2ed;font-family:Arial,sans-serif;color:#252226"><main style="max-width:600px;margin:auto;background:white;border-top:5px solid #c96b83;padding:35px;border-radius:3px"><div style="color:#ad526c;font-size:12px;font-weight:bold;letter-spacing:3px">GHC ACADEMY</div><h1 style="font-size:30px;line-height:1.2">Tu guía está lista.</h1><p>Gracias por tu compra de <b>Lipedema: que no decida por ti</b>.</p><p>Accede a la página de descarga mediante el siguiente enlace:</p><p style="margin:32px 0"><a href="${accessUrl}" style="padding:17px 22px;background:#252226;color:white;font-weight:bold;text-decoration:none">DESCARGAR MI EBOOK ↗</a></p><p style="color:#6c6164;font-size:13px">Si tienes problemas de acceso, escríbenos a <a href="mailto:info@ghctraining.com">info@ghctraining.com</a>.</p></main></body></html>`
  });
  if (error || !data?.id) throw error || new Error("Resend did not confirm delivery request");
}
