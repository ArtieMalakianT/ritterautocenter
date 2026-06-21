export const WHATSAPP_NUMBER = "5547984692588";
export const ADDRESS = "Rua 21 de Junho, 1395 - Centro, Ilhota-SC";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_ORCAMENTO = whatsappUrl(
  "Olá! Gostaria de solicitar um orçamento transparente na Ritter Auto Center.",
);
export const WHATSAPP_AGENDAR = whatsappUrl(
  "Olá! Quero agendar minha revisão na Ritter Auto Center.",
);
export const WHATSAPP_GERAL = whatsappUrl(
  "Olá, Ritter Auto Center! Tenho uma dúvida.",
);