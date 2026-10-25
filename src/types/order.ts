/**
 * Order data shapes for the future WhatsApp Cloud API automation.
 * See rules §9 — design for it, do not build yet.
 * These types will be reused when the webhook and Supabase table are added.
 */

export interface OrderItem {
  productId: string;
  productName: string;
  packSize: string;
  quantity: number;
  pricePerUnit?: number;
}

export interface Order {
  id: string;
  /** Short reference shown in chat, e.g. "VF-4F9K2" */
  ref: string;
  items: OrderItem[];
  customerNote?: string;
  source: "website" | "whatsapp" | "direct";
  status:
    | "pending"
    | "confirmed"
    | "preparing"
    | "ready"
    | "delivered"
    | "cancelled";
  createdAt: string;
  updatedAt: string;
}

/* ------------------------------------------------------------------
   WhatsApp Cloud API webhook payload types
   When built: verify Meta's webhook signature, validate all input,
   rate-limit, and never log customer phone numbers in plain text.
   ------------------------------------------------------------------ */

export interface WebhookPayload {
  object: string;
  entry: WebhookEntry[];
}

export interface WebhookEntry {
  id: string;
  changes: WebhookChange[];
}

export interface WebhookChange {
  value: {
    messaging_product: string;
    metadata: {
      display_phone_number: string;
      phone_number_id: string;
    };
    messages?: WebhookMessage[];
    statuses?: WebhookStatus[];
  };
  field: string;
}

export interface WebhookMessage {
  /** Customer phone — handle with extreme care, never log in plain text */
  from: string;
  id: string;
  timestamp: string;
  type: "text" | "interactive" | "button";
  text?: { body: string };
}

export interface WebhookStatus {
  id: string;
  status: "sent" | "delivered" | "read" | "failed";
  timestamp: string;
}
