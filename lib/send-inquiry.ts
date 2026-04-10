/**
 * Trade inquiry delivery — wire to Resend in `app/api/inquiry/route.ts`
 * when `RESEND_API_KEY` is configured (CLAUDE.md §7).
 */
export type TradeInquiryPayload = {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  country: string;
  product: string;
  volume: string;
  incoterm?: string;
  message?: string;
};

export async function sendTradeInquiryEmail(payload: TradeInquiryPayload): Promise<{ ok: boolean }> {
  void payload; // stub until Resend is wired here
  return { ok: false };
}
