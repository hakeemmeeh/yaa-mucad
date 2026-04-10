export default function WhatsAppFAB() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "+254000000000";
  const digits = phone.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
