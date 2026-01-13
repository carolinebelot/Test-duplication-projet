# TéléSport - Application Jeux Olympiques (Starter Code)

## Description

Application web interactive pour visualiser l'historique des performances des pays aux Jeux Olympiques, développée pour la chaîne de télévision **TéléSport**.

**⚠️ ATTENTION**: Ce code est intentionnellement mal structuré pour servir de base à l'exercice 1 du projet. Il contient de nombreux anti-patterns et mauvaises pratiques qui devront être identifiés et corrigés.

## Problèmes intentionnels à identifier

Ce starter code contient volontairement plusieurs problèmes techniques :

- ❌ Tout le code dans un seul fichier `App.tsx`
- ❌ Données en dur dans les composants au lieu d'un hook dédié
- ❌ Utilisation de `any` au lieu de types TypeScript stricts
- ❌ `console.log` laissés dans le code
- ❌ Side effects mal gérés (useEffect sans dépendances)
- ❌ Pas de séparation des responsabilités (composants, pages, hooks)
- ❌ Code dupliqué (header, stats cards)
- ❌ Pas de gestion d'erreurs 404
- ❌ Logique métier mélangée avec la présentation

## Prérequis

- Node.js 22 LTS ou supérieur
- npm ou yarn

## Installation

1. Cloner le repository
2. Installer les dépendances :

```bash
npm install
```

## Lancement de l'application

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run preview` - Prévisualise la version de production

## Stack technique

- **React 19** - Bibliothèque UI
- **TypeScript** - Langage de programmation typé
- **Vite 5+** - Build tool et dev server
- **Tailwind CSS 3.4+** - Framework CSS
- **React Router 6+** - Gestion de la navigation
- **Chart.js + react-chartjs-2** - Graphiques interactifs

## Structure actuelle (à améliorer)

```
src/
├── App.tsx          # ❌ TOUT le code est ici (à refactoriser)
├── main.tsx         # Point d'entrée
└── index.css        # Styles globaux
```

## Fonctionnalités actuelles

### Page d'accueil (Dashboard)
- Affichage des statistiques globales (total médailles, or, argent, bronze)
- Graphique circulaire (pie chart) de la répartition des médailles
- Tableau des pays avec leurs performances
- Navigation vers la page détail d'un pays

### Page détail pays
- Statistiques détaillées d'un pays
- Nombre de participations et d'athlètes
- Graphique d'évolution historique (mockée)
- Bouton retour vers le dashboard

## Objectif de l'exercice 1

Votre mission consiste à :

1. **Analyser** ce code et identifier tous les problèmes
2. **Concevoir** une architecture front-end claire et modulaire
3. **Refactoriser** le code en appliquant les bonnes pratiques React
4. **Documenter** la nouvelle architecture

## Bonnes pratiques à appliquer

- ✅ Functional Components uniquement
- ✅ Typage strict TypeScript (interfaces, pas de `any`)
- ✅ Séparation components / pages / hooks / models
- ✅ Custom Hooks pour la logique métier
- ✅ Composition de composants
- ✅ Gestion propre des side effects
- ✅ Gestion des erreurs (404)
- ✅ Code DRY (Don't Repeat Yourself)

## Ressources

- [Documentation React](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
- [Documentation Chart.js](https://www.chartjs.org/)

## Licence

Ce projet est un exercice pédagogique pour OpenClassrooms.
