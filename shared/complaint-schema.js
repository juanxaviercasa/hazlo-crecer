import {z} from 'zod';
const text=(min,max)=>z.string().trim().min(min).max(max);
export const complaintSchema=z.object({
  name:text(2,160), documentType:z.enum(['DNI','CE','Pasaporte','Otro']), documentNumber:text(4,30),
  address:text(5,300), email:z.string().trim().email().max(254), phone:text(7,30),
  isMinor:z.boolean(), representative:z.string().trim().max(300),
  itemType:z.enum(['servicio','producto']), description:text(5,1000), amount:z.string().regex(/^\d{1,9}(\.\d{1,2})?$/),
  type:z.enum(['reclamo','queja']), details:text(10,4000), requestedResolution:text(5,2000),
  responseChannel:z.enum(['email','domicilio']), websiteTrap:z.string().max(0),
}).strict().refine(v=>!v.isMinor||v.representative.length>=5,{message:'Indica los datos del representante del menor.',path:['representative']});
