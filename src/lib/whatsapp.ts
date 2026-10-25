/**
 * WhatsApp ordering helper.
 * Every order button on the site must use buildWhatsAppLink().
 * No hand-written wa.me links anywhere else — see rules §5.
 */

/**
 * Generate a short, unambiguous alphanumeric reference for tracking.
 * Excludes 0/O/1/I/L to prevent confusion in chat.
 */
export function generateOrderRef(): string {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let ref = "";
  for (let i = 0; i < 5; i++) {
    ref += chars[Math.floor(Math.random() * chars.length)];
  }
  return `VF-${ref}`;
}

export interface WhatsAppLinkParams {
  product?: string;
  pack?: string;
  qty?: number;
  note?: string;
}

/**
 * Build a wa.me deep-link with a friendly, pre-filled order message.
 *
 * The message includes:
 *  - product & pack size (if selected)
 *  - a short order reference (e.g. VF-4F9K2)
 *  - `Source: website` so future automation can attribute it
 */
export function buildWhatsAppLink(params?: WhatsAppLinkParams): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const ref = generateOrderRef();

  const lines: string[] = ["Namaste! 🙏"];

  if (params?.product) {
    let orderLine = `I'd like to order *${params.product}*`;
    if (params.pack) orderLine += ` (${params.pack})`;
    if (params.qty && params.qty > 1) orderLine += ` × ${params.qty}`;
    orderLine += ".";
    lines.push(orderLine);
  } else {
    lines.push("I'd like to order fresh puris.");
  }

  if (params?.note) {
    lines.push(`Note: ${params.note}`);
  }

  lines.push("");
  lines.push(`Ref: ${ref}`);
  lines.push("Source: website");

  const message = lines.join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
