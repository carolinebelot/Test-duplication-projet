# Archive du projet p2-dfsjs - TéléSport

Cette archive contient l'intégralité des ressources du projet **p2-dfsjs** (TéléSport - Historique des Jeux Olympiques).

## 📦 Contenu de l'archive

### 📂 [`p2-dfsjs-starter/`](p2-dfsjs-starter/)

**Code starter pour les étudiants**

Application React 19 avec un code **intentionnellement mal structuré** contenant 13 anti-patterns. Les étudiants doivent analyser ce code, identifier les problèmes, et le refactoriser vers une architecture propre.

**Technologies** : React 19, TypeScript, Vite 5, Tailwind CSS 3.4, React Router 6, Chart.js

**Installation** :
```bash
cd p2-dfsjs-starter
npm install
npm run dev
```

---

### 📂 [`p2-dfsjs-solution/`](p2-dfsjs-solution/)

**Codebase solution de référence**

Application React 19 avec une architecture modulaire et professionnelle. Représente la solution attendue après refactoring complet du starter.

**Architecture** :
```
src/
├── components/     # Composants réutilisables (Indicator, MedalsPieChart, MedalsLineChart)
├── pages/          # Pages (Home, Country, NotFound)
├── hooks/          # Custom Hooks (useOlympicData)
├── models/         # Interfaces TypeScript
├── data/           # Données mockées
```

**Installation** :
```bash
cd p2-dfsjs-solution
npm install
npm run dev
```

**Documentation** : Voir [README_SOLUTION.md](p2-dfsjs-solution/README_SOLUTION.md)

---

### 📂 [`ressources-mentors-learning-designers/`](ressources-mentors-learning-designers/)

**Ressources pédagogiques pour mentors et formateurs**

#### 📄 [guide-mentor.md](ressources-mentors-learning-designers/guide-mentor.md)

Guide d'accompagnement pour les mentors OpenClassrooms adapté à React 19 + TypeScript.

**Contient** :
- Note d'accompagnement sur le projet
- Conseils généraux
- Tableau de correspondance (compétences ↔ livrables)
- Points d'attention spécifiques (architecture, typage, hooks, router)
- Questions fréquentes des étudiants
- Ressources recommandées
- Session de bilan (préparation + déroulement)

#### 📄 [corrige.md](ressources-mentors-learning-designers/corrige.md)

Guide de correction détaillé couvrant **l'intégralité du projet** (~11000 lignes).

**Contient** :
1. Vue d'ensemble de l'architecture solution
2. Prérequis pour les étudiants
3. **Exercice 1 - Refactorisation** (5 étapes détaillées)
   - Étape 1 : Analyser le code et repérer les problèmes
   - Étape 2 : Concevoir une nouvelle architecture
   - Étape 3 : Refactoriser les composants
   - Étape 4 : Externaliser dans un Custom Hook
   - Étape 5 : Documenter l'architecture
4. **Exercice 2 - Implémentation UI** (4 étapes détaillées)
   - Étape 1 : Améliorer le dashboard
   - Étape 2 : Améliorer la page détail + navigation
   - Étape 3 : Gérer les erreurs (404)
   - Étape 4 : Finaliser et documenter sur GitHub
5. Grille d'évaluation (55 points)
6. Erreurs fréquentes et corrections
7. Ressources complémentaires
8. FAQ

**Format par étape** :
- Objectif pédagogique
- Ce qu'il faut faire
- Explication technique
- Code de référence
- Points de vigilance
- Fichiers concernés

---

### 📂 [`fichiers-de-configuration/`](fichiers-de-configuration/)

**Fichiers de configuration et documentation du setup**

#### 📄 [project.md](fichiers-de-configuration/project.md)

Instructions du projet fournies aux étudiants (page d'accueil + 2 exercices avec 9 étapes).

#### 📄 [stack.md](fichiers-de-configuration/stack.md)

Spécifications techniques : React 19 + TypeScript + Vite + Tailwind CSS + bonnes pratiques.

#### 📄 [assets.md](fichiers-de-configuration/assets.md)

Spécifications fonctionnelles détaillées : cahier des charges TéléSport, user stories, modèle de données.

#### 📄 [REX.md](fichiers-de-configuration/REX.md)

Retour d'expérience chronologique de la génération du projet (toutes les phases documentées).

#### 📄 [SUMMARY_SETUP.md](fichiers-de-configuration/SUMMARY_SETUP.md)

Résumé du setup du projet : stack technique, décisions prises, architecture choisie, compétences travaillées, ressources.

---

## 🎯 Utilisation de l'archive

### Pour les étudiants

1. **Récupérer le code starter** : La branche `p2-dfsjs-starter-etudiants-openclassrooms` contient uniquement le code starter
2. **Suivre les instructions** : Lire `project.md` pour comprendre les exercices
3. **Travailler sur le refactoring** : Analyser, concevoir, implémenter, documenter

### Pour les mentors

1. **Lire le guide mentor** : [`ressources-mentors-learning-designers/guide-mentor.md`](ressources-mentors-learning-designers/guide-mentor.md)
2. **Consulter le corrigé** : [`ressources-mentors-learning-designers/corrige.md`](ressources-mentors-learning-designers/corrige.md)
3. **Tester le starter et la solution** : Cloner et lancer les deux versions
4. **Préparer la session de bilan** : Utiliser la grille d'évaluation du corrigé

### Pour les Learning Designers

1. **Comprendre le setup** : Lire [`fichiers-de-configuration/SUMMARY_SETUP.md`](fichiers-de-configuration/SUMMARY_SETUP.md)
2. **Analyser le REX** : [`fichiers-de-configuration/REX.md`](fichiers-de-configuration/REX.md) documente toutes les décisions prises
3. **Vérifier les specs** : `project.md`, `stack.md`, `assets.md`
4. **Adapter si nécessaire** : Les templates sont réutilisables pour d'autres projets

---

## 📊 Résumé du projet

| Propriété | Valeur |
|-----------|--------|
| **Nom** | p2-dfsjs (P2 - DFSJS) |
| **Type** | Projet pédagogique OpenClassrooms |
| **Niveau** | Intermédiaire |
| **Stack** | React 19, TypeScript, Vite 5, Tailwind CSS 3.4, React Router 6, Chart.js |
| **Docker** | Non (npm install classique) |
| **Exercices** | 2 exercices, 9 étapes totales |
| **Durée estimée** | 10-14 heures |
| **Compétences** | Architecture React, Custom Hooks, TypeScript strict, React Router, Chart.js |

---

## 🌲 Organisation Git

Ce projet utilise une **stratégie de branches** :

- **Branche actuelle** (`setup-projetv2` ou autre) : Contient cette archive avec toutes les ressources
- **Branche étudiants** (`p2-dfsjs-starter-etudiants-openclassrooms`) : Contient **uniquement** le code starter

### Workflow Git

1. **Pour publier aux étudiants** :
   - Définir `p2-dfsjs-starter-etudiants-openclassrooms` comme branche par défaut sur GitHub
   - Les étudiants clonent le repository et obtiennent automatiquement le starter

2. **Pour collaborer sur les ressources formateurs** :
   - Travailler sur la branche actuelle
   - Modifier `p2-dfsjs-archive/ressources-mentors-learning-designers/` si nécessaire

---

## 📚 Ressources externes

### Documentation officielle

- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Concepts clés

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Component Patterns](https://www.patterns.dev/posts/react-component-patterns)

---

## 🔄 Préparation projet suivant

Ce projet pose les bases pour le projet suivant où les étudiants devront **connecter l'application à un backend REST API**.

L'architecture mise en place (notamment le Custom Hook `useOlympicData`) facilite cette migration :

**Migration vers API** (aucun changement dans les composants) :
```typescript
// Dans useOlympicData.ts
const response = await fetch('https://api.telesport.com/olympics');
const data = await response.json();
setData(data);
```

---

## 📝 Licence

Ce projet est destiné à un usage pédagogique dans le cadre d'OpenClassrooms.

---

**Projet généré le 2026-01-13**
