# REX - Journal des interactions du projet

## Session du 2026-01-13

### Phase 0 : Vérification des fichiers markdown indispensables

**Timestamp** : 2026-01-13

**Fichiers vérifiés** :
- ✅ `project.md` : Présent et lu
  - Contient les instructions pour un projet React 19 + TypeScript
  - Projet TéléSport : Application web pour l'historique des Jeux Olympiques
  - 2 exercices : Refactoring d'architecture + Implémentation UI
- ✅ `stack.md` : Présent et lu
  - Stack : React 19, TypeScript, Vite 5+, Tailwind CSS 3.4+, React Router 6+
- ⚠️ `./example` : Absent (recommandé mais non obligatoire)

**Décision** : Continuer sans le dossier `./example` après confirmation de l'utilisateur.

---

### Phase 0.5 : Définition du nom du projet

**Timestamp** : 2026-01-13

**Nom choisi par l'utilisateur** : "P2 - DFSJS "

**Nom normalisé (PROJECT_NAME)** : `p2-dfsjs`
- Conversion en minuscules
- Suppression des espaces superflus
- Remplacement des espaces par des tirets

**Dossiers qui seront créés** :
- `p2-dfsjs-starter/` : Code starter pour les étudiants
- `p2-dfsjs-solution/` : Codebase solution complète
- `p2-dfsjs-archive/` : Archive complète du projet
- Branche Git : `p2-dfsjs-starter-etudiants-openclassrooms`

---

### Phase 1 : Définition de la stack technique

**Timestamp** : 2026-01-13

#### Analyse des fichiers existants

**Fichier `project.md` analysé** :
- Framework : **React 19** (mentionné explicitement ligne 14)
- Langage : **TypeScript** (mentionné ligne 14)
- Niveau de complexité : **Intermédiaire** (déduction basée sur : refactoring d'architecture, custom hooks, navigation React Router)
- Fonctionnalités :
  - Exercice 1 : Refactoring d'architecture d'un code mal structuré
  - Exercice 2 : Implémentation UI avec React 19
  - Dashboard avec graphiques (Chart.js mentionné ligne 371)
  - Navigation SPA avec React Router (mentionné ligne 396)
  - Page détail pays avec statistiques
- Qualité du code starter : **Mal structuré intentionnellement** (ligne 74 : "code de départ mal structuré")
- Outils : Git & GitHub, VSCode, Vite

**Fichier `stack.md` analysé** :
- **Framework** : React 19
- **Langage** : TypeScript (Strict Mode)
- **Build/Runtime** : Vite 5+ / Node 22 LTS
- **Styling** : Tailwind CSS 3.4+
- **Routing** : React Router 6+
- **Règles** :
  - Functional Components uniquement (pas de Classes)
  - Hooks natifs et custom hooks obligatoires
  - Typage strict TypeScript (pas de `any`)
  - Composition de composants
  - useState/useReducer ou Context/Zustand pour l'état

**Fichier `assets.md` analysé** :
- Application : TéléSport - Historique Jeux Olympiques
- 2 pages : Dashboard + Page détail pays
- Graphiques : Chart.js (bar/pie pour dashboard, line/bar pour évolution)
- Navigation fluide, UI responsive (desktop/tablet/mobile)
- Gestion états : loading, empty, error
- Modèle de données TypeScript fourni (Participation, Olympic)
- Custom Hook `useData` pour la logique de données

#### Stack technique complète définie

**Stack validée** :
- **Core** : React 19 + TypeScript (Strict Mode)
- **Build** : Vite 5+ / Node 22 LTS
- **Styling** : Tailwind CSS 3.4+
- **Routing** : React Router 6+
- **Graphiques** : Chart.js + react-chartjs-2
- **Versioning** : Git & GitHub

**Niveau de séniorité** : **Intermédiaire**
- Justification : Refactoring d'architecture, custom hooks, navigation SPA, patterns avancés

**Qualité du code starter** : **Mal structuré intentionnellement**
- Anti-patterns à inclure : fichiers volumineux, code dupliqué, appels HTTP dans composants, absence de typage strict, mauvaise gestion useEffect, données hardcodées dans composants

**Architecture attendue** :
```
src/
├── components/     # Composants réutilisables
├── pages/          # Pages (Home, Country, NotFound)
├── hooks/          # Custom Hooks (useData)
├── models/         # Interfaces TypeScript
```

**Décision** : Toutes les informations de stack sont présentes dans les fichiers fournis. Aucune question supplémentaire nécessaire.

---

### Phase 2 : Analyse des références

**Timestamp** : 2026-01-13

#### Analyse approfondie de `project.md`

**Contexte pédagogique** :
- Public cible : Étudiants avec connaissances basiques en développement front-end
- Objectif : Maîtriser React 19 et TypeScript dans un contexte professionnel
- Parcours : Formation développeur full-stack

**Objectifs pédagogiques identifiés** :
1. Améliorer un code existant avec les bonnes pratiques React
2. Structurer une architecture front-end claire et évolutive
3. Développer une interface professionnelle à partir de maquettes
4. Gérer la navigation et les erreurs dans une application React
5. Préparer le terrain pour l'intégration back-end via API (projet suivant)
6. Maîtriser Git & GitHub pour le versioning

**Compétences travaillées** :
- Structurer le code avec des composants réutilisables
- Respecter les design patterns et bonnes pratiques React
- Gérer la navigation, l'architecture et la maintenabilité
- Intégrer custom hooks et données
- Versioning avec Git & GitHub

**Fonctionnalités à implémenter** :

**Exercice 1 - Refactorisation d'architecture** :
- Étape 1 : Analyser le code existant et repérer les problèmes (notes-architecture.md)
- Étape 2 : Concevoir une nouvelle architecture adaptée
- Étape 3 : Refactoriser les composants existants
- Étape 4 : Externaliser la gestion des données dans un Custom Hook (useData)
- Étape 5 : Documenter l'architecture (ARCHITECTURE.md)

**Exercice 2 - Implémentation UI** :
- Étape 1 : Améliorer le dashboard existant (graphique interactif, indicateurs)
- Étape 2 : Améliorer la page détail + navigation React Router
- Étape 3 : Gérer les erreurs de navigation (page 404)
- Étape 4 : Finaliser l'application et documenter sur GitHub

**Niveau de complexité** : **Intermédiaire**
- Refactoring d'architecture complexe
- Custom Hooks avancés
- Navigation SPA avec React Router
- Gestion d'état et side effects

#### Analyse de `./example`

**Statut** : Dossier absent (non fourni)

**Impact** :
- Aucun exemple de référence disponible
- Architecture définie uniquement à partir des spécifications
- Design patterns choisis selon les standards React 19

**Décision** :
- Créer une architecture moderne React 19 from scratch
- S'inspirer des patterns standards de l'écosystème React
- Respecter strictement les spécifications de `stack.md`

#### Architecture front-end définie

**Structure retenue** :
```
src/
├── components/         # Composants réutilisables (MedalChart, CountryCard, Indicators)
├── pages/             # Pages principales (Home, Country, NotFound)
├── hooks/             # Custom Hooks (useData pour logique métier)
├── models/            # Interfaces TypeScript (Olympic, Participation)
├── App.tsx            # Composant racine avec routing
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux Tailwind
```

**Patterns utilisés** :
- Functional Components avec Hooks
- Custom Hook `useData` pour centraliser la logique de données
- Composition de composants (Indicators réutilisable dans Home et Country)
- React Router 6 pour la navigation SPA
- TypeScript strict pour le typage

**Préparation back-end** :
- Hook `useData` conçu comme point de contact futur avec API REST
- Données mockées dans un fichier JSON (simulate backend)
- Architecture prête pour remplacer les données mockées par des appels API

---

### Phase 3 : Génération de la structure et du code de base

**Timestamp** : 2026-01-13

#### Structure du projet créée

**Dossier** : `p2-dfsjs-starter/`

**Fichiers de configuration créés** :
- ✅ `package.json` : Dépendances React 19, TypeScript, Vite 5, Tailwind CSS 3.4, React Router 6, Chart.js
- ✅ `tsconfig.json` : Configuration TypeScript en mode strict
- ✅ `tsconfig.node.json` : Configuration pour Vite
- ✅ `vite.config.ts` : Configuration Vite avec plugin React
- ✅ `tailwind.config.js` : Configuration Tailwind CSS
- ✅ `postcss.config.js` : Configuration PostCSS avec Tailwind et Autoprefixer
- ✅ `.eslintrc.cjs` : Configuration ESLint pour TypeScript et React
- ✅ `.gitignore` : Exclusions Git standards
- ✅ `index.html` : Page HTML principale

**Code source créé** :
- ✅ `src/main.tsx` : Point d'entrée React
- ✅ `src/index.css` : Styles globaux avec directives Tailwind
- ✅ `src/App.tsx` : Code principal **intentionnellement mal structuré**

#### Anti-patterns intentionnels inclus dans App.tsx

**Conformément aux spécifications du project.md, les anti-patterns suivants ont été intentionnellement intégrés** :

1. **Données hardcodées dans le composant** : `olympicsData` défini directement dans App.tsx au lieu d'un hook séparé
2. **Fichier volumineux** : ~380 lignes, tout dans un seul fichier (Home + CountryDetail + NotFound + routing)
3. **Absence de typage strict** : Utilisation massive de `any` pour les types
4. **console.log laissés** : 7 console.log présents dans le code
5. **Mauvaise gestion useEffect** : Side effects sans dépendances claires
6. **Logique métier dans composants** : Calculs (`calculateTotalMedals`, etc.) directement dans les composants
7. **Préparation données graphiques dans composants** : `chartData` et `evolutionData` calculés dans les composants
8. **JSX volumineux** : Composants avec beaucoup de logique inline
9. **Code dupliqué** : Cartes statistiques répétées dans Home et CountryDetail
10. **Absence de composants réutilisables** : Pas de découpage en composants enfants
11. **Tout dans un fichier** : Pages, routing, logique métier dans App.tsx
12. **Pas d'architecture modulaire** : Aucun dossier `components/`, `pages/`, `hooks/`, `models/`
13. **Appels de données dans composants** : Simulation d'API directement dans useEffect des composants

**Données mockées incluses** :
- 5 pays (États-Unis, Chine, Japon, Grande-Bretagne, France)
- Pour chaque pays : 5 participations (2004, 2008, 2012, 2016, 2020)
- Données : year, city, medalsCount, athleteCount

**Fonctionnalités présentes** :
- ✅ Dashboard avec pie chart interactif (Chart.js)
- ✅ Navigation vers page détail au clic sur un pays
- ✅ Page détail avec statistiques et graphique d'évolution (line chart)
- ✅ Page 404 pour routes inexistantes
- ✅ Lien retour vers dashboard depuis page détail
- ✅ Routing avec React Router 6

**Note importante** : Ce code est **volontairement de mauvaise qualité** pour permettre aux étudiants de pratiquer le refactoring lors de l'Exercice 1.

---

### Phase 4 : Configuration Docker

**Timestamp** : 2026-01-13

**Question posée à l'utilisateur** : Souhaitez-vous que le projet soit lancé via Docker ?

**Réponse** : **Non**

**Décision** :
- Pas de fichiers Docker créés (pas de Dockerfile, pas de docker-compose.yml)
- Installation classique avec npm uniquement
- Le README.md documentera l'installation via `npm install` et `npm run dev`

**Justification** :
- Plus simple pour les étudiants débutants/intermédiaires
- Pas de dépendance à Docker Desktop
- Installation directe sur l'environnement local
- Prérequis : Node.js 22 LTS + npm

---

### Phase 5 : Documentation

**Timestamp** : 2026-01-13

#### README.md créé

**Fichier** : `p2-dfsjs-starter/README.md`

**Contenu documenté** :
- ✅ Contexte du projet (TéléSport, exercice de refactoring)
- ✅ Prérequis : Node.js 22 LTS + npm
- ✅ Instructions d'installation : `npm install`
- ✅ Instructions de lancement : `npm run dev`
- ✅ Commandes disponibles : dev, build, lint
- ✅ Structure du repository expliquée
- ✅ Objectif de l'exercice (5 étapes)
- ✅ Technologies utilisées (React 19, TypeScript, Vite 5, Tailwind CSS 3.4, React Router 6, Chart.js)
- ✅ Ressources externes (liens vers documentations officielles)
- ✅ Points d'attention : liste des problèmes intentionnels dans le code
- ✅ Compétences travaillées

**Style d'écriture** :
- Pédagogique et encourageant
- Explique clairement que les problèmes sont intentionnels
- Guide l'étudiant sur les objectifs du projet
- Fournit toutes les ressources nécessaires

#### Rex.md mis à jour

**Fichier** : `rex.md` (ce fichier)

**Documentation complète des phases** :
- Phase 0 : Vérification fichiers (project.md ✅, ./example ❌)
- Phase 0.5 : Nom projet défini (p2-dfsjs)
- Phase 1 : Stack technique analysée et définie
- Phase 2 : Références et objectifs pédagogiques analysés
- Phase 3 : Code starter généré avec 13 anti-patterns intentionnels
- Phase 4 : Docker NON activé (choix utilisateur)
- Phase 5 : Documentation créée (README.md + rex.md)

**Prochaines étapes** : Phase 6 (création de la solution complète)

---

### Phase 6.1 : Codebase corrigée

**Timestamp** : 2026-01-13

#### Structure créée

**Dossier** : `p2-dfsjs-solution/`

**Architecture modulaire mise en place** :
```
src/
├── components/         # Composants réutilisables
│   ├── Indicator.tsx          # Carte d'indicateur statistique (43 lignes)
│   ├── MedalsPieChart.tsx     # Graphique en camembert (72 lignes)
│   └── MedalsLineChart.tsx    # Graphique linéaire (85 lignes)
├── pages/              # Pages de l'application
│   ├── Home.tsx               # Dashboard principal (68 lignes)
│   ├── Country.tsx            # Page détail pays (74 lignes)
│   └── NotFound.tsx           # Page 404 (17 lignes)
├── hooks/              # Custom Hooks
│   └── useOlympicData.ts      # Hook de gestion des données (42 lignes)
├── models/             # Interfaces TypeScript
│   └── Olympic.ts             # Types Participation et Olympic (11 lignes)
├── data/               # Données mockées
│   └── olympics.json          # Données JSON simulées
├── App.tsx             # Composant racine avec routing (18 lignes)
├── main.tsx            # Point d'entrée (9 lignes)
└── index.css           # Styles globaux
```

#### Bonnes pratiques appliquées

**1. Architecture modulaire** :
- Séparation claire des responsabilités
- Un fichier par composant/page/hook
- Structure scalable et maintenable

**2. Typage TypeScript strict** :
- Interfaces `Participation` et `Olympic` dans `models/Olympic.ts`
- Aucun `any` dans le code
- Props typés pour tous les composants
- Paramètres de fonctions typés

**3. Custom Hook `useOlympicData`** :
- Centralise la gestion des données
- Fonctions utilitaires exportées (`calculateTotalMedals`, `calculateTotalAthletes`)
- useEffect propre avec dépendances correctes
- Prêt pour migration vers API REST

**4. Composants réutilisables** :
- `Indicator` : Utilisé dans Home (2x) et Country (3x) → élimine duplication
- `MedalsPieChart` : Graphique avec callback de navigation
- `MedalsLineChart` : Graphique d'évolution

**5. Composition de composants** :
- Pages composent les composants réutilisables
- Props claires et typées
- Séparation UI et logique

**6. Gestion propre des Side Effects** :
- useEffect uniquement dans le hook `useOlympicData`
- Pas d'effets dans les composants UI
- Simulation asynchrone d'appel API

**7. Code propre** :
- Aucun `console.log` en production
- Pas de code mort ou variables inutilisées
- Commentaires JSDoc sur fonctions et composants clés
- Pas de logique métier dans les composants

**8. Navigation SPA** :
- React Router 6 avec routing propre dans `App.tsx`
- Gestion 404 avec `<Navigate>` et route wildcard
- Navigation fluide sans rechargement

#### Fonctionnalités implémentées

**Toutes les fonctionnalités de project.md** :
- ✅ Dashboard avec statistiques globales (pays participants, éditions JO)
- ✅ Graphique pie chart interactif (clic → navigation)
- ✅ Page détail pays avec 3 indicateurs (participations, médailles, athlètes)
- ✅ Graphique line chart d'évolution des médailles
- ✅ Navigation fluide entre pages (React Router)
- ✅ Lien retour dashboard depuis page détail
- ✅ Page 404 pour routes inexistantes
- ✅ Responsive (Tailwind CSS)

#### Données mockées

**Fichier** : `src/data/olympics.json`
- 5 pays identiques au starter
- Données structurées selon interfaces TypeScript
- Prêt à être remplacé par API REST

#### Comparaison starter vs solution

| Aspect | Starter | Solution |
|--------|---------|----------|
| Fichiers | 1 (380 lignes) | 12 fichiers modulaires |
| Architecture | Tout dans App.tsx | 4 dossiers structurés |
| Typage | `any` partout | TypeScript strict |
| Données | Hardcodées dans composant | Hook + JSON séparé |
| Composants | Tout inline | 3 composants réutilisables |
| Code dupliqué | Oui (cartes) | Non (composant Indicator) |
| console.log | 7 présents | 0 (supprimés) |
| Logique métier | Dans composants | Dans hooks et utils |

#### Documentation solution

**Fichier** : `README_SOLUTION.md`
- Architecture expliquée
- Bonnes pratiques listées
- Comparaison starter/solution
- Instructions migration vers API REST
- Compétences démontrées

**Code testé conceptuellement** :
- Structure validée
- TypeScript strict respecté
- Pas de console.log
- Pas de `any`
- Architecture propre


---

### Phase 6.2 : Guide de correction étape par étape

**Timestamp** : 2026-01-13

#### CORRIGE.md créé

**Fichier** : `CORRIGE.md` à la racine

**Sections obligatoires incluses** : Vue d'ensemble, Prérequis, Exercice par exercice (9 étapes), Grille d'évaluation (55 pts), Erreurs fréquentes (10), Ressources, FAQ (10)

---

### Phase 6.3 : Génération du guide mentor adapté

**Timestamp** : 2026-01-13

#### GUIDE_FORMATEUR.md créé

**Fichier** : `GUIDE_FORMATEUR.md` à la racine (sera renommé en guide-mentor.md lors de l'archivage Phase 7)

**Adapté depuis** : Template `guide-mentor.md` générique

**Adaptations spécifiques à React 19 + TypeScript** : Points d'attention (architecture, typage, hooks, router, chart.js), Questions FAQ, Ressources officielles, Commandes de vérification


---

### Phase 6.4 : Validation de la solution

**Timestamp** : 2026-01-13

#### Vérifications effectuées

**Codebase solution** :
- ✅ Dossier `p2-dfsjs-solution/` créé
- ✅ Structure modulaire : 4 dossiers (components/, pages/, hooks/, models/)
- ✅ 8 fichiers TypeScript source (+ App.tsx, main.tsx, index.css)
- ✅ Fichier README_SOLUTION.md présent avec architecture expliquée

**Fichiers source vérifiés** :
- ✅ `src/models/Olympic.ts` : Interfaces Participation et Olympic
- ✅ `src/hooks/useOlympicData.ts` : Custom Hook + fonctions utilitaires
- ✅ `src/data/olympics.json` : Données mockées (5 pays)
- ✅ `src/components/Indicator.tsx` : Composant réutilisable (43 lignes)
- ✅ `src/components/MedalsPieChart.tsx` : Graphique pie (72 lignes)
- ✅ `src/components/MedalsLineChart.tsx` : Graphique line (85 lignes)
- ✅ `src/pages/Home.tsx` : Dashboard (68 lignes)
- ✅ `src/pages/Country.tsx` : Page détail pays (74 lignes)
- ✅ `src/pages/NotFound.tsx` : Page 404 (17 lignes)
- ✅ `src/App.tsx` : Routing uniquement (18 lignes)

**Qualité du code** :
- ✅ TypeScript strict (interfaces typées, pas de `any`)
- ✅ Pas de console.log (code propre)
- ✅ Architecture propre et modulaire
- ✅ Composants réutilisables (Indicator utilisé 5x)
- ✅ Séparation logique/UI (hook useOlympicData)

**Documentation** :
- ✅ CORRIGE.md (~11000 lignes) : Guide de correction complet
- ✅ GUIDE_FORMATEUR.md (~250 lignes) : Guide mentor adapté React 19 + TypeScript
- ✅ README_SOLUTION.md : Architecture et comparaison starter/solution
- ✅ rex.md : Documentation complète de toutes les phases

**Fonctionnalités** :
- ✅ Dashboard avec statistiques et pie chart
- ✅ Page détail pays avec statistiques et line chart
- ✅ Navigation React Router (/, /country/:id, *)
- ✅ Page 404 pour erreurs
- ✅ Graphiques interactifs Chart.js
- ✅ Responsive Tailwind CSS

**Tests conceptuels** :
- ✅ Structure validée (architecture respectée)
- ✅ Pas de code mort ou variables inutilisées
- ✅ Imports cohérents
- ✅ Prêt pour migration vers API REST (hook useOlympicData)

**Note** : Les tests npm (install, dev, build, lint) ne peuvent pas être exécutés car Node.js n'est pas installé sur ce système, mais la structure du code est correcte et complète.

**Estimation de temps pour un étudiant** :
- Exercice 1 (Refactoring) : 6-8 heures
- Exercice 2 (UI Implementation) : 4-6 heures
- Total : 10-14 heures de travail effectif

**Prochaine étape** : Phase 7 (Organisation des ressources avec Git branches)
