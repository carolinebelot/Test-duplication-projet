# TéléSport - Solution Complète

Ce dossier contient la solution de référence complète du projet TéléSport.

## Architecture de la solution

### Vue d'ensemble

La solution utilise une architecture **React** moderne basée sur les **Functional Components** et les **Custom Hooks**, suivant les meilleures pratiques 2025.

### Principes architecturaux appliqués

1. **Separation of Concerns** :
   - Pages (`/pages`) : Logique de routage et orchestration
   - Components (`/components`) : UI réutilisable
   - Hooks (`/hooks`) : Logique métier et accès aux données
   - Models (`/models`) : Définitions TypeScript

2. **Composition over Inheritance** :
   - Tous les composants utilisent la composition via props
   - Aucune classe, uniquement des fonctions

3. **Single Responsibility Principle** :
   - Chaque composant a une responsabilité unique
   - Les hooks centralisent la logique de données

### Structure détaillée

```
src/
├── components/           # Composants UI réutilisables
│   ├── Header.tsx       # En-tête avec navigation
│   ├── StatsCard.tsx    # Carte de statistique réutilisable
│   ├── Loading.tsx      # Indicateur de chargement
│   └── ErrorMessage.tsx # Affichage des erreurs
│
├── hooks/               # Custom Hooks (logique métier)
│   └── useOlympicData.ts # Hook principal pour les données olympiques
│                          # Simule un service/API avec données mockées
│
├── models/              # Interfaces TypeScript
│   └── Olympic.ts       # Définition des types Participation et Olympic
│
├── pages/               # Pages de l'application
│   ├── Home.tsx         # Dashboard avec graphique pie chart
│   ├── Country.tsx      # Page détail pays avec graphique line chart
│   └── NotFound.tsx     # Page 404
│
├── App.tsx              # Configuration des routes (React Router)
├── main.tsx             # Point d'entrée React
└── index.css            # Styles globaux Tailwind
```

## Choix techniques justifiés

### 1. Custom Hook `useOlympicData`

**Pourquoi ?**
- Centralise la logique de récupération des données
- Facilite le passage futur à une vraie API REST
- Réutilisable dans tous les composants
- Gère les états loading/error de manière centralisée

**Fonctions fournies :**
- `data` : Liste des pays olympiques
- `loading` : État de chargement
- `error` : Message d'erreur éventuel
- `getCountryById(id)` : Récupérer un pays par son ID
- `getTotalMedals(country)` : Calculer le total de médailles
- `getTotalAthletes(country)` : Calculer le total d'athlètes

### 2. Composants réutilisables

#### `StatsCard`
- Affiche une statistique avec label + valeur
- Réutilisé sur Home et Country
- Props typées : `{ label: string, value: number | string }`

#### `Header`
- En-tête unifié pour toutes les pages
- Navigation vers l'accueil via Link
- Props : `{ title: string }`

#### `Loading` et `ErrorMessage`
- Gestion centralisée des états UI
- Design cohérent sur toute l'application

### 3. Pages

#### `Home.tsx` (Dashboard)
- Utilise `useOlympicData` pour récupérer les données
- Affiche 2 StatsCard : nombre de pays et d'éditions
- PieChart interactif (Recharts) avec navigation au clic
- Navigation vers `/country/:id` au clic sur un pays

#### `Country.tsx` (Détail pays)
- Utilise `useParams` pour récupérer l'ID depuis l'URL
- Affiche 3 StatsCard : participations, médailles, athlètes
- LineChart pour l'évolution des médailles
- Tableau récapitulatif des participations
- Bouton retour vers le dashboard
- Redirection vers 404 si pays inexistant

#### `NotFound.tsx`
- Page 404 avec design adapté
- Bouton de retour vers l'accueil

### 4. Routing

Configuration dans `App.tsx` :
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/country/:id" element={<Country />} />
  <Route path="/not-found" element={<NotFound />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

- Route wildcard `*` pour capturer toutes les URL invalides
- Route `/not-found` pour les redirections explicites
- Paramètre dynamique `:id` pour la page Country

## Données mockées

Les données sont simulées dans `useOlympicData.ts` avec 5 pays :
- France
- États-Unis
- Chine
- Allemagne
- Japon

Chaque pays a 5 participations (2004-2020) avec :
- Année, ville, nombre de médailles, nombre d'athlètes

## Points d'attention pour les étudiants

1. **TypeScript strict** : Aucun `any`, tout est typé
2. **useEffect cleanup** : Pas de fuites mémoire
3. **Props read-only** : Pas de mutation des props
4. **Composition** : Réutilisation via props, pas d'héritage
5. **Gestion d'erreurs** : Toujours gérer les cas limites

## Migration future vers API REST

Le Custom Hook `useOlympicData` est prêt pour une migration vers une vraie API :

```typescript
// Remplacer cette ligne dans useOlympicData.ts :
setData(mockOlympicData);

// Par un appel API réel :
const response = await fetch('/api/olympics');
const data = await response.json();
setData(data);
```

Le reste du code n'a pas besoin de changer !

## Performance

- **Code splitting** : Vite gère automatiquement le chunking
- **Lazy loading** : Possible via React.lazy() si nécessaire
- **Memoization** : Non nécessaire ici (données petites)

## Tests (hors scope mais préparé)

L'architecture facilite les tests :
- Custom Hook testable isolément
- Composants testables avec props mockées
- Pages testables avec React Router Memory Router

## Conformité aux spécifications

✅ Dashboard avec pie chart interactif
✅ Page détail avec line chart et tableau
✅ Navigation fluide (React Router)
✅ Gestion d'erreurs (404)
✅ Design responsive (Tailwind)
✅ TypeScript strict
✅ Custom Hooks
✅ Functional Components
✅ Composition over Inheritance

## Améliorations possibles (hors scope)

- Filtres avancés (par année, par continent)
- Recherche de pays
- Tri des tableaux
- Export des données (CSV, PDF)
- Animations (Framer Motion)
- Tests unitaires et e2e
- PWA (Progressive Web App)
