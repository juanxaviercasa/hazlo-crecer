# 🚀 Hazlo Crecer — Ecosistemas Digitales & Agentes de IA

<p align="center">
  <b>Plataforma de aceleración comercial, automatización de prospección y agentes inteligentes de conversión para Pymes y empresas B2B.</b>
</p>

<p align="center">
  <a href="https://hazlocrecer.com/"><img src="https://img.shields.io/badge/🌐_Demo_En_Vivo-hazlocrecer.com-00C7B7?style=for-the-badge" alt="Demo en Vivo"></a>
  <a href="https://github.com/juanxaviercasa/hazlo-crecer"><img src="https://img.shields.io/badge/Licencia-MIT-blue.svg?style=for-the-badge" alt="Licencia"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/PocketBase-B8DBE4?style=flat-square&logo=pocketbase&logoColor=black" alt="PocketBase">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind">
</p>

---

## 🎯 Visión del Proyecto

**Hazlo Crecer** es una plataforma orientada a transformar la adquisición de clientes y la operación digital de pequeñas y medianas empresas mediante **ecosistemas digitales de alto desempeño y agentes autónomos de IA**.

Combina una experiencia web interactiva, moderna y fluida con un **motor analítico territorial propio** para auditar, comparar y mapear competidores comerciales en Lima Metropolitana.

---

## ⚡ Características Principales

1. **Frontend de Alta Conversión:**
   - Interfaz moderna construida con **React** y animaciones orquestadas mediante **Framer Motion**.
   - Arquitectura SPA optimizada para Core Web Vitals y compatibilidad de enrutamiento con Cloudflare Pages y Vercel.
   - Formularios y entradas validadas mediante esquemas estrictos con **Zod**.

2. **Motor de Scraping & Auditoría Territorial (`auditor/`):**
   - Motor en Node.js para inspección algorítmica y benchmarking de agencias y comercios en Lima Metropolitana (Miraflores, San Isidro, Surco, San Borja, etc.).
   - Extracción estructurada de métricas técnicas: tech stack, score de velocidad, CTAs, números de contacto y análisis de propuesta de valor.
   - Generación automática de datasets clasificados en `auditor/data/agencies_ranked.json`.

3. **Backend Ligero & Persistencia:**
   - Conectividad reactiva con **PocketBase** para gestión ágil de leads, analíticas y captura de eventos.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | React 18+, Vite, React Router DOM, Framer Motion |
| **Validación & Datos**| Zod, PocketBase Client SDK |
| **Motor de Auditoría**| Node.js, Web Scraping Engine, Cheerio / Axios |
| **Estilos & UI** | Tailwind CSS, Lucide Icons |
| **Despliegue** | Vercel / Cloudflare Pages (con reglas SPA) |

---

## 📂 Estructura del Repositorio

```
hazlo-crecer/
├── auditor/                   # Motor territorial de auditoría y benchmarking
│   ├── engine/                # Scripts de scraping y procesamiento de SERPs
│   └── data/                  # Datasets generados y rankings de mercado
├── public/                    # Activos estáticos, favicon y multimedia
├── src/                       # Código fuente de la aplicación React
│   ├── components/            # Componentes modulares de interfaz
│   ├── pages/                 # Vistas y rutas de la plataforma
│   └── lib/                   # Clientes de API, PocketBase y utilidades
├── vercel.json                # Configuración de despliegue y rewrites
├── vite.config.js             # Configuración de bundling con Vite
└── package.json               # Dependencias y scripts de ejecución
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- Node.js (v18 o superior)
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/juanxaviercasa/hazlo-crecer.git
   cd hazlo-crecer
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el entorno de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Ejecutar el motor de auditoría de agencias:**
   ```bash
   npm run scrape:lima
   ```

5. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🌐 Producción

La plataforma se encuentra actualmente desplegada con dominio propio en:
👉 **[https://hazlocrecer.com](https://hazlocrecer.com)**

---

## 👤 Autor

Desarrollado por **Juan Xavier Cabello** ([@juanxaviercasa](https://github.com/juanxaviercasa))  
*Full-Stack Software Engineer · Arquitecto EdTech & Sistemas Pymes*