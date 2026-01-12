# CORRIGÉ - Projet TéléSport (Jeux Olympiques)

## Introduction

### Vue d'ensemble de la solution

Ce projet permet aux étudiants de mettre en pratique les compétences React suivantes :
- Architecture front-end modulaire
- Custom Hooks pour la logique métier
- React Router pour la navigation
- Recharts pour les graphiques interactifs
- TypeScript en mode strict
- Tailwind CSS pour le responsive

### Compétences validées par cette solution

1. **Architecture** : Séparation components/ pages/ hooks/ models/
2. **React moderne** : Functional Components, Hooks, Composition
3. **TypeScript** : Typage strict, interfaces, pas de `any`
4. **Navigation** : React Router avec paramètres dynamiques
5. **Visualisation de données** : Recharts (PieChart, LineChart)
6. **Responsive Design** : Tailwind CSS avec classes adaptatives
7. **Gestion d'états** : Loading, Error, Success

### Architecture générale adoptée

```
telesport-starter/
├── src/
│   ├── components/      # Composants réutilisables (StatCard, LoadingSpinner, ErrorMessage)
│   ├── hooks/           # Custom Hooks (useOlympicData)
│   ├── models/          # Interfaces TypeScript (Olympic, Participation)
│   ├── pages/           # Pages (Home, Country, NotFound)
│   ├── App.tsx          # Configuration du routing
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles Tailwind
├── Dockerfile
├── docker-compose.yml
└── package.json
```

---

## Exercice 1 : Refactorisation de l'architecture front-end

Cet exercice guide l'étudiant à travers la création d'une architecture React modulaire et scalable.

### Objectif pédagogique global

- Comprendre l'importance de l'architecture modulaire
- Savoir identifier les anti-patterns React
- Savoir séparer les responsabilités (components/ hooks/ pages/)
- Appliquer les best practices React 2025

---

## Étape 1.1 : Analyser le code existant et repérer les problèmes

### Objectif pédagogique

- Développer un œil critique sur le code existant
- Identifier les mauvaises pratiques React
- Comprendre la dette technique

### Ce qu'il faut faire

**Actions attendues** :
1. Lancer l'application avec `npm run dev` (ou `docker-compose up`)
2. Explorer les fichiers dans `src/`
3. Repérer les problèmes suivants :
   - Fichiers trop volumineux (> 200 lignes)
   - Code dupliqué
   - Appels de données directement dans les composants
   - Absence de typage strict (`any` présent)
   - Mauvaise utilisation de `useEffect`
   - Bouts de code à supprimer (`console.log`)
4. Documenter ces observations dans `notes-architecture.md`

### Explication technique

**Pourquoi cette approche** :
- L'analyse de code existant est une compétence professionnelle essentielle
- Identifier les problèmes avant de coder évite les erreurs
- La documentation des observations aide à planifier le refactoring

**Concepts clés à comprendre** :
- **Dette technique** : Code mal structuré qui ralentit le développement futur
- **Anti-patterns React** : Pratiques à éviter (données en dur dans composants, pas de séparation, etc.)
- **Lisibilité** : Code facile à comprendre et maintenir

### Code de référence

**Exemple de problèmes à identifier** :

❌ **Mauvais** : Données en dur dans un composant
```tsx
// Dans un composant
const countries = [
  { id: 1, name: 'France', medals: 33 },
  // ...
];
```

✅ **Bon** : Données dans un Custom Hook
```tsx
// Dans hooks/useOlympicData.ts
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  // ...
};
```

❌ **Mauvais** : Pas de typage
```tsx
const getData = () => {
  const data: any = fetchData(); // ❌ any
};
```

✅ **Bon** : Typage strict
```tsx
const getData = (): Olympic[] => {
  const data: Olympic[] = fetchData(); // ✅ Type explicite
};
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Ne pas se limiter à la structure des fichiers, analyser aussi la logique
- Ne pas proposer de solutions à cette étape (juste identifier)
- Ne pas oublier de documenter dans `notes-architecture.md`

**Pièges classiques** :
- Penser que "ça marche donc c'est bon" → Non, la maintenabilité compte
- Ne pas voir les duplications de code
- Ignorer les `console.log` et les `any`

**Ce que le mentor doit vérifier** :
- ✅ L'étudiant a identifié au moins 5 problèmes différents
- ✅ Les problèmes sont documentés dans `notes-architecture.md`
- ✅ L'étudiant comprend pourquoi c'est problématique
- ✅ L'étudiant n'a pas encore modifié le code

### Fichiers concernés

- `notes-architecture.md` (à créer)
- Tous les fichiers dans `src/` (lecture seule à cette étape)

---

## Étape 1.2 : Concevoir une nouvelle architecture adaptée

### Objectif pédagogique

- Comprendre l'architecture React modulaire
- Savoir planifier avant de coder
- Appliquer les design patterns adaptés

### Ce qu'il faut faire

**Actions attendues** :
1. Identifier les blocs logiques de l'application :
   - Composants réutilisables (StatCard, etc.)
   - Pages (Home, Country, NotFound)
   - Custom Hooks (useOlympicData)
   - Modèles TypeScript (interfaces)
2. Proposer une arborescence claire :
   ```
   src/
   ├── components/
   ├── pages/
   ├── hooks/ (ou services/)
   ├── models/
   ```
3. Schématiser l'architecture (draw.io, Whimsical, Figma)
4. Expliquer comment cette architecture facilitera l'intégration future d'un back-end
5. Documenter dans `notes-architecture.md`

### Explication technique

**Pourquoi cette approche** :
- Séparer les responsabilités rend le code maintenable
- Les Custom Hooks centralisent la logique métier
- L'architecture modulaire facilite les tests et la scalabilité

**Concepts clés à comprendre** :
- **Séparation des responsabilités** : Chaque dossier a un rôle précis
- **Custom Hooks** : Logique réutilisable (vs composants UI)
- **Container/Presentational Pattern** : Pages (container) vs Components (presentational)

**Liens avec les best practices** :
- React recommande de séparer la logique de l'UI
- Les Custom Hooks sont le moyen standard de partager la logique
- L'architecture modulaire est un standard de l'industrie

### Code de référence

**Exemple d'arborescence** :

```
src/
├── components/          # Composants UI réutilisables
│   ├── StatCard.tsx     # Affiche une statistique
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── pages/               # Pages complètes de l'app
│   ├── Home.tsx         # Dashboard
│   ├── Country.tsx      # Détail pays
│   └── NotFound.tsx     # 404
├── hooks/               # Custom Hooks (logique métier)
│   └── useOlympicData.ts # Récupération des données
├── models/              # Interfaces TypeScript
│   └── Olympic.ts       # Participation, Olympic
├── App.tsx              # Routing
├── main.tsx             # Point d'entrée
└── index.css            # Styles Tailwind
```

**Exemple de Custom Hook** :

```tsx
// hooks/useOlympicData.ts
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dans ce projet : données mockées
    // Dans un futur projet : appel API
    fetchData();
  }, []);

  return { data, loading, error };
};
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Sur-complexifier l'architecture (trop de sous-dossiers)
- Copier une architecture sans comprendre
- Ne pas prévoir l'intégration future d'une API

**Pièges classiques** :
- Confondre `components/` et `pages/` → pages sont des containers, components sont réutilisables
- Oublier le dossier `models/` pour les interfaces TypeScript
- Ne pas documenter les choix d'architecture

**Ce que le mentor doit vérifier** :
- ✅ L'architecture proposée est claire et logique
- ✅ Les dossiers ont des responsabilités bien définies
- ✅ L'étudiant explique comment intégrer une API plus tard
- ✅ Un schéma ou une liste est fourni dans `notes-architecture.md`

### Fichiers concernés

- `notes-architecture.md` (mise à jour)
- Schéma d'architecture (draw.io, Whimsical, ou même une liste textuelle)

---

## Étape 1.3 : Refactoriser les composants existants

### Objectif pédagogique

- Savoir appliquer une architecture définie
- Comprendre la séparation container/presentational
- Maîtriser le typage TypeScript

### Ce qu'il faut faire

**Actions attendues** :
1. Créer les dossiers `components/`, `pages/`, `hooks/`, `models/`
2. Créer les interfaces TypeScript dans `models/Olympic.ts` :
   ```tsx
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
3. Créer les composants réutilisables :
   - `StatCard.tsx` : affiche une statistique (label + value)
   - `LoadingSpinner.tsx` : indicateur de chargement
   - `ErrorMessage.tsx` : affichage d'erreur
4. Créer les pages de base :
   - `Home.tsx` : Dashboard (vide pour l'instant)
   - `Country.tsx` : Détail pays (vide pour l'instant)
   - `NotFound.tsx` : Page 404
5. Tester avec `npm run dev` après chaque modification
6. Committer avec un message clair : `Refactor: séparation des composants`

### Explication technique

**Pourquoi cette approche** :
- Les composants réutilisables évitent la duplication
- Les interfaces TypeScript garantissent la cohérence des données
- La séparation pages/components facilite la maintenance

**Concepts clés à comprendre** :
- **Functional Components** : Fonctions qui retournent du JSX
- **Props** : Arguments passés aux composants
- **TypeScript Interfaces** : Contrats de données

**Liens avec les best practices** :
- React 2025 : Functional Components uniquement
- TypeScript : Typage strict sans `any`
- Composition > Héritage

### Code de référence

**StatCard.tsx (composant réutilisable)** :

```tsx
interface StatCardProps {
  label: string;
  value: number;
}

export const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <p className="text-gray-600 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
};
```

**Explication** :
- ✅ Typage strict des props avec `interface`
- ✅ Functional Component (pas de class)
- ✅ Tailwind CSS pour le style
- ✅ Composant simple et réutilisable

**Home.tsx (page)** :

```tsx
import { StatCard } from '../components/StatCard';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Jeux Olympiques</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard label="Pays participants" value={5} />
        <StatCard label="Jeux Olympiques" value={4} />
      </div>
    </div>
  );
};
```

**Explication** :
- ✅ Réutilisation de `StatCard`
- ✅ Responsive avec `grid-cols-1 md:grid-cols-2`
- ✅ Structure claire et lisible

### Points de vigilance

**Erreurs courantes à éviter** :
- Oublier d'exporter les composants (`export const MyComponent`)
- Ne pas mettre à jour les imports dans `App.tsx` après renommage
- Laisser des `console.log` ou des variables inutilisées
- Utiliser `any` pour les props

**Pièges classiques** :
- Supprimer un fichier sans mettre à jour les imports → erreur de compilation
- Ne pas tester après chaque modification
- Oublier de typer les props des composants

**Ce que le mentor doit vérifier** :
- ✅ Tous les composants sont dans le bon dossier
- ✅ Les interfaces TypeScript sont correctement définies
- ✅ Aucun `any` dans le code
- ✅ L'application compile sans erreur (`npm run dev`)
- ✅ Un commit Git a été fait avec un message clair

### Fichiers concernés

- [src/models/Olympic.ts](../telesport-starter/src/models/Olympic.ts)
- [src/components/StatCard.tsx](../telesport-starter/src/components/StatCard.tsx)
- [src/components/LoadingSpinner.tsx](../telesport-starter/src/components/LoadingSpinner.tsx)
- [src/components/ErrorMessage.tsx](../telesport-starter/src/components/ErrorMessage.tsx)
- [src/pages/Home.tsx](../telesport-starter/src/pages/Home.tsx)
- [src/pages/Country.tsx](../telesport-starter/src/pages/Country.tsx)
- [src/pages/NotFound.tsx](../telesport-starter/src/pages/NotFound.tsx)
- [src/App.tsx](../telesport-starter/src/App.tsx)

---

## Étape 1.4 : Externaliser la gestion des données dans un Custom Hook

### Objectif pédagogique

- Comprendre les Custom Hooks React
- Savoir externaliser la logique métier
- Préparer l'intégration future d'une API

### Ce qu'il faut faire

**Actions attendues** :
1. Créer le fichier `hooks/useOlympicData.ts`
2. Implémenter le hook avec :
   - État `data` (tableau d'Olympics)
   - État `loading` (booléen)
   - État `error` (string | null)
   - `useEffect` pour simuler un appel API
   - Données mockées (au minimum France, mais idéalement 5 pays)
3. Utiliser le hook dans `Home.tsx` et `Country.tsx`
4. Tester que l'application fonctionne
5. Committer : `Refactor: centralisation des données dans useOlympicData`

### Explication technique

**Pourquoi cette approche** :
- Les Custom Hooks permettent de partager la logique entre composants
- Centraliser les données facilite la maintenance
- Prépare l'intégration future d'une API REST

**Concepts clés à comprendre** :
- **Custom Hook** : Fonction commençant par `use` qui peut utiliser des hooks React
- **useEffect** : Exécute du code après le rendu (idéal pour les appels API)
- **useState** : Gère l'état local (data, loading, error)

**Liens avec les best practices** :
- Séparer la logique de l'UI (Clean Architecture)
- Utiliser les hooks React (standard 2025)
- Gérer les états loading/error pour une bonne UX

### Code de référence

**hooks/useOlympicData.ts** :

```tsx
import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';

export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Simulation d'un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));

        // Données mockées
        const mockData: Olympic[] = [
          {
            id: 1,
            country: 'France',
            participations: [
              { id: 1, year: 2020, city: 'Tokyo', medalsCount: 33, athleteCount: 378 },
              { id: 2, year: 2016, city: 'Rio', medalsCount: 42, athleteCount: 396 },
            ],
          },
          // TODO: Ajouter d'autres pays
        ];

        setData(mockData);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
```

**Utilisation dans Home.tsx** :

```tsx
import { useOlympicData } from '../hooks/useOlympicData';

export const Home = () => {
  const { data, loading, error } = useOlympicData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      {/* Afficher les données */}
    </div>
  );
};
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Laisser des données en dur dans les composants
- Oublier de gérer les états loading/error
- Ne pas utiliser `useEffect` correctement (oublier le tableau de dépendances `[]`)

**Pièges classiques** :
- Appeler le hook conditionnellement → hooks doivent être appelés au top level
- Ne pas typer le retour du hook
- Oublier de tester l'affichage loading/error

**Ce que le mentor doit vérifier** :
- ✅ Le hook est dans `hooks/useOlympicData.ts`
- ✅ Le hook retourne `{ data, loading, error }`
- ✅ Les pages utilisent le hook (plus de données en dur)
- ✅ Les états loading/error sont gérés dans les pages
- ✅ L'application compile et fonctionne

### Fichiers concernés

- [src/hooks/useOlympicData.ts](../telesport-starter/src/hooks/useOlympicData.ts)
- [src/pages/Home.tsx](../telesport-starter/src/pages/Home.tsx) (mise à jour)
- [src/pages/Country.tsx](../telesport-starter/src/pages/Country.tsx) (mise à jour)

---

## Étape 1.5 : Documenter l'architecture et valider

### Objectif pédagogique

- Savoir rédiger une documentation technique
- Comprendre l'importance de la documentation
- Préparer le travail futur (exercice 2)

### Ce qu'il faut faire

**Actions attendues** :
1. Créer le fichier `ARCHITECTURE.md` à la racine
2. Documenter :
   - L'arborescence des dossiers (avec explications)
   - Les composants et leurs rôles
   - Le Custom Hook et son rôle
   - Comment cette architecture prépare l'intégration future d'une API
3. Utiliser `notes-architecture.md` comme base
4. Relire pour vérifier la clarté
5. Committer le fichier

### Explication technique

**Pourquoi cette approche** :
- La documentation aide les nouveaux développeurs à comprendre le projet
- Documenter force à réfléchir à la cohérence de l'architecture
- La documentation est une compétence professionnelle essentielle

**Concepts clés à comprendre** :
- **Documentation technique** : Expliquer le "pourquoi", pas seulement le "comment"
- **Architecture** : Vision d'ensemble du projet

### Code de référence

**Exemple de ARCHITECTURE.md** :

```markdown
# Architecture TéléSport

## Structure des dossiers

\`\`\`
src/
├── components/      # Composants réutilisables (UI)
├── pages/           # Pages complètes (containers)
├── hooks/           # Custom Hooks (logique métier)
├── models/          # Interfaces TypeScript
\`\`\`

## Composants

- **StatCard** : Affiche une statistique (label + value)
- **LoadingSpinner** : Indicateur de chargement
- **ErrorMessage** : Affichage d'erreur

## Custom Hook

- **useOlympicData** : Récupère les données olympiques. Actuellement mockées, mais prêt pour une API REST.

## Préparation API future

Le hook `useOlympicData` est conçu pour facilement intégrer une API :
- Remplacer les données mockées par `fetch('/api/olympics')`
- Le reste du code ne change pas (même interface)
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Recopier tout le code → rester synthétique
- Ne pas expliquer le "pourquoi"
- Oublier de mentionner la préparation API

**Ce que le mentor doit vérifier** :
- ✅ Le fichier `ARCHITECTURE.md` existe à la racine
- ✅ La documentation est claire et concise
- ✅ L'arborescence est documentée
- ✅ Les composants sont décrits
- ✅ Le hook est expliqué
- ✅ La préparation API est mentionnée

### Fichiers concernés

- `ARCHITECTURE.md` (à créer à la racine)

---

## Exercice 2 : Implémentation de nouvelles fonctionnalités UI

Cet exercice guide l'étudiant à travers l'implémentation complète de l'interface utilisateur avec graphiques.

### Objectif pédagogique global

- Savoir implémenter une interface React complète
- Maîtriser React Router pour la navigation
- Utiliser Recharts pour les graphiques
- Gérer les erreurs côté front
- Assurer la responsivité

---

## Étape 2.1 : Améliorer le dashboard existant

### Objectif pédagogique

- Implémenter un graphique interactif avec Recharts
- Calculer des statistiques à partir de données
- Gérer la navigation au clic

### Ce qu'il faut faire

**Actions attendues** :
1. Compléter les données mockées dans `useOlympicData` (ajouter au moins 3 autres pays)
2. Dans `Home.tsx`, calculer :
   - `totalCountries` : longueur du tableau data
   - `totalOlympics` : nombre d'années uniques
3. Installer Recharts (déjà dans package.json)
4. Implémenter un PieChart avec :
   - Données : total médailles par pays
   - Couleurs personnalisées
   - Tooltip et Legend
   - Navigation au clic vers `/country/:id`
5. Tester le dashboard

### Explication technique

**Pourquoi cette approche** :
- Les graphiques rendent les données visuelles et interactives
- Recharts est une bibliothèque React adaptée aux débutants
- La navigation au clic améliore l'UX

**Concepts clés à comprendre** :
- **PieChart** : Graphique circulaire pour montrer les proportions
- **Reduce** : Méthode JavaScript pour calculer des totaux
- **Set** : Structure de données pour extraire les valeurs uniques
- **useNavigate** : Hook React Router pour la navigation programmatique

### Code de référence

**Calculer le total d'années uniques** :

```tsx
const allYears = new Set<number>();
data.forEach(country => {
  country.participations.forEach(participation => {
    allYears.add(participation.year);
  });
});
const totalOlympics = allYears.size;
```

**Explication** :
- `Set` ne garde que les valeurs uniques
- On parcourt toutes les participations de tous les pays
- On ajoute chaque année au Set
- La taille du Set = nombre d'années uniques

**Implémenter le PieChart** :

```tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const Home = () => {
  const { data, loading, error } = useOlympicData();
  const navigate = useNavigate();

  // Préparer les données pour le graphique
  const chartData = data.map(country => {
    const totalMedals = country.participations.reduce(
      (sum, participation) => sum + participation.medalsCount,
      0
    );
    return {
      name: country.country,
      value: totalMedals,
      id: country.id,
    };
  });

  // Navigation au clic
  const handlePieClick = (entry: { id: number }) => {
    navigate(`/country/${entry.id}`);
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          onClick={handlePieClick}
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
  );
};
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Ne pas ajouter assez de pays → graphique peu intéressant
- Oublier `ResponsiveContainer` → graphique pas responsive
- Ne pas gérer le clic sur le graphique

**Pièges classiques** :
- Mauvais calcul du total de médailles (oublier le `reduce`)
- Oublier d'importer `useNavigate`
- Utiliser `any` pour les types

**Ce que le mentor doit vérifier** :
- ✅ Au moins 5 pays dans les données mockées
- ✅ Calcul correct de `totalOlympics`
- ✅ PieChart s'affiche correctement
- ✅ Clic sur le graphique → navigation vers `/country/:id`
- ✅ Responsive (tester en mode mobile)

### Fichiers concernés

- [src/hooks/useOlympicData.ts](../../LEARNING_DESIGNER%20-%20A%20SUPPRIMER/telesport-solution/src/hooks/useOlympicData.ts) (ajouter des pays)
- [src/pages/Home.tsx](../../LEARNING_DESIGNER%20-%20A%20SUPPRIMER/telesport-solution/src/pages/Home.tsx) (graphique + calculs)

---

## Étape 2.2 : Améliorer la page détail et ajouter la navigation

### Objectif pédagogique

- Utiliser React Router avec paramètres dynamiques
- Implémenter un graphique d'évolution
- Gérer les erreurs (pays inexistant)

### Ce qu'il faut faire

**Actions attendues** :
1. Dans `Country.tsx`, utiliser `useParams` pour récupérer l'ID
2. Trouver le pays correspondant dans `data`
3. Gérer le cas où le pays n'existe pas → `<ErrorMessage />`
4. Calculer :
   - `totalMedals` : somme de tous les `medalsCount`
   - `totalAthletes` : somme de tous les `athleteCount`
5. Implémenter un LineChart avec :
   - Données : évolution des médailles par année
   - 2 lignes : médailles et athlètes
   - Tri par année
6. Tester la navigation et la page

### Explication technique

**Pourquoi cette approche** :
- `useParams` permet d'extraire les paramètres d'URL
- Le LineChart montre l'évolution dans le temps
- La gestion d'erreurs améliore l'UX

**Concepts clés à comprendre** :
- **useParams** : Hook React Router pour récupérer les paramètres d'URL
- **LineChart** : Graphique en ligne pour montrer l'évolution
- **Reduce** : Calcul de totaux
- **Sort** : Tri par année pour l'évolution chronologique

### Code de référence

**Récupérer l'ID et trouver le pays** :

```tsx
import { useParams } from 'react-router-dom';

export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useOlympicData();

  const country = data.find(c => c.id === Number(id));

  if (!country) {
    return <ErrorMessage message="Pays non trouvé" />;
  }

  // ...
};
```

**Calculer les totaux** :

```tsx
const totalMedals = country.participations.reduce(
  (sum, participation) => sum + participation.medalsCount,
  0
);

const totalAthletes = country.participations.reduce(
  (sum, participation) => sum + participation.athleteCount,
  0
);
```

**Implémenter le LineChart** :

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Préparer les données (triées par année)
const chartData = [...country.participations]
  .sort((a, b) => a.year - b.year)
  .map(participation => ({
    year: participation.year.toString(),
    médailles: participation.medalsCount,
    athlètes: participation.athleteCount,
  }));

return (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="médailles" stroke="#8884d8" strokeWidth={2} />
      <Line type="monotone" dataKey="athlètes" stroke="#82ca9d" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Ne pas gérer le cas où le pays n'existe pas
- Ne pas trier les données par année → graphique incohérent
- Utiliser `any` pour les types

**Pièges classiques** :
- Oublier de convertir `id` en nombre (`Number(id)`)
- Ne pas copier le tableau avant de trier (`[...country.participations]`)
- Oublier le bouton retour vers le dashboard

**Ce que le mentor doit vérifier** :
- ✅ Navigation fonctionne depuis le dashboard
- ✅ Statistiques calculées correctement
- ✅ LineChart s'affiche correctement
- ✅ Données triées par année
- ✅ Gestion du cas "pays inexistant"
- ✅ Bouton retour présent et fonctionnel

### Fichiers concernés

- [src/pages/Country.tsx](../../LEARNING_DESIGNER%20-%20A%20SUPPRIMER/telesport-solution/src/pages/Country.tsx)
- [src/App.tsx](../../LEARNING_DESIGNER%20-%20A%20SUPPRIMER/telesport-solution/src/App.tsx) (vérifier le routing)

---

## Étape 2.3 : Gérer les erreurs de navigation

### Objectif pédagogique

- Comprendre la gestion des erreurs côté front
- Implémenter une page 404
- Améliorer l'expérience utilisateur

### Ce qu'il faut faire

**Actions attendues** :
1. Vérifier que la page `NotFound.tsx` existe
2. Ajouter une route wildcard `*` dans `App.tsx`
3. Tester en accédant à `/route-inexistante`
4. Tester avec un ID de pays invalide (`/country/999`)

### Explication technique

**Pourquoi cette approche** :
- La page 404 évite les écrans vides
- La route wildcard capture toutes les URLs invalides
- Améliore l'UX en donnant un message clair

**Concepts clés à comprendre** :
- **Route wildcard** : Route `*` qui capture tout ce qui n'est pas matché
- **Gestion d'erreurs** : Afficher un message clair plutôt qu'un écran vide

### Code de référence

**App.tsx avec route wildcard** :

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
```

**NotFound.tsx** :

```tsx
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};
```

### Points de vigilance

**Erreurs courantes à éviter** :
- Oublier la route wildcard
- Mettre la route wildcard au début → elle capture tout

**Pièges classiques** :
- Ne pas tester la page 404
- Afficher un message technique au lieu d'un message utilisateur

**Ce que le mentor doit vérifier** :
- ✅ Route `*` présente dans `App.tsx`
- ✅ Page 404 s'affiche pour `/route-inexistante`
- ✅ Message clair et bouton retour
- ✅ Pays inexistant affiche `ErrorMessage`

### Fichiers concernés

- [src/App.tsx](../telesport-starter/src/App.tsx)
- [src/pages/NotFound.tsx](../telesport-starter/src/pages/NotFound.tsx)

---

## Étape 2.4 : Finaliser l'application et documenter

### Objectif pédagogique

- Savoir tester une application complète
- Comprendre l'importance du README
- Préparer un dépôt GitHub professionnel

### Ce qu'il faut faire

**Actions attendues** :
1. Tester l'application complète :
   - Dashboard affiche le graphique
   - Navigation vers chaque pays fonctionne
   - Page détail affiche les infos correctes
   - Navigation retour fonctionne
   - Page 404 fonctionne
2. Tester la responsivité (DevTools mobile)
3. Nettoyer le code :
   - Supprimer les `console.log`
   - Supprimer les `any`
   - Supprimer les fichiers inutiles
4. Mettre à jour le README.md
5. Vérifier l'historique Git
6. Prendre des captures d'écran (desktop + mobile)

### Explication technique

**Pourquoi cette approche** :
- Les tests manuels assurent le bon fonctionnement
- Le README aide les autres à comprendre et utiliser le projet
- Les captures d'écran montrent le résultat visuel

**Concepts clés à comprendre** :
- **Tests manuels** : Vérifier toutes les fonctionnalités à la main
- **Documentation** : README clair pour les utilisateurs
- **Git** : Historique propre avec commits clairs

### Code de référence

**Exemple de README.md** (déjà fourni dans le starter)

### Points de vigilance

**Erreurs courantes à éviter** :
- Ne pas tester sur mobile
- Oublier de supprimer les `console.log`
- Publier un projet cassé

**Pièges classiques** :
- Ne pas vérifier le README
- Oublier les captures d'écran
- Historique Git brouillon

**Ce que le mentor doit vérifier** :
- ✅ Toutes les fonctionnalités marchent
- ✅ Responsive OK (desktop + mobile)
- ✅ Pas de `console.log` ni `any`
- ✅ README à jour
- ✅ Captures d'écran fournies
- ✅ Historique Git clair

### Fichiers concernés

- Tous les fichiers du projet
- README.md
- Captures d'écran (zippées)

---

## Grille d'évaluation

### Exercice 1 : Architecture

| Critère | Attendu | Points |
|---------|---------|--------|
| Fichier `notes-architecture.md` créé avec problèmes identifiés | ✅ Au moins 5 problèmes documentés | 10 |
| Architecture claire dans `notes-architecture.md` ou `ARCHITECTURE.md` | ✅ Arborescence + explications | 10 |
| Composants réutilisables créés | ✅ StatCard, LoadingSpinner, ErrorMessage | 15 |
| Interfaces TypeScript définies | ✅ Participation, Olympic | 10 |
| Custom Hook `useOlympicData` créé | ✅ Retourne data, loading, error | 15 |
| Aucun `any` dans le code | ✅ Typage strict | 10 |
| Fichier `ARCHITECTURE.md` créé et clair | ✅ Documentation complète | 10 |
| **Total Exercice 1** | | **80** |

### Exercice 2 : UI et Navigation

| Critère | Attendu | Points |
|---------|---------|--------|
| Dashboard affiche les statistiques correctes | ✅ totalCountries, totalOlympics calculés | 10 |
| PieChart fonctionnel | ✅ Affiche les médailles par pays | 15 |
| Navigation au clic sur le PieChart | ✅ Redirige vers `/country/:id` | 10 |
| Page Country affiche les stats correctes | ✅ totalMedals, totalAthletes calculés | 10 |
| LineChart fonctionnel | ✅ Évolution des médailles + athlètes | 15 |
| Gestion erreurs (404, pays inexistant) | ✅ Messages clairs | 10 |
| Responsive (desktop + mobile) | ✅ Testé et fonctionnel | 10 |
| README à jour | ✅ Instructions claires | 5 |
| Captures d'écran fournies | ✅ Desktop + mobile | 5 |
| Code propre (pas de console.log, any) | ✅ Nettoyé | 10 |
| **Total Exercice 2** | | **100** |

### **Total général** : **180 points**

---

## Erreurs fréquentes et solutions

### Erreur 1 : "Cannot find module 'recharts'"

**Cause** : Recharts pas installé ou mal installé

**Solution** :
```bash
npm install recharts
```

### Erreur 2 : "Property 'id' does not exist on type 'string | undefined'"

**Cause** : TypeScript strict, `id` peut être undefined

**Solution** :
```tsx
const country = data.find(c => c.id === Number(id));
```

### Erreur 3 : Graphique ne s'affiche pas

**Cause** : `ResponsiveContainer` manquant ou hauteur non définie

**Solution** :
```tsx
<ResponsiveContainer width="100%" height={400}>
  <PieChart>...</PieChart>
</ResponsiveContainer>
```

### Erreur 4 : Navigation ne fonctionne pas

**Cause** : `useNavigate` pas importé ou mal utilisé

**Solution** :
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const handleClick = () => navigate('/country/1');
```

### Erreur 5 : Données pas triées dans le LineChart

**Cause** : Oubli de trier par année

**Solution** :
```tsx
const chartData = [...country.participations]
  .sort((a, b) => a.year - b.year)
  .map(p => ({ year: p.year, medals: p.medalsCount }));
```

---

## Ressources complémentaires

- [Documentation React](https://react.dev/)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation Recharts](https://recharts.org/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Cours OpenClassrooms : Débutez avec React](https://openclassrooms.com/)
- [Cours OpenClassrooms : Utilisez des design patterns en JavaScript](https://openclassrooms.com/)

---

## FAQ

**Q : L'étudiant peut-il utiliser BarChart au lieu de PieChart ?**

R : Oui, les deux sont acceptables tant que le graphique affiche le total de médailles par pays et permet la navigation au clic.

**Q : Faut-il implémenter des tests automatisés ?**

R : Non, ce projet demande uniquement des tests manuels. Les tests automatisés pourront être ajoutés dans un projet ultérieur.

**Q : Combien de pays minimum dans les données mockées ?**

R : Au minimum 3 pays pour avoir un graphique intéressant, idéalement 5.

**Q : L'étudiant doit-il respecter les maquettes au pixel près ?**

R : Non, le but est le bon fonctionnement de l'interface avec la prise en main de React et TypeScript. Les maquettes sont une inspiration, pas une contrainte stricte.

**Q : Docker est-il obligatoire ?**

R : Docker est recommandé mais pas obligatoire. L'étudiant peut utiliser `npm run dev` directement.

**Q : Peut-on utiliser autre chose que Recharts ?**

R : Recharts est recommandé pour ce projet (bibliothèque la plus simple pour les débutants). Chart.js adapté React est aussi acceptable.
