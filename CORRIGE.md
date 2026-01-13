# TéléSport - CORRIGÉ DÉTAILLÉ

## Vue d'ensemble du projet

Ce document constitue le **corrigé complet** du projet TéléSport pour les mentors et formateurs. Il détaille les solutions attendues pour chaque étape des deux exercices.

### Architecture globale de la solution

La solution complète respecte une architecture React 19 moderne et professionnelle :

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx       # En-tête avec navigation conditionnelle
│   ├── StatsCard.tsx    # Carte de statistique configurable
│   ├── Loading.tsx      # Indicateur de chargement
│   └── ErrorMessage.tsx # Message d'erreur réutilisable
├── pages/               # Pages de l'application (SPA)
│   ├── Home.tsx         # Dashboard principal
│   ├── Country.tsx      # Page détail pays
│   └── NotFound.tsx     # Page 404
├── hooks/               # Custom Hooks (logique métier)
│   └── useOlympicData.ts # Gestion centralisée des données
├── models/              # Interfaces TypeScript
│   └── Olympic.ts       # Interface Olympic stricte
├── App.tsx              # Configuration du routing
├── main.tsx             # Point d'entrée
└── index.css            # Styles globaux (Tailwind)
```

### Principes architecturaux appliqués

1. **Séparation des responsabilités** : composants, pages, hooks et modèles séparés
2. **Typage strict** : aucun `any`, interfaces TypeScript pour toutes les données
3. **Réutilisabilité** : composants configurables via props typées
4. **Centralisation de la logique** : Custom Hook pour les données
5. **Gestion des erreurs** : route 404 et vérifications
6. **Optimisation** : `useMemo` pour éviter les recalculs

---

# EXERCICE 1 - Refactorisation de l'architecture

## Étape 1 - Analyser le code existant et repérer les problèmes

### Objectif pédagogique
L'étudiant doit développer un œil critique face à du code fonctionnel mais non professionnel. Cette compétence est essentielle en entreprise.

### Problèmes à identifier dans le starter code

#### 1. **Architecture monolithique**
- **Problème** : Tout le code dans `App.tsx` (>400 lignes)
- **Impact** : Code impossible à maintenir, tester ou réutiliser
- **Correction attendue** : "Le fichier App.tsx contient tous les composants et la logique. Il devrait être découpé en plusieurs fichiers spécialisés."

#### 2. **Données en dur dans les composants**
```typescript
// MAUVAIS (starter)
const olympicData: any = [
  { id: 1, country: 'États-Unis', gold: 113, ... }
];
```
- **Problème** : Données directement dans le composant
- **Impact** : Impossible de réutiliser, pas de centralisation
- **Correction attendue** : "Les données sont codées en dur dans le composant. Elles devraient être externalisées dans un Custom Hook pour préparer l'intégration d'une API."

#### 3. **Typage laxiste avec `any`**
```typescript
// MAUVAIS (starter)
const [data, setData] = useState<any[]>([]);
const totalGold = data.reduce((acc: any, country: any) => acc + country.gold, 0);
```
- **Problème** : Utilisation de `any` partout
- **Impact** : Perte des avantages de TypeScript, bugs potentiels
- **Correction attendue** : "Le code utilise `any` au lieu de types stricts. Il faut créer une interface `Olympic` et typer toutes les variables."

#### 4. **useEffect sans dépendances**
```typescript
// MAUVAIS (starter)
useEffect(() => {
  console.log('Loading data...')
  setTimeout(() => {
    setData(olympicData)
    setLoading(false)
  }, 500)
}) // ❌ Pas de tableau de dépendances !
```
- **Problème** : Boucle infinie, effet exécuté à chaque rendu
- **Impact** : Performance catastrophique, bugs
- **Correction attendue** : "Le useEffect n'a pas de tableau de dépendances, ce qui crée une boucle infinie. Il faut ajouter `[]` pour l'exécuter une seule fois."

#### 5. **Console.log oubliés**
```typescript
console.log('Loading data...')
console.log('Country clicked:', id)
```
- **Problème** : Logs de debug en production
- **Impact** : Non professionnel, pollue la console
- **Correction attendue** : "Des console.log de debug sont présents. Ils doivent être supprimés avant la production."

#### 6. **Logique métier dans le JSX**
```typescript
// MAUVAIS (starter)
return (
  <div>
    {data.reduce((acc: any, country: any) => acc + country.gold, 0)}
  </div>
)
```
- **Problème** : Calculs complexes directement dans le render
- **Impact** : Code illisible, recalculs à chaque rendu
- **Correction attendue** : "Les calculs sont faits dans le JSX. Il faut les externaliser dans des variables ou utiliser `useMemo`."

#### 7. **Pas de gestion d'erreur**
- **Problème** : Aucune route 404, pas de vérification si le pays existe
- **Impact** : Page blanche en cas d'erreur
- **Correction attendue** : "Il n'y a pas de page 404 ni de gestion d'erreur quand un pays n'existe pas."

#### 8. **Composants non réutilisables**
- **Problème** : Tout est dupliqué (cartes de stats, header)
- **Impact** : Code dupliqué, maintenance difficile
- **Correction attendue** : "Le code est dupliqué (ex: cartes de stats). Il faut créer des composants réutilisables."

### Fichier `notes-architecture.md` attendu

```markdown
# Analyse du code TéléSport - Problèmes identifiés

## 1. Structure du projet
- ❌ Tout le code dans un seul fichier App.tsx (>400 lignes)
- ❌ Pas de séparation des responsabilités
- ❌ Impossible à maintenir et tester

## 2. Gestion des données
- ❌ Données en dur dans le composant Dashboard
- ❌ Pas de centralisation, difficile de changer vers une API
- ❌ Données dupliquées entre composants

## 3. Typage TypeScript
- ❌ Utilisation de `any` partout
- ❌ Pas d'interfaces définies
- ❌ Perte des avantages de TypeScript

## 4. Hooks React
- ❌ useEffect sans tableau de dépendances → boucle infinie
- ❌ Pas de Custom Hooks pour la logique métier
- ❌ Logique éparpillée dans les composants

## 5. Code à nettoyer
- ❌ console.log() oubliés en production
- ❌ Variables inutilisées
- ❌ Code commenté non supprimé

## 6. Performance et optimisation
- ❌ Calculs complexes dans le JSX
- ❌ Pas de mémoïsation (useMemo)
- ❌ Re-renders inutiles

## 7. Gestion des erreurs
- ❌ Pas de page 404
- ❌ Pas de vérification si le pays existe
- ❌ Pas de gestion des cas d'erreur

## 8. Composants
- ❌ Composants gigantesques non réutilisables
- ❌ Code dupliqué (cartes de stats)
- ❌ Pas de séparation composants/pages

## Conclusion
Ce code fonctionne mais n'est pas maintenable. Il nécessite une refonte complète de l'architecture.
```

---

## Étape 2 - Concevoir une nouvelle architecture adaptée

### Objectif pédagogique
L'étudiant doit proposer une architecture claire avant de coder. Cette étape développe la capacité à planifier.

### Architecture attendue

#### Structure de dossiers recommandée

```
src/
├── components/       # Composants réutilisables (UI purs)
│   ├── Header.tsx
│   ├── StatsCard.tsx
│   ├── Loading.tsx
│   └── ErrorMessage.tsx
├── pages/            # Pages de l'application (logique métier)
│   ├── Home.tsx
│   ├── Country.tsx
│   └── NotFound.tsx
├── hooks/            # Custom Hooks (logique de données)
│   └── useOlympicData.ts
├── models/           # Interfaces TypeScript
│   └── Olympic.ts
├── App.tsx           # Configuration du routing
├── main.tsx          # Point d'entrée
└── index.css         # Styles globaux
```

#### Justification de chaque dossier

**`components/`** - Composants réutilisables UI purs
- Acceptent des props typées
- Pas de logique métier
- Réutilisables dans plusieurs pages
- Exemples : Header, StatsCard, Loading

**`pages/`** - Pages de l'application
- Composants liés à une route spécifique
- Contiennent la logique métier de la page
- Utilisent les hooks et composants
- Exemples : Home, Country, NotFound

**`hooks/`** - Custom Hooks
- Centralisent la logique de données
- Point de contact avec l'API (futur)
- Réutilisables entre pages
- Exemple : useOlympicData

**`models/`** - Interfaces TypeScript
- Définissent les types de données
- Partagées dans toute l'application
- Exemple : Olympic

#### Schéma d'architecture

```
┌─────────────────────────────────────────┐
│           App.tsx (Router)              │
│  ┌─────────────────────────────────┐   │
│  │   Route "/"    → Home.tsx       │   │
│  │   Route "/:id" → Country.tsx    │   │
│  │   Route "*"    → NotFound.tsx   │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
           ↓                    ↓
┌──────────────────┐  ┌──────────────────┐
│   Home.tsx       │  │  Country.tsx     │
│  (Dashboard)     │  │  (Détail pays)   │
└──────────────────┘  └──────────────────┘
     ↓                      ↓
     └──────────┬───────────┘
                ↓
    ┌───────────────────────┐
    │  useOlympicData()     │
    │  (Custom Hook)        │
    │  - data               │
    │  - loading            │
    │  - getCountryById()   │
    └───────────────────────┘
                ↓
    ┌───────────────────────┐
    │  Olympic (Interface)  │
    │  - id: number         │
    │  - country: string    │
    │  - gold: number       │
    │  - ...                │
    └───────────────────────┘
```

### Fichier `notes-architecture.md` complété

L'étudiant doit ajouter à son fichier précédent :

```markdown
# Nouvelle architecture proposée

## Structure des dossiers

[Voir structure ci-dessus]

## Composants à créer

### Components (réutilisables)
- **Header** : En-tête avec titre et bouton retour optionnel
- **StatsCard** : Carte affichant une statistique (titre + valeur + couleurs)
- **Loading** : Indicateur de chargement
- **ErrorMessage** : Message d'erreur formaté

### Pages
- **Home** : Dashboard avec graphique et tableau
- **Country** : Détails d'un pays avec statistiques
- **NotFound** : Page 404 pour URLs invalides

### Hooks
- **useOlympicData** : Gestion centralisée des données olympiques
  - Retourne : data, loading, getCountryById()
  - Prêt pour intégration API future

### Models
- **Olympic** : Interface TypeScript pour les données d'un pays

## Avantages de cette architecture

1. **Maintenabilité** : Code organisé et facile à modifier
2. **Réutilisabilité** : Composants réutilisables
3. **Testabilité** : Chaque partie testable indépendamment
4. **Évolutivité** : Prêt pour API REST (hook centralisé)
5. **Typage strict** : Interfaces TypeScript partout
6. **Séparation des responsabilités** : Chaque fichier a un rôle clair
```

---

## Étape 3 - Refactoriser les composants existants

### Objectif pédagogique
Appliquer l'architecture définie en créant les composants et pages. Développer la capacité à structurer du code propre.

### Corrections détaillées

#### 1. Créer l'interface `Olympic.ts`

**Fichier** : `src/models/Olympic.ts`

```typescript
/**
 * Interface représentant les données olympiques d'un pays
 * Utilisée pour le typage strict dans toute l'application
 */
export interface Olympic {
  id: number;
  country: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  participations: number;
  athletes: number;
}
```

**Points clés** :
- ✅ Tous les champs typés strictement (number, string)
- ✅ Documentation avec JSDoc
- ✅ Export nommé pour réutilisation

#### 2. Créer le composant `Header.tsx`

**Fichier** : `src/components/Header.tsx`

```typescript
interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
}

/**
 * Composant Header réutilisable
 * Affiche le titre de l'application et optionnellement un bouton retour
 */
export const Header = ({ showBackButton = false, onBack }: HeaderProps) => {
  return (
    <header className="bg-blue-600 text-white p-6 shadow-lg">
      <h1 className="text-4xl font-bold">TéléSport - Jeux Olympiques</h1>
      <p className="text-lg mt-2">Historique des performances olympiques</p>
      {showBackButton && onBack && (
        <button
          onClick={onBack}
          className="mt-4 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          ← Retour au tableau
        </button>
      )}
    </header>
  );
};
```

**Points clés** :
- ✅ Props typées avec interface
- ✅ Props optionnelles (`?`)
- ✅ Valeurs par défaut (`showBackButton = false`)
- ✅ Rendu conditionnel (`&&`)
- ✅ Export nommé

#### 3. Créer le composant `StatsCard.tsx`

**Fichier** : `src/components/StatsCard.tsx`

```typescript
interface StatsCardProps {
  title: string;
  value: number | string;
  bgColor?: string;
  textColor?: string;
}

/**
 * Composant StatsCard réutilisable
 * Affiche une carte de statistique avec titre et valeur
 */
export const StatsCard = ({
  title,
  value,
  bgColor = 'bg-white',
  textColor = 'text-gray-800'
}: StatsCardProps) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow`}>
      <h3 className="text-gray-600 text-sm uppercase">{title}</h3>
      <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
};
```

**Points clés** :
- ✅ Composant configurable (couleurs personnalisables)
- ✅ Props typées strictement
- ✅ Valeurs par défaut pour props optionnelles
- ✅ Template literals pour classes CSS dynamiques

#### 4. Créer les composants `Loading.tsx` et `ErrorMessage.tsx`

**Fichier** : `src/components/Loading.tsx`

```typescript
/**
 * Composant Loading
 * Affiche un indicateur de chargement centré
 */
export const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Chargement des données...</p>
      </div>
    </div>
  );
};
```

**Fichier** : `src/components/ErrorMessage.tsx`

```typescript
interface ErrorMessageProps {
  message: string;
}

/**
 * Composant ErrorMessage
 * Affiche un message d'erreur formaté
 */
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded">
        <p className="font-bold">Erreur</p>
        <p>{message}</p>
      </div>
    </div>
  );
};
```

**Points clés** :
- ✅ Composants réutilisables
- ✅ UI cohérente
- ✅ Props typées

#### 5. Refactoriser la page `Home.tsx`

**Fichier** : `src/pages/Home.tsx` (extrait simplifié)

```typescript
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';

export const Home = () => {
  const navigate = useNavigate();
  const { data, loading } = useOlympicData();

  // Calcul des statistiques (mémoïsé)
  const stats = useMemo(() => {
    const totalGold = data.reduce((acc, country) => acc + country.gold, 0);
    const totalSilver = data.reduce((acc, country) => acc + country.silver, 0);
    const totalBronze = data.reduce((acc, country) => acc + country.bronze, 0);
    const totalMedals = totalGold + totalSilver + totalBronze;
    return { totalGold, totalSilver, totalBronze, totalMedals };
  }, [data]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatsCard title="Total Médailles" value={stats.totalMedals} />
          <StatsCard title="Or" value={stats.totalGold} bgColor="bg-yellow-100" textColor="text-yellow-600" />
          {/* ... */}
        </div>
        {/* Graphique et tableau */}
      </main>
    </div>
  );
};
```

**Points clés** :
- ✅ Import des composants réutilisables
- ✅ Utilisation du Custom Hook
- ✅ `useMemo` pour optimisation
- ✅ Gestion du loading
- ✅ Typage strict (pas de `any`)

#### 6. Créer la page `Country.tsx`

**Fichier** : `src/pages/Country.tsx` (structure)

```typescript
import { useParams, useNavigate } from 'react-router-dom';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCountryById, loading } = useOlympicData();

  if (loading) return <Loading />;

  const country = getCountryById(parseInt(id || '0'));

  if (!country) {
    return <ErrorMessage message="Pays non trouvé. Veuillez revenir à la page d'accueil." />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header showBackButton onBack={() => navigate('/')} />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">{country.country}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatsCard title="Participations" value={country.participations} />
          <StatsCard title="Médailles d'or" value={country.gold} bgColor="bg-yellow-100" textColor="text-yellow-600" />
          {/* ... */}
        </div>
      </main>
    </div>
  );
};
```

**Points clés** :
- ✅ `useParams` pour récupérer l'ID de l'URL
- ✅ Gestion d'erreur si pays non trouvé
- ✅ Réutilisation de Header avec bouton retour
- ✅ Réutilisation de StatsCard

#### 7. Créer la page `NotFound.tsx`

**Fichier** : `src/pages/NotFound.tsx`

```typescript
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-6">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};
```

#### 8. Mettre à jour `App.tsx`

**Fichier** : `src/App.tsx`

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Country } from './pages/Country';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Points clés** :
- ✅ Configuration propre du routing
- ✅ Route 404 avec `path="*"`
- ✅ Paramètres d'URL avec `:id`
- ✅ Composants séparés

### Checklist de validation

- [ ] Tous les composants sont dans `components/`
- [ ] Toutes les pages sont dans `pages/`
- [ ] Aucun `any` dans le code
- [ ] Toutes les props sont typées
- [ ] `npm run dev` fonctionne sans erreur
- [ ] `npm run lint` ne remonte aucune erreur
- [ ] Aucun `console.log` restant
- [ ] Imports correctement mis à jour

---

## Étape 4 - Externaliser la gestion des données dans un Custom Hook

### Objectif pédagogique
Comprendre l'intérêt des Custom Hooks pour centraliser la logique métier et préparer l'intégration d'une API.

### Correction détaillée

#### Créer le Custom Hook `useOlympicData`

**Fichier** : `src/hooks/useOlympicData.ts`

```typescript
import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';

/**
 * Données olympiques mockées
 * Dans un projet réel, ces données viendraient d'une API REST
 */
const olympicData: Olympic[] = [
  {
    id: 1,
    country: 'États-Unis',
    gold: 113,
    silver: 94,
    bronze: 72,
    total: 279,
    participations: 28,
    athletes: 613
  },
  {
    id: 2,
    country: 'France',
    gold: 71,
    silver: 86,
    bronze: 75,
    total: 232,
    participations: 29,
    athletes: 378
  },
  // ... autres pays
];

/**
 * Custom Hook pour gérer les données olympiques
 * Centralise la logique de récupération des données
 *
 * @returns {Object} - Données, état de chargement et fonction de recherche
 */
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulation d'un appel API
    const fetchData = async () => {
      try {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(olympicData);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // ✅ Tableau de dépendances vide : exécuté une seule fois

  /**
   * Trouve un pays par son ID
   */
  const getCountryById = (id: number): Olympic | undefined => {
    return data.find(country => country.id === id);
  };

  return {
    data,
    loading,
    getCountryById
  };
};
```

### Points clés expliqués

#### 1. **Typage strict**
```typescript
const [data, setData] = useState<Olympic[]>([]);
const [loading, setLoading] = useState<boolean>(true);
```
- ✅ `Olympic[]` au lieu de `any[]`
- ✅ `boolean` explicite pour loading

#### 2. **useEffect avec dépendances**
```typescript
useEffect(() => {
  fetchData();
}, []); // ✅ Tableau vide = exécution unique
```
- ✅ Pas de boucle infinie
- ✅ Simulé un appel API async

#### 3. **Gestion des erreurs**
```typescript
try {
  await new Promise(resolve => setTimeout(resolve, 500));
  setData(olympicData);
} catch (error) {
  console.error('Erreur lors du chargement des données:', error);
} finally {
  setLoading(false); // ✅ Toujours exécuté
}
```

#### 4. **Fonction utilitaire exportée**
```typescript
const getCountryById = (id: number): Olympic | undefined => {
  return data.find(country => country.id === id);
};
```
- ✅ Typage du paramètre et du retour
- ✅ `undefined` si non trouvé

#### 5. **Return object**
```typescript
return {
  data,
  loading,
  getCountryById
};
```
- ✅ API claire du hook
- ✅ Tout ce dont les composants ont besoin

### Utilisation dans les composants

**Avant (mauvais)** :
```typescript
// Dans Home.tsx
const olympicData: any = [...]; // ❌ Données en dur
const [data, setData] = useState(olympicData);
```

**Après (bon)** :
```typescript
// Dans Home.tsx
import { useOlympicData } from '../hooks/useOlympicData';

export const Home = () => {
  const { data, loading } = useOlympicData(); // ✅ Hook centralisé

  if (loading) return <Loading />;

  return (
    // Utiliser data...
  );
};
```

**Dans Country.tsx** :
```typescript
import { useOlympicData } from '../hooks/useOlympicData';

export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const { getCountryById, loading } = useOlympicData();

  const country = getCountryById(parseInt(id || '0'));

  if (!country) {
    return <ErrorMessage message="Pays non trouvé" />;
  }

  return (
    // Afficher country...
  );
};
```

### Avantages de cette approche

1. **Centralisation** : Une seule source de vérité pour les données
2. **Réutilisabilité** : Même hook dans Home et Country
3. **Préparation API** : Facile de remplacer `olympicData` par `fetch()`
4. **Testabilité** : Hook testable indépendamment
5. **Typage** : Toutes les données typées strictement

### Évolution vers une vraie API

```typescript
// Version future avec API
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/olympic-data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erreur API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ... reste identique
};
```

**Aucun changement nécessaire dans les composants !** C'est tout l'intérêt.

### Checklist de validation

- [ ] Hook créé dans `hooks/useOlympicData.ts`
- [ ] Typage strict (pas de `any`)
- [ ] useEffect avec `[]` en dépendances
- [ ] Aucune donnée en dur dans les composants
- [ ] `getCountryById` retourne `Olympic | undefined`
- [ ] Loading géré correctement
- [ ] Hook utilisé dans Home et Country
- [ ] Application fonctionne comme avant

---

## Étape 5 - Documenter l'architecture

### Objectif pédagogique
Développer la capacité à documenter son code pour faciliter la collaboration et la maintenance.

### Fichier `ARCHITECTURE.md` attendu

```markdown
# Architecture TéléSport - Documentation technique

## Vue d'ensemble

Application React 19 + TypeScript pour afficher les statistiques olympiques des pays.

### Technologies
- React 19 (Functional Components uniquement)
- TypeScript (mode strict)
- Vite 5+
- React Router 6+
- Tailwind CSS 3.4+
- Chart.js + react-chartjs-2

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx       # En-tête avec navigation
│   ├── StatsCard.tsx    # Carte de statistique
│   ├── Loading.tsx      # Indicateur de chargement
│   └── ErrorMessage.tsx # Message d'erreur
├── pages/               # Pages de l'application
│   ├── Home.tsx         # Dashboard principal
│   ├── Country.tsx      # Détail d'un pays
│   └── NotFound.tsx     # Page 404
├── hooks/               # Custom Hooks
│   └── useOlympicData.ts # Gestion des données
├── models/              # Interfaces TypeScript
│   └── Olympic.ts       # Interface Olympic
├── App.tsx              # Configuration routing
├── main.tsx             # Point d'entrée
└── index.css            # Styles globaux
```

## Composants

### Components (réutilisables)

#### `Header`
**Rôle** : En-tête de l'application avec navigation conditionnelle

**Props** :
- `showBackButton?: boolean` - Affiche le bouton retour
- `onBack?: () => void` - Callback au clic sur retour

**Utilisation** :
```tsx
<Header /> // Page principale
<Header showBackButton onBack={() => navigate('/')} /> // Page détail
```

#### `StatsCard`
**Rôle** : Carte affichant une statistique (titre + valeur)

**Props** :
- `title: string` - Titre de la stat
- `value: number | string` - Valeur à afficher
- `bgColor?: string` - Couleur de fond (défaut : 'bg-white')
- `textColor?: string` - Couleur du texte (défaut : 'text-gray-800')

**Utilisation** :
```tsx
<StatsCard title="Total Médailles" value={279} />
<StatsCard title="Or" value={113} bgColor="bg-yellow-100" textColor="text-yellow-600" />
```

#### `Loading`
**Rôle** : Indicateur de chargement avec spinner

**Props** : Aucune

**Utilisation** :
```tsx
if (loading) return <Loading />;
```

#### `ErrorMessage`
**Rôle** : Message d'erreur formaté

**Props** :
- `message: string` - Message à afficher

**Utilisation** :
```tsx
<ErrorMessage message="Pays non trouvé" />
```

### Pages

#### `Home`
**Rôle** : Dashboard principal avec graphique et tableau

**Features** :
- Affichage des statistiques globales (total médailles, or, argent, bronze)
- Graphique circulaire interactif (clic → détail pays)
- Tableau des pays avec médailles
- Navigation vers page détail

**Hooks utilisés** :
- `useOlympicData()` - Récupération des données
- `useNavigate()` - Navigation programmatique
- `useMemo()` - Optimisation des calculs

#### `Country`
**Rôle** : Page détail d'un pays

**Features** :
- Statistiques du pays (participations, médailles, athlètes)
- Graphique d'évolution historique
- Bouton retour vers dashboard
- Gestion d'erreur si pays inexistant

**Hooks utilisés** :
- `useParams()` - Récupération de l'ID depuis l'URL
- `useOlympicData()` - Récupération des données
- `useNavigate()` - Navigation

#### `NotFound`
**Rôle** : Page 404 pour URLs invalides

**Features** :
- Message clair
- Bouton retour à l'accueil

## Hooks

### `useOlympicData`
**Rôle** : Custom Hook centralisant la gestion des données olympiques

**Retour** :
```typescript
{
  data: Olympic[];           // Liste des pays
  loading: boolean;          // État de chargement
  getCountryById: (id: number) => Olympic | undefined; // Recherche par ID
}
```

**Implémentation** :
- Simule un appel API avec délai (500ms)
- Gère le state `data` et `loading`
- Fonction utilitaire `getCountryById`

**Évolution future** :
Ce hook est prêt pour intégrer une vraie API REST :
```typescript
const response = await fetch('https://api.example.com/olympic-data');
const jsonData = await response.json();
setData(jsonData);
```

**Avantages** :
- Centralisation de la logique de données
- Réutilisable dans plusieurs composants
- Facilite les tests
- Prépare l'intégration back-end

## Models

### `Olympic`
**Rôle** : Interface TypeScript pour les données d'un pays

**Structure** :
```typescript
interface Olympic {
  id: number;
  country: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  participations: number;
  athletes: number;
}
```

**Utilisation** :
- Typage de toutes les données olympiques
- Utilisée dans `useOlympicData`, `Home`, `Country`

## Routing

### Configuration (App.tsx)

```typescript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country/:id" element={<Country />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Routes
- `/` - Dashboard principal
- `/country/:id` - Détail du pays avec ID
- `*` - 404 pour toute URL invalide

## Bonnes pratiques appliquées

### 1. Typage strict
- ❌ Aucun `any` dans le code
- ✅ Interfaces pour toutes les données
- ✅ Props typées pour tous les composants

### 2. Séparation des responsabilités
- ✅ Components = UI réutilisable
- ✅ Pages = Logique métier
- ✅ Hooks = Gestion des données
- ✅ Models = Types

### 3. Optimisation
- ✅ `useMemo` pour calculs coûteux
- ✅ Éviter les re-renders inutiles

### 4. Gestion des erreurs
- ✅ Page 404 pour URLs invalides
- ✅ Vérification existence pays
- ✅ Messages d'erreur clairs

### 5. Custom Hooks
- ✅ Logique métier externalisée
- ✅ Préparation API

## Préparation pour l'intégration API

Cette architecture est conçue pour faciliter l'intégration future d'une API REST :

1. **Point de contact unique** : Hook `useOlympicData`
2. **Pas de changement dans les composants** : Ils utilisent déjà le hook
3. **Typage prêt** : Interface `Olympic` correspond au format API
4. **Gestion du loading** : Déjà implémentée

**Migration vers API** :
```typescript
// Dans useOlympicData.ts
const response = await fetch('https://api.example.com/olympic-data');
const jsonData: Olympic[] = await response.json();
setData(jsonData);
```

C'est tout ! Aucune modification ailleurs.

## Installation et utilisation

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Linter
npm run lint
```

## Prochaines évolutions possibles

- Intégration d'une API REST réelle
- Ajout de filtres sur le dashboard
- Graphiques supplémentaires
- Tests unitaires (Vitest)
- Tests E2E (Playwright)
- Mode sombre
- Internationalisation (i18n)
```

### Checklist de validation

- [ ] Fichier `ARCHITECTURE.md` créé
- [ ] Description de tous les composants
- [ ] Explication des hooks
- [ ] Schéma de l'architecture
- [ ] Documentation du routing
- [ ] Mention de l'intégration API future
- [ ] Instructions d'installation
- [ ] Document clair pour un nouveau développeur

---

# EXERCICE 2 - Implémentation de l'interface utilisateur

## Étape 1 - Améliorer le dashboard existant

### Objectif pédagogique
Implémenter une interface fonctionnelle à partir de composants structurés, en utilisant Chart.js et en gérant les interactions.

### Corrections détaillées

#### 1. Amélioration du composant `Home.tsx`

**Page complète** : Voir fichier solution `src/pages/Home.tsx`

**Points clés** :

##### a) Import des dépendances
```typescript
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';

ChartJS.register(ArcElement, Tooltip, Legend);
```
- ✅ Enregistrement des modules Chart.js nécessaires
- ✅ Import de tous les composants réutilisables

##### b) Calcul des statistiques avec `useMemo`
```typescript
const stats = useMemo(() => {
  const totalGold = data.reduce((acc, country) => acc + country.gold, 0);
  const totalSilver = data.reduce((acc, country) => acc + country.silver, 0);
  const totalBronze = data.reduce((acc, country) => acc + country.bronze, 0);
  const totalMedals = totalGold + totalSilver + totalBronze;
  return { totalGold, totalSilver, totalBronze, totalMedals };
}, [data]);
```
- ✅ `useMemo` pour éviter recalculs à chaque render
- ✅ Dépendances : `[data]` - recalculé uniquement si data change
- ✅ Typage implicite des valeurs retournées

##### c) Préparation des données du graphique
```typescript
const chartData = useMemo(() => ({
  labels: data.map(country => country.country),
  datasets: [
    {
      label: 'Médailles totales',
      data: data.map(country => country.total),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        // ...
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        // ...
      ],
      borderWidth: 1,
    },
  ],
}), [data]);
```
- ✅ Format Chart.js respecté
- ✅ Mémoïsé pour performance
- ✅ Couleurs définies

##### d) Gestion du clic sur le graphique
```typescript
const handleChartClick = (_event: unknown, elements: { index: number }[]) => {
  if (elements.length > 0) {
    const index = elements[0].index;
    const countryId = data[index].id;
    navigate(`/country/${countryId}`);
  }
};
```
- ✅ Typage des paramètres
- ✅ Vérification `elements.length > 0`
- ✅ Navigation vers page détail

##### e) Affichage des cartes de statistiques
```typescript
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
  <StatsCard title="Total Médailles" value={stats.totalMedals} />
  <StatsCard
    title="Or"
    value={stats.totalGold}
    bgColor="bg-yellow-100"
    textColor="text-yellow-600"
  />
  <StatsCard
    title="Argent"
    value={stats.totalSilver}
    bgColor="bg-gray-100"
    textColor="text-gray-600"
  />
  <StatsCard
    title="Bronze"
    value={stats.totalBronze}
    bgColor="bg-orange-100"
    textColor="text-orange-600"
  />
</div>
```
- ✅ Grille responsive (1 col mobile, 4 cols desktop)
- ✅ Réutilisation de `StatsCard`
- ✅ Personnalisation des couleurs

##### f) Graphique interactif
```typescript
<Pie
  data={chartData}
  options={{
    onClick: handleChartClick,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  }}
/>
```
- ✅ Event `onClick` configuré
- ✅ Responsive activé
- ✅ Légende en bas

##### g) Tableau des pays
```typescript
<table className="min-w-full">
  <thead className="bg-gray-200">
    <tr>
      <th>Pays</th>
      <th>Or</th>
      {/* ... */}
    </tr>
  </thead>
  <tbody>
    {data.map((country) => (
      <tr
        key={country.id}
        className="hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={() => navigate(`/country/${country.id}`)}
      >
        <td>{country.country}</td>
        <td className="text-yellow-600 font-bold">{country.gold}</td>
        {/* ... */}
      </tr>
    ))}
  </tbody>
</table>
```
- ✅ `.map()` pour itérer sur les pays
- ✅ `key={country.id}` obligatoire
- ✅ Classe `hover` pour UX
- ✅ Clic sur ligne → navigation

### Erreurs fréquentes à éviter

❌ **Erreur 1** : Calculs dans le JSX
```typescript
// MAUVAIS
<div>{data.reduce((acc, c) => acc + c.gold, 0)}</div>

// BON
const totalGold = useMemo(() => data.reduce((acc, c) => acc + c.gold, 0), [data]);
<div>{totalGold}</div>
```

❌ **Erreur 2** : Oublier `key` dans `.map()`
```typescript
// MAUVAIS
{data.map(country => <tr>...</tr>)}

// BON
{data.map(country => <tr key={country.id}>...</tr>)}
```

❌ **Erreur 3** : Pas de vérification avant navigation
```typescript
// MAUVAIS
const handleClick = (elements) => {
  const index = elements[0].index; // Crash si elements vide !
};

// BON
const handleClick = (elements) => {
  if (elements.length > 0) {
    const index = elements[0].index;
  }
};
```

### Checklist de validation

- [ ] Cartes de statistiques affichées correctement
- [ ] Graphique circulaire visible et responsive
- [ ] Clic sur graphique → navigation vers détail
- [ ] Tableau affiché avec toutes les colonnes
- [ ] Clic sur ligne → navigation vers détail
- [ ] Pas de `any` dans le code
- [ ] `useMemo` utilisé pour les calculs
- [ ] Responsive testé (mobile + desktop)

---

## Étape 2 - Améliorer la page détail et navigation

### Objectif pédagogique
Utiliser `useParams` pour récupérer les paramètres d'URL et afficher les détails d'un pays.

### Corrections détaillées

#### Amélioration de `Country.tsx`

**Fichier complet** : Voir solution `src/pages/Country.tsx`

**Points clés** :

##### a) Récupération de l'ID depuis l'URL
```typescript
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
const { getCountryById, loading } = useOlympicData();
```
- ✅ `useParams` typé avec `<{ id: string }>`
- ✅ Récupération de la fonction `getCountryById` du hook

##### b) Gestion du loading
```typescript
if (loading) {
  return <Loading />;
}
```
- ✅ Affichage du spinner pendant chargement

##### c) Récupération et vérification du pays
```typescript
const country = getCountryById(parseInt(id || '0'));

if (!country) {
  return <ErrorMessage message="Pays non trouvé. Veuillez revenir à la page d'accueil." />;
}
```
- ✅ Conversion `string` → `number` avec `parseInt`
- ✅ Valeur par défaut si `id` est `undefined`
- ✅ Vérification existence du pays
- ✅ Message d'erreur clair si non trouvé

##### d) Header avec bouton retour
```typescript
<Header showBackButton onBack={() => navigate('/')} />
```
- ✅ Prop `showBackButton` activée
- ✅ Callback `onBack` avec navigation

##### e) Affichage des statistiques
```typescript
<h2 className="text-3xl font-bold mb-6">{country.country}</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
  <StatsCard title="Participations" value={country.participations} />
  <StatsCard
    title="Médailles d'or"
    value={country.gold}
    bgColor="bg-yellow-100"
    textColor="text-yellow-600"
  />
  <StatsCard
    title="Médailles d'argent"
    value={country.silver}
    bgColor="bg-gray-100"
    textColor="text-gray-600"
  />
  <StatsCard
    title="Médailles de bronze"
    value={country.bronze}
    bgColor="bg-orange-100"
    textColor="text-orange-600"
  />
</div>
```
- ✅ Titre dynamique avec nom du pays
- ✅ Grille responsive
- ✅ Réutilisation de `StatsCard`

##### f) Statistiques générales
```typescript
const medalsPerAthlete = (country.total / country.athletes).toFixed(2);

<div className="bg-white p-6 rounded-lg shadow">
  <h3 className="text-xl font-bold mb-4">Statistiques générales</h3>
  <div className="space-y-3">
    <div className="flex justify-between">
      <span className="text-gray-600">Total médailles:</span>
      <span className="font-bold">{country.total}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Athlètes:</span>
      <span className="font-bold">{country.athletes}</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Médailles par athlète:</span>
      <span className="font-bold">{medalsPerAthlete}</span>
    </div>
  </div>
</div>
```
- ✅ Calcul de statistique dérivée
- ✅ `.toFixed(2)` pour 2 décimales
- ✅ Mise en page claire

##### g) Graphique d'évolution
```typescript
const historyData = {
  labels: ['2000', '2004', '2008', '2012', '2016', '2020'],
  datasets: [
    {
      label: 'Or',
      data: [40, 35, 36, 46, 46, 39],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
    {
      label: 'Argent',
      data: [24, 39, 38, 28, 37, 41],
      backgroundColor: 'rgba(192, 192, 192, 0.6)',
    },
    {
      label: 'Bronze',
      data: [33, 27, 36, 32, 38, 33],
      backgroundColor: 'rgba(205, 127, 50, 0.6)',
    },
  ],
};

<Bar
  data={historyData}
  options={{
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }}
/>
```
- ✅ Données mockées (dans un vrai projet, viendraient de l'API)
- ✅ Graphique à barres empilées
- ✅ Configuration responsive

### Navigation testée

#### Scénarios à tester :
1. ✅ Dashboard → Clic graphique → Détail pays
2. ✅ Dashboard → Clic tableau → Détail pays
3. ✅ Détail pays → Bouton retour → Dashboard
4. ✅ URL directe `/country/1` → Détail pays
5. ✅ URL invalide `/country/999` → Message d'erreur

### Erreurs fréquentes

❌ **Erreur 1** : Ne pas vérifier l'existence du pays
```typescript
// MAUVAIS
const country = getCountryById(parseInt(id || '0'));
return <div>{country.country}</div>; // Crash si country undefined !

// BON
const country = getCountryById(parseInt(id || '0'));
if (!country) {
  return <ErrorMessage message="Pays non trouvé" />;
}
return <div>{country.country}</div>;
```

❌ **Erreur 2** : Oublier de parser l'ID
```typescript
// MAUVAIS
const country = getCountryById(id); // id est string !

// BON
const country = getCountryById(parseInt(id || '0'));
```

### Checklist de validation

- [ ] ID récupéré depuis l'URL
- [ ] Pays recherché avec `getCountryById`
- [ ] Message d'erreur si pays non trouvé
- [ ] Bouton retour fonctionnel
- [ ] Statistiques affichées correctement
- [ ] Graphique d'évolution visible
- [ ] Navigation testée dans les deux sens

---

## Étape 3 - Gérer les erreurs de navigation

### Objectif pédagogique
Sécuriser l'application en gérant les cas d'erreur (404, données manquantes).

### Corrections détaillées

#### 1. Page 404 - `NotFound.tsx`

**Déjà implémentée** : Voir solution `src/pages/NotFound.tsx`

**Points clés** :
```typescript
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-6">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};
```
- ✅ Message clair et professionnel
- ✅ Bouton retour à l'accueil
- ✅ Design cohérent avec l'application

#### 2. Route catch-all dans `App.tsx`

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/country/:id" element={<Country />} />
  <Route path="*" element={<NotFound />} /> {/* ✅ Attrape toutes les URLs invalides */}
</Routes>
```
- ✅ `path="*"` = wildcard pour URLs non matchées
- ✅ Doit être la dernière route

#### 3. Gestion d'erreur dans `Country.tsx`

```typescript
if (!country) {
  return <ErrorMessage message="Pays non trouvé. Veuillez revenir à la page d'accueil." />;
}
```
- ✅ Vérifie l'existence du pays
- ✅ Message d'erreur clair
- ✅ Pas de page blanche

### Cas d'erreur gérés

| Scénario | Gestion |
|----------|---------|
| URL invalide `/blabla` | → Page 404 (NotFound.tsx) |
| URL `/country/999` (ID inexistant) | → ErrorMessage dans Country.tsx |
| Données non chargées (loading) | → Loading.tsx |
| Clic sur graphique vide | → Vérification `elements.length > 0` |

### Tests à effectuer

1. ✅ Naviguer vers `/page-inexistante` → Affiche 404
2. ✅ Naviguer vers `/country/999` → Message "Pays non trouvé"
3. ✅ Naviguer vers `/country/abc` → Message "Pays non trouvé"
4. ✅ Cliquer bouton retour depuis 404 → Retour dashboard
5. ✅ Cliquer bouton retour depuis erreur → Retour dashboard

### Checklist de validation

- [ ] Route `path="*"` ajoutée dans App.tsx
- [ ] Page NotFound créée et stylisée
- [ ] Vérification `!country` dans Country.tsx
- [ ] Composant ErrorMessage utilisé
- [ ] Tous les cas d'erreur testés manuellement
- [ ] Aucune page blanche possible

---

## Étape 4 - Finaliser l'application et documenter

### Objectif pédagogique
Finaliser le projet en testant l'ensemble, en nettoyant le code et en documentant pour la mise en production.

### Corrections détaillées

#### 1. Tests manuels complets

**Parcours utilisateur à tester** :

```
1. Landing sur /
   ✅ Cartes de stats affichées
   ✅ Graphique visible
   ✅ Tableau complet

2. Clic sur graphique (ex: États-Unis)
   ✅ Navigation vers /country/1
   ✅ Détails du pays affichés
   ✅ Bouton retour présent

3. Clic sur bouton retour
   ✅ Retour sur /
   ✅ Dashboard rechargé correctement

4. Clic sur ligne tableau (ex: France)
   ✅ Navigation vers /country/2
   ✅ Détails affichés

5. Navigation URL directe /country/3
   ✅ Page chargée directement

6. Navigation URL invalide /country/999
   ✅ Message d'erreur affiché

7. Navigation URL invalide /blabla
   ✅ Page 404 affichée

8. Test responsive
   ✅ Mobile (320px) : grille 1 colonne
   ✅ Tablet (768px) : grille 4 colonnes
   ✅ Desktop (1024px+) : layout complet
```

#### 2. Nettoyage du code

**Checklist de nettoyage** :

```bash
# Vérifier les console.log
grep -r "console.log" src/
# → Aucun résultat attendu (ou uniquement erreurs dans catch)

# Vérifier les types any
grep -r ": any" src/
# → Aucun résultat attendu

# Vérifier les fichiers non utilisés
# Supprimer tout fichier .tsx ou .ts non importé

# Vérifier les variables inutilisées
npm run lint
# → Aucune erreur attendue

# Vérifier les imports inutilisés
# Supprimer les imports grisés dans l'IDE
```

**Éléments à supprimer** :
- ❌ `console.log()` de debug
- ❌ Code commenté
- ❌ Variables déclarées mais non utilisées
- ❌ Imports inutiles
- ❌ Fichiers de test non utilisés

#### 3. Documentation `README.md`

**Fichier `README.md` complet** :

```markdown
# TéléSport - Application Jeux Olympiques

Application web React pour visualiser les performances olympiques des pays.

## Contexte

Projet pédagogique OpenClassrooms - Parcours Développeur Full-Stack JavaScript.

**Objectif** : Développer une interface React 19 + TypeScript pour afficher et explorer les statistiques des Jeux Olympiques par pays.

## Technologies utilisées

- **React 19** - Bibliothèque UI (Functional Components uniquement)
- **TypeScript** - Langage (mode strict, aucun `any`)
- **Vite 5+** - Build tool et dev server
- **React Router 6+** - Navigation (SPA)
- **Tailwind CSS 3.4+** - Framework CSS utility-first
- **Chart.js + react-chartjs-2** - Visualisation de données

## Prérequis

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

```bash
# Cloner le repository
git clone <url-du-repo>
cd p2-dfsjs-telesport-starter

# Installer les dépendances
npm install
```

## Lancement

```bash
# Mode développement (hot reload)
npm run dev

# Build pour production
npm run build

# Preview du build de production
npm run preview

# Linter
npm run lint
```

L'application sera accessible sur `http://localhost:5173`

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx
│   ├── StatsCard.tsx
│   ├── Loading.tsx
│   └── ErrorMessage.tsx
├── pages/               # Pages de l'application
│   ├── Home.tsx         # Dashboard principal
│   ├── Country.tsx      # Détail d'un pays
│   └── NotFound.tsx     # Page 404
├── hooks/               # Custom Hooks
│   └── useOlympicData.ts # Gestion des données
├── models/              # Interfaces TypeScript
│   └── Olympic.ts
├── App.tsx              # Configuration routing
├── main.tsx             # Point d'entrée
└── index.css            # Styles globaux (Tailwind)
```

## Fonctionnalités

### Dashboard (/)
- Affichage des statistiques globales (total médailles, or, argent, bronze)
- Graphique circulaire interactif des médailles par pays
- Tableau récapitulatif des performances par pays
- Navigation vers le détail d'un pays (clic sur graphique ou tableau)

### Page détail (/country/:id)
- Statistiques détaillées du pays sélectionné
- Graphique d'évolution historique des médailles
- Bouton retour vers le dashboard

### Gestion d'erreur
- Page 404 pour les URLs invalides
- Message d'erreur si pays non trouvé
- Indicateur de chargement pendant récupération des données

## Architecture

### Composants réutilisables
- **Header** : En-tête avec navigation conditionnelle
- **StatsCard** : Carte de statistique configurable (couleurs, valeurs)
- **Loading** : Indicateur de chargement
- **ErrorMessage** : Message d'erreur formaté

### Custom Hook
- **useOlympicData** : Centralise la gestion des données olympiques
  - Simule actuellement un appel API avec délai
  - Prêt pour intégration API REST

### Typage strict
- Interface `Olympic` pour toutes les données
- Aucun `any` dans le code
- Props typées pour tous les composants

## Bonnes pratiques appliquées

✅ **Typage strict** : TypeScript mode strict, aucun `any`
✅ **Séparation des responsabilités** : composants, pages, hooks, models
✅ **Réutilisabilité** : composants configurables
✅ **Optimisation** : `useMemo` pour éviter les recalculs
✅ **Gestion d'erreur** : 404, vérifications, messages clairs
✅ **Custom Hooks** : logique métier externalisée
✅ **Responsive Design** : mobile-first avec Tailwind

## Captures d'écran

### Desktop
![Dashboard Desktop](./screenshots/dashboard-desktop.png)
![Détail Pays Desktop](./screenshots/country-desktop.png)

### Mobile
![Dashboard Mobile](./screenshots/dashboard-mobile.png)
![Détail Pays Mobile](./screenshots/country-mobile.png)

## Évolutions futures

- Intégration d'une API REST réelle
- Ajout de filtres et tri sur le dashboard
- Graphiques supplémentaires (médailles par sport, etc.)
- Tests unitaires (Vitest)
- Tests E2E (Playwright)
- Mode sombre
- Internationalisation

## Auteur

[Votre nom] - Projet OpenClassrooms P2 DFSJS

## Licence

Projet pédagogique OpenClassrooms
```

#### 4. Captures d'écran

**À réaliser** :
1. ✅ Dashboard desktop (1920x1080)
2. ✅ Dashboard mobile (375x667)
3. ✅ Page détail desktop
4. ✅ Page détail mobile
5. ✅ Page 404

**Outil recommandé** : DevTools Chrome (F12 → Device Toolbar)

#### 5. Validation finale

**Commandes à exécuter** :

```bash
# Build de production doit réussir
npm run build
# ✅ Aucune erreur TypeScript
# ✅ Build créé dans dist/

# Linter doit passer
npm run lint
# ✅ Aucune erreur
# ✅ Aucun warning critique

# Preview du build
npm run preview
# ✅ Application fonctionne en mode production
```

### Checklist de validation finale

#### Code
- [ ] Aucun `console.log` de debug
- [ ] Aucun `any` dans le code
- [ ] Aucune variable inutilisée
- [ ] `npm run lint` passe sans erreur
- [ ] `npm run build` réussit

#### Fonctionnalités
- [ ] Dashboard affiche correctement toutes les stats
- [ ] Graphique cliquable → navigation
- [ ] Tableau cliquable → navigation
- [ ] Page détail affiche les bonnes données
- [ ] Bouton retour fonctionne
- [ ] Page 404 pour URLs invalides
- [ ] Message d'erreur si pays inexistant

#### Responsive
- [ ] Dashboard responsive (mobile + desktop)
- [ ] Page détail responsive
- [ ] Graphiques s'adaptent à la taille d'écran

#### Documentation
- [ ] README.md complet
- [ ] ARCHITECTURE.md à jour
- [ ] Captures d'écran ajoutées
- [ ] Instructions d'installation claires

#### Git
- [ ] Repository propre (pas de node_modules/)
- [ ] `.gitignore` correctement configuré
- [ ] Commits clairs et réguliers
- [ ] Branch main à jour

---

# GRILLE D'ÉVALUATION

## Compétences évaluées

### 1. Analyser et refactoriser du code existant

**Critères** :
- ✅ Identification des anti-patterns (useEffect, any, données en dur, etc.)
- ✅ Proposition d'architecture adaptée et justifiée
- ✅ Documentation des problèmes dans `notes-architecture.md`

**Niveaux** :
- **Excellent** : Tous les problèmes identifiés, architecture claire et justifiée
- **Satisfaisant** : Principaux problèmes identifiés, architecture cohérente
- **Insuffisant** : Problèmes majeurs non identifiés ou architecture inadaptée

### 2. Structurer une architecture front-end avec React

**Critères** :
- ✅ Séparation components/pages/hooks/models respectée
- ✅ Custom Hook créé et utilisé correctement
- ✅ Typage strict (aucun `any`)
- ✅ Composants réutilisables

**Niveaux** :
- **Excellent** : Architecture professionnelle, tous les principes respectés
- **Satisfaisant** : Architecture correcte, typage majoritairement strict
- **Insuffisant** : Architecture mal structurée ou typage laxiste

### 3. Développer une interface fonctionnelle avec React

**Critères** :
- ✅ Dashboard fonctionnel avec graphique interactif
- ✅ Page détail avec statistiques et navigation
- ✅ Responsive design
- ✅ Gestion des erreurs (404, pays inexistant)

**Niveaux** :
- **Excellent** : Interface complète, interactions fluides, responsive parfait
- **Satisfaisant** : Interface fonctionnelle, responsive basique
- **Insuffisant** : Fonctionnalités manquantes ou bugs majeurs

### 4. Gérer la navigation et les erreurs

**Critères** :
- ✅ React Router configuré correctement
- ✅ Navigation fluide (SPA, pas de rechargement)
- ✅ Route 404 implémentée
- ✅ Vérifications et messages d'erreur clairs

**Niveaux** :
- **Excellent** : Navigation parfaite, tous les cas d'erreur gérés
- **Satisfaisant** : Navigation fonctionnelle, erreurs principales gérées
- **Insuffisant** : Bugs de navigation ou erreurs non gérées

### 5. Documenter et maintenir le code

**Critères** :
- ✅ README.md complet avec instructions
- ✅ ARCHITECTURE.md décrivant la structure
- ✅ Code propre (pas de console.log, variables inutilisées, etc.)
- ✅ Commits Git clairs

**Niveaux** :
- **Excellent** : Documentation complète, code impeccable
- **Satisfaisant** : Documentation présente, code globalement propre
- **Insuffisant** : Documentation manquante ou code mal maintenu

---

# ERREURS FRÉQUENTES ET SOLUTIONS

## Erreur 1 : useEffect boucle infinie

**Symptôme** : Application freeze, console pleine de logs

**Cause** :
```typescript
useEffect(() => {
  setData(olympicData);
}); // ❌ Pas de tableau de dépendances
```

**Solution** :
```typescript
useEffect(() => {
  setData(olympicData);
}, []); // ✅ Tableau vide = exécution unique
```

## Erreur 2 : Typage `any` partout

**Symptôme** : Aucune autocomplétion, bugs silencieux

**Cause** :
```typescript
const [data, setData] = useState<any[]>([]);
```

**Solution** :
```typescript
const [data, setData] = useState<Olympic[]>([]);
```

## Erreur 3 : Calculs dans le JSX

**Symptôme** : Performances dégradées

**Cause** :
```typescript
return <div>{data.reduce((acc, c) => acc + c.gold, 0)}</div>;
```

**Solution** :
```typescript
const totalGold = useMemo(() => data.reduce((acc, c) => acc + c.gold, 0), [data]);
return <div>{totalGold}</div>;
```

## Erreur 4 : Pas de vérification d'erreur

**Symptôme** : Page blanche en cas d'URL invalide

**Cause** :
```typescript
const country = getCountryById(id);
return <div>{country.name}</div>; // Crash si undefined
```

**Solution** :
```typescript
const country = getCountryById(id);
if (!country) return <ErrorMessage message="Pays non trouvé" />;
return <div>{country.name}</div>;
```

## Erreur 5 : Oublier `key` dans `.map()`

**Symptôme** : Warning dans la console React

**Cause** :
```typescript
{data.map(country => <div>{country.name}</div>)}
```

**Solution** :
```typescript
{data.map(country => <div key={country.id}>{country.name}</div>)}
```

---

# FAQ MENTORS

## Q1 : Doit-on exiger une vraie API ?

**Non.** Dans ce projet, les données mockées dans le hook suffisent. L'objectif est de préparer l'architecture pour une future API, pas de l'implémenter.

**Points à valider** :
- ✅ Données centralisées dans un Custom Hook
- ✅ Pas de données en dur dans les composants
- ✅ Hook prêt à remplacer mock par `fetch()`

## Q2 : Le design doit-il être pixel-perfect ?

**Non.** L'objectif est fonctionnel, pas esthétique. Tailwind CSS suffit.

**Points à valider** :
- ✅ Interface fonctionnelle et lisible
- ✅ Responsive basique (mobile + desktop)
- ✅ Pas de demande de perfection visuelle

## Q3 : Combien de composants minimum ?

**Minimum attendu** :
- Header (1)
- StatsCard (1)
- Loading (1)
- ErrorMessage (1)
- Home (page)
- Country (page)
- NotFound (page)

**Total** : 7 fichiers .tsx minimum (hors App.tsx et main.tsx)

## Q4 : Faut-il des tests unitaires ?

**Non** pour ce projet. Tests manuels uniquement.

**Prochains projets** : Tests seront introduits (Vitest, Playwright)

## Q5 : Que faire si l'étudiant utilise des Class Components ?

**À refuser.** React 19 = Functional Components uniquement.

**Points à corriger** :
- ❌ Aucun `class` ou `extends React.Component`
- ✅ Uniquement `function` ou `const` + arrow function

## Q6 : L'étudiant peut-il utiliser des librairies supplémentaires ?

**Autorisé** :
- Chart.js alternatives (Recharts, Victory)
- Librairies CSS (si nécessaire, mais Tailwind suffit)

**Non autorisé** :
- State management externe (Redux, Zustand) → overkill
- Frameworks CSS lourds (Bootstrap) → conflit avec Tailwind

---

# RESSOURCES COMPLÉMENTAIRES

## Documentation officielle

- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Chart.js](https://www.chartjs.org/docs/)
- [Vite](https://vitejs.dev/guide/)

## Bonnes pratiques React

- [React Hooks Guide](https://react.dev/reference/react)
- [TypeScript + React Best Practices](https://react-typescript-cheatsheet.netlify.app/)
- [React Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Outils de développement

- [VS Code](https://code.visualstudio.com/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [ESLint](https://eslint.org/)

---

**FIN DU CORRIGÉ**

Ce document couvre l'intégralité des exercices 1 et 2 avec toutes les corrections attendues.
