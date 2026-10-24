import { useState, useEffect, useRef } from 'react';
import './whatsapp-simulator.css';

export function WhatsAppSimulator() {
  const [step, setStep] = useState(3); // 1: initial message, 2: agent response, 3: patient reply + slots, 4: confirmed
  const [selectedSlot, setSelectedSlot] = useState('Jueves 16:00');
  const [isTyping, setIsTyping] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && (step === 4 || isTyping)) {
      canvasRef.current.scrollTop = canvasRef.current.scrollHeight;
    }
  }, [step, isTyping]);

  // Auto progression demo if user wants to watch it live
  const restart = () => {
    setStep(1);
    setSelectedSlot(null);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(2);
      setTimeout(() => {
        setStep(3);
      }, 1200);
    }, 1500);
  };

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(4);
    }, 800);
  };

  return (
    <div className="wa-simulator-wrapper" role="region" aria-label="Simulador interactivo de Agente de WhatsApp para clínicas">
      <div className="wa-phone-chassis">
        {/* Notch / Dynamic Island */}
        <div className="wa-phone-notch" />

        {/* Status Bar */}
        <div className="wa-phone-status">
          <span>14:32</span>
          <div className="wa-phone-icons">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="wa-header">
          <div className="wa-avatar">
            <span>🦷</span>
            <span className="wa-avatar-online" />
          </div>
          <div className="wa-header-info">
            <div className="wa-header-title">
              <span>Clínica Dental San Isidro</span>
              <svg className="wa-badge-verified" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <div className="wa-header-status">
              <span>● En línea</span>
              <span>· Agente IA 24/7</span>
            </div>
          </div>
          <div className="wa-header-actions">
            <span>📞</span>
            <span>⋮</span>
          </div>
        </div>

        {/* Chat Canvas */}
        <div className="wa-canvas" ref={canvasRef}>
          <div className="wa-date-pill">HOY</div>

          {/* Bubble 1: Patient Inquiry */}
          <div className="wa-bubble wa-bubble-client">
            <p>Buenas tardes, vi su anuncio en Instagram. ¿Cuánto cuesta el diseño de sonrisa / carillas en su sede de San Isidro? 🦷</p>
            <div className="wa-meta">
              <span>14:32</span>
              <span className="wa-ticks-blue">✓✓</span>
            </div>
          </div>

          {/* Bubble 2: Agent Instant Response */}
          {step >= 2 && (
            <div className="wa-bubble wa-bubble-agent">
              <span className="wa-agent-label">⚡ Agente Hazlo Crecer · 4 seg después</span>
              <p>
                ¡Hola Mariela! 👋 Qué gusto saludarte en <strong>Clínica San Isidro</strong>. El tratamiento de carillas de porcelana y resina estética se personaliza según una evaluación y escaneo 3D previo.
              </p>
              <p style={{ marginTop: '6px' }}>
                ¿Te gustaría agendar tu evaluación clínica para esta semana?
              </p>
              <div className="wa-meta">
                <span>14:32</span>
              </div>
            </div>
          )}

          {/* Bubble 3: Patient replies preferred day */}
          {step >= 3 && (
            <div className="wa-bubble wa-bubble-client">
              <p>Preferiría este jueves por la tarde, por favor.</p>
              <div className="wa-meta">
                <span>14:33</span>
                <span className="wa-ticks-blue">✓✓</span>
              </div>
            </div>
          )}

          {/* Interactive Card: Available Slots */}
          {step >= 3 && (
            <div className="wa-bubble wa-bubble-agent">
              <span className="wa-agent-label">🤖 Agenda en Tiempo Real</span>
              <div className="wa-interactive-card">
                <div className="wa-interactive-header">
                  <span>📅 Turnos disponibles · Dr. Salirrosas</span>
                </div>
                <div className="wa-slots-grid">
                  {['Jueves 16:00', 'Jueves 17:30', 'Viernes 15:00', 'Viernes 16:30'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`wa-slot-btn ${selectedSlot === slot ? 'selected' : ''}`}
                      onClick={() => handleSelectSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <small style={{ color: '#8696a0', fontSize: '10px' }}>
                  {step < 4 ? 'Toca un horario para confirmar tu cita' : 'Horario seleccionado'}
                </small>
              </div>
              <div className="wa-meta">
                <span>14:33</span>
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="wa-typing-indicator">
              <div className="wa-typing-dot" />
              <div className="wa-typing-dot" />
              <div className="wa-typing-dot" />
            </div>
          )}

          {/* Bubble 4: Final Confirmation */}
          {step >= 4 && (
            <div className="wa-bubble wa-bubble-agent">
              <span className="wa-agent-label">✅ Cita Confirmada con Éxito</span>
              <div className="wa-confirm-card">
                <div className="wa-confirm-title">
                  <span>🛡️ Cita Registrada: {selectedSlot}</span>
                </div>
                <p className="wa-confirm-detail">
                  <strong>Paciente:</strong> Mariela C.<br />
                  <strong>Sede:</strong> San Isidro (Av. Conquistadores)<br />
                  <strong>Especialista:</strong> Dr. Salirrosas (Estética Dental)
                </p>
                <div className="wa-confirm-sync">
                  <span>🗓️ Sincronizado en Google Calendar + Recordatorio a las 24h</span>
                </div>
              </div>
              <div className="wa-meta">
                <span>14:33</span>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Simulator Footer Controls */}
        <div className="wa-footer-controls">
          <div className="wa-speed-pill">
            <span>⚡</span>
            <span>Respuesta en 4 seg</span>
          </div>
          <button type="button" className="wa-replay-btn" onClick={restart}>
            ↻ Reiniciar demo
          </button>
        </div>
      </div>
    </div>
  );
}
