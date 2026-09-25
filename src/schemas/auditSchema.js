import { z } from 'zod';

export const auditSchema = z.object({
  fullName: z.string().trim().min(2, 'Ingresa tu nombre'),
  company: z.string().trim().min(2, 'Ingresa tu empresa'),
  niche: z.string().min(1, 'Selecciona tu industria'),
  revenue: z.string().min(1, 'Selecciona un rango'),
  bottleneck: z.string().min(1, 'Selecciona una opción'),
  email: z.string().trim().email('Ingresa un correo válido'),
  phone: z.string().trim().min(6, 'Ingresa un teléfono válido')
});
