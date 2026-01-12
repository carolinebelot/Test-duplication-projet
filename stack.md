# TECH SPECS : React 19 + TypeScript + Vite + Tailwind CSS
> Standard Technique - 2025

## 1. Stack Technique
- **Framework / Core :** React 19
- **Langage :** TypeScript (Strict Mode)
- **Build / Runtime :** Vite 5+ / Node 22 LTS
- **Styling / Libs clés :** Tailwind CSS 3.4+, React Router 6+

## 2. Règles d'Implémentation (Do's)
*Liste des pratiques obligatoires pour un code professionnel.*
- **Functional Components** uniquement (pas de Classes).
- Usage intensif des **Hooks** (natifs et custom hooks pour la logique métier).
- Typage strict avec **TypeScript** (Interfaces ou Types, pas de `any`).
- **Composition** de composants plutôt que l'héritage.
- Gestion d'état locale via `useState`/`useReducer` ou globale via Context/Zustand (si nécessaire).

## 3. Pratiques Interdites (Legacy)
*Liste des pratiques obsolètes à bannir.*
- **Class Components** (`class MyComponent extends React.Component`).
- Utilisation de `var` ou de fonctions non fléchées dans les callbacks.
- Manipulation directe du DOM (ex: `document.getElementById`).
- **Prop Drilling** excessif (passer des props sur plus de 2 niveaux sans raison).
- Mixins ou patterns de type HOC (Higher Order Components) sauf cas spécifiques (préférer les Hooks).

## 4. Mapping de Migration (Angular $\rightarrow$ React)
*Guide de traduction technique pour le développeur :*

| Concept [Angular] | Concept [React] | Implémentation / Équivalence |
| :--- | :--- | :--- |
| **@Component** (Template + Style + Class) | **Functional Component** (`.tsx`) | Une fonction JS qui retourne du JSX. Logique et vue sont colocalisées. |
| **Directives** (`*ngIf`, `*ngFor`) | **JavaScript Logic** | `*ngIf` $\rightarrow$ Opérateur ternaire ou `&&`. <br> `*ngFor` $\rightarrow$ `array.map(item => <Component />)`. |
| **Data Binding** (`{{ value }}`) | **JSX Interpolation** (`{ value }`) | Utilisation des accolades simples `{}` dans le JSX. |
| **Two-way Binding** (`[(ngModel)]`) | **Controlled Component** | Combinaison de `value={state}` et `onChange={e => setState(e.target.value)}`. |
| **@Input()** | **Props** | Arguments passés à la fonction du composant. Read-only. |
| **@Output()** / `EventEmitter` | **Callback Props** | Passer une fonction parent en prop à l'enfant (ex: `onSave={() => handleSave()}`). |
| **Services / DI** | **Custom Hooks** / **Context** | Extraire la logique dans un fichier `useMyService.ts` ou utiliser `useContext` pour les singletons. |
| **Lifecycle** (`ngOnInit`, `ngOnDestroy`) | **useEffect** | `useEffect(() => { /* init */ return () => { /* destroy */ }; }, [])`. |
| **Pipes** | **Utility Functions** | Simples fonctions JS importées et utilisées directement dans le JSX (ex: `formatDate(date)`). |