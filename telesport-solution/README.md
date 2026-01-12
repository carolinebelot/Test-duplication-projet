# TéléSport - Projet Jeux Olympiques

Bienvenue dans le projet TéléSport ! Cette application web permet de visualiser les performances olympiques des pays à travers les années.

## Contexte du projet

TéléSport, une chaîne de télévision nationale, souhaite publier une page dédiée à l'historique des Jeux Olympiques avec un tableau interactif affichant les performances des pays.

Votre mission est de refactoriser l'architecture front-end existante et d'implémenter de nouvelles fonctionnalités dans l'interface utilisateur.

## Fonctionnalités

- **Dashboard** : Vue d'ensemble avec statistiques globales et graphique interactif des médailles par pays
- **Page détail** : Informations détaillées sur un pays (participations, médailles, athlètes) avec évolution temporelle
- **Navigation fluide** : Routing entre les pages avec React Router
- **Gestion d'erreurs** : Page 404 pour les routes inexistantes
- **Design responsive** : Interface adaptée desktop, tablette et mobile

## Stack technique

- **React 19** : Bibliothèque UI avec Functional Components
- **TypeScript** : Typage strict pour une meilleure maintenabilité
- **Vite** : Build tool moderne et rapide
- **Tailwind CSS** : Framework CSS utility-first
- **React Router** : Gestion de la navigation
- **Recharts** : Bibliothèque de graphiques pour React

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) version 18 ou supérieure
- [npm](https://www.npmjs.com/) (inclus avec Node.js)

## Installation

1. Clonez le repository :

```bash
git clone <url-du-repo>
cd telesport-starter
```

2. Installez les dépendances :

```bash
npm install
```

## Lancement du projet

Pour lancer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:3000`

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run preview` : Prévisualise le build de production
- `npm run lint` : Vérifie le code avec ESLint

## Structure du projet

```
telesport-starter/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── StatsCard.tsx
│   │   ├── Loading.tsx
│   │   └── ErrorMessage.tsx
│   ├── hooks/           # Custom Hooks
│   │   └── useOlympicData.ts
│   ├── models/          # Interfaces TypeScript
│   │   └── Olympic.ts
│   ├── pages/           # Pages de l'application
│   │   ├── Home.tsx
│   │   ├── Country.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Configuration des routes
│   ├── main.tsx         # Point d'entrée de l'application
│   └── index.css        # Styles globaux
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Architecture du code

### Composants

Les composants sont organisés en trois catégories :

- **Pages** (`src/pages/`) : Composants de niveau page (Home, Country, NotFound)
- **Composants réutilisables** (`src/components/`) : Composants UI génériques (Header, StatsCard, Loading, ErrorMessage)
- **Custom Hooks** (`src/hooks/`) : Logique métier réutilisable (useOlympicData)

### Gestion des données

Les données sont gérées via le custom hook `useOlympicData` qui :
- Simule un appel API avec des données mockées
- Fournit des fonctions utilitaires (getCountryById, getTotalMedals, etc.)
- Gère les états de chargement et d'erreur

### Routing

Le routing est configuré dans `App.tsx` avec React Router :
- `/` : Page d'accueil (Dashboard)
- `/country/:id` : Page détail d'un pays
- `/not-found` et `*` : Page 404

## Bonnes pratiques appliquées

- ✅ **Functional Components** uniquement (pas de Class Components)
- ✅ **TypeScript strict** (pas de `any`)
- ✅ **Custom Hooks** pour la logique métier
- ✅ **Composition** de composants
- ✅ **Props typées** avec interfaces TypeScript
- ✅ **Gestion d'erreurs** côté utilisateur
- ✅ **Code modulaire** et réutilisable

## Ressources utiles

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Recharts Documentation](https://recharts.org/)

## Licence

Ce projet est réalisé dans le cadre d'un parcours OpenClassrooms.
