# Parking Management System

Este es un sistema de gestión de parqueaderos desarrollado con Node.js, Express y Sequelize. Permite gestionar usuarios, vehículos, tarifas, espacios de parqueo y entradas/salidas de vehículos.

## Características

- **Autenticación y Autorización**: Uso de JWT para proteger las rutas.
- **Gestión de Usuarios**: Crear, leer, actualizar y eliminar usuarios.
- **Gestión de Vehículos**: Registrar vehículos y asociarlos con usuarios.
- **Gestión de Tarifas**: Configurar tarifas por tipo de vehículo.
- **Gestión de Espacios de Parqueo**: Monitorear y actualizar el estado de los espacios de parqueo.
- **Entradas y Salidas**: Registrar entradas y salidas de vehículos, calculando el costo total.

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL
- Sequelize CLI (opcional, para ejecutar migraciones y seeders)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd parking

2. Instala las dependencias:
    ```bash
    npm install

3. Configura las variables de entorno en el archivo .env:
    ```bash
    PORT=3000
    DB_NAME=parking_db
    DB_USER=root
    DB_PASSWORD=Admin123*
    DB_HOST=127.0.0.1
    DB_DIALECT=mysql
    JWT_SECRET=parking

4. Ejecuta las migraciones y seeders para configurar la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all





Collecting workspace informationClaro, aquí tienes un ejemplo de un README más completo para tu proyecto:

```markdown
# Parking Management System

Este es un sistema de gestión de parqueaderos desarrollado con Node.js, Express y Sequelize. Permite gestionar usuarios, vehículos, tarifas, espacios de parqueo y entradas/salidas de vehículos.

## Características

- **Autenticación y Autorización**: Uso de JWT para proteger las rutas.
- **Gestión de Usuarios**: Crear, leer, actualizar y eliminar usuarios.
- **Gestión de Vehículos**: Registrar vehículos y asociarlos con usuarios.
- **Gestión de Tarifas**: Configurar tarifas por tipo de vehículo.
- **Gestión de Espacios de Parqueo**: Monitorear y actualizar el estado de los espacios de parqueo.
- **Entradas y Salidas**: Registrar entradas y salidas de vehículos, calculando el costo total.

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL
- Sequelize CLI (opcional, para ejecutar migraciones y seeders)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd parking
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en el archivo .env:
   ```env
   PORT=3000
   DB_NAME=parking_db
   DB_USER=root
   DB_PASSWORD=Admin123*
   DB_HOST=127.0.0.1
   DB_DIALECT=mysql
   JWT_SECRET=parking
   ```

4. Ejecuta las migraciones y seeders para configurar la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. Accede a la API en `http://localhost:3000`.

## Endpoints Principales

### Autenticación
- `POST /api/auth/login`: Iniciar sesión.

### Usuarios
- `GET /api/users`: Obtener todos los usuarios.
- `POST /api/users`: Crear un nuevo usuario.

### Vehículos
- `GET /api/vehicles`: Obtener todos los vehículos.
- `POST /api/vehicles`: Registrar un nuevo vehículo.

### Tarifas
- `GET /api/rates`: Obtener todas las tarifas.
- `POST /api/rates`: Crear una nueva tarifa.

### Espacios de Parqueo
- `GET /api/parkingspots`: Obtener todos los espacios de parqueo.
- `POST /api/parkingspots`: Crear un nuevo espacio de parqueo.

### Entradas de Parqueo
- `GET /api/parkingentries`: Obtener todas las entradas de parqueo.
- `POST /api/parkingentries`: Registrar una nueva entrada de parqueo.

## Estructura del Proyecto

```
Backend/
├── config/             # Configuración de Sequelize
├── controllers/        # Controladores de las rutas
├── middlewares/        # Middlewares (e.g., autenticación)
├── migrations/         # Migraciones de la base de datos
├── models/             # Modelos de Sequelize
├── routes/             # Definición de rutas
├── seeders/            # Datos iniciales para la base de datos
├── server.js           # Punto de entrada de la aplicación
└── .env                # Variables de entorno
```

## Tecnologías Utilizadas

- **Backend**: Node.js, Express
- **Base de Datos**: MySQL, Sequelize
- **Autenticación**: JSON Web Tokens (JWT)

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor abre un issue o envía un pull request.

