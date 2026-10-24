import { Link } from 'react-router-dom';
import { Arrow, Icon } from '../Brand/Brand.jsx';
import './owner-lockscreen.css';

const NOTIFICATIONS = [
  {
    id: 1,
    app: 'WhatsApp Business',
    iconClass: 'icon-wa',
    iconSymbol: '💬',
    time: 'Hace 4 min',
    title: 'Nueva Cita Confirmada · Dr. Salirrosas',
    body: 'Mariela C. agendó Evaluación de Carillas para el Jueves 16:00 (Sede San Isidro).'
  },
  {
    id: 2,
    app: 'Niubiz / Yape',
    iconClass: 'icon-pay',
    iconSymbol: '💳',
    time: 'Hace 12 min',
    title: 'Pago Recibido: S/ 150.00',
    body: 'Reserva de Cita Médica confirmada por Carlos V. (Ortodoncia Invisible).'
  },
  {
    id: 3,
    app: 'Google Maps Business',
    iconClass: 'icon-stars',
    iconSymbol: '⭐',
    time: 'Hace 35 min',
    title: 'Nueva Reseña 5 Estrellas ⭐⭐⭐⭐⭐',
    body: 'Andrea M.: "Excelente atención rápida por WhatsApp, me atendieron al instante."'
  },
  {
    id: 4,
    app: 'Google Calendar Sync',
    iconClass: 'icon-cal',
    iconSymbol: '🗓️',
    time: 'Hace 1 hora',
    title: 'Recordatorios Anti-NoShow Enviados',
    body: '8 pacientes confirmaron asistencia para las citas de mañana. 0 inasistencias proyectadas.'
  }
];

export function OwnerLockscreen() {
  return (
    <section className="section owner-lockscreen-section">
      <div className="container owner-lockscreen-grid">
        <div className="owner-lockscreen-copy">
          <span className="kicker">
            <span className="tiny-dot" /> PAZ MENTAL OPERATIVA
          </span>
          <h2>
            La tranquilidad de ver citas confirmadas<br />
            mientras tú estás atendiendo.
          </h2>
          <p>
            Se acabaron los días de terminar tu jornada con 50 mensajes acumulados en WhatsApp o llegar al consultorio y encontrar que 3 pacientes dejaron plantada su cita.
          </p>

          <ul className="lockscreen-benefits-list">
            <li>
              <Icon type="check" />
              <div>
                <strong>Recepción libre de estrés:</strong> Tu recepcionista cobra y atiende en físico con una sonrisa, mientras el agente digital responde al instante a los prospectos nuevos.
              </div>
            </li>
            <li>
              <Icon type="check" />
              <div>
                <strong>Reducción de inasistencias al 8%:</strong> Recordatorios automáticos en WhatsApp a las 24h y 2h antes para confirmar asistencia sin llamadas manuales.
              </div>
            </li>
            <li>
              <Icon type="check" />
              <div>
                <strong>Pacientes de alto valor calificados:</strong> Tu equipo solo recibe consultas con presupuesto validado y requerimiento claro.
              </div>
            </li>
          </ul>

          <Link to="/auditoria" className="button button-lime">
            Quiero este sistema para mi clínica <Arrow diagonal />
          </Link>
        </div>

        <div className="lockscreen-phone-wrap">
          <div className="lockscreen-phone">
            <div className="lockscreen-time-area">
              <span className="lockscreen-date">Jueves, 23 de Octubre</span>
              <div className="lockscreen-clock">15:42</div>
            </div>

            <div className="lockscreen-stream">
              {NOTIFICATIONS.map((n) => (
                <div className="lock-notif-card" key={n.id}>
                  <div className="lock-notif-head">
                    <div className="lock-notif-app">
                      <span className={`lock-notif-app-icon ${n.iconClass}`}>
                        {n.iconSymbol}
                      </span>
                      <span>{n.app}</span>
                    </div>
                    <span className="lock-notif-time">{n.time}</span>
                  </div>
                  <div className="lock-notif-title">{n.title}</div>
                  <p className="lock-notif-body">{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
