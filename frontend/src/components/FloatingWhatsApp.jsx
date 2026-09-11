import { MessageCircle } from "lucide-react";
import { mockData } from "../mock";

export function FloatingWhatsApp() {
  const number = mockData.contact.whatsapp?.replace(/\D/g, "");

  // Keep the button hidden until the real business WhatsApp number is configured.
  if (!number) return null;

  const message = encodeURIComponent(
    "Hi SoloScale, I would like to know more about your e-commerce growth services."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SoloScale on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_36px_rgba(0,0,0,0.24)] md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <MessageCircle size={30} strokeWidth={2.2} fill="white" className="text-[#25D366]" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
