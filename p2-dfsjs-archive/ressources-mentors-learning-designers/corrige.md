# CORRIGE.md - Guide de correction TéléSport

## Vue d'ensemble

### Architecture globale de la solution

Le projet TéléSport est une application React 19 permettant de visualiser l'historique des Jeux Olympiques. La solution finale adopte une architecture modulaire et scalable basée sur les best practices React.

**Structure de la solution** :
```
src/
├── components/         # Composants réutilisables
│   ├── Indicator.tsx
│   ├── MedalsPieChart.tsx
│   └── MedalsLineChart.tsx
├── pages/              # Pages de l'application
│   ├── Home.tsx
│   ├── Country.tsx
│   └── NotFound.tsx
├── hooks/              # Custom Hooks
│   └── useOlympicData.ts
├── models/             # Interfaces TypeScript
│   └── Olympic.ts
├── data/               # Données mockées
│   └── olympics.json
├── App.tsx             # Routing
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux
```

**Principes architecturaux appliqués** :
- Séparation des responsabilités (SoC)
- Composition de composants
- Custom Hooks pour la logique métier
- TypeScript strict
- DRY (Don't Repeat Yourself)

---

## Prérequis

### Connaissances nécessaires avant de commencer

**Connaissances React** :
- Functional Components
- Hooks de base (useState, useEffect)
- Props et props drilling
- Composition de composants

**Connaissances TypeScript** :
- Interfaces et types
- Typage des props
- Typage des fonctions

**Connaissances outils** :
- React Router (navigation SPA)
- Git et GitHub
- npm et gestion de dépendances
- Vite (build tool)

**Concepts importants** :
- Architecture front-end modulaire
- Custom Hooks
- Side Effects et leur gestion
- Single Responsibility Principle

---

## Exercice 1 : Refactorisation d'architecture

### Objectif pédagogique

**Compétences travaillées** :
- Analyse critique de code existant
- Conception d'architecture front-end
- Refactoring avec les bonnes pratiques React
- Séparation des responsabilités
- Création de Custom Hooks

**Ce que l'étudiant doit comprendre** :
- Pourquoi une bonne architecture est essentielle
- Comment identifier les anti-patterns
- Comment structurer un projet React scalable
- Le rôle des Custom Hooks dans la séparation logique/UI

---

### Solution détaillée

#### Étape 1.1 : Analyser le code existant et repérer les problèmes

**Ce qu'il faut faire** :
1. Cloner le starter code depuis GitHub
2. Lancer l'application avec `npm install` puis `npm run dev`
3. Explorer le fichier `App.tsx` (le seul fichier source)
4. Identifier tous les problèmes et anti-patterns
5. Créer un fichier `notes-architecture.md` avec la liste des problèmes

**Explication technique** :

Le code starter contient **intentionnellement** de nombreux anti-patterns pour permettre l'apprentissage :

1. **Fichier monolithique** : Tout est dans `App.tsx` (~380 lignes)
2. **Données hardcodées** : `olympicsData` défini en dur dans le composant
3. **Typage laxiste** : Utilisation de `any` au lieu d'interfaces strictes
4. **Console.log oubliés** : 7 console.log dans le code de production
5. **useEffect mal géré** : Pas de cleanup, dépendances manquantes
6. **Logique métier dans UI** : Calculs directement dans les composants
7. **Code dupliqué** : Cartes statistiques répétées dans Home et CountryDetail
8. **Pas de composants réutilisables** : Tout est inline dans le JSX
9. **Absence d'architecture** : Pas de dossiers `components/`, `pages/`, `hooks/`, `models/`

**Pourquoi c'est problématique** :
- Code difficile à maintenir et à tester
- Impossible de réutiliser les composants
- Risque de bugs (typage `any`)
- Mauvaise séparation logique/UI
- Pas scalable pour un projet réel

**Code de référence** :

Exemple de problème dans le starter :
```typescript
// ❌ Anti-pattern : Données hardcodées + type any
const olympicsData: any = [
  {
    id: 1,
    country: 'États-Unis',
    participations: [...]
  }
]

// ❌ Anti-pattern : Logique métier dans le composant
const calculateTotalMedals = (country: any) => {
  return country.participations.reduce((sum: any, p: any) => sum + p.medalsCount, 0)
}
```

**Points de vigilance** :
- L'étudiant doit identifier **tous** les problèmes, pas seulement les plus évidents
- Vérifier que le fichier `notes-architecture.md` est créé
- L'étudiant doit comprendre **pourquoi** chaque point est problématique
- Ne pas se contenter de "ça marche" - la maintenabilité compte

**Fichiers concernés** :
- `src/App.tsx` (à analyser)
- `notes-architecture.md` (à créer à la racine)

---

#### Étape 1.2 : Concevoir une nouvelle architecture adaptée

**Ce qu'il faut faire** :
1. Définir une structure de dossiers claire (`components/`, `pages/`, `hooks/`, `models/`)
2. Identifier les composants à créer (Indicator, MedalsPieChart, MedalsLineChart)
3. Identifier les pages (Home, Country, NotFound)
4. Planifier le Custom Hook `useOlympicData`
5. Définir les interfaces TypeScript nécessaires
6. Créer un schéma ou une liste dans `notes-architecture.md`

**Explication technique** :

**Architecture proposée** :
```
src/
├── components/         # Composants réutilisables UI
│   ├── Indicator.tsx          # Carte statistique générique
│   ├── MedalsPieChart.tsx     # Graphique camembert
│   └── MedalsLineChart.tsx    # Graphique évolution
├── pages/              # Pages complètes (routes)
│   ├── Home.tsx               # Dashboard principal
│   ├── Country.tsx            # Détail pays
│   └── NotFound.tsx           # Page 404
├── hooks/              # Custom Hooks (logique métier)
│   └── useOlympicData.ts      # Gestion des données
├── models/             # Interfaces TypeScript
│   └── Olympic.ts             # Types Participation et Olympic
├── data/               # Données mockées (future API)
│   └── olympics.json
├── App.tsx             # Routing uniquement
└── main.tsx            # Point d'entrée
```

**Principes de cette architecture** :
- **Séparation UI/Logique** : Les composants ne contiennent que du JSX, la logique est dans les hooks
- **Réutilisabilité** : `Indicator` est utilisé 5 fois (2x Home, 3x Country)
- **Scalabilité** : Facile d'ajouter de nouveaux composants ou pages
- **Testabilité** : Chaque fichier peut être testé indépendamment
- **Maintenabilité** : Structure claire et intuitive

**Pourquoi cette structure** :
- `components/` : Composants sans état ou avec état local, réutilisables
- `pages/` : Composants liés à une route spécifique
- `hooks/` : Logique métier, appels API futurs
- `models/` : Contrat de données TypeScript
- `data/` : Simule un backend (sera remplacé par fetch() plus tard)

**Code de référence** :

```markdown
## Architecture proposée (notes-architecture.md)

### Structure des dossiers
- components/ : UI réutilisables
- pages/ : Composants de route
- hooks/ : Logique métier
- models/ : Types TypeScript

### Composants à créer
1. Indicator : Carte statistique (titre + valeur + couleur)
2. MedalsPieChart : Graphique camembert avec onClick
3. MedalsLineChart : Graphique évolution linéaire

### Pages à créer
1. Home : Dashboard avec statistiques et pie chart
2. Country : Détail pays avec statistiques et line chart
3. NotFound : Page 404

### Custom Hook
- useOlympicData : Centralise la gestion des données

### Interfaces TypeScript
- Participation : { id, year, city, medalsCount, athleteCount }
- Olympic : { id, country, participations }
```

**Points de vigilance** :
- L'architecture doit être **justifiée**, pas copiée sans réflexion
- Vérifier que l'étudiant comprend **pourquoi** séparer components/ et pages/
- S'assurer que le hook `useOlympicData` est bien identifié comme point d'accès aux données
- L'étudiant doit anticiper la future connexion à une API

**Fichiers concernés** :
- `notes-architecture.md` (mise à jour avec le schéma)

---

#### Étape 1.3 : Refactoriser les composants existants en appliquant l'architecture

**Ce qu'il faut faire** :
1. Créer les dossiers `src/components/`, `src/pages/`, `src/hooks/`, `src/models/`
2. Créer les interfaces TypeScript dans `src/models/Olympic.ts`
3. Extraire les composants réutilisables (Indicator, MedalsPieChart, MedalsLineChart)
4. Créer les pages (Home, Country, NotFound)
5. Déplacer le routing dans `App.tsx` (uniquement le routing)
6. Tester que l'application compile et fonctionne

**Explication technique** :

**Ordre de refactoring recommandé** :
1. **Models d'abord** : Créer les interfaces TypeScript
2. **Composants réutilisables** : Commencer par Indicator (le plus simple)
3. **Composants graphiques** : MedalsPieChart et MedalsLineChart
4. **Pages** : Home, Country, NotFound
5. **App.tsx** : Simplifier pour garder uniquement le routing

**Exemple : Création du composant Indicator**

```typescript
// src/components/Indicator.tsx
interface IndicatorProps {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'yellow';
}

export const Indicator = ({ title, value, color }: IndicatorProps) => {
  const colorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-4xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  );
};
```

**Pourquoi ce composant est bon** :
- Props typés strictement (TypeScript)
- Réutilisable (peut afficher n'importe quelle stat)
- Single Responsibility (affiche juste un indicateur)
- Pas de logique métier (juste de l'affichage)

**Exemple : Création des interfaces TypeScript**

```typescript
// src/models/Olympic.ts
export interface Participation {
  id: number;
  year: number;
  city: string;
  medalsCount: number;
  athleteCount: number;
}

export interface Olympic {
  id: number;
  country: string;
  participations: Participation[];
}
```

**Code de référence** :

```typescript
// src/pages/Home.tsx (version simplifiée, sans le hook encore)
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Indicator } from '../components/Indicator';
import { MedalsPieChart } from '../components/MedalsPieChart';
import { Olympic } from '../models/Olympic';
import olympicsDataMock from '../data/olympics.json';

export const Home = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Temporaire : sera remplacé par le hook à l'étape suivante
    setData(olympicsDataMock as Olympic[]);
  }, []);

  const handleCountryClick = (countryId: number) => {
    navigate(`/country/${countryId}`);
  };

  if (data.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1>Historique des Jeux Olympiques</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Indicator title="Pays participants" value={data.length} color="blue" />
        <Indicator title="Éditions des JO" value={5} color="green" />
      </div>

      <MedalsPieChart data={data} onCountryClick={handleCountryClick} />
    </div>
  );
};
```

**Points de vigilance** :
- **Imports** : Vérifier que tous les imports sont corrects après déplacement
- **Typage** : Plus de `any`, tout doit être typé
- **console.log** : Tous supprimés
- **Compilation** : L'application doit compiler sans erreurs TypeScript
- **Tests manuels** : Lancer `npm run dev` et vérifier que tout fonctionne
- **Git commits** : Encourager des commits atomiques (un par composant créé)

**Erreurs fréquentes** :
- Oublier d'exporter les composants (`export const` ou `export default`)
- Mauvais chemins d'imports relatifs (`../` vs `./`)
- Oublier de supprimer l'ancien code de `App.tsx`
- Laisser des `any` dans le code
- Ne pas tester après chaque modification

**Fichiers concernés** :
- `src/models/Olympic.ts` (à créer)
- `src/components/Indicator.tsx` (à créer)
- `src/components/MedalsPieChart.tsx` (à créer)
- `src/components/MedalsLineChart.tsx` (à créer)
- `src/pages/Home.tsx` (à créer)
- `src/pages/Country.tsx` (à créer)
- `src/pages/NotFound.tsx` (à créer)
- `src/App.tsx` (à refactoriser - garder uniquement routing)

---

#### Étape 1.4 : Externaliser la gestion des données dans un Custom Hook

**Ce qu'il faut faire** :
1. Créer le fichier `src/hooks/useOlympicData.ts`
2. Déplacer les données mockées vers `src/data/olympics.json`
3. Créer le Custom Hook `useOlympicData` qui retourne les données
4. Créer les fonctions utilitaires `calculateTotalMedals` et `calculateTotalAthletes`
5. Remplacer l'utilisation directe des données dans les pages par le hook
6. Tester que tout fonctionne toujours

**Explication technique** :

**Pourquoi un Custom Hook** :
- **Séparation logique/UI** : Les pages ne gèrent que l'affichage
- **Réutilisabilité** : Le hook peut être utilisé dans plusieurs composants
- **Point d'accès unique aux données** : Facilite la future migration vers API
- **Testabilité** : Le hook peut être testé indépendamment

**Architecture du hook** :
```typescript
// src/hooks/useOlympicData.ts
import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';
import olympicsDataMock from '../data/olympics.json';

export const useOlympicData = (): Olympic[] => {
  const [data, setData] = useState<Olympic[]>([]);

  useEffect(() => {
    // Simulation d'un appel API asynchrone
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      setData(olympicsDataMock as Olympic[]);
    };

    loadData();
  }, []); // Dépendances vides : chargement au mount uniquement

  return data;
};

// Fonctions utilitaires exportées
export const calculateTotalMedals = (olympic: Olympic): number => {
  return olympic.participations.reduce((sum, p) => sum + p.medalsCount, 0);
};

export const calculateTotalAthletes = (olympic: Olympic): number => {
  return olympic.participations.reduce((sum, p) => sum + p.athleteCount, 0);
};
```

**Utilisation du hook dans une page** :

```typescript
// src/pages/Home.tsx
import { useOlympicData } from '../hooks/useOlympicData';

export const Home = () => {
  const data = useOlympicData(); // ✅ Simple et propre

  if (data.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    // ... JSX
  );
};
```

**Préparation pour API future** :

Actuellement :
```typescript
// Données mockées
setData(olympicsDataMock as Olympic[]);
```

Future migration (aucun changement dans les composants !) :
```typescript
// API réelle
const response = await fetch('https://api.telesport.com/olympics');
const data = await response.json();
setData(data);
```

**Code de référence** :

Voir le code complet dans `p2-dfsjs-solution/src/hooks/useOlympicData.ts`

**Points de vigilance** :
- **Dépendances useEffect** : Le tableau vide `[]` est correct ici (chargement une seule fois)
- **Type de retour** : Le hook doit retourner `Olympic[]`, pas `any`
- **Fonctions utilitaires** : Doivent être exportées pour être réutilisables
- **Pas de logique UI** : Le hook ne doit contenir aucun JSX
- **Tests** : Vérifier que les pages utilisent bien le hook et pas les données en dur

**Erreurs fréquentes** :
- Oublier d'exporter les fonctions utilitaires
- Laisser des données en dur dans les composants
- Ne pas gérer le cas `data.length === 0` (chargement)
- Mauvaise gestion des dépendances `useEffect`

**Fichiers concernés** :
- `src/hooks/useOlympicData.ts` (à créer)
- `src/data/olympics.json` (à créer)
- `src/pages/Home.tsx` (à modifier pour utiliser le hook)
- `src/pages/Country.tsx` (à modifier pour utiliser le hook)

---

#### Étape 1.5 : Documenter l'architecture et validez-la

**Ce qu'il faut faire** :
1. Créer un fichier `ARCHITECTURE.md` à la racine
2. Documenter la structure des dossiers
3. Décrire le rôle de chaque composant et hook
4. Expliquer comment l'architecture prépare la future connexion API
5. Ajouter des exemples de code clés
6. Valider avec le mentor si nécessaire

**Explication technique** :

Le fichier `ARCHITECTURE.md` sert de documentation technique pour :
- Les nouveaux développeurs rejoignant le projet
- Les mentors évaluant le travail
- L'étudiant lui-même (référence future)

**Structure recommandée du fichier** :

```markdown
# Architecture du projet TéléSport

## Vue d'ensemble
[Description générale de l'application]

## Structure des dossiers
[Arborescence avec explications]

## Composants
### Indicator
- **Rôle** : Afficher une statistique (titre + valeur + couleur)
- **Props** : title, value, color
- **Utilisé dans** : Home (2x), Country (3x)

### MedalsPieChart
[...]

## Custom Hooks
### useOlympicData
- **Rôle** : Centraliser la gestion des données olympiques
- **Retour** : Olympic[]
- **Future migration** : Remplacer le mock par fetch()

## Préparation API
[Expliquer comment migrer vers une vraie API]

## Principes appliqués
- Séparation logique/UI
- Composition de composants
- TypeScript strict
- DRY (Don't Repeat Yourself)
```

**Code de référence** :

```markdown
# Architecture du projet TéléSport

## Vue d'ensemble

Application React 19 + TypeScript permettant de visualiser l'historique des Jeux Olympiques avec un dashboard interactif et des pages détail par pays.

## Structure des dossiers

\`\`\`
src/
├── components/         # Composants réutilisables UI
├── pages/              # Pages complètes (routes)
├── hooks/              # Custom Hooks (logique métier)
├── models/             # Interfaces TypeScript
├── data/               # Données mockées (future API)
├── App.tsx             # Routing
└── main.tsx            # Point d'entrée
\`\`\`

## Préparation pour l'intégration API

L'architecture actuelle utilise des données mockées (`olympics.json`), mais est conçue pour faciliter la migration vers une API REST.

**Migration future** : Dans `useOlympicData.ts`, remplacer :
\`\`\`typescript
setData(olympicsDataMock as Olympic[]);
\`\`\`

Par :
\`\`\`typescript
const response = await fetch('https://api.telesport.com/olympics');
const data = await response.json();
setData(data);
\`\`\`

**Aucune modification nécessaire dans les composants** car la logique est centralisée dans le hook.
```

**Points de vigilance** :
- Le fichier doit être **clair et concis**
- Ne pas recopier tout le code, juste les extraits clés
- Expliquer les **choix d'architecture**, pas seulement décrire
- Montrer que l'étudiant a compris les concepts

**Fichiers concernés** :
- `ARCHITECTURE.md` (à créer à la racine)

---

## Exercice 2 : Implémentation UI

### Objectif pédagogique

**Compétences travaillées** :
- Implémentation d'interface avec React
- Utilisation de Chart.js pour les graphiques
- Navigation avec React Router
- Gestion des erreurs (404)
- Responsive design avec Tailwind CSS

**Ce que l'étudiant doit comprendre** :
- Comment intégrer des librairies tierces (Chart.js)
- Comment gérer la navigation SPA
- Comment gérer les cas d'erreur
- L'importance du responsive design

---

### Solution détaillée

#### Étape 2.1 : Améliorer le dashboard existant

**Ce qu'il faut faire** :
1. Vérifier que le composant `Home` utilise bien le hook `useOlympicData`
2. Ajouter les indicateurs statistiques avec le composant `Indicator`
3. Intégrer Chart.js et react-chartjs-2 pour le pie chart
4. Implémenter la navigation au clic sur le graphique
5. Vérifier la responsivité mobile

**Explication technique** :

Le dashboard doit afficher :
- Un titre introductif
- 2 indicateurs : Pays participants, Éditions des JO
- Un graphique en camembert interactif
- Un texte explicatif en bas

**Intégration Chart.js** :

```typescript
// src/components/MedalsPieChart.tsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export const MedalsPieChart = ({ data, onCountryClick }) => {
  const chartData = {
    labels: data.map(olympic => olympic.country),
    datasets: [{
      label: 'Total des médailles',
      data: data.map(olympic => calculateTotalMedals(olympic)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        // ...
      ],
    }],
  };

  const chartOptions = {
    onClick: (_event, elements) => {
      if (elements.length > 0) {
        const country = data[elements[0].index];
        onCountryClick(country.id);
      }
    },
  };

  return (
    <div style={{ height: '400px' }}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};
```

**Navigation au clic** :

```typescript
// src/pages/Home.tsx
const navigate = useNavigate();

const handleCountryClick = (countryId: number) => {
  navigate(`/country/${countryId}`);
};

return (
  <MedalsPieChart data={data} onCountryClick={handleCountryClick} />
);
```

**Points de vigilance** :
- Chart.js doit être enregistré (ChartJS.register) avant utilisation
- Le callback `onClick` doit naviguer vers la bonne route
- Vérifier la responsivité sur mobile (Tailwind grid)
- Les couleurs doivent être suffisamment contrastées

**Fichiers concernés** :
- `src/components/MedalsPieChart.tsx`
- `src/pages/Home.tsx`

---

#### Étape 2.2 : Améliorer la page détail et ajouter la navigation

**Ce qu'il faut faire** :
1. Récupérer l'ID du pays depuis l'URL avec `useParams`
2. Utiliser le hook `useOlympicData` pour trouver le pays
3. Afficher les 3 indicateurs avec le composant `Indicator`
4. Intégrer le graphique line chart avec Chart.js
5. Ajouter un lien retour vers le dashboard
6. Gérer le cas où le pays n'existe pas

**Explication technique** :

**Récupération du paramètre d'URL** :

```typescript
// src/pages/Country.tsx
import { useParams, Link, Navigate } from 'react-router-dom';

export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const data = useOlympicData();

  const country = data.find(olympic => olympic.id === Number(id));

  // Redirection 404 si pays inexistant
  if (data.length > 0 && !country) {
    return <Navigate to="/404" replace />;
  }

  // Chargement
  if (data.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Link to="/">← Retour au dashboard</Link>
      <h1>{country.country}</h1>

      <Indicator title="Participations" value={country.participations.length} color="blue" />
      <Indicator title="Total médailles" value={calculateTotalMedals(country)} color="yellow" />
      <Indicator title="Total athlètes" value={calculateTotalAthletes(country)} color="green" />

      <MedalsLineChart country={country} />
    </div>
  );
};
```

**Graphique line chart** :

```typescript
// src/components/MedalsLineChart.tsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const MedalsLineChart = ({ country }) => {
  const chartData = {
    labels: country.participations.map(p => p.year.toString()),
    datasets: [{
      label: 'Nombre de médailles',
      data: country.participations.map(p => p.medalsCount),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.3,
    }],
  };

  return (
    <div style={{ height: '400px' }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
```

**Points de vigilance** :
- `useParams` doit être typé : `useParams<{ id: string }>()`
- Convertir l'ID en number : `Number(id)`
- Gérer 3 états : chargement, pays trouvé, pays non trouvé
- Le lien retour doit utiliser `<Link>` de React Router, pas `<a>`

**Fichiers concernés** :
- `src/pages/Country.tsx`
- `src/components/MedalsLineChart.tsx`

---

#### Étape 2.3 : Gérer les erreurs de navigation et d'affichage

**Ce qu'il faut faire** :
1. Créer une page `NotFound` pour les erreurs 404
2. Ajouter une route wildcard dans `App.tsx`
3. Rediriger vers 404 si l'ID de pays n'existe pas
4. Ajouter un lien retour vers l'accueil sur la page 404

**Explication technique** :

**Page 404** :

```typescript
// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page non trouvée</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};
```

**Route wildcard** :

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} /> {/* Wildcard pour 404 */}
      </Routes>
    </BrowserRouter>
  );
}
```

**Redirection depuis Country** :

```typescript
// Si le pays n'existe pas
if (data.length > 0 && !country) {
  return <Navigate to="/404" replace />;
}
```

**Points de vigilance** :
- La route wildcard `path="*"` doit être la **dernière** dans le Router
- Utiliser `<Navigate>` pour rediriger, pas `navigate()` dans le render
- Le paramètre `replace` évite d'ajouter à l'historique
- Tester avec une URL invalide : `/country/999`

**Fichiers concernés** :
- `src/pages/NotFound.tsx`
- `src/App.tsx`
- `src/pages/Country.tsx`

---

#### Étape 2.4 : Finaliser l'application et documenter-la sur GitHub

**Ce qu'il faut faire** :
1. Tester l'application complète (navigation, graphiques, 404)
2. Vérifier la responsivité sur mobile/tablet/desktop
3. Nettoyer le code (supprimer console.log, code mort, `any`)
4. Vérifier que `npm run lint` passe sans erreurs
5. Créer un README.md complet
6. Pousser le code sur GitHub
7. Ajouter des captures d'écran dans le README

**Explication technique** :

**Tests manuels à effectuer** :
1. ✅ Dashboard s'affiche correctement
2. ✅ Clic sur un pays → navigation vers détail
3. ✅ Page détail affiche les bonnes données
4. ✅ Lien retour fonctionne
5. ✅ URL invalide → page 404
6. ✅ Responsive mobile (vérifier avec DevTools)
7. ✅ Pas d'erreurs console
8. ✅ TypeScript compile sans erreurs

**Nettoyage du code** :

```bash
# Vérifier qu'il n'y a plus de console.log
grep -r "console.log" src/

# Vérifier qu'il n'y a plus de "any"
grep -r ": any" src/

# Lancer le linter
npm run lint

# Build de production pour vérifier
npm run build
```

**README.md** :

Doit contenir :
- Titre et description du projet
- Technologies utilisées
- Prérequis (Node.js 22)
- Installation (`npm install`)
- Lancement (`npm run dev`)
- Structure du projet
- Captures d'écran (desktop et mobile)

**Points de vigilance** :
- Le README doit être **professionnel**, pas scolaire
- Pas de fautes d'orthographe
- Les captures d'écran doivent montrer l'application fonctionnelle
- Le code doit être **propre** (pas de code mort)
- Les commits Git doivent avoir des messages clairs

**Fichiers concernés** :
- `README.md` (à la racine)
- Tous les fichiers `src/` (nettoyage final)

---

## Grille d'évaluation

### Exercice 1 : Refactorisation d'architecture

| Critère | Points | Validation |
|---------|--------|------------|
| **Analyse du code** | 3 pts | Fichier `notes-architecture.md` présent avec au moins 8 problèmes identifiés |
| **Conception architecture** | 4 pts | Structure claire avec dossiers `components/`, `pages/`, `hooks/`, `models/` |
| **Interfaces TypeScript** | 3 pts | Interfaces `Participation` et `Olympic` correctement définies, aucun `any` |
| **Composants réutilisables** | 5 pts | Au moins 3 composants créés (Indicator, MedalsPieChart, MedalsLineChart) |
| **Custom Hook** | 5 pts | Hook `useOlympicData` fonctionnel avec fonctions utilitaires exportées |
| **Code propre** | 3 pts | Pas de console.log, pas de code mort, lint passe |
| **Documentation** | 2 pts | Fichier `ARCHITECTURE.md` complet et clair |
| **Total Exercice 1** | **25 pts** | |

### Exercice 2 : Implémentation UI

| Critère | Points | Validation |
|---------|--------|------------|
| **Dashboard** | 5 pts | Page Home avec statistiques et pie chart interactif |
| **Page détail** | 5 pts | Page Country avec 3 indicateurs et line chart |
| **Navigation** | 4 pts | Navigation fluide avec React Router, lien retour fonctionnel |
| **Gestion erreurs** | 3 pts | Page 404 présente, redirection si pays inexistant |
| **Responsivité** | 3 pts | Application utilisable sur mobile, tablette, desktop |
| **Graphiques** | 4 pts | Chart.js intégré correctement, graphiques interactifs |
| **Code propre** | 3 pts | Pas d'erreurs, lint OK, build OK |
| **Documentation GitHub** | 3 pts | README complet avec captures d'écran |
| **Total Exercice 2** | **30 pts** | |

### Note globale

**Total** : 55 points

**Barème** :
- 50-55 pts : Excellent (A)
- 42-49 pts : Bien (B)
- 33-41 pts : Correct (C)
- < 33 pts : Insuffisant (à retravailler)

---

## Erreurs fréquentes

### Erreur 1 : Utilisation de `any` dans TypeScript

**Problème** :
```typescript
const data: any = useOlympicData();
```

**Solution** :
```typescript
const data: Olympic[] = useOlympicData();
```

**Pourquoi** : `any` désactive complètement le typage TypeScript et annule ses bénéfices.

---

### Erreur 2 : Mauvaise gestion des imports relatifs

**Problème** :
```typescript
// Dans src/pages/Home.tsx
import { Indicator } from './components/Indicator'; // ❌
```

**Solution** :
```typescript
import { Indicator } from '../components/Indicator'; // ✅
```

**Pourquoi** : `./` signifie "dossier actuel", `../` signifie "dossier parent".

---

### Erreur 3 : console.log laissés dans le code

**Problème** :
```typescript
const data = useOlympicData();
console.log('Data loaded:', data); // ❌
```

**Solution** :
Supprimer tous les console.log avant de pousser en production.

**Pourquoi** : Les console.log polluent la console et peuvent révéler des informations sensibles.

---

### Erreur 4 : useEffect avec dépendances manquantes

**Problème** :
```typescript
useEffect(() => {
  loadData();
}, []); // ❌ Warning ESLint si loadData n'est pas dans les dépendances
```

**Solution** :
```typescript
useEffect(() => {
  const loadData = async () => {
    // ...
  };
  loadData();
}, []); // ✅ Fonction définie à l'intérieur
```

---

### Erreur 5 : Navigation avec <a> au lieu de <Link>

**Problème** :
```typescript
<a href="/">Retour</a> // ❌ Provoque un rechargement complet
```

**Solution** :
```typescript
<Link to="/">Retour</Link> // ✅ Navigation SPA
```

**Pourquoi** : `<Link>` est une navigation SPA sans rechargement de page.

---

### Erreur 6 : Ne pas gérer le cas de chargement

**Problème** :
```typescript
const data = useOlympicData();
return <MedalsPieChart data={data} />; // ❌ data peut être []
```

**Solution** :
```typescript
const data = useOlympicData();

if (data.length === 0) {
  return <div>Chargement...</div>;
}

return <MedalsPieChart data={data} />;
```

---

### Erreur 7 : Oublier d'enregistrer les composants Chart.js

**Problème** :
```typescript
import { Pie } from 'react-chartjs-2';
// ❌ Oubli de ChartJS.register
```

**Solution** :
```typescript
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend); // ✅
```

---

### Erreur 8 : Code dupliqué au lieu de composant réutilisable

**Problème** :
```typescript
// Dans Home.tsx
<div className="bg-gray-800 p-6 rounded-lg">
  <h3>Pays participants</h3>
  <p className="text-4xl text-blue-400">{count}</p>
</div>

// Dans Country.tsx (même code répété)
<div className="bg-gray-800 p-6 rounded-lg">
  <h3>Participations</h3>
  <p className="text-4xl text-blue-400">{count}</p>
</div>
```

**Solution** :
Créer un composant `Indicator` réutilisable.

---

### Erreur 9 : Ne pas typer les props des composants

**Problème** :
```typescript
export const Indicator = ({ title, value, color }) => { // ❌ Props non typés
```

**Solution** :
```typescript
interface IndicatorProps {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'yellow';
}

export const Indicator = ({ title, value, color }: IndicatorProps) => { // ✅
```

---

### Erreur 10 : Logique métier dans les composants UI

**Problème** :
```typescript
// Dans Home.tsx
const totalMedals = data.reduce((sum, d) =>
  sum + d.participations.reduce((s, p) => s + p.medalsCount, 0), 0
); // ❌ Calcul complexe dans le composant
```

**Solution** :
```typescript
// Dans useOlympicData.ts
export const calculateTotalMedals = (olympic: Olympic) => { ... }

// Dans Home.tsx
const totalMedals = calculateTotalMedals(country); // ✅
```

---

## Ressources complémentaires

### Documentation officielle

**React** :
- [React Documentation](https://react.dev)
- [Hooks Reference](https://react.dev/reference/react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

**TypeScript** :
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React avec TypeScript](https://react.dev/learn/typescript)

**React Router** :
- [React Router Documentation](https://reactrouter.com)
- [useParams](https://reactrouter.com/en/main/hooks/use-params)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

**Chart.js** :
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)

**Vite** :
- [Vite Guide](https://vitejs.dev/guide/)

**Tailwind CSS** :
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

### Concepts clés à approfondir

1. **Architecture front-end** :
   - [Component-Based Architecture](https://react.dev/learn/thinking-in-react)
   - [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

2. **Custom Hooks** :
   - [Building Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
   - [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)

3. **TypeScript patterns** :
   - [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
   - [Type vs Interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

4. **Best practices React** :
   - [React Style Guide](https://react.dev/learn)
   - [Component Design Patterns](https://www.patterns.dev/posts/react-component-patterns)

---

## FAQ

### Q1 : Dois-je créer un dossier `utils/` pour les fonctions utilitaires ?

**Réponse** : Pour ce projet, non. Les fonctions `calculateTotalMedals` et `calculateTotalAthletes` sont exportées directement depuis `useOlympicData.ts` car elles sont liées aux données olympiques.

Un dossier `utils/` serait pertinent pour des fonctions plus génériques (formatage de dates, validation, etc.).

---

### Q2 : Pourquoi utiliser un Custom Hook au lieu d'un Context ?

**Réponse** : Pour ce projet, un Custom Hook suffit car :
- Les données sont chargées une seule fois
- Pas de state global à partager
- Plus simple et plus performant

Un Context serait pertinent si on devait modifier les données ou les partager entre composants très éloignés dans l'arbre.

---

### Q3 : Dois-je créer un composant Layout pour la structure commune ?

**Réponse** : Pas nécessaire pour ce projet car :
- Seules 2 pages ont du contenu (Home et Country)
- Peu de code dupliqué
- La simplicité prime

Un Layout serait pertinent si vous aviez un header, footer, ou sidebar communs.

---

### Q4 : Comment gérer le loading state de Chart.js ?

**Réponse** : Le composant parent (Home ou Country) gère déjà le loading :

```typescript
if (data.length === 0) {
  return <div>Chargement...</div>;
}

return <MedalsPieChart data={data} />;
```

Chart.js ne reçoit les données que quand elles sont chargées.

---

### Q5 : Dois-je ajouter des tests unitaires ?

**Réponse** : Non, ce n'est pas demandé dans ce projet. Cependant, l'architecture choisie (composants découplés, hooks testables) faciliterait l'ajout de tests si nécessaire.

Si vous souhaitez aller plus loin, vous pourriez tester :
- `calculateTotalMedals` et `calculateTotalAthletes`
- Les composants avec React Testing Library
- Le hook `useOlympicData` avec @testing-library/react-hooks

---

### Q6 : Pourquoi mettre les données dans `data/olympics.json` au lieu de directement dans le hook ?

**Réponse** : Cela simule une séparation entre la logique (hook) et la source de données (fichier JSON). Quand vous migrerez vers une API, vous remplacerez simplement le `import` par un `fetch()`.

C'est une bonne pratique de séparer les données de la logique qui les utilise.

---

### Q7 : Dois-je gérer les états loading/error dans le hook ?

**Réponse** : Pour ce projet, non. Un simple tableau vide suffit pour indiquer le loading.

Dans un projet réel avec API, vous ajouteriez :
```typescript
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```

---

### Q8 : Comment puis-je améliorer la responsivité ?

**Réponse** : Tailwind CSS est déjà utilisé pour le responsive :
- `grid-cols-1 md:grid-cols-2` : 1 colonne mobile, 2 sur tablette+
- `md:grid-cols-3` : 3 colonnes sur desktop

Pour aller plus loin :
- Testez sur vraies devices (pas seulement DevTools)
- Vérifiez que les graphiques s'adaptent (`responsive: true`)
- Testez en mode paysage

---

### Q9 : Puis-je utiliser des alias d'imports (@/) ?

**Réponse** : C'est possible avec Vite, mais non nécessaire pour ce projet :

```typescript
// Avec alias
import { Indicator } from '@/components/Indicator';

// Sans alias (actuel)
import { Indicator } from '../components/Indicator';
```

Les imports relatifs sont suffisants ici car la structure est simple. Les alias sont plus utiles dans de très gros projets.

---

### Q10 : Que faire si ESLint affiche des warnings ?

**Réponse** : Corrigez-les tous ! Les warnings ESLint indiquent des problèmes potentiels :
- Variables inutilisées
- Dépendances manquantes dans useEffect
- Imports non utilisés

`npm run lint` doit passer **sans warnings** avant de finaliser le projet.

---

## Conclusion

Ce guide de correction couvre l'intégralité du projet TéléSport en détaillant :
- Les objectifs pédagogiques de chaque exercice
- Les solutions détaillées pour chaque étape
- Les points de vigilance pour les mentors
- Les erreurs fréquentes et leurs corrections
- Les ressources pour approfondir

L'étudiant qui suit ce projet aura acquis des compétences solides en :
- Architecture front-end React
- Custom Hooks et séparation logique/UI
- TypeScript strict
- Navigation SPA avec React Router
- Intégration de librairies tierces (Chart.js)

Ce projet pose les bases pour des projets plus complexes avec API back-end.
