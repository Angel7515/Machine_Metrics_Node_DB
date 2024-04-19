# Backend
# Usa la imagen base de Node.js con la etiqueta "latest"
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo del contenedor
COPY package*.json ./
COPY . .

# Copia los archivos de certificado y clave privada al directorio de trabajo del contenedor
COPY cert.crt ./
COPY server.key ./

# Instala las dependencias de tu aplicación según lo especificado en package.json
RUN npm install

# Expone el puerto en el que tu aplicación se ejecutará dentro del contenedor
EXPOSE 8443

# Comando para iniciar tu aplicación cuando se ejecute el contenedor
CMD ["node", "app.js"]

