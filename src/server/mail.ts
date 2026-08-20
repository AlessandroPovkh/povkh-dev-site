import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import type { ContactSubmission } from "./contact";

interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
}

function mailConfig(): MailConfig {
  const host = process.env.POVKH_SMTP_HOST ?? "";
  const port = Number(process.env.POVKH_SMTP_PORT ?? "");
  const user = process.env.POVKH_SMTP_USER ?? "";
  const pass = process.env.POVKH_SMTP_PASS ?? "";
  const from = process.env.POVKH_SMTP_FROM ?? "";
  const to = process.env.POVKH_SMTP_TO ?? "";
  if (!host || !Number.isInteger(port) || port < 1 || port > 65_535 || !user || !pass || !from || !to) {
    throw new Error("Contact delivery is not configured");
  }
  return { host, port, secure: process.env.POVKH_SMTP_SECURE === "true", user, pass, from, to };
}

let transport: Transporter | undefined;

interface ContactMailAddresses {
  from: string;
  to: string;
}

export async function deliverContactMail(
  submission: ContactSubmission,
  requestId: string,
  mailTransport: Pick<Transporter, "sendMail">,
  addresses: ContactMailAddresses,
): Promise<void> {
  const lines = [
    `Request: ${requestId}`,
    `Locale: ${submission.locale}`,
    `Category: ${submission.category}`,
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || "—"}`,
    `Preferred channel: ${submission.channel}`,
    `Delivery window: ${submission.deliveryWindow}`,
    `Budget: ${submission.budget}`,
    `Current site: ${submission.siteUrl || "—"}`,
    "",
    submission.context,
  ];
  await mailTransport.sendMail({
    from: addresses.from,
    to: addresses.to,
    replyTo: submission.email,
    subject: `[Povkh.Dev] ${submission.category} project brief`,
    text: lines.join("\n"),
  });
}

export async function sendContactMail(submission: ContactSubmission, requestId: string): Promise<void> {
  const config = mailConfig();
  transport ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
  });
  await deliverContactMail(submission, requestId, transport, { from: config.from, to: config.to });
}
