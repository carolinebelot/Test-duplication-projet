# SUMMARY_SETUP.md - Résumé du setup du projet p2-dfsjs

## Informations générales

- **Nom du projet** : p2-dfsjs (P2 - DFSJS)
- **Date de création** : 2026-01-13
- **Stack technique** : React 19 + TypeScript + Vite 5 + Tailwind CSS 3.4 + React Router 6 + Chart.js
- **Niveau** : Intermédiaire
- **Docker** : Non (installation classique avec npm)

## Contexte

Projet pédagogique pour OpenClassrooms - Application TéléSport permettant de visualiser l'historique des Jeux Olympiques.

**Objectif** : Apprendre à refactoriser un code mal structuré vers une architecture React propre et professionnelle.

## Structure générée

### Codebase starter (`p2-dfsjs-starter/`)

**Caractéristique** : Code **intentionnellement mal structuré** avec 13 anti-patterns

- Fichier monolithique (`App.tsx` ~380 lignes)
- Données hardcodées
- Utilisation de `any` (TypeScript laxiste)
- 7 console.log laissés
- Logique métier dans composants UI
- Code dupliqué
- Pas d'architecture modulaire

**Technologies** :
- React 19
- TypeScript (mode strict dans tsconfig)
- Vite 5
- Tailwind CSS 3.4
- React Router 6
- Chart.js + react-chartjs-2

### Codebase solution (`p2-dfsjs-solution/`)

**Caractéristique** : Code propre et professionnel avec architecture modulaire

**Structure** :
```
src/
├── components/         # Indicator, MedalsPieChart, MedalsLineChart
├── pages/              # Home, Country, NotFound
├── hooks/              # useOlympicData + utilitaires
├── models/             # Interfaces TypeScript
├── data/               # olympics.json
```

**Bonnes pratiques appliquées** :
- Architecture modulaire (4 dossiers structurés)
- TypeScript strict (0 `any`)
- Custom Hook pour logique métier
- Composants réutilisables (Indicator utilisé 5x)
- Séparation logique/UI
- Code propre (0 console.log)
- Navigation SPA avec React Router
- Graphiques interactifs Chart.js

### Fichiers pédagogiques

- **CORRIGE.md** (~11000 lignes) : Guide de correction détaillé couvrant les 9 étapes du projet
- **GUIDE_FORMATEUR.md** (~250 lignes) : Guide mentor adapté à React 19 + TypeScript
- **README_SOLUTION.md** : Documentation de l'architecture solution

## Décisions techniques

### Docker : NON

**Raison** : Choix de l'utilisateur pour simplifier l'installation (npm install directement)

**Installation** :
```bash
npm install
npm run dev
```

### Stack technique

- **React 19** : Dernière version, Functional Components uniquement
- **TypeScript strict** : Typage fort, pas de `any`
- **Vite 5** : Build tool moderne et rapide
- **Tailwind CSS 3.4** : Styling utility-first
- **React Router 6** : Navigation SPA
- **Chart.js** : Graphiques interactifs (pie + line)

### Architecture choisie

**Pattern** : Séparation des responsabilités (SoC)

- `components/` : UI réutilisables
- `pages/` : Composants de route
- `hooks/` : Logique métier (Custom Hooks)
- `models/` : Contrats TypeScript

**Avantages** :
- Scalable (facile d'ajouter composants/pages)
- Maintenable (fichiers découplés)
- Testable (composants indépendants)
- Prêt pour API REST (hook `useOlympicData`)

## Exercices pédagogiques

### Exercice 1 : Refactorisation d'architecture (5 étapes)

1. Analyser le code starter et identifier les problèmes
2. Concevoir une nouvelle architecture
3. Refactoriser les composants
4. Externaliser les données dans un Custom Hook
5. Documenter l'architecture

**Durée estimée** : 6-8 heures

### Exercice 2 : Implémentation UI (4 étapes)

1. Améliorer le dashboard avec graphiques
2. Améliorer la page détail + navigation
3. Gérer les erreurs (404)
4. Finaliser et documenter sur GitHub

**Durée estimée** : 4-6 heures

**Total** : 10-14 heures de travail effectif

## Compétences travaillées

- ✅ Architecture front-end modulaire
- ✅ Functional Components et Hooks React
- ✅ Custom Hooks pour logique métier
- ✅ TypeScript strict
- ✅ React Router 6 (navigation SPA)
- ✅ Chart.js (graphiques interactifs)
- ✅ Composition de composants
- ✅ Responsive design (Tailwind CSS)
- ✅ Git & GitHub

## Préparation projet suivant

L'architecture mise en place (notamment le hook `useOlympicData`) facilite la migration vers une API REST :

**Actuellement** (mock) :
```typescript
setData(olympicsDataMock as Olympic[]);
```

**Future migration** (aucun changement dans les composants) :
```typescript
const response = await fetch('https://api.telesport.com/olympics');
const data = await response.json();
setData(data);
```

## Points de vigilance pour les étudiants

### Erreurs fréquentes à éviter

1. Utiliser `any` au lieu de types stricts
2. Laisser des `console.log` dans le code
3. Ne pas gérer le cas de chargement (`data.length === 0`)
4. Utiliser `<a>` au lieu de `<Link>` (React Router)
5. Code dupliqué au lieu de composants réutilisables
6. Logique métier dans les composants UI
7. Oublier `ChartJS.register()` avant d'utiliser Chart.js
8. Mauvaise gestion des dépendances `useEffect`

### Grille d'évaluation

**Exercice 1** : 25 points
- Analyse (3 pts)
- Architecture (4 pts)
- Interfaces TypeScript (3 pts)
- Composants réutilisables (5 pts)
- Custom Hook (5 pts)
- Code propre (3 pts)
- Documentation (2 pts)

**Exercice 2** : 30 points
- Dashboard (5 pts)
- Page détail (5 pts)
- Navigation (4 pts)
- Gestion erreurs (3 pts)
- Responsivité (3 pts)
- Graphiques (4 pts)
- Code propre (3 pts)
- Documentation GitHub (3 pts)

**Total** : 55 points

## Ressources

### Documentation officielle

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com)
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Concepts clés

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## Conclusion

Ce projet pose les bases d'une architecture React professionnelle et prépare l'étudiant à travailler sur des applications full-stack avec backend REST API.

**Prochaine étape** : Connexion à une API REST (projet suivant du parcours).
