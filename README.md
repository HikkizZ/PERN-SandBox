# PERN-SandBox

Experimental repository to learn, test concepts, and develop full stack web projects using the PERN stack (PostgreSQL, Express, React, and Node.js).

Este repositorio está diseñado para aprender y probar los fundamentos del desarrollo web utilizando el stack PERN. Es un entorno experimental donde se desarrollarán tanto el backend como el frontend de aplicaciones web completas.

## Estructura del Proyecto

El proyecto está dividido en dos carpetas principales. `backend` y `frontend`. Cada una de ellas contiene los recursos necesarios para sus respectivas funcionalidades.

``` markdown
StackPERN-SandBox/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── test/
│   │   └── utils/
│   ├── .gitignore
│   ├── .gitkeep
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── server.js
│
├── frontend/
│   ├── .gitignore
│   └── README.md
│
├── LICENSE
└── README.md
```

## Backend

El backend de este proyecto está construido utilizando Node.js, Express y PostgreSQL como base de datos. Se han organizado las funcionalidades en controladores, rutas, servicios y modelos, siguiendo una estructura modular.

>[!NOTE] INFO
Para más detalles sobre el backend, consulta el README específico del backend.

## Fronend

El frontend será desarrollado más adelante utilizando React. Actualmente, no hay implementaciones en esta carpeta, pero se añadirán en futuras fases del proyecto.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- PostgreSQL: Base de datos relacional
- Express.js: Framework web para Node.js
- React.js: Biblioteca de JavaScript para construir interfaces de usuario
- Node.js: Entorno de ejecución para JavaScript en el backend
- TypeORM: ORM para la gestión de la base de datos en PostgreSQL
- Nodemon: Herramienta para reiniciar automáticamente el servidor durante el desarrollo

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalados:

- Node.js
- npm
- PostgreSQL

## Instalación y configuración

### Clonar el repositorio

``` bash
git clone https://github.com/HikkizZ/PERN-SandBox.git
cd PERN-SandBox
```

### Backend

1. Navega a la carpeta del backend:

``` bash
cd backend/
```

2. Instala las dependencias:

``` bash
npm install
```

3. Configura la base de datos PostgreSQL y actualiza las credenciales en el archivo de configuración (aún por definir, se recomienda colocar las credenciales en un archivo .env para mayor seguridad).

4. Ejecuta el servidor en modo desarrollo:

``` bash
npm run dev
```

El servidor estará corriendo (de manera local por el momento) en http:localhost:3000

### Frontend

Actualmente, el frontend aún no se ha implementado. Pronto se añadirán instrucciones para configurar y ejecutar el frontend en futuras fases del proyecto.

## Scripts Disponibles

### Backend
- `npm run dev`: Inicia el servidor en modo desarrollo usando nodemon.
- `npm start`: Inicia el servidor en modo producción.

## Licencia

Este proyecto está bajo la licencia MIT.
