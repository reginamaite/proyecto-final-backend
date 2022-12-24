# proyecto-final-backend

### Asegurarse que la carpeta proyecto-final-frontend y proyecto-final-backend se encuentren en una misma carpeta raíz

### Una vez en la carpeta raíz del proyecto, desplazarse a la carpeta con el comando cd proyecto-final-backend

## Correr el comando 

```bash
  npm install
```

## Crear archivo .env con los siguientes datos:

```bash
NODE_ENV=development
EXPRESS_PORT=8000
DB_USERNAME=postgres
DB_PASSWORD=testing
DB_NAME=rocket
DB_HOST=localhost
DB_DRIVER=postgres
JWT_SECRET=SergioMagia
JWT_EXPIRES_IN=1h
```

### Correr comando 
```bash 
sequelize db:create
``` 
para crear una base de datos

### Correr el comando 
```bash 
npx sequelize-cli db:migrate 
``` 
para crear las tablas en SQL

### Correr el comando
```bash 
npx sequelize-cli db:seed:all
``` 

### correr el comando 
```bash 
nodemon index.js
``` 

# Y aplaudirnos por hacer tremendo proyecto final con los pibes:

- Agustín Mateu - Back-end
- Gerónimo Nicola - Back-end & Front-end
- Regina Toja - Front-end