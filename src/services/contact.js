import business from '../config/business.json';
export {business};
export function whatsappLink(message='Hola Hazlo Crecer, quisiera evaluar si mi negocio califica para la infraestructura comercial y el agente inteligente de WhatsApp.') {
  if (!/^[1-9]\d{7,14}$/.test(business.whatsapp)) throw new Error('Invalid business phone');
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
