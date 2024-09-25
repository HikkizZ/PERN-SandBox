# Backend for StackPERN-SandBox

>[!NOTE]
Backend server for the StackPERN-Sandbox project using Node.js, Express, and PostgreSQL.

Este servidor backend forma parte del proyecto StackPERN-SandBox, el cual está diseñado para aprender y probar conceptos de desarrollo web utilizando el stack PERN (PostgreSQL, Express, React, y Node.js). Esta parte del backend está construida con Express.js para las rutas, TypeORM para manejar la base de datos y PostgreSQL como sistema de base de datos relacional.

## Estructura del proyecto

El backend está estructurado de manera modular para facilitar prácticas de desarrollo. A continuación, la estructura del directorio:

``` bash
backend/
├── src/
│   ├── auth/
│   │   └── passport.auth.js
│   ├── config/
│   │   ├── configDB.js
│   │   ├── configEnv.js
│   │   └── .env
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   ├── handlers/
│   │   └── responseHandlers.js
│   ├── helpers/
│   │   └── bcrypt.helper.js
│   ├── middlewares/
│   │   ├── authentication.middleware.js
│   │   └── authorization.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── index.routes.js
│   │   └── user.routes.js
│   ├── services/
│   │   ├── auth.service.js
│   │   └── user.service.js
│   ├── test/
│   ├── utils/
│   │   └── initialSetup.js
│   ├── validations/
│   │   ├── auth.validation.js
│   │   └── user.validation.js
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
ACCESS_TOKEN_SECRET = {tu secreto para tokens}
cookieKey = {tu secreto para cookies}
```

>[!NOTE]
`ACCESS_TOKEN_SECRET` debe tener un largo de 64 caracteres en hexadecimal y `cookieKey` debe tener un largo de 32 caracteres en hexadecimal y pueden ser generados directamente en la terminal usando Node.js.

### Pasos para generar Secretos en Node.js en la terminal

Ejecuta el siguiente código directamente en la terminal para generar un `ACCESS_TOKEN_SECRET` de 64 caracteres:

``` bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Para generar la `cookieKey` de 32 caracteres ejecuta el siguiente código en la terminal:

``` bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

>[!NOTE]
**Estos secretos son generados de manera aleatoria.**

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

3. Configurar la base de datos PostgreSQL y actualizar el archivo `.env` con las credenciales correctas.

4. Crear usuarios iniciales:

    El archivo `initalSetup()` contiene el script necesario para crear los usuarios iniciales al encender por primera vez el código. Modifícalo para incluir los usuarios que necesites.
  
    **ESTE ARCHIVO SOLO ES EJECUTA UNA UNICA VEZ**. Así que procura al menos añadir un administrador.

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

### Autenticación

- **POST** `/api/auth/register`
  - Crea un nuevo **usuario**.
- **POST** `/api/auth/login`
  - Inicia sesión con **email** y **contraseña**. Si es válido devuelve un **Token JWT**.
- **POST** `/api/auth/logout`
  - Cierra sesión eliminando la cookie de autenticación.

### Usuarios

- **GET** `/api/user/`
  - Obtiene a todos los usuarios.
- **GET** `/api/user/detail/`
  - Obtiene un usuario por **id**, **rut** o **email**.
- **PATCH** `/api/user/detail/`
  - Actualiza un usuario por **id**, **rut** o **email**.
- **DELETE** `/api/user/detail/`
  - Elimina un usuario por **id**, **rut** o **email**.

## Descripción de archivos clave

- `server.js`: Archivo principal del backend que inicia el servidor Express y la conexión a la base de datos usando TypeORM.
- `config/configDB.js`: Configuración de la conexión a la base de datos PostgreSQL utilizando TypeORM.
- `config/configEnv.js`: Carga las variables de entorno desde el archivo `.env` usando dotenv.
- `controllers/user.controller.js`: Controlador que maneja la lógica para obtener, actualizar y eliminar usuarios.
- `controllers/auth.controller.js`: Controlador que maneja la lógica de autenticación, incluyendo el registro, inicio de sesión y cierre de sesión.
- `models/user.model.js`: Modelo de datos del usuario definido con TypeORM.
- `routes/index.routes.js`: Archivo principal de rutas que agrupa las rutas de usuario.
- `routes/user.routes.js`: Define las rutas específicas para las operaciones CRUD de usuario.
- `routes/auth.routes.js`: Define las rutas específicas para autenticación.
- `middlewares/authentication.middleware.js`: Middleware para autenticar las solicitudes usando JWT.
- `middlewares/authorization.middleware.js`: Middleware para verificar permisos y roles de usuario.
- `services/user.service.js`: Servicio que contiene la lógica de negocio para las operaciones de usuario.
- `services/auth.service.js`: Servicio que contiene la lógica de negocio para la autenticación y gestión de tokens.
- `utils/initialSetup.js`: Script para crear usuarios iniciales en la base de datos.

## Dependencias

- **Express**: Framework de servidor para Node.js.
- **pg**: Cliente de PostgreSQL para Node.js.
- **TypeORM**: ORM para conectar Node.js con PostgreSQL.
- **Nodemon**: Para reiniciar automáticamente el servidor durante el desarrollo.
- **Passport**: Middleware de autenticación de Node.js.
- **passport-jwt**: Estrategia de Passport para manejar autenticación con JWT.
- **jsonwebtoken**: Para crear y verificar tokens JWT.
- **bcryptjs**: Para cifrar y comparar contraseñas.
- **cookie-parser**: Middleware para analizar cookies en las solicitudes.
- **cors**: Middleware para habilitar solicitudes entre dominios.
- **express-session**: Manejo de sesiones del lado del servidor.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
- **express-validator**: Middleware para la validación de entradas en Express.
- **joi**: Biblioteca para la validación de datos.
- **reflect-metadata**: Biblioteca para proporcionar soporte de metadatos en TypeScript.

## Dependencias de Desarrollo

- **morgan**: Middleware para registrar solicitudes HTTP en la consola (útil para depuración).
- **nodemon**: Herramienta para reiniciar automáticamente el servidor cuando se realizan cambios en el código (modo desarrollo).

## Licencia

Este proyecto está bajo la licencia MIT.
