# Backend for StackPERN-SandBox

>[!NOTE]
Backend server for the StackPERN-Sandbox project using Node.js, Express, and PostgreSQL.

Este servidor backend forma parte del proyecto StackPERN-SandBox, el cual está diseñado para aprender y probar conceptos de desarrollo web utilizando el stack PERN (PostgreSQL, Express, React, y Node.js). Esta parte del backend está construida con Express.js para las rutas, TypeORM para manejar la base de datos y PostgreSQL como sistema de base de datos relacional.

## Estructura del proyecto

El backend está estructurado de manera modular para facilitar prácticas de desarrollo. A continuación, la estructura del directorio:

``` bash
backend/
├── src/
│   ├── config/
│   │   ├── configDB.js
│   │   └── configEnv.js
│   │   └── .env
│   ├── controllers/
│   │   └── user.controller.js
│   ├── middlewares/
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── index.routes.js
│   │   └── user.routes.js
│   ├── services/
│   ├── test/
│   └── utils/
├── server.js
├── README.md
└── package.json
```

## Requisitos

Para ejecutar el servidor, es necesario tener instalados:

- Node.js
- npm
- PostgreSQL
- Un archivo .env con las siguientes variables (Sin llaves):

``` bash
PORT = {puerto}
HOST = {localhost o servidor}
DATABASE = {nombre de la base datos}
DB_USERNAME = {usuario en la base de datos}
DB_PASSWORD = {contraseña de la base de datos}
```

## Instalación

1. Clonar el repositorio:

    ``` bash
    git clone https://github.com/HikkizZ/PERN-SandBox.git
    cd PERN-SandBox/backend/
    ```

2. Instalar las dependencias:

    ``` bash
    npm install
    ```

3. Configurar la base de datos PostgreSQL y actualizar el archivo .env con las credenciales correctas.

## Ejecución

Para iniciar el servidor en modo de desarrollo con reinico automático (gracias a nodemon), puedes ejecutar:

``` bash
npm run dev
```

Para iniciar el servidor en modo producción:

``` bash
npm start
```

## Rutas de las API

Las rutas principales del servidor están relacionadas con la gestión de usuarios. A continuación, se describen las rutas implementadas:

### Usuarios

- **POST** /api/user/
  - Crea un nuevo usuario
- **GET** /api/user/all
  - Obtiene todos los usuarios
- **GET** /api/user/:id
  - Obtiene un usuario por su ID
- **PATCH** /api/user/:id
  - Actualiza un usuario por su ID
- **DELETE** /api/user/:id
  - Elimina un usuario por su ID

## Descripción de archivos clave

- `server.js`: Archivo principal del backend que inicia el servidor Express y la conexión a la base de datos usando TypeORM.
- `config/configDB.js`: Configuración de la conexión a la base de datos PostgreSQL utilizando TypeORM.
- `config/configEnv.js`: Carga las variables de entorno desde el archivo .env usando dotenv.
- `controllers/user.controller.js`: Controlador que maneja la lógica para crear, obtener, actualizar y eliminar usuarios.
- `models/user.model.js`: Modelo de datos del usuario definido con TypeORM.
- `routes/index.routes.js`: Archivo principal de rutas que agrupa las rutas de usuario.
- `routes/user.routes.js`: Define las rutas específicas para las operaciones CRUD de usuario.

## Dependencias

- **Express**: Framework de servidor para Node.js
- **pg**: Cliente de PostgreSQL para Node.js
- **TypeORM**: ORM para conectar Node.js con PostgreSQL
- **Nodemon**: Para reiniciar automáticamente el servidor durante el desarrollo

## Licencia

Este proyecto está bajo la licencia MIT.
