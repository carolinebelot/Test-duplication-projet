# CodebaseFactory - Générateur de Projets Pédagogiques

Factory pour générer des projets pédagogiques complets selon le workflow AGENTS.md.

---

## 📚 Structure du repository

```
CodebaseFactory/
│
├── README.md                    # Ce fichier
├── AGENTS.md                    # Workflow de génération
├── SETUP-GITHUB.md              # Guide GitHub
├── guide-mentor.md              # Template guide mentor
│
├── project.md                   # Specs pédagogiques (template/actuel)
├── stack.md                     # Stack technique (template/actuel)
├── assets.md                    # Assets (template/actuel)
│
└── [nom-projet]-archive/        # Archives des projets générés
    ├── README.md
    ├── fichiers-de-configuration/         # Configuration du projet
    ├── [nom-projet]-starter/              # Code starter
    ├── [nom-projet]-solution/             # Code solution
    └── ressources-mentors-learning-designers/  # Ressources pédagogiques
```

---

## 🎯 Projets générés

### ✅ P2 - DFSJS - TéléSport

**Archive** : [p2-dfsjs-telesport-archive/](./p2-dfsjs-telesport-archive/)

Application React 19 + TypeScript pour visualiser les performances olympiques.

**Approche pédagogique** : Refactorisation de code intentionnellement mal structuré.

**Contenu** :
- Code starter avec 8 anti-patterns pédagogiques
- Solution avec architecture professionnelle
- corrige.md (1400+ lignes), guide-mentor.md (1200+ lignes), REX.md (800+ lignes)

**Voir** : [p2-dfsjs-telesport-archive/README.md](./p2-dfsjs-telesport-archive/README.md)

---

## 📦 Accès rapide TéléSport

Ce repository utilise **deux espaces Git distincts** pour séparer étudiants et formateurs :

### 1. 👨‍🎓 Pour les étudiants
**Branche** : `p2-dfsjs-telesport-starter-etudiants-openclassrooms`

Code starter (intentionnellement mal structuré) que les étudiants doivent refactoriser.

```bash
git clone <url-repo> -b p2-dfsjs-telesport-starter-etudiants-openclassrooms
cd p2-dfsjs-telesport-starter
npm install
npm run dev
```

### 2. 👨‍🏫 Pour les mentors et Learning Designers
**Archive complète** : [p2-dfsjs-telesport-archive/](./p2-dfsjs-telesport-archive/)

Accessible sur la branche `setup-projetv2`, contient :
- **Code starter et solution**
- **Ressources pédagogiques** :
  - [guide-mentor.md](./p2-dfsjs-telesport-archive/ressources-mentors-learning-designers/guide-mentor.md) - Guide formateurs (1200+ lignes)
  - [corrige.md](./p2-dfsjs-telesport-archive/ressources-mentors-learning-designers/corrige.md) - Corrections détaillées (1400+ lignes)
- **Documentation technique** :
  - [REX.md](./p2-dfsjs-telesport-archive/fichiers-de-configuration/REX.md) - Retour d'expérience (800+ lignes)
  - [SUMMARY_SETUP.md](./p2-dfsjs-telesport-archive/fichiers-de-configuration/SUMMARY_SETUP.md) - Résumé du setup

---

## 🎯 Objectifs pédagogiques

Les étudiants vont apprendre à :
- ✅ Analyser et identifier les problèmes dans du code React existant
- ✅ Concevoir une architecture front-end claire et modulaire
- ✅ Refactoriser du code vers des bonnes pratiques React 19
- ✅ Utiliser TypeScript en mode strict (bannir le `any`)
- ✅ Créer des Custom Hooks pour centraliser la logique métier
- ✅ Gérer la navigation avec React Router
- ✅ Implémenter une gestion d'erreur complète (404, données manquantes)
- ✅ Préparer l'architecture pour une intégration API future

---

## 🛠️ Stack technique

| Technologie | Version | Utilisation |
|-------------|---------|-------------|
| React | 19 | Bibliothèque UI (Functional Components) |
| TypeScript | 5.x | Typage strict |
| Vite | 5+ | Build tool ultra-rapide |
| React Router | 6+ | Navigation SPA |
| Tailwind CSS | 3.4+ | Styling utility-first |
| Chart.js | 4.x | Visualisation de données |

---

## 📖 Description du projet

### Contexte

TéléSport, une chaîne de télévision nationale, souhaite publier une page web interactive dédiée à l'historique des Jeux Olympiques. L'application doit afficher :
- Un **dashboard** avec statistiques globales et graphique interactif
- Une **page détail** pour chaque pays avec performances détaillées
- Une **navigation fluide** entre les pages (SPA)
- Une **gestion d'erreur** professionnelle (404, données manquantes)

### Approche pédagogique

**Particularité** : Approche "inversée" - au lieu de partir de zéro, les étudiants reçoivent du code **intentionnellement mal structuré** qu'ils doivent refactoriser.

Cette approche simule une situation d'entreprise réelle et développe l'œil critique.

### Exercices

**Exercice 1 : Refactorisation de l'architecture** (5 étapes)
1. Analyser le code existant et identifier les problèmes
2. Concevoir une nouvelle architecture adaptée
3. Refactoriser les composants
4. Externaliser la gestion des données dans un Custom Hook
5. Documenter l'architecture

**Exercice 2 : Implémentation de l'interface** (4 étapes)
1. Améliorer le dashboard existant
2. Améliorer la page détail et navigation
3. Gérer les erreurs (404, pays inexistant)
4. Finaliser et documenter

---

## 🗂️ Organisation du repository

### Branche `setup-projetv2` (formateurs)

```
CodebaseFactory/
│
├── README.md                                    # Ce fichier
├── project.md                                   # Spécifications pédagogiques (template)
├── stack.md                                     # Stack technique (template)
├── assets.md                                    # Données et maquettes (template)
├── AGENTS.md                                    # Workflow de génération
├── SETUP-GITHUB.md                              # Guide configuration GitHub
├── guide-mentor.md                              # Template guide mentor (générique)
│
└── p2-dfsjs-telesport-archive/                  # Archive du projet TéléSport
    ├── README.md                                # Navigation de l'archive
    │
    ├── fichiers-de-configuration/               # Configuration du projet
    │   ├── project.md
    │   ├── stack.md
    │   ├── assets.md
    │   ├── REX.md
    │   └── SUMMARY_SETUP.md
    │
    ├── p2-dfsjs-telesport-starter/              # Code starter
    │   ├── src/App.tsx
    │   ├── package.json
    │   └── README.md
    │
    ├── p2-dfsjs-telesport-solution/             # Code solution
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── hooks/
    │   │   └── models/
    │   └── README_SOLUTION.md
    │
    └── ressources-mentors-learning-designers/   # Ressources pédagogiques
        ├── guide-mentor.md                      # Guide formateurs adapté
        └── corrige.md                           # Corrections détaillées
```

### Branche `p2-dfsjs-telesport-starter-etudiants-openclassrooms` (étudiants)

```
/
├── README.md              # Instructions étudiants
├── package.json
├── vite.config.ts
└── src/
    ├── App.tsx           # Code intentionnellement mal structuré
    ├── main.tsx
    └── index.css
```

---

## 🚀 Quick Start

### Pour les étudiants

1. Clonez la branche starter :
   ```bash
   git clone <url-repo> -b p2-dfsjs-telesport-starter-etudiants-openclassrooms
   ```

2. Installez et lancez :
   ```bash
   npm install
   npm run dev
   ```

3. Lisez le README et identifiez les problèmes du code

### Pour les mentors et formateurs

1. Clonez la branche complète :
   ```bash
   git clone <url-repo>
   cd CodebaseFactory
   ```

2. Consultez l'archive du projet :
   - [guide-mentor.md](./p2-dfsjs-telesport-archive/ressources-mentors-learning-designers/guide-mentor.md) - Conseils pédagogiques et FAQ
   - [corrige.md](./p2-dfsjs-telesport-archive/ressources-mentors-learning-designers/corrige.md) - Corrections détaillées

3. Testez le starter :
   ```bash
   cd p2-dfsjs-telesport-archive/p2-dfsjs-telesport-starter
   npm install && npm run dev
   ```

4. Explorez la solution :
   ```bash
   cd ../p2-dfsjs-telesport-solution
   npm install && npm run dev
   ```

### Pour les Learning Designers

1. Consultez la documentation technique :
   - [REX.md](./p2-dfsjs-telesport-archive/fichiers-de-configuration/REX.md) - Retour d'expérience complet
   - [SUMMARY_SETUP.md](./p2-dfsjs-telesport-archive/fichiers-de-configuration/SUMMARY_SETUP.md) - Résumé du setup

2. Analysez l'architecture de la solution dans [p2-dfsjs-telesport-solution/](./p2-dfsjs-telesport-archive/p2-dfsjs-telesport-solution/)

---

## 📊 Anti-patterns du starter code

Le code starter inclut **volontairement** ces problèmes (à identifier par les étudiants) :

1. ❌ **Architecture monolithique** : Tout dans un seul fichier App.tsx (>400 lignes)
2. ❌ **Données en dur** : Tableau statique directement dans le composant
3. ❌ **Typage laxiste** : `any` partout, perte des avantages TypeScript
4. ❌ **useEffect incorrect** : Pas de tableau de dépendances → boucle infinie
5. ❌ **Code de debug** : `console.log()` oubliés
6. ❌ **Logique dans JSX** : Calculs complexes directement dans le render
7. ❌ **Pas de gestion d'erreur** : Aucune page 404, pas de vérifications
8. ❌ **Code dupliqué** : Composants non réutilisables

---

## ✅ Bonnes pratiques de la solution

Le code solution applique ces principes :

1. ✅ **Architecture modulaire** : components/, pages/, hooks/, models/
2. ✅ **Custom Hook** : `useOlympicData` centralise la logique de données
3. ✅ **Typage strict** : Interface `Olympic`, aucun `any`
4. ✅ **Composants réutilisables** : Header, StatsCard, Loading, ErrorMessage
5. ✅ **Optimisation** : `useMemo` pour éviter les recalculs
6. ✅ **Gestion d'erreur** : Page 404, vérifications, messages clairs
7. ✅ **React Router** : Navigation propre avec route catch-all
8. ✅ **Code propre** : Lint OK, build OK, aucun console.log

---

## 📈 Indicateurs de réussite

### Le projet est validé si :

- [x] L'étudiant identifie tous les anti-patterns du starter
- [x] L'architecture proposée est claire (components, pages, hooks, models)
- [x] Le code final est typé strictement (aucun `any`)
- [x] Un Custom Hook centralise la logique de données
- [x] Dashboard fonctionnel avec graphique interactif
- [x] Page détail avec navigation fluide
- [x] Gestion complète des erreurs (404, pays inexistant)
- [x] Code propre (lint + build OK)
- [x] Documentation présente (README, ARCHITECTURE)

---

## 🎓 Progression pédagogique

Ce projet fait partie d'un parcours progressif :

**Projet actuel (P2)** : React 19 + TypeScript - Refactorisation et architecture
- Focus : Fondamentaux React, typage, architecture

**Projet suivant (P3)** : Intégration API REST
- Focus : Fetch, async/await, gestion d'états asynchrones
- Bénéfice : L'architecture P2 facilite l'intégration

**Projet P4** : State management complexe
- Focus : Redux ou Zustand pour états globaux

**Projet P5** : Tests et qualité
- Focus : Vitest (tests unitaires) + Playwright (E2E)

**Projet P6+** : Authentification, CI/CD, déploiement
- Focus : JWT, GitHub Actions, production

---

## 📚 Ressources

### Documentation officielle
- [React 19](https://react.dev) - Documentation officielle
- [TypeScript](https://www.typescriptlang.org/docs/) - Handbook complet
- [React Router](https://reactrouter.com/) - Routing React
- [Tailwind CSS](https://tailwindcss.com/docs) - Framework CSS
- [Chart.js](https://www.chartjs.org/docs/) - Visualisation de données
- [Vite](https://vitejs.dev/guide/) - Build tool

### Cours OpenClassrooms
- [PLACEHOLDER COURS] - Fondamentaux React
- [PLACEHOLDER COURS] - TypeScript pour React
- [PLACEHOLDER COURS] - Architecture front-end
- [PLACEHOLDER COURS] - Git & GitHub

---

## 🤝 Contribution

Ce projet est généré automatiquement selon le workflow `AGENTS.md`.

### Workflow de génération

1. **Phase 0** : Vérification fichiers requis (project.md, stack.md, assets.md)
2. **Phase 1** : Extraction stack technique
3. **Phase 3** : Génération starter code (anti-patterns)
4. **Phase 6** : Génération solution + documentation mentor
5. **Phase 5** : REX et documentation LD
6. **Phase 7** : Organisation structure Git

**Total généré** : 34 fichiers, ~3950 lignes (code + docs)

---

## 📞 Contact & Support

**Learning Designer** : [À compléter]
**Issues & Feedback** : [À compléter]
**Repository** : [À compléter]

---

## 📝 Licence

Projet pédagogique OpenClassrooms - Parcours Développeur Full-Stack JavaScript

**Version** : 1.0
**Date** : 2026-01-13

---

## 🎯 Résumé Express

**Pour les étudiants** :
- 👉 Clonez la branche `p2-dfsjs-telesport-starter-etudiants-openclassrooms`
- 📖 Lisez le README du starter
- 🔍 Identifiez les problèmes du code
- 🛠️ Refactorisez selon les bonnes pratiques React 19

**Pour les mentors** :
- 👉 Consultez [guide-mentor.md](./p2-dfsjs-telesport-archive/ressources-mentors-learning-designers/guide-mentor.md)
- 📖 Utilisez [corrige.md](./p2-dfsjs-telesport-archive/ressources-mentors-learning-designers/corrige.md) pour corriger
- ✅ Validez avec la grille d'évaluation

**Pour les Learning Designers** :
- 👉 Consultez [SUMMARY_SETUP.md](./p2-dfsjs-telesport-archive/fichiers-de-configuration/SUMMARY_SETUP.md)
- 📖 Lisez [REX.md](./p2-dfsjs-telesport-archive/fichiers-de-configuration/REX.md)
- 🎨 Explorez la solution de référence

---

**Bon projet ! 🚀**
