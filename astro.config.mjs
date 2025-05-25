// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

export default defineConfig({
  // Cambia este dominio si tienes uno propio
  site: "https://stargazers.club",

  integrations: [
    starlight({
      title: "Documentación de AcceShoes",
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./src/assets/logo-acceshoes.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Varelaso32/Proyect-AcceShoes",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://astro.build/chat",
        },
      ],
      sidebar: [
        {
          label: "📚 Manual AcceShoes",
          items: [
            { label: "Objetivos del Sistema", link: "/objetivos" },
            { label: "Comunidad del Proyecto", link: "/comunidad" },
            { label: "Funcionalidades", link: "/funcionalidades" },
            { label: "Arquitectura de la Información", link: "/arquitectura" },
            { label: "Requisitos Funcionales", link: "/requisitos" },
            { label: "Contacto y Soporte", link: "/contactanos" },
          ],
        },
        { label: "🧾 Acerca del Proyecto", link: "/acerca" },
        { label: "🧱 Tecnologías Utilizadas", link: "/tecnologias" },
        { label: "🗂️ Estructura del Proyecto", link: "/estructura" },
        { label: "🔌 Conexión a la API", link: "/api" },
        { label: "▶️ Instalación y Ejecución", link: "/instalacion" },
        { label: "🔐 Módulos del Proyecto", link: "/modulos" },
      ],
    }),
    mdx(),
  ],

  adapter: vercel(),
});