# TéléSport - Projet Jeux Olympiques

Application React permettant de visualiser les performances des pays aux Jeux Olympiques.

## Contexte du projet

TéléSport, une chaîne de télévision nationale, souhaite publier une page dédiée à l'historique des Jeux Olympiques avec un tableau interactif affichant les performances des pays.

Ce projet contient :
- Un **Dashboard** (page d'accueil) avec statistiques et graphique général
- Une **Page détail** pour chaque pays avec statistiques et évolution des médailles

## Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé sur votre machine
  - [Télécharger pour Mac](https://docs.docker.com/desktop/install/mac-install/)
  - [Télécharger pour Windows](https://docs.docker.com/desktop/install/windows-install/)

**OU**

- [Node.js 22 LTS](https://nodejs.org/) ou supérieur
- npm (inclus avec Node.js)

## Installation et lancement

### Option 1 : Avec Docker (recommandé)

1. Cloner le repository
```bash
git clone <url-du-repo>
cd telesport-starter
```

2. Lancer l'application avec Docker Compose
```bash
docker-compose up
```

3. Ouvrir votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

Pour arrêter l'application :
```bash
docker-compose down
```

### Option 2 : Sans Docker

1. Cloner le repository
```bash
git clone <url-du-repo>
cd telesport-starter
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer l'application en mode développement
```bash
npm run dev
```

4. Ouvrir votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

## Structure du projet

```
telesport-starter/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── ErrorMessage.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── StatCard.tsx
│   ├── hooks/           # Custom Hooks
│   │   └── useOlympicData.ts
│   ├── models/          # Interfaces TypeScript
│   │   └── Olympic.ts
│   ├── pages/           # Pages de l'application
│   │   ├── Home.tsx
│   │   ├── Country.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Composant principal + routing
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── Dockerfile           # Configuration Docker
├── docker-compose.yml   # Orchestration Docker
├── package.json         # Dépendances npm
├── tsconfig.json        # Configuration TypeScript
├── tailwind.config.js   # Configuration Tailwind CSS
└── vite.config.ts       # Configuration Vite
```

## Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour construire l'interface
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Gestion de la navigation
- **Recharts** - Bibliothèque de graphiques pour React

## Commandes disponibles

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Construire l'application pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Vérifier la qualité du code

## Ressources

- [Documentation React](https://react.dev/)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation Recharts](https://recharts.org/)

## Aide

Si vous rencontrez des problèmes :
1. Vérifiez que Docker Desktop est bien lancé (si vous utilisez Docker)
2. Vérifiez que le port 5173 n'est pas déjà utilisé
3. Consultez les logs avec `docker-compose logs` (si Docker)
4. Supprimez le dossier `node_modules` et relancez `npm install`
