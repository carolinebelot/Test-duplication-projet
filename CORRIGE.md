# CORRIGE.md - Guide de Correction TéléSport

## Introduction

### Vue d'ensemble de la solution

Ce projet TéléSport est conçu pour permettre aux étudiants Full Stack JavaScript de maîtriser les compétences essentielles en **React 19**, **TypeScript**, et architecture front-end moderne.

Le projet se décompose en **2 exercices complémentaires** :
1. **Exercice 1** : Refactorisation d'une architecture front-end existante (analyse, conception, implémentation)
2. **Exercice 2** : Implémentation de fonctionnalités UI avec React (dashboard, navigation, gestion d'erreurs)

### Compétences validées par cette solution

- ✅ **Architecture front-end moderne** : Séparation des responsabilités (pages, components, hooks, models)
- ✅ **React 19 - Functional Components** : Utilisation exclusive des fonctions et hooks
- ✅ **TypeScript strict** : Typage complet sans `any`
- ✅ **Custom Hooks** : Externalisation de la logique métier
- ✅ **React Router 6+** : Navigation et paramètres d'URL
- ✅ **Gestion d'état** : useState, useEffect, useParams
- ✅ **Visualisation de données** : Recharts (PieChart, LineChart)
- ✅ **Tailwind CSS** : Styling utility-first et responsive
- ✅ **Gestion des erreurs** : Page 404 et états de chargement

### Architecture générale adoptée

```
src/
├── components/      # Composants UI réutilisables
├── hooks/           # Custom Hooks (logique métier)
├── models/          # Interfaces TypeScript
├── pages/           # Pages de l'application
├── App.tsx          # Configuration des routes
└── main.tsx         # Point d'entrée
```

**Principes architecturaux** :
- **Separation of Concerns** : Chaque dossier a une responsabilité unique
- **Composition over Inheritance** : Réutilisation via props
- **Single Responsibility Principle** : Un composant = une tâche

---

## Exercice 1 : Refactorisation de l'architecture front-end

### Étape 1 : Analyser le code existant et repérer les problèmes

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Analyse critique de code
- Identification des anti-patterns React
- Compréhension des bonnes pratiques

**Ce que l'étudiant doit comprendre** :
- Pourquoi un code mal structuré pose problème (maintenabilité, scalabilité)
- Comment repérer les violations de bonnes pratiques
- L'importance de l'architecture avant l'implémentation

#### Solution détaillée

##### Étape 1.1 : Lancer l'application et explorer le rendu

**Ce qu'il faut faire** :
1. Cloner le starter code
2. Lancer `npm install` puis `npm run dev`
3. Observer l'application dans le navigateur
4. Identifier les fonctionnalités présentes

**Explication technique** :
Le starter code contient une version basique de l'application avec probablement :
- Un composant monolithique
- Des données en dur dans les composants
- Peu ou pas de séparation des responsabilités

**Fichiers concernés** :
- Tous les fichiers dans `src/`

##### Étape 1.2 : Identifier les problèmes dans le code

**Ce qu'il faut faire** :
Lire chaque fichier et noter dans `notes-architecture.md` :

1. **Fichiers trop volumineux** :
   - Un composant de plus de 200 lignes
   - Trop de responsabilités dans un seul fichier

2. **Code dupliqué** :
   - Même logique répétée dans plusieurs endroits
   - Copier-coller de blocs de code

3. **Appels de données directs dans les composants** :
   - `fetch()` ou tableaux de données directement dans le JSX
   - Pas de Custom Hook pour centraliser la logique

4. **Absence de typage strict** :
   - Utilisation de `any` en TypeScript
   - Props non typées

5. **Console.log et code obsolète** :
   - Logs de debug non nettoyés
   - Code commenté inutile

6. **Mauvaise gestion des useEffect** :
   - useEffect sans cleanup
   - Dépendances manquantes ou incorrectes

**Explication technique** :

**Anti-pattern : Données dans le composant**
```typescript
// ❌ MAUVAISE PRATIQUE
const Home = () => {
  const data = [
    { id: 1, country: 'France', medals: 33 },
    // ... données en dur
  ];

  return <div>{/* ... */}</div>;
};
```

**Pourquoi c'est un problème** :
- Impossible de réutiliser les données ailleurs
- Difficile de tester
- Pas prêt pour une API future

**Code de référence** - Structure attendue dans `notes-architecture.md` :

```markdown
# Notes d'architecture - Analyse du starter code

## Problèmes identifiés

### 1. Fichiers trop volumineux
- `Home.tsx` : 300+ lignes, contient logique + UI + données

### 2. Code dupliqué
- Calcul du total de médailles répété dans Home et Country

### 3. Appels de données directs
- Données mockées directement dans les composants
- Pas de Custom Hook

### 4. Typage TypeScript
- Utilisation de `any` pour les données olympiques
- Props non typées dans plusieurs composants

### 5. Code à supprimer
- console.log présents dans Home.tsx ligne 45
- Code commenté dans Country.tsx

### 6. useEffect mal géré
- Pas de cleanup dans Country.tsx
- Dépendances manquantes dans useEffect
```

**Points de vigilance** :
- ⚠️ Ne pas modifier le code à cette étape, uniquement analyser
- ⚠️ Vérifier le comportement visuel même si le code est mal structuré
- ⚠️ Penser "future API" même si les données sont statiques maintenant

**Erreurs courantes** :
- ❌ L'étudiant modifie le code avant d'avoir fini l'analyse
- ❌ L'étudiant ne regarde que la structure, pas le contenu logique
- ❌ L'étudiant ne note pas tous les problèmes identifiés

---

### Étape 2 : Concevoir une nouvelle architecture adaptée

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Conception d'architecture front-end
- Design patterns (Separation of Concerns, Composition)
- Planification avant implémentation

**Ce que l'étudiant doit comprendre** :
- Comment organiser un projet React professionnel
- Pourquoi séparer les responsabilités
- Comment préparer le terrain pour une API future

#### Solution détaillée

##### Étape 2.1 : Identifier les blocs logiques

**Ce qu'il faut faire** :
1. Lister les types de fichiers nécessaires :
   - **Pages** : Composants de niveau route (Home, Country, NotFound)
   - **Components** : Composants UI réutilisables (Header, StatsCard, Loading, ErrorMessage)
   - **Hooks** : Logique métier et accès aux données (useOlympicData)
   - **Models** : Interfaces TypeScript (Olympic, Participation)

2. Dessiner un schéma de l'arborescence cible

**Explication technique** :

**Principe : Separation of Concerns**
- **Pages** = Orchestration et routing
- **Components** = Présentation pure
- **Hooks** = Logique métier (future API)
- **Models** = Contrat de données (types)

**Code de référence** - Arborescence proposée :

```
src/
├── components/
│   ├── Header.tsx           # En-tête commun
│   ├── StatsCard.tsx        # Carte de statistique réutilisable
│   ├── Loading.tsx          # Indicateur de chargement
│   └── ErrorMessage.tsx     # Affichage d'erreur
│
├── hooks/
│   └── useOlympicData.ts    # Custom Hook pour les données
│
├── models/
│   └── Olympic.ts           # Interfaces TypeScript
│
├── pages/
│   ├── Home.tsx             # Dashboard
│   ├── Country.tsx          # Détail pays
│   └── NotFound.tsx         # Page 404
│
├── App.tsx                  # Routing
├── main.tsx                 # Point d'entrée
└── index.css                # Styles globaux
```

##### Étape 2.2 : Proposer les patterns adaptés

**Ce qu'il faut faire** :
Documenter dans `notes-architecture.md` :

1. **Custom Hook `useOlympicData`** :
   - Centralise l'accès aux données
   - Retourne `{ data, loading, error, getCountryById, getTotalMedals, getTotalAthletes }`
   - Simule un appel API avec `useEffect`

2. **Composants présentationnels** :
   - `StatsCard` : affiche label + valeur
   - `Header` : en-tête avec navigation
   - `Loading` / `ErrorMessage` : états UI

3. **Pages avec logique** :
   - `Home` : utilise le hook, affiche graphique, gère navigation
   - `Country` : utilise `useParams`, affiche détails, gère erreurs

**Explication technique** :

**Pattern : Custom Hook**
```typescript
// Hook qui centralise la logique
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler API call
    fetchData();
  }, []);

  const getCountryById = (id: number) => data.find(c => c.id === id);

  return { data, loading, getCountryById };
};
```

**Avantages** :
- ✅ Réutilisable dans plusieurs composants
- ✅ Facile à remplacer par une vraie API
- ✅ Testable isolément

**Points de vigilance** :
- ⚠️ Prévoir que les données passent par `hooks/` ou `services/`
- ⚠️ Ne pas sur-complexifier : clarté avant tout
- ⚠️ Documenter les choix d'architecture

**Fichiers concernés** :
- `notes-architecture.md` (création/mise à jour)

---

### Étape 3 : Refactoriser les composants existants

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Refactoring de code React
- Création de composants fonctionnels
- Typage TypeScript
- Separation of Concerns

**Ce que l'étudiant doit comprendre** :
- Comment découper un gros composant en petits composants
- Pourquoi typer avec TypeScript
- Comment organiser les fichiers

#### Solution détaillée

##### Étape 3.1 : Créer la structure de dossiers

**Ce qu'il faut faire** :
```bash
mkdir -p src/components src/hooks src/models src/pages
```

##### Étape 3.2 : Créer les interfaces TypeScript

**Ce qu'il faut faire** :
Créer `src/models/Olympic.ts`

**Code de référence** :

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

**Explication technique** :
- **Participation** : Représente une édition des JO pour un pays
- **Olympic** : Représente un pays avec son historique complet
- Ces interfaces seront utilisées partout pour garantir le typage

**Fichiers concernés** :
- `src/models/Olympic.ts`

##### Étape 3.3 : Créer les composants réutilisables

**Ce qu'il faut faire** :
Créer 4 composants dans `src/components/`

**Code de référence** - `Header.tsx` :

```typescript
// src/components/Header.tsx
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-3xl font-bold">{title}</h1>
        </Link>
      </div>
    </header>
  );
};
```

**Explication technique** :
- ✅ Props typées avec interface
- ✅ Export nommé (pas de default)
- ✅ Utilise Link de React Router pour navigation
- ✅ Classes Tailwind pour le style

**Code de référence** - `StatsCard.tsx` :

```typescript
// src/components/StatsCard.tsx

interface StatsCardProps {
  label: string;
  value: number | string;
}

export const StatsCard = ({ label, value }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
      <h3 className="text-gray-600 text-sm font-medium mb-2">{label}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};
```

**Explication technique** :
- **Réutilisable** : Peut afficher n'importe quelle statistique
- **Props simples** : `label` (texte) et `value` (nombre ou texte)
- **Design cohérent** : Appliqué à toutes les stats

**Code de référence** - `Loading.tsx` :

```typescript
// src/components/Loading.tsx

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-600">Chargement des données...</p>
      </div>
    </div>
  );
};
```

**Code de référence** - `ErrorMessage.tsx` :

```typescript
// src/components/ErrorMessage.tsx

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-md max-w-md">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-red-700 font-medium">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

**Points de vigilance** :
- ⚠️ Vérifier les exports après création
- ⚠️ Mettre à jour les imports dans les pages
- ⚠️ Ne pas laisser de code orphelin (console.log, variables inutilisées)
- ⚠️ Typer toutes les props (pas de `any`)

**Fichiers concernés** :
- `src/components/Header.tsx`
- `src/components/StatsCard.tsx`
- `src/components/Loading.tsx`
- `src/components/ErrorMessage.tsx`

**Erreurs courantes** :
- ❌ Oublier de typer les props
- ❌ Utiliser `export default` au lieu de `export const`
- ❌ Ne pas vérifier les imports après déplacement de fichiers

---

### Étape 4 : Externaliser la gestion des données dans un Custom Hook

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Création de Custom Hooks React
- Gestion d'état avec useState
- useEffect et lifecycle
- Préparation à une API future

**Ce que l'étudiant doit comprendre** :
- Pourquoi externaliser la logique de données
- Comment créer un Custom Hook
- Comment préparer le code pour une vraie API

#### Solution détaillée

##### Étape 4.1 : Créer le Custom Hook useOlympicData

**Ce qu'il faut faire** :
Créer `src/hooks/useOlympicData.ts`

**Code de référence** :

```typescript
// src/hooks/useOlympicData.ts
import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';

// Données mockées pour simuler une réponse d'API
const mockOlympicData: Olympic[] = [
  {
    id: 1,
    country: 'France',
    participations: [
      { id: 1, year: 2020, city: 'Tokyo', medalsCount: 33, athleteCount: 411 },
      { id: 2, year: 2016, city: 'Rio', medalsCount: 42, athleteCount: 401 },
      { id: 3, year: 2012, city: 'Londres', medalsCount: 34, athleteCount: 330 },
      { id: 4, year: 2008, city: 'Pékin', medalsCount: 41, athleteCount: 323 },
      { id: 5, year: 2004, city: 'Athènes', medalsCount: 33, athleteCount: 308 }
    ]
  },
  // ... autres pays
];

export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler un appel API avec un délai
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simuler un délai réseau de 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(mockOlympicData);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fonction pour récupérer un pays par son ID
  const getCountryById = (id: number): Olympic | undefined => {
    return data.find(country => country.id === id);
  };

  // Fonction pour calculer le nombre total de médailles
  const getTotalMedals = (country: Olympic): number => {
    return country.participations.reduce(
      (total, participation) => total + participation.medalsCount,
      0
    );
  };

  // Fonction pour calculer le nombre total d'athlètes
  const getTotalAthletes = (country: Olympic): number => {
    return country.participations.reduce(
      (total, participation) => total + participation.athleteCount,
      0
    );
  };

  return {
    data,
    loading,
    error,
    getCountryById,
    getTotalMedals,
    getTotalAthletes
  };
};
```

**Explication technique** :

**Pourquoi ce pattern ?**
1. **Centralisation** : Toute la logique de données au même endroit
2. **Réutilisabilité** : Peut être utilisé dans n'importe quel composant
3. **Prêt pour l'API** : Facile de remplacer `mockOlympicData` par `fetch()`
4. **Gestion d'état** : loading/error gérés automatiquement

**Migration future vers API REST** :
```typescript
// Remplacer la simulation par :
const response = await fetch('/api/olympics');
const data = await response.json();
setData(data);
```

##### Étape 4.2 : Utiliser le hook dans les pages

**Ce qu'il faut faire** :
Importer et utiliser le hook dans `Home.tsx` et `Country.tsx`

**Code de référence** - Usage dans Home.tsx :

```typescript
// src/pages/Home.tsx (extrait)
import { useOlympicData } from '../hooks/useOlympicData';

export const Home = () => {
  const { data, loading, error, getTotalMedals } = useOlympicData();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  // Utiliser data et getTotalMedals
  const chartData = data.map(country => ({
    name: country.country,
    value: getTotalMedals(country),
    id: country.id
  }));

  return (
    // ... JSX
  );
};
```

**Explication technique** :
- ✅ Destructuration des valeurs retournées par le hook
- ✅ Gestion des états loading et error avant le rendu principal
- ✅ Utilisation des fonctions utilitaires (`getTotalMedals`)

**Points de vigilance** :
- ⚠️ Ne pas laisser de tableaux de données en dur dans les composants
- ⚠️ Vérifier que le hook gère correctement l'état
- ⚠️ Tester l'affichage après refactoring

**Fichiers concernés** :
- `src/hooks/useOlympicData.ts`
- `src/pages/Home.tsx` (utilisation)
- `src/pages/Country.tsx` (utilisation)

**Erreurs courantes** :
- ❌ Oublier de gérer loading et error
- ❌ Ne pas typer le retour du hook
- ❌ Laisser des données en dur dans les composants

---

### Étape 5 : Documenter l'architecture et la valider

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Documentation technique
- Communication avec l'équipe
- Synthèse et clarté

**Ce que l'étudiant doit comprendre** :
- Pourquoi documenter l'architecture
- Comment rédiger une documentation claire
- L'importance de la relecture

#### Solution détaillée

##### Étape 5.1 : Créer ARCHITECTURE.md

**Ce qu'il faut faire** :
Créer un fichier `ARCHITECTURE.md` à la racine du projet

**Code de référence** :

```markdown
# Architecture du projet TéléSport

## Vue d'ensemble

Ce projet utilise une architecture React moderne basée sur les Functional Components, Custom Hooks, et TypeScript strict.

## Structure des dossiers

\`\`\`
src/
├── components/      # Composants UI réutilisables
│   ├── Header.tsx
│   ├── StatsCard.tsx
│   ├── Loading.tsx
│   └── ErrorMessage.tsx
│
├── hooks/           # Custom Hooks (logique métier)
│   └── useOlympicData.ts
│
├── models/          # Interfaces TypeScript
│   └── Olympic.ts
│
├── pages/           # Pages de l'application
│   ├── Home.tsx
│   ├── Country.tsx
│   └── NotFound.tsx
│
├── App.tsx          # Configuration des routes
├── main.tsx         # Point d'entrée
└── index.css        # Styles globaux
\`\`\`

## Composants

### Pages

- **Home.tsx** : Dashboard avec graphique des médailles par pays
- **Country.tsx** : Page détail d'un pays avec évolution temporelle
- **NotFound.tsx** : Page 404 pour les routes inexistantes

### Composants réutilisables

- **Header** : En-tête commun avec navigation
- **StatsCard** : Carte affichant une statistique (label + valeur)
- **Loading** : Indicateur de chargement
- **ErrorMessage** : Affichage d'erreur

## Custom Hook : useOlympicData

Le hook `useOlympicData` centralise toute la logique de récupération et manipulation des données olympiques.

**Retour du hook** :
- `data` : Liste des pays olympiques
- `loading` : État de chargement
- `error` : Message d'erreur éventuel
- `getCountryById(id)` : Récupérer un pays par ID
- `getTotalMedals(country)` : Calculer total médailles
- `getTotalAthletes(country)` : Calculer total athlètes

**Actuellement** : Les données sont mockées dans le hook.

**Future API** : Il suffira de remplacer `mockOlympicData` par un appel `fetch()` vers l'API back-end.

## Routing

Configuration dans `App.tsx` avec React Router :
- `/` : Page Home (Dashboard)
- `/country/:id` : Page Country (Détail)
- `*` : Page NotFound (404)

## Modèles de données

### Interface Olympic
\`\`\`typescript
interface Olympic {
  id: number;
  country: string;
  participations: Participation[];
}
\`\`\`

### Interface Participation
\`\`\`typescript
interface Participation {
  id: number;
  year: number;
  city: string;
  medalsCount: number;
  athleteCount: number;
}
\`\`\`

## Préparation pour connexion back-end

L'architecture actuelle est prête pour une migration vers une API REST :

1. **Hook useOlympicData** : Remplacer les données mockées par `fetch()`
2. **Interfaces TypeScript** : Contrat de données déjà défini
3. **Gestion d'état** : loading/error déjà en place

Aucun changement nécessaire dans les composants UI.
```

**Explication technique** :
- Documentation claire et structurée
- Mentionne la préparation pour l'API future
- Décrit les responsabilités de chaque fichier

**Points de vigilance** :
- ⚠️ Vérifier la cohérence entre documentation et code
- ⚠️ Relire pour s'assurer qu'un nouveau développeur comprend

**Fichiers concernés** :
- `ARCHITECTURE.md`

---

## Exercice 2 : Implémentation de l'interface utilisateur

### Étape 1 : Améliorer le dashboard existant

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Implémentation de composants React
- Utilisation de Recharts
- Navigation avec React Router
- Responsive design avec Tailwind

**Ce que l'étudiant doit comprendre** :
- Comment construire un dashboard interactif
- Comment gérer les clics et la navigation
- Comment rendre une interface responsive

#### Solution détaillée

##### Étape 2.1.1 : Améliorer le composant Home

**Ce qu'il faut faire** :
Créer/améliorer `src/pages/Home.tsx`

**Code de référence** :

```typescript
// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

const COLORS = ['#0066CC', '#FF6B35', '#4CAF50', '#FFC107', '#9C27B0'];

export const Home = () => {
  const { data, loading, error, getTotalMedals } = useOlympicData();
  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  // Préparer les données pour le graphique
  const chartData = data.map(country => ({
    name: country.country,
    value: getTotalMedals(country),
    id: country.id
  }));

  // Calculer les statistiques globales
  const totalCountries = data.length;
  const totalOlympics = data[0]?.participations.length || 0;

  const handleClick = (entry: { id: number }) => {
    navigate(`/country/${entry.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="TéléSport - Jeux Olympiques" />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bienvenue sur la plateforme TéléSport
          </h2>
          <p className="text-gray-600 mb-6">
            Découvrez les performances olympiques des pays à travers les années.
            Cliquez sur un pays dans le graphique pour voir ses statistiques détaillées.
          </p>

          {/* Réutilisation de StatsCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StatsCard label="Nombre de pays participants" value={totalCountries} />
            <StatsCard label="Nombre d'éditions des JO" value={totalOlympics} />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Médailles totales par pays
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};
```

**Explication technique** :

**1. Utilisation du Custom Hook**
```typescript
const { data, loading, error, getTotalMedals } = useOlympicData();
```
- Récupère les données via le hook créé à l'exercice 1

**2. Gestion des états**
```typescript
if (loading) return <Loading />;
if (error) return <ErrorMessage message={error} />;
```
- Affiche un composant approprié selon l'état

**3. Préparation des données pour Recharts**
```typescript
const chartData = data.map(country => ({
  name: country.country,
  value: getTotalMedals(country),
  id: country.id
}));
```
- Transformation des données pour le format attendu par Recharts

**4. Navigation au clic**
```typescript
const handleClick = (entry: { id: number }) => {
  navigate(`/country/${entry.id}`);
};
```
- Utilise `useNavigate` de React Router
- Redirige vers `/country/:id` au clic

**5. Responsive design**
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
```
- `grid-cols-1` : 1 colonne sur mobile
- `md:grid-cols-2` : 2 colonnes sur desktop

**Points de vigilance** :
- ⚠️ Ne pas mettre de logique métier complexe dans le JSX
- ⚠️ Tester la lisibilité sur mobile
- ⚠️ Vérifier que le clic sur le graphique fonctionne

**Fichiers concernés** :
- `src/pages/Home.tsx`

**Erreurs courantes** :
- ❌ Oublier de gérer loading et error
- ❌ Ne pas typer les props du handleClick
- ❌ Oublier `cursor: 'pointer'` sur le graphique cliquable

---

### Étape 2 : Améliorer la page détail et navigation

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- useParams pour récupérer l'ID depuis l'URL
- Affichage de données détaillées
- Navigation entre pages
- Gestion des cas d'erreur (pays inexistant)

**Ce que l'étudiant doit comprendre** :
- Comment utiliser les paramètres d'URL
- Comment rediriger vers 404 si ressource inexistante
- Comment créer une page de détail complète

#### Solution détaillée

##### Étape 2.2.1 : Créer la page Country

**Ce qu'il faut faire** :
Créer/améliorer `src/pages/Country.tsx`

**Code de référence** :

```typescript
// src/pages/Country.tsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { useEffect } from 'react';

export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, loading, error, getCountryById, getTotalMedals, getTotalAthletes } = useOlympicData();

  const countryId = id ? parseInt(id, 10) : undefined;
  const country = countryId ? getCountryById(countryId) : undefined;

  useEffect(() => {
    // Rediriger vers 404 si pays inexistant après le chargement
    if (!loading && !country && countryId) {
      navigate('/not-found', { replace: true });
    }
  }, [loading, country, countryId, navigate]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!country) return <Loading />;

  // Préparer les données pour le graphique d'évolution
  const chartData = country.participations.map(participation => ({
    year: participation.year,
    médailles: participation.medalsCount,
    city: participation.city
  }));

  const totalMedals = getTotalMedals(country);
  const totalAthletes = getTotalAthletes(country);
  const totalParticipations = country.participations.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={`TéléSport - ${country.country}`} />

      <main className="container mx-auto px-4 py-8">
        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au tableau de bord
        </Link>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Statistiques pour {country.country}
          </h2>

          {/* Réutilisation de StatsCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard label="Nombre de participations" value={totalParticipations} />
            <StatsCard label="Total de médailles" value={totalMedals} />
            <StatsCard label="Total d'athlètes" value={totalAthletes} />
          </div>
        </section>

        {/* Graphique d'évolution */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Évolution des médailles au fil du temps
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="médailles"
                stroke="#0066CC"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* Tableau récapitulatif */}
        <section className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Historique des participations
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Année
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ville
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Médailles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Athlètes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {country.participations.map((participation) => (
                  <tr key={participation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {participation.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participation.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participation.medalsCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participation.athleteCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};
```

**Explication technique** :

**1. Récupération de l'ID depuis l'URL**
```typescript
const { id } = useParams<{ id: string }>();
const countryId = id ? parseInt(id, 10) : undefined;
```
- `useParams` extrait le paramètre `:id` de l'URL
- Conversion en nombre avec `parseInt`

**2. Redirection vers 404 si pays inexistant**
```typescript
useEffect(() => {
  if (!loading && !country && countryId) {
    navigate('/not-found', { replace: true });
  }
}, [loading, country, countryId, navigate]);
```
- Attend la fin du chargement
- Redirige si le pays n'existe pas
- `replace: true` pour ne pas ajouter à l'historique

**3. Bouton retour**
```typescript
<Link to="/" className="...">
  Retour au tableau de bord
</Link>
```
- Utilise `Link` de React Router
- Navigation vers la page d'accueil

**Points de vigilance** :
- ⚠️ Tester avec un ID inexistant (ex: `/country/999`)
- ⚠️ Vérifier que le tableau est responsive
- ⚠️ S'assurer que le graphique s'affiche correctement

**Fichiers concernés** :
- `src/pages/Country.tsx`

**Erreurs courantes** :
- ❌ Ne pas gérer le cas où l'ID est invalide
- ❌ Oublier de convertir l'ID en nombre
- ❌ Ne pas rediriger vers 404 si pays inexistant

---

### Étape 3 : Gérer les erreurs de navigation

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Gestion des erreurs côté utilisateur
- Route wildcard avec React Router
- UX - Affichage d'erreurs claires

**Ce que l'étudiant doit comprendre** :
- Comment gérer les routes inexistantes
- Pourquoi afficher une page 404 plutôt qu'un écran vide
- Comment améliorer l'expérience utilisateur en cas d'erreur

#### Solution détaillée

##### Étape 2.3.1 : Créer la page NotFound

**Ce qu'il faut faire** :
Créer `src/pages/NotFound.tsx`

**Code de référence** :

```typescript
// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="TéléSport - Page non trouvée" />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page non trouvée
          </h2>
          <p className="text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou le pays demandé n'a pas été trouvé.
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </div>
  );
};
```

##### Étape 2.3.2 : Configurer la route wildcard

**Ce qu'il faut faire** :
Mettre à jour `src/App.tsx`

**Code de référence** :

```typescript
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Country } from './pages/Country';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**Explication technique** :

**Route wildcard `*`**
```typescript
<Route path="*" element={<NotFound />} />
```
- Capture toutes les routes non définies
- Doit être placée en dernier

**Route `/not-found`**
```typescript
<Route path="/not-found" element={<NotFound />} />
```
- Permet les redirections explicites (ex: pays inexistant)

**Points de vigilance** :
- ⚠️ Tester avec des URLs invalides (ex: `/invalid-route`)
- ⚠️ Vérifier que le message d'erreur est clair

**Fichiers concernés** :
- `src/pages/NotFound.tsx`
- `src/App.tsx`

---

### Étape 4 : Finaliser l'application et documenter

#### Objectif pédagogique

**Compétence(s) travaillée(s)** :
- Tests manuels d'une application
- Documentation technique
- Clean code (suppression de code inutile)

**Ce que l'étudiant doit comprendre** :
- Comment tester une application complète
- Pourquoi nettoyer le code avant publication
- Comment rédiger un README pour GitHub

#### Solution détaillée

##### Étape 2.4.1 : Tester l'application

**Ce qu'il faut faire** :
1. Lancer `npm run dev`
2. Tester toutes les fonctionnalités :
   - ✅ Dashboard affiche le graphique
   - ✅ Clic sur un pays redirige vers détail
   - ✅ Page détail affiche stats + graphique + tableau
   - ✅ Bouton retour fonctionne
   - ✅ URL invalide affiche 404
   - ✅ Pays inexistant redirige vers 404
3. Tester la responsivité (DevTools mobile)

##### Étape 2.4.2 : Nettoyer le code

**Ce qu'il faut faire** :
- Supprimer tous les `console.log`
- Supprimer les fichiers inutilisés
- Vérifier qu'il n'y a pas de `any` TypeScript
- Lancer `npm run lint` et corriger les erreurs

##### Étape 2.4.3 : Organiser le README.md

**Code de référence** - Structure du README :

```markdown
# TéléSport - Projet Jeux Olympiques

## Description
Application web pour visualiser les performances olympiques des pays.

## Fonctionnalités
- Dashboard avec graphique interactif
- Page détail par pays
- Navigation fluide
- Design responsive

## Installation
\`\`\`bash
npm install
npm run dev
\`\`\`

## Structure du projet
\`\`\`
src/
├── components/
├── hooks/
├── models/
├── pages/
├── App.tsx
└── main.tsx
\`\`\`

## Technologies
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts
```

**Fichiers concernés** :
- `README.md`

---

## Grille d'évaluation

### Exercice 1 : Refactorisation

| Critère | Validé | Non validé |
|---------|--------|------------|
| Analyse du code documentée dans `notes-architecture.md` | ✅ | ❌ |
| Architecture claire avec dossiers `components/`, `hooks/`, `models/`, `pages/` | ✅ | ❌ |
| Custom Hook `useOlympicData` créé et fonctionnel | ✅ | ❌ |
| Interfaces TypeScript définies (Olympic, Participation) | ✅ | ❌ |
| Composants réutilisables (Header, StatsCard, Loading, ErrorMessage) | ✅ | ❌ |
| Fichier `ARCHITECTURE.md` présent et complet | ✅ | ❌ |
| Aucun `any` TypeScript | ✅ | ❌ |
| Code compile sans erreur | ✅ | ❌ |

### Exercice 2 : Implémentation UI

| Critère | Validé | Non validé |
|---------|--------|------------|
| Dashboard avec PieChart fonctionnel | ✅ | ❌ |
| Clic sur pays redirige vers page détail | ✅ | ❌ |
| Page détail affiche stats + LineChart + tableau | ✅ | ❌ |
| Bouton retour fonctionne | ✅ | ❌ |
| Page 404 pour routes invalides | ✅ | ❌ |
| Gestion des erreurs (loading, error) | ✅ | ❌ |
| Design responsive (desktop et mobile) | ✅ | ❌ |
| README.md complet sur GitHub | ✅ | ❌ |
| Code propre (pas de console.log, pas de code mort) | ✅ | ❌ |

---

## Erreurs fréquentes

### Erreur 1 : Utilisation de `any` en TypeScript

**Symptôme** : L'étudiant utilise `any` pour éviter les erreurs TypeScript

**Pourquoi c'est un problème** :
- Perd les bénéfices du typage
- Code fragile

**Solution** :
- Créer des interfaces TypeScript
- Typer explicitement toutes les variables et props

### Erreur 2 : Données en dur dans les composants

**Symptôme** : Tableaux de données directement dans `Home.tsx` ou `Country.tsx`

**Pourquoi c'est un problème** :
- Pas réutilisable
- Difficile de passer à une API

**Solution** :
- Créer un Custom Hook `useOlympicData`
- Centraliser la logique de données

### Erreur 3 : Oubli de gestion des états loading et error

**Symptôme** : Écran vide ou erreur si les données ne sont pas chargées

**Pourquoi c'est un problème** :
- Mauvaise expérience utilisateur
- Application semble cassée

**Solution** :
```typescript
if (loading) return <Loading />;
if (error) return <ErrorMessage message={error} />;
```

### Erreur 4 : Props non typées

**Symptôme** : Composants sans interface pour les props

**Pourquoi c'est un problème** :
- Pas de vérification TypeScript
- Pas d'autocomplétion

**Solution** :
```typescript
interface StatsCardProps {
  label: string;
  value: number | string;
}

export const StatsCard = ({ label, value }: StatsCardProps) => {
  // ...
};
```

### Erreur 5 : useEffect sans cleanup

**Symptôme** : Memory leaks, warnings React

**Pourquoi c'est un problème** :
- Fuite mémoire potentielle
- Mauvaise pratique

**Solution** :
```typescript
useEffect(() => {
  // Setup
  const timer = setTimeout(() => {}, 1000);

  // Cleanup
  return () => clearTimeout(timer);
}, []);
```

### Erreur 6 : Pas de redirection si pays inexistant

**Symptôme** : Page blanche ou erreur si `/country/999`

**Pourquoi c'est un problème** :
- Mauvaise UX

**Solution** :
```typescript
useEffect(() => {
  if (!loading && !country && countryId) {
    navigate('/not-found', { replace: true });
  }
}, [loading, country, countryId, navigate]);
```

---

## Ressources complémentaires

### Documentation officielle

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Router Documentation](https://reactrouter.com/)
- [Recharts Documentation](https://recharts.org/en-US/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Concepts clés

- **Functional Components** : [React Docs](https://react.dev/learn/your-first-component)
- **Custom Hooks** : [React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks)
- **TypeScript Interfaces** : [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- **React Router useParams** : [React Router Docs](https://reactrouter.com/en/main/hooks/use-params)

---

## FAQ

### Q1 : Peut-on utiliser des Class Components ?

**Réponse** : Non. La stack technique impose l'utilisation exclusive de **Functional Components**. Les Class Components sont obsolètes en 2025.

### Q2 : Faut-il respecter les maquettes au pixel près ?

**Réponse** : Non. L'objectif est d'avoir une interface fonctionnelle et cohérente. Le respect "grosso modo" des maquettes suffit.

### Q3 : Peut-on utiliser une autre bibliothèque de graphiques (Chart.js, D3.js) ?

**Réponse** : Oui, mais **Recharts** est recommandé car il est spécialement conçu pour React et plus simple à intégrer.

### Q4 : Doit-on écrire des tests automatisés ?

**Réponse** : Non, les tests automatisés ne sont pas demandés pour ce projet. Seuls des tests manuels sont attendus.

### Q5 : Comment gérer les données en attendant une vraie API ?

**Réponse** : Utiliser le Custom Hook `useOlympicData` avec des données mockées. Plus tard, il suffira de remplacer `mockOlympicData` par un `fetch()`.

### Q6 : Peut-on ajouter des fonctionnalités supplémentaires (filtres, recherche, etc.) ?

**Réponse** : Oui, mais seulement après avoir terminé toutes les fonctionnalités demandées. Ne pas sur-engineer.

### Q7 : Comment déboguer si l'application ne démarre pas ?

**Réponse** :
1. Vérifier que Node.js version 18+ est installé
2. Supprimer `node_modules` et relancer `npm install`
3. Vérifier les erreurs dans le terminal
4. Consulter la console du navigateur

### Q8 : Pourquoi utiliser Tailwind plutôt que du CSS classique ?

**Réponse** : Tailwind est imposé par la stack technique. Il permet un développement plus rapide et un design cohérent.

### Q9 : Faut-il créer un back-end pour ce projet ?

**Réponse** : Non. Les données sont simulées dans le Custom Hook. Un vrai back-end sera créé dans les projets suivants.

### Q10 : Comment gérer les commits Git ?

**Réponse** : Faire des commits réguliers avec des messages clairs :
- `feat: Add useOlympicData hook`
- `refactor: Separate components into dedicated files`
- `style: Add responsive design to dashboard`

---

**Fin du guide de correction**
