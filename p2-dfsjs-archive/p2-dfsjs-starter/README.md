# TéléSport - Historique des Jeux Olympiques

Application web interactive permettant de visualiser l'historique des performances des pays aux Jeux Olympiques.

## 📋 Contexte du projet

Ce projet est un starter code pour un exercice de refactorisation d'architecture React. Le code actuel fonctionne mais présente de nombreux problèmes de structure qu'il faudra identifier et corriger.

## 🚀 Installation

### Prérequis

- **Node.js** 22 LTS ou supérieur
- **npm** (inclus avec Node.js)

### Installation des dépendances

```bash
npm install
```

## 🛠️ Utilisation

### Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:5173](http://localhost:5173)

### Build pour la production

```bash
npm run build
```

### Lancer le linter

```bash
npm run lint
```

## 📁 Structure du repository

```
p2-dfsjs-starter/
├── public/              # Fichiers publics statiques
├── src/
│   ├── App.tsx         # Composant principal (⚠️ code à refactoriser)
│   ├── main.tsx        # Point d'entrée React
│   └── index.css       # Styles globaux
├── index.html          # Page HTML principale
├── package.json        # Dépendances du projet
├── tsconfig.json       # Configuration TypeScript
├── vite.config.ts      # Configuration Vite
├── tailwind.config.js  # Configuration Tailwind CSS
└── .eslintrc.cjs       # Configuration ESLint
```

## 🎯 Objectif de l'exercice

Ce projet contient **intentionnellement** un code mal structuré. Votre mission :

1. **Analyser** le code existant et identifier les problèmes
2. **Concevoir** une nouvelle architecture front-end propre et modulaire
3. **Refactoriser** le code en appliquant les bonnes pratiques React
4. **Externaliser** la logique de données dans un Custom Hook
5. **Documenter** votre nouvelle architecture

## 🔧 Technologies utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite 5** - Build tool
- **Tailwind CSS 3.4** - Framework CSS
- **React Router 6** - Routing SPA
- **Chart.js** - Graphiques interactifs
- **ESLint** - Qualité de code

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation Vite](https://vitejs.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation React Router](https://reactrouter.com)
- [Documentation Chart.js](https://www.chartjs.org/docs/latest/)

## 📝 Points d'attention

⚠️ **Le code actuel présente de nombreux problèmes** :

- Fichier unique trop volumineux
- Absence d'architecture modulaire
- Typage TypeScript incomplet
- Code dupliqué
- Logique métier dans les composants
- console.log laissés dans le code
- Données hardcodées

**C'est normal !** Ces problèmes sont là pour que vous puissiez pratiquer le refactoring.

## 🎓 Compétences travaillées

- Architecture front-end avec React
- Functional Components et Hooks
- Custom Hooks pour la logique métier
- Composition de composants
- TypeScript strict
- React Router (navigation SPA)
- Graphiques avec Chart.js
- Versioning avec Git

---

**Bon courage pour le refactoring ! 🚀**
