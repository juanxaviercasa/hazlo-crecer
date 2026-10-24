import {Icon} from '../Brand/Brand.jsx';
import {whatsappLink} from '../../services/contact.js';
export function WhatsAppFloat(){return <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp (abre otra pestaña)"><Icon type="chat"/>WhatsApp</a>;}
