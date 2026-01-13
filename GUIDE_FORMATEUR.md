# Guide Mentor - Projet TéléSport

Dans ce projet, l'étudiant suit 2 cours et réalise 2 exercices.

Vous avez à disposition, dans les **encadrés gris "conseils mentor" au dessus de chaque activité** :

* des conseils spécifiques
* les corrigés des exercices dans le fichier [CORRIGE.md](./CORRIGE.md)
* la fiche d'autoévaluation des activités de l'étudiant [LIEN_FICHE_AUTOEVALUATION]

# Note d'accompagnement sur le projet

Avant de commencer les sessions de mentorat sur cette mission, lisez **l'ensemble** du projet ainsi que les étapes.

**Contexte**

L'étudiant travaille sur le projet TéléSport, une application web interactive pour une chaîne de télévision nationale souhaitant publier une page dédiée à l'historique des Jeux Olympiques. Le code de départ est intentionnellement mal structuré, ce qui permet à l'étudiant de développer ses compétences en refactorisation et en architecture front-end.

Il apprendra :

* À analyser et identifier les problèmes dans du code React existant (anti-patterns, dette technique)
* À concevoir et implémenter une architecture front-end claire, modulaire et scalable avec React 19 et TypeScript
* À développer une interface utilisateur fonctionnelle et responsive à partir de spécifications
* À gérer la navigation (React Router) et les erreurs dans une application React
* À centraliser la logique métier dans des Custom Hooks
* À appliquer le typage strict avec TypeScript
* À documenter et maintenir un projet professionnel

L'étudiant prépare également le terrain pour l'intégration d'une API REST dans les prochains projets, en structurant son code de manière à faciliter cette évolution.

## Conseils généraux

L'objectif principal de ce projet est de maîtriser les fondamentaux de React 19 et TypeScript en refactorisant du code mal structuré vers une architecture professionnelle.

Vous devez l'aider à :

* **Développer un œil critique** : Identifier les anti-patterns et comprendre pourquoi ils posent problème
* **Planifier avant de coder** : Concevoir une architecture claire avant de refactoriser
* **Séparer les responsabilités** : Comprendre la différence entre composants, pages, hooks et models
* **Typer strictement** : Bannir le `any` et utiliser les interfaces TypeScript
* **Penser "API-ready"** : Structurer le code pour faciliter l'intégration future d'un back-end
* **Documenter professionnellement** : Rédiger une documentation claire pour faciliter la collaboration

**Pour les étudiants débutants en React** : Assurez-vous qu'ils comprennent bien les concepts de base (composants, props, state, hooks) avant de se lancer dans la refactorisation. N'hésitez pas à leur faire réviser les cours recommandés.

**Pour les étudiants ayant déjà de l'expérience** : Poussez-les à aller plus loin sur l'architecture (design patterns, optimisations, accessibilité). Mais attention à ne pas sur-complexifier : l'objectif reste pédagogique.

Gardez en tête qu'il s'agit d'un premier projet destiné à apprendre React 19 et TypeScript. Le projet n'est qu'un prétexte : si l'étudiant souhaite, par exemple, ajouter des fonctionnalités supplémentaires (filtres, tri, favoris) ou encore utiliser une librairie de graphiques différente (Recharts au lieu de Chart.js), il ne faut pas le bloquer. L'important est qu'il respecte les bonnes pratiques React et TypeScript.

Encouragez votre étudiant à s'appuyer sur les chapitres ciblés des cours proposés, comme suggéré dans les sections cours (notamment ceux sur les **Hooks React, la gestion du state, le typage TypeScript et React Router**). En plus, encouragez-le à expérimenter avec React lors du développement : tester différentes approches de composition de composants, jouer avec `useMemo` et `useCallback` pour comprendre l'optimisation, essayer différentes structures d'architecture.

Enfin, ce projet prépare l'étudiant à intégrer une API REST dans le prochain projet. Insistez sur l'importance de centraliser la logique de données dans un Custom Hook : c'est ce qui facilitera l'intégration future. Le hook `useOlympicData` doit être pensé comme un point de contact avec le back-end, même si pour l'instant il retourne des données mockées.

# Tableau de correspondance

| Compétences | Livrables de la mission |
| :---- | :---- |
| Analyser et refactoriser du code React existant | Fichier `notes-architecture.md` avec identification des problèmes<br>Architecture refactorée (components, pages, hooks, models) |
| Structurer une architecture front-end avec React et TypeScript | Custom Hook `useOlympicData`<br>Interfaces TypeScript strictes<br>Composants réutilisables<br>Fichier `ARCHITECTURE.md` |
| Développer une interface utilisateur fonctionnelle | Dashboard avec graphique interactif et tableau<br>Page détail pays avec statistiques<br>Application responsive |
| Gérer la navigation et les erreurs | Configuration React Router<br>Page 404<br>Gestion des cas d'erreur (pays inexistant, etc.) |
| Documenter et maintenir un projet | `README.md` complet<br>Code propre (aucun `any`, `console.log`, etc.)<br>Repository Git organisé |

---

# Conseils par exercice

## Exercice 1 : Refactorisation de l'architecture

### Objectif pédagogique

Cet exercice développe la capacité à analyser du code existant et à le refactoriser selon des principes architecturaux solides. C'est une compétence essentielle en entreprise, où l'on travaille rarement sur du code neuf.

### Conseils mentor pour l'étape 1 (Analyser le code)

**Ce que l'étudiant doit identifier** :
- Architecture monolithique (tout dans `App.tsx`)
- Données en dur dans les composants
- Typage laxiste (`any` partout)
- `useEffect` sans dépendances → boucle infinie
- `console.log` oubliés
- Logique métier dans le JSX
- Pas de gestion d'erreur
- Code dupliqué

**Erreur fréquente** : L'étudiant se contente de lister les problèmes sans les comprendre.

**Action mentor** : Demandez-lui d'expliquer **pourquoi** chaque problème est problématique et **quel impact** il a sur la maintenance du code.

**Exemple de questions à poser** :
- "Pourquoi est-ce problématique d'avoir toutes les données dans le composant ?"
- "Que se passerait-il si tu devais connecter ce code à une vraie API ?"
- "Quel est le risque d'utiliser `any` partout ?"

### Conseils mentor pour l'étape 2 (Concevoir l'architecture)

**Ce que l'étudiant doit produire** :
- Structure de dossiers claire (components, pages, hooks, models)
- Schéma ou liste décrivant la nouvelle architecture
- Justification des choix

**Erreur fréquente** : L'étudiant propose une architecture trop complexe (trop de sous-dossiers, sur-ingénierie).

**Action mentor** : Rappelez que la simplicité prime. Pour ce projet, 4 dossiers suffisent :
- `components/` pour les composants réutilisables UI purs
- `pages/` pour les composants liés aux routes
- `hooks/` pour la logique métier
- `models/` pour les interfaces TypeScript

**Validation** : L'architecture doit faciliter l'intégration future d'une API. Posez la question : "Si demain tu dois remplacer les données mockées par un `fetch()`, où vas-tu faire ce changement ?" La réponse doit être : "uniquement dans le hook `useOlympicData`".

### Conseils mentor pour l'étape 3 (Refactoriser les composants)

**Ce que l'étudiant doit faire** :
- Créer les interfaces TypeScript d'abord (`Olympic.ts`)
- Créer les composants réutilisables (`Header`, `StatsCard`, `Loading`, `ErrorMessage`)
- Créer les pages (`Home`, `Country`, `NotFound`)
- Mettre à jour `App.tsx` avec le routing

**Erreur fréquente** : L'étudiant refactorise sans tester régulièrement. Résultat : tout casse en même temps et il ne sait pas d'où vient le problème.

**Action mentor** : Insistez sur l'approche incrémentale :
1. Créer un composant
2. Tester avec `npm run dev`
3. Commit Git
4. Passer au suivant

**Points de vigilance** :
- Tous les imports doivent être mis à jour
- Aucun `any` ne doit subsister
- Toutes les props doivent être typées

**Validation** : L'application doit compiler (`npm run dev`) et fonctionner visuellement comme avant la refactorisation, mais avec un code structuré.

### Conseils mentor pour l'étape 4 (Custom Hook)

**Ce que l'étudiant doit faire** :
- Créer `useOlympicData.ts` dans `hooks/`
- Déplacer les données olympiques dans ce hook
- Gérer le state (`data`, `loading`)
- Exporter une fonction `getCountryById`
- Utiliser ce hook dans `Home` et `Country`

**Erreur fréquente** : L'étudiant oublie le tableau de dépendances dans `useEffect`, recréant le bug de boucle infinie.

**Action mentor** : Expliquez le rôle du tableau de dépendances :
- `[]` = exécution unique au montage
- `[data]` = exécution à chaque changement de `data`
- Pas de tableau = exécution à chaque render → boucle infinie !

**Point clé** : Insistez sur le fait que ce hook prépare l'intégration API. Dans le projet suivant, il suffira de remplacer `setData(olympicData)` par un `fetch()`.

### Conseils mentor pour l'étape 5 (Documentation)

**Ce que l'étudiant doit faire** :
- Créer `ARCHITECTURE.md`
- Décrire la structure, les composants, les hooks
- Expliquer comment l'architecture prépare l'intégration API

**Erreur fréquente** : Documentation trop technique ou trop vague.

**Action mentor** : La documentation doit être compréhensible par un nouveau développeur arrivant sur le projet. Demandez-lui : "Si un collègue rejoint ton équipe demain, comprendra-t-il ton projet en lisant ce fichier ?"

---

## Exercice 2 : Implémentation de l'interface

### Objectif pédagogique

Cet exercice développe la capacité à implémenter une interface fonctionnelle à partir de composants structurés, en gérant les interactions, la navigation et les erreurs.

### Conseils mentor pour l'étape 1 (Dashboard)

**Ce que l'étudiant doit faire** :
- Améliorer la page `Home`
- Intégrer Chart.js avec graphique interactif
- Créer les cartes de statistiques
- Gérer le clic sur graphique et tableau → navigation

**Erreur fréquente** : Calculs lourds dans le JSX, recalculés à chaque render.

**Action mentor** : Introduisez `useMemo` pour optimiser :
```typescript
const stats = useMemo(() => {
  // calculs...
}, [data]); // Recalculé uniquement si data change
```

**Points de vigilance** :
- Graphique doit être responsive
- Clic sur graphique doit naviguer vers la bonne page
- Tableau doit avoir un `key` pour chaque ligne

### Conseils mentor pour l'étape 2 (Page détail)

**Ce que l'étudiant doit faire** :
- Améliorer la page `Country`
- Utiliser `useParams` pour récupérer l'ID
- Afficher les statistiques du pays
- Ajouter un graphique d'évolution
- Gérer le bouton retour

**Erreur fréquente** : L'étudiant oublie de parser l'ID de l'URL (c'est une string, pas un number).

**Action mentor** : Rappelez que `useParams` retourne toujours des strings. Il faut convertir : `parseInt(id || '0')`.

**Point clé** : La page doit vérifier si le pays existe. Si `getCountryById` retourne `undefined`, afficher un message d'erreur, pas une page blanche.

### Conseils mentor pour l'étape 3 (Gestion des erreurs)

**Ce que l'étudiant doit faire** :
- Créer une page `NotFound` (404)
- Ajouter une route catch-all `path="*"`
- Gérer le cas où un pays n'existe pas dans `Country`

**Erreur fréquente** : Route 404 mal positionnée dans le routing.

**Action mentor** : La route `path="*"` doit être la **dernière** dans `<Routes>`. React Router matche les routes dans l'ordre.

**Tests à effectuer** :
- URL invalide `/blabla` → 404
- URL `/country/999` (ID inexistant) → Message d'erreur
- Tous les cas sans page blanche

### Conseils mentor pour l'étape 4 (Finalisation)

**Ce que l'étudiant doit faire** :
- Tester l'application complète
- Nettoyer le code (console.log, any, etc.)
- Créer le `README.md` avec instructions
- Ajouter des captures d'écran

**Erreur fréquente** : L'étudiant considère le projet terminé sans tester tous les parcours utilisateur.

**Action mentor** : Demandez-lui de tester ces scénarios :
1. Dashboard → Clic graphique → Détail → Retour
2. Dashboard → Clic tableau → Détail → Retour
3. URL directe `/country/1`
4. URL invalide `/country/999`
5. URL invalide `/blabla`
6. Responsive mobile/desktop

**Checklist finale** :
- [ ] `npm run build` réussit sans erreur
- [ ] `npm run lint` passe sans erreur
- [ ] Aucun `console.log` de debug
- [ ] Aucun `any`
- [ ] `README.md` complet avec instructions d'installation
- [ ] Captures d'écran ajoutées

---

# Problèmes fréquents et solutions

## Problème 1 : "Mon useEffect crée une boucle infinie"

**Cause** : Pas de tableau de dépendances

**Solution** :
```typescript
useEffect(() => {
  fetchData();
}, []); // ✅ Tableau vide
```

**Explication mentor** : Sans tableau de dépendances, l'effet s'exécute à chaque render. Il change le state, ce qui cause un re-render, qui réexécute l'effet, etc.

## Problème 2 : "TypeScript me donne des erreurs partout"

**Cause** : Typage `any` ou absence d'interfaces

**Solution** :
1. Créer l'interface `Olympic` dans `models/`
2. Typer tous les states : `useState<Olympic[]>([])`
3. Typer toutes les props des composants

**Explication mentor** : Les erreurs TypeScript ne sont pas des obstacles, ce sont des helpers ! Ils vous signalent les bugs potentiels avant l'exécution.

## Problème 3 : "Mon graphique ne s'affiche pas"

**Causes possibles** :
- Oubli d'enregistrer les modules Chart.js
- Format de données incorrect

**Solution** :
```typescript
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
```

**Explication mentor** : Chart.js v3+ nécessite l'enregistrement explicite des modules pour réduire la taille du bundle.

## Problème 4 : "La navigation ne fonctionne pas"

**Causes possibles** :
- Oubli du `BrowserRouter` dans `App.tsx`
- Routes mal configurées
- `useNavigate` appelé hors du contexte Router

**Solution** : Vérifier que toute l'app est wrappée dans `<BrowserRouter>`

## Problème 5 : "Warning: Each child should have a unique 'key' prop"

**Cause** : `.map()` sans `key`

**Solution** :
```typescript
{data.map(country => (
  <div key={country.id}>{country.name}</div>
))}
```

**Explication mentor** : React utilise les `key` pour optimiser le re-rendering. Sans elles, React ne sait pas quel élément a changé.

---

# FAQ Mentor

## Q : L'étudiant peut-il utiliser des Class Components ?

**R : Non, absolument pas.** React 19 se concentre sur les Functional Components. Si l'étudiant propose des Class Components, demandez-lui de refactoriser en Functional Components avec Hooks.

## Q : L'étudiant veut utiliser Redux pour le state management, c'est OK ?

**R : Non, c'est du over-engineering.** Pour ce projet, un simple Custom Hook suffit. Redux sera introduit dans des projets plus complexes si nécessaire. L'objectif ici est de comprendre les bases de React (props, state, hooks), pas de maîtriser un state manager externe.

## Q : Le design doit-il correspondre exactement aux maquettes ?

**R : Non.** L'objectif est fonctionnel, pas esthétique. Tailwind CSS avec les classes de base suffit. Tant que l'interface est lisible, responsive et fonctionnelle, c'est validé. Le "pixel perfect" n'est pas attendu.

## Q : L'étudiant doit-il écrire des tests ?

**R : Non, pas pour ce projet.** Les tests unitaires seront introduits dans les prochains projets. Pour l'instant, des tests manuels suffisent (tester tous les parcours utilisateur à la main).

## Q : Combien de composants minimum l'étudiant doit-il créer ?

**R : Au minimum 7 fichiers .tsx** :
- 4 composants réutilisables (Header, StatsCard, Loading, ErrorMessage)
- 3 pages (Home, Country, NotFound)

Si l'étudiant a moins de 7 composants, c'est qu'il n'a pas suffisamment découpé son code.

## Q : L'étudiant peut-il utiliser une autre librairie de graphiques (Recharts, Victory) ?

**R : Oui, c'est acceptable.** L'important est qu'il utilise une librairie React-compatible et qu'il comprenne comment intégrer des dépendances tierces. Chart.js est recommandé car largement utilisé en entreprise, mais ce n'est pas bloquant.

## Q : L'étudiant doit-il intégrer une vraie API ?

**R : Non.** Les données mockées dans le Custom Hook suffisent. L'objectif est de **préparer** l'architecture pour une future API, pas de l'implémenter. L'API REST sera vue dans le projet suivant.

**Point clé à valider** : Le hook `useOlympicData` doit être structuré de façon à ce que le passage vers une vraie API nécessite uniquement de remplacer `setData(olympicData)` par un `fetch()`. Aucun changement dans les composants ne devrait être nécessaire.

## Q : L'étudiant a déjà de l'expérience en React, puis-je lui demander d'aller plus loin ?

**R : Oui, mais avec précaution.** Vous pouvez suggérer :
- Ajout de fonctionnalités (filtres, tri, recherche)
- Optimisations avancées (`useCallback`, `React.memo`)
- Accessibilité (ARIA, navigation clavier)
- Animations (Framer Motion, CSS transitions)

**Attention** : Ne demandez pas de refaire toute l'architecture avec des patterns avancés (HOC, Render Props, Compound Components). L'objectif reste pédagogique et accessible.

## Q : L'étudiant bloque sur TypeScript, que faire ?

**R : Revenez aux fondamentaux.** Proposez une session dédiée à TypeScript :
1. Créer une interface simple
2. Typer un state
3. Typer des props de composant
4. Comprendre `| undefined` et les optionals

Rassurez-le : TypeScript peut sembler verbeux au début, mais c'est un investissement qui évite beaucoup de bugs.

---

# Grille d'évaluation rapide

Utilisez cette grille pour valider rapidement le travail de l'étudiant :

## Exercice 1 : Refactorisation

| Critère | Validé ✅ | À améliorer ⚠️ | Insuffisant ❌ |
|---------|-----------|----------------|----------------|
| Fichier `notes-architecture.md` avec problèmes identifiés | Tous les problèmes majeurs identifiés | Quelques problèmes manquants | Problèmes critiques non vus |
| Architecture proposée (components, pages, hooks, models) | Structure claire et justifiée | Structure correcte mais peu justifiée | Structure inadaptée |
| Custom Hook `useOlympicData` créé | Hook complet avec typage strict | Hook fonctionnel mais typage laxiste | Hook absent ou bugué |
| Interfaces TypeScript strictes | Aucun `any`, tout est typé | Quelques `any` restants | `any` partout |
| Composants réutilisables | 4+ composants réutilisables bien découpés | 2-3 composants, découpage correct | Moins de 2 composants ou découpage inadapté |
| Documentation `ARCHITECTURE.md` | Complète et claire | Présente mais imprécise | Absente ou incompréhensible |

## Exercice 2 : Interface

| Critère | Validé ✅ | À améliorer ⚠️ | Insuffisant ❌ |
|---------|-----------|----------------|----------------|
| Dashboard fonctionnel | Stats + graphique + tableau, tout fonctionne | Fonctionnel mais bugs mineurs | Bugs majeurs ou fonctionnalités manquantes |
| Graphique interactif | Clic → navigation correcte | Navigation fonctionne mais UX améliorable | Navigation bugguée |
| Page détail pays | Stats + graphique + navigation, tout OK | Fonctionnel mais incomplet | Bugs ou données incorrectes |
| Gestion des erreurs | 404 + vérifications, aucune page blanche | Erreurs gérées mais messages imprécis | Erreurs non gérées, pages blanches |
| Responsive | Fonctionne mobile + desktop | Responsive partiel | Pas responsive |
| Code propre | Aucun `console.log`, aucun `any`, lint OK | Quelques oublis mineurs | Code sale, lint échoue |
| Documentation `README.md` | Complète avec instructions | Présente mais incomplète | Absente |

## Validation globale

**Projet validé** : Tous les critères sont ✅ ou ⚠️, aucun ❌

**Projet à retravailler** : Un ou plusieurs critères ❌ critiques (architecture inadaptée, bugs majeurs, erreurs non gérées)

---

## Session de bilan

Pour valider ce projet, l'étudiant n'a pas de soutenance avec un évaluateur. C'est vous, en tant que mentor, qui allez valider son travail et le guider.

### Préparez la session

Une fois que votre étudiant a mis en ligne ses livrables, et avant la dernière session de mentorat :

1. **Clonez le repository** de l'étudiant
2. **Installez et lancez l'application** :
   ```bash
   npm install
   npm run dev
   ```
3. **Testez tous les parcours utilisateur** :
   - Dashboard → Détail → Retour
   - Clic graphique et tableau
   - URLs invalides (404, pays inexistant)
   - Responsive (mobile + desktop)
4. **Examinez le code** :
   - Architecture (composants, pages, hooks, models)
   - Typage TypeScript (aucun `any` ?)
   - Custom Hook (bien structuré ?)
   - Gestion des erreurs
5. **Vérifiez la documentation** :
   - `README.md` présent et complet ?
   - `ARCHITECTURE.md` clair ?
   - `notes-architecture.md` avec analyse pertinente ?
6. **Lancez les vérifications** :
   ```bash
   npm run lint   # Doit passer sans erreur
   npm run build  # Doit réussir
   ```

### Menez la session

Pour cette session, sélectionnez une **session de mentorat** classique. Lors de votre compte-rendu sur la plateforme, nous vous conseillons de suivre ce modèle :

1. **Bilan du projet** sur la base du document d'autoévaluation de l'étudiant
   - Points forts : "Tu as bien identifié les problèmes du starter code, ton architecture est claire..."
   - Points à améliorer : "Il reste quelques `any` à typer, la documentation pourrait être plus détaillée..."

2. **Points d'amélioration et recommandations**
   - Suggérez des améliorations concrètes pour les prochains projets
   - Exemple : "Pour le projet suivant, pense à utiliser `useMemo` dès le départ pour les calculs lourds"

3. **Suggestions de ressources**
   - Proposez des articles, vidéos ou cours pour approfondir les points faibles
   - Exemple : "Regarde cette doc officielle sur les Custom Hooks pour mieux comprendre..."

4. **Encouragements / Félicitations**
   - Mettez en avant les qualités démontrées
   - Exemple : "Bravo pour la clarté de ton architecture, on voit que tu as pris le temps de planifier"

Durant cette session :

* Faites remonter à l'étudiant les points sur lesquels il peut encore s'améliorer
* Proposez-lui des ressources et donnez-lui des conseils
* Évoquez les points sur lesquels il doit rester vigilant lors des prochains projets, notamment :
  - **Typage strict** : Aucun `any` dans les prochains projets
  - **Architecture** : Toujours planifier avant de coder
  - **Custom Hooks** : Systématiquement centraliser la logique métier
  - **Intégration API** : Dans le projet suivant, il devra remplacer les données mockées par une vraie API - son architecture doit le permettre facilement

Si aucun des points n'est critique, ne le bloquez pas s'il souhaite passer au projet suivant.

---

# Ressources complémentaires pour les mentors

## Documentation officielle

- [React 19 Documentation](https://react.dev) - Documentation officielle
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Guide complet TypeScript
- [React Router](https://reactrouter.com/) - Documentation du routing
- [Tailwind CSS](https://tailwindcss.com/docs) - Référence CSS
- [Chart.js](https://www.chartjs.org/docs/) - Documentation graphiques

## Articles recommandés

- [React Hooks in Depth](https://react.dev/reference/react) - Guide approfondi des Hooks
- [TypeScript + React Best Practices](https://react-typescript-cheatsheet.netlify.app/) - Bonnes pratiques
- [React Architecture Patterns](https://www.patterns.dev/react/) - Design patterns React

## Vidéos utiles (à suggérer aux étudiants bloqués)

- Fondamentaux des Hooks React
- Custom Hooks expliqués simplement
- TypeScript pour React (débutants)
- Architecture d'une application React professionnelle

---

**Note finale** : Ce projet est conçu pour être **pédagogique et progressif**. L'étudiant apprend en refactorisant du code mal structuré, ce qui est une situation très courante en entreprise. Votre rôle est de le guider vers les bonnes pratiques tout en l'encourageant à expérimenter et à comprendre le "pourquoi" derrière chaque choix architectural.

**Prochaine étape** : Dans le projet suivant, l'étudiant devra intégrer une vraie API REST. Son architecture actuelle doit le permettre facilement - c'est le test ultime de la qualité de son travail sur ce projet.
