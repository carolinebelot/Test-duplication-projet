# Utiliser l'image Node.js 22 LTS
FROM node:22-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port 5173 (port par défaut de Vite)
EXPOSE 5173

# Commande pour lancer l'application en mode développement
CMD ["npm", "run", "dev"]
