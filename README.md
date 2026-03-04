# 👔 Luxe Threads - Premium Shirts E-Commerce

[![Deploy Status](https://img.shields.io/badge/Deploy-Success-brightgreen?style=for-the-badge&logo=render)](https://luxethreads-frontend.onrender.com/)
[![React Version](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](#)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite)](#)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2-6DB33F?style=for-the-badge&logo=springboot)](#)
[![Java 17](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk)](#)

¡Bienvenido al repositorio oficial de **Luxe Threads**! Una plataforma de comercio electrónico especializada en camisas premium, desarrollada con tecnologías web modernas que garantizan una experiencia de usuario rápida, reactiva y elegante.

---

## 🚀 Enlaces del Proyecto

- **🌐 Demo en Vivo:** [Luxe Threads Frontend (Render)](https://luxethreads-frontend.onrender.com/)
- **📸 Vista Previa del Diseño:** 

![Luxe Threads Preview](https://robermejia.com/img/portfolio/large/project-21/2.png)

---

## 💻 Arquitectura del Proyecto

Este proyecto es un entorno *Full-Stack* que cuenta con dos carpetas principales alojadas en este mismo repositorio (Monorepo):

1. **`/frontend`**: Interfaz de usuario dinámica construida con React y Vite.
2. **`/backend`**: API robusta desarrollada en Java usando Spring Boot.

### 🛠️ Stack Tecnológico

**Frontend:**
- **Librería Core:** React 18
- **Bundler:** Vite
- **Estilos:** Tailwind CSS
- **Enrutamiento:** React Router DOM v6
- **Iconografía:** Lucide React
- **Autenticación (Cliente):** Firebase SDK

**Backend:**
- **Framework:** Spring Boot 3.2.2 (Web, Test)
- **Lenguaje:** Java 17
- **Autenticación (Servidor):** Firebase Admin SDK
- **Manejo de Errores/Boilerplate:** Lombok
- **Contenedores:** Dockerfile incluido para fácil despliegue.

---

## ⚙️ Características Principales

* 🔒 **Autenticación Integrada:** Inicio de sesión y registro gestionado mediante Firebase.
* 🛍️ **Catálogo de Productos:** Exploración fluida de la colección de camisas de alta calidad (Premium).
* 🛒 **Carrito de Compras:** Sistema de carrito persistente y administrable por el usuario.
* 📱 **Diseño Totalmente Responsivo:** Adaptado a dispositivos móviles, tablets y escritorios usando la potencia de Tailwind CSS.
* 🚀 **Despliegue Rápido:** Configurado para montarse en plataformas como Render fácilmente con su `render.yaml`.

---

## 🏃‍♂️ Instalación y Ejecución Local

Para clonar e iniciar este proyecto localmente, sigue estos pasos asegúrate de tener instalados Node.js, y Java 17 / Maven en tu equipo.

### Clonar el repositorio
```bash
git clone <tu-URL-del-repositorio>
cd luxe-threads-app
```

### 1. Iniciar el Frontend

```bash
cd frontend
# Instalar dependencias
npm install
# Iniciar servidor de desarrollo
npm run dev
```
La aplicación frontend se ejecutará típicamente en `http://localhost:5173`.

### 2. Iniciar el Backend

Existen múltiples maneras de ejecutar el backend de Spring Boot, pero usando la consola:

```bash
cd backend
# Compilar y ejecutar usando el wrapper de Maven (o mvn)
mvn spring-boot:run
```
El servidor backend estará mapeado en el puerto asignado (típicamente `8080`).

> ⚠️ **Nota:** Asegúrate de agregar tus variables de entorno pertinentes en archivos `.env` (si lo requiere el Frontend o la inicialización de Firebase).

---

## ✨ Estado del Proyecto

El proyecto se encuentra **desplegado** y es funcional. Las actualizaciones sobre mejoras en el Frontend o validaciones de pasarelas de pago se irán acoplando a través de nuevos *Commits*.

✉️ *Luxe Threads: Vistiendo excelencia.*
