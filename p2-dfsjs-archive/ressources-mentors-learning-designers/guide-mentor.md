# Guide Mentor - Projet TéléSport

Dans ce projet, l'étudiant suit 2 cours et réalise 2 exercices.

Vous avez à disposition, dans les **encadrés gris "conseils mentor" au dessus de chaque activité** :

* des conseils spécifiques ;
* les corrigés des exercices ;
* la fiche d'autoévaluation des activités de l'étudiant

# Note d'accompagnement sur le projet

Avant de commencer les sessions de mentorat sur cette mission, lisez **l'ensemble** du projet ainsi que les étapes.

**Contexte**

Le projet TéléSport est une application web React permettant de visualiser l'historique des performances des pays aux Jeux Olympiques. L'étudiant travaille sur un starter code **intentionnellement mal structuré** qu'il devra refactoriser pour appliquer les bonnes pratiques React 19 et TypeScript.

Il apprendra :

* À **analyser et identifier les anti-patterns** dans un code React existant
* À **concevoir une architecture front-end modulaire et scalable** avec séparation des responsabilités
* À **créer des Custom Hooks** pour centraliser la logique métier
* À **composer des composants réutilisables** en suivant les principes DRY et SOLID
* À **typer strictement avec TypeScript** (interfaces, props, fonctions)
* À **intégrer des librairies tierces** (Chart.js, React Router)
* À **gérer la navigation SPA** et les cas d'erreur (404)

Ce projet prépare l'étudiant à travailler sur des applications React professionnelles en lui donnant les bases d'une architecture propre. Dans le projet suivant, il connectera cette application à un backend REST API, et l'architecture mise en place ici facilitera cette intégration.

## **Conseils généraux**

L'objectif principal de ce projet est d'**apprendre à structurer une application React de manière professionnelle et maintenable**.

Vous devez l'aider à :

* **Identifier les problèmes** dans le code starter (anti-patterns, mauvaises pratiques)
* **Concevoir une architecture claire** avant de coder (réflexion architecture > implémentation)
* **Appliquer les bonnes pratiques React 19** (Functional Components, Hooks, composition)
* **Comprendre la séparation logique/UI** via les Custom Hooks

**Profil de l'étudiant** : Ce projet s'adresse à un étudiant de **niveau intermédiaire** qui a déjà des bases en React et JavaScript, mais qui doit encore apprendre à structurer du code de manière professionnelle.

Gardez en tête qu'il s'agit d'un projet destiné à **maîtriser l'architecture React et la refactorisation**. Le projet n'est qu'un prétexte : si l'étudiant souhaite, par exemple, **ajouter des animations avec Framer Motion** ou encore **utiliser Zustand au lieu de Context**, il ne faut pas le bloquer (tant que l'architecture reste propre).

Encouragez votre étudiant à s'appuyer sur les chapitres ciblés des cours proposés, comme suggéré dans les sections cours (notamment ceux sur les **Hooks, Custom Hooks, et l'architecture de composants**). En plus, encouragez-lui à expérimenter avec **React 19** lors du développement : tester les nouvelles features, lire la documentation officielle, comprendre les optimisations.

Enfin, **ce projet pose les bases pour le suivant** où l'étudiant devra connecter cette application à un backend REST API. L'architecture mise en place ici (Custom Hook `useOlympicData`) facilitera énormément cette migration : il suffira de remplacer les données mockées par des appels `fetch()`.

# Tableau de correspondance

| Compétences | Livrables de la mission |
| :---- | :---- |
| Analyser un code existant et identifier les anti-patterns React | Fichier `notes-architecture.md` avec liste des problèmes |
| Concevoir une architecture front-end modulaire et scalable | Fichier `ARCHITECTURE.md` + structure dossiers `components/`, `pages/`, `hooks/`, `models/` |
| Créer des composants React réutilisables avec TypeScript | Composants `Indicator`, `MedalsPieChart`, `MedalsLineChart` |
| Implémenter des Custom Hooks pour la logique métier | Hook `useOlympicData` avec fonctions utilitaires |
| Intégrer React Router pour la navigation SPA | Routes `/`, `/country/:id`, `*` (404) |
| Intégrer Chart.js pour des graphiques interactifs | Graphiques Pie et Line avec Chart.js |
| Gérer les erreurs et cas limites (404, loading) | Page `NotFound` + gestion des états de chargement |
| Documenter son code et son architecture | README.md complet avec captures d'écran |

## Session de bilan

Pour valider ce projet, l'étudiant n'a pas de soutenance avec un évaluateur.
C'est vous, en tant que mentor, qui allez valider son travail et le guider.

## **Préparez la session**

Une fois que votre étudiant a mis en ligne ses livrables, et avant la dernière session de mentorat :

* **Clonez son repository GitHub** et testez l'application (`npm install`, `npm run dev`)
* **Vérifiez que tous les critères d'évaluation sont validés** (voir grille d'évaluation dans CORRIGE.md)
* **Identifiez les éventuels points d'amélioration** :
  - Y a-t-il encore des `any` dans le code ?
  - Les composants sont-ils réutilisables ?
  - Le hook `useOlympicData` est-il bien utilisé ?
  - L'application est-elle responsive ?
  - Le code compile-t-il sans erreurs TypeScript ?
  - Le linter passe-t-il sans warnings ?

## **Menez la session**

Pour cette session, sélectionnez une **session de mentorat** classique.
Lors de votre compte-rendu sur la plateforme, nous vous conseillons de suivre ce modèle :

1. Bilan du projet sur la base du document d'autoévaluation de l'étudiant.
2. Points d'amélioration et recommandations.
3. Suggestions de ressources.
4. Encouragements / Félicitations sur les livrables et les qualités dont l'étudiant a fait preuve. Par exemple, sa rapidité à comprendre l'élaboration de tel livrable, le soin apporté aux détails dans un autre livrable...

Durant cette session :

* Faites remonter à l'étudiant les points sur lesquels il peut encore s'améliorer.
* Proposez-lui des ressources et donnez-lui des conseils.
* Évoquez les points sur lesquels il doit rester vigilant lors des prochains projets.

Si aucun des points n'est critique, ne le bloquez pas s'il souhaite passer au projet suivant.

---

## Points d'attention spécifiques à React 19 + TypeScript

### 1. Vérification de l'architecture

**Ce qu'il faut vérifier** :

✅ Structure des dossiers respectée :
```
src/
├── components/     # Composants réutilisables
├── pages/          # Pages (routes)
├── hooks/          # Custom Hooks
├── models/         # Interfaces TypeScript
```

✅ Séparation claire :
- Les **composants** ne contiennent que du JSX et des props
- La **logique métier** est dans les hooks
- Les **types** sont dans models/

❌ Anti-patterns à éviter :
- Tout dans un seul fichier
- Logique métier dans les composants UI
- Données hardcodées dans les composants

### 2. Vérification du typage TypeScript

**Ce qu'il faut vérifier** :

✅ Interfaces bien définies :
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

✅ Props typés sur tous les composants :
```typescript
interface IndicatorProps {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'yellow';
}

export const Indicator = ({ title, value, color }: IndicatorProps) => {
  // ...
}
```

❌ Erreurs courantes :
- Utilisation de `any` (désactive TypeScript)
- Props non typés
- Fonctions sans type de retour

**Commande de vérification** :
```bash
npm run build  # Doit passer sans erreurs TypeScript
```

### 3. Vérification du Custom Hook

**Ce qu'il faut vérifier** :

✅ Hook bien structuré :
```typescript
// src/hooks/useOlympicData.ts
export const useOlympicData = (): Olympic[] => {
  const [data, setData] = useState<Olympic[]>([]);

  useEffect(() => {
    // Chargement des données
  }, []); // Dépendances correctes

  return data;
};
```

✅ Fonctions utilitaires exportées :
```typescript
export const calculateTotalMedals = (olympic: Olympic): number => { ... }
export const calculateTotalAthletes = (olympic: Olympic): number => { ... }
```

✅ Préparation API :
Le hook doit être conçu de manière à faciliter la migration vers une API :
```typescript
// Actuellement : mock
setData(olympicsDataMock as Olympic[]);

// Future migration (aucun changement dans les composants) :
const response = await fetch('https://api.telesport.com/olympics');
const data = await response.json();
setData(data);
```

❌ Erreurs courantes :
- Données hardcodées dans les composants au lieu du hook
- Calculs métier dans les composants au lieu de fonctions utilitaires
- useEffect mal géré (dépendances manquantes)

### 4. Vérification des composants réutilisables

**Ce qu'il faut vérifier** :

✅ Composant `Indicator` réutilisable :
- Utilisé 2 fois dans Home (pays participants, éditions JO)
- Utilisé 3 fois dans Country (participations, médailles, athlètes)
- Props génériques (title, value, color)

✅ Composants graphiques bien encapsulés :
- `MedalsPieChart` : graphique + callback de navigation
- `MedalsLineChart` : graphique d'évolution

❌ Erreurs courantes :
- Code dupliqué (cartes statistiques répétées au lieu de composant réutilisable)
- Composants trop spécifiques (pas réutilisables)
- Logique métier dans les composants graphiques

### 5. Vérification de React Router

**Ce qu'il faut vérifier** :

✅ Routes bien définies dans `App.tsx` :
```typescript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country/:id" element={<Country />} />
    <Route path="*" element={<NotFound />} />  {/* Wildcard 404 */}
  </Routes>
</BrowserRouter>
```

✅ Navigation avec `<Link>`, pas `<a>` :
```typescript
<Link to="/">Retour au dashboard</Link>  // ✅ Navigation SPA
<a href="/">Retour</a>                   // ❌ Rechargement complet
```

✅ Paramètres d'URL bien récupérés :
```typescript
const { id } = useParams<{ id: string }>();
const country = data.find(olympic => olympic.id === Number(id));
```

✅ Gestion 404 :
```typescript
if (data.length > 0 && !country) {
  return <Navigate to="/404" replace />;
}
```

### 6. Vérification de Chart.js

**Ce qu'il faut vérifier** :

✅ Composants Chart.js enregistrés :
```typescript
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
```

✅ Graphiques interactifs :
- Clic sur le pie chart → navigation vers pays
- Options configurées (couleurs, responsive, etc.)

❌ Erreurs courantes :
- Oublier `ChartJS.register()` → graphique ne s'affiche pas
- Préparer les données dans les composants au lieu du parent

### 7. Vérification du code propre

**Ce qu'il faut vérifier** :

✅ Pas de console.log oubliés :
```bash
grep -r "console.log" src/  # Doit retourner 0 résultats
```

✅ Pas de `any` :
```bash
grep -r ": any" src/  # Doit retourner 0 résultats
```

✅ Linter passe :
```bash
npm run lint  # Doit passer sans warnings
```

✅ Build de production OK :
```bash
npm run build  # Doit compiler sans erreurs
```

### 8. Vérification de la responsivité

**Ce qu'il faut vérifier** :

✅ Tailwind CSS utilisé pour le responsive :
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* 1 colonne mobile, 2 sur tablette+ */}
</div>
```

✅ Graphiques s'adaptent :
```typescript
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
```

**Test** : Ouvrir les DevTools et tester sur :
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px+)

### 9. Vérification de la documentation

**Ce qu'il faut vérifier** :

✅ README.md complet :
- Titre et description
- Technologies utilisées
- Instructions d'installation (`npm install`)
- Instructions de lancement (`npm run dev`)
- Structure du projet
- Captures d'écran (desktop + mobile)

✅ Fichier `ARCHITECTURE.md` :
- Explique la structure choisie
- Justifie les choix d'architecture
- Mentionne la préparation pour l'API future

---

## Questions fréquentes des étudiants

### Q : "Pourquoi séparer components/ et pages/ ?"

**Réponse** :
- **components/** : Composants réutilisables, indépendants des routes (Indicator, graphiques)
- **pages/** : Composants liés à une route spécifique (Home, Country, NotFound)

Un composant `Indicator` peut être utilisé dans n'importe quelle page. Une page `Home` est spécifique à la route `/`.

### Q : "Pourquoi créer un Custom Hook au lieu de mettre les données dans les composants ?"

**Réponse** :
1. **Séparation logique/UI** : Les composants ne gèrent que l'affichage
2. **Réutilisabilité** : Le hook peut être utilisé dans plusieurs composants
3. **Testabilité** : Le hook peut être testé indépendamment
4. **Migration API** : Remplacer le mock par `fetch()` sans toucher aux composants

### Q : "Puis-je utiliser un Context au lieu d'un Custom Hook ?"

**Réponse** :
Pour ce projet, un Custom Hook suffit car :
- Les données sont chargées une seule fois
- Pas de state global à modifier
- Plus simple et plus performant

Un Context serait pertinent si vous deviez partager un state modifiable entre de nombreux composants.

### Q : "Dois-je ajouter des tests ?"

**Réponse** :
Non, ce n'est pas demandé dans ce projet. Cependant, l'architecture choisie faciliterait l'ajout de tests :
- Composants découplés
- Hooks testables avec @testing-library/react-hooks
- Fonctions utilitaires pures

### Q : "Comment gérer les erreurs API dans le futur ?"

**Réponse** :
Actuellement, le hook retourne simplement `Olympic[]`. Dans une version avec API :

```typescript
interface UseOlympicDataResult {
  data: Olympic[];
  loading: boolean;
  error: string | null;
}

export const useOlympicData = (): UseOlympicDataResult => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.telesport.com/olympics');
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
```

---

## Ressources recommandées pour approfondir

### Documentation officielle

- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com)
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Concepts clés à approfondir

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Component Patterns](https://www.patterns.dev/posts/react-component-patterns)

### Outils de développement

- React DevTools (extension navigateur)
- TypeScript Playground
- ESLint + Prettier pour la qualité de code

---

## Encouragements pour l'étudiant

Ce projet est **exigeant** car il demande de penser architecture avant d'écrire du code. C'est une compétence essentielle en développement professionnel.

**Félicitez l'étudiant** s'il a :
- Identifié la plupart des anti-patterns du starter
- Créé une architecture claire et justifiée
- Appliqué TypeScript strict (pas de `any`)
- Créé des composants réutilisables
- Documenté son travail

**Points d'amélioration possibles** :
- Ajouter des tests unitaires (optionnel mais valorisant)
- Améliorer l'accessibilité (ARIA labels, navigation clavier)
- Ajouter des animations (Framer Motion)
- Optimiser les performances (React.memo, useMemo)
- Ajouter un système de thème (dark/light mode)

**Préparez-le pour le projet suivant** : Expliquez que l'architecture mise en place facilitera énormément la connexion à une API REST. Le hook `useOlympicData` est déjà conçu comme un point d'accès aux données, il suffira de remplacer le mock par `fetch()`.

---

**Bon mentorat ! 🚀**
