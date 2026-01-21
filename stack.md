# TECH SPECS : NEXT.JS FULL STACK (MVP ORION)
> Standard Technique - 2026

## 1. Stack Technique
- **Framework / Core :** Next.js 15 (App Router - Architecture Server Components)
- **Langage :** TypeScript 5.4+ (Mode Strict)
- **Build / Runtime :** Node.js 22 LTS (Moteur d'exécution) / Turbopack
- **Data Layer :** Prisma ORM (avec base PostgreSQL ou SQLite pour dev local)
- **Styling :** Tailwind CSS 4.0
- **Validation :** Zod (remplace les DTOs Java)

## 2. Règles d'Implémentation (Do's)
*Pratiques obligatoires pour la scalabilité et la maintenance.*
- **Server Actions :** Utiliser les Server Actions pour toutes les mutations de données (POST/PUT/DELETE) au lieu de créer une API REST manuelle.
- **Server Components (RSC) :** Fetcher la donnée directement dans les composants serveurs (accès DB via Prisma). Garder le code client (`"use client"`) uniquement pour l'interactivité (clics, state).
- **Zod Schemas :** Typer strictement toutes les entrées/sorties (équivalent DTO).
- **Architecture Feature-based :** Grouper le code par domaine métier (ex: `/app/articles`, `/app/users`) et non par type technique.

## 3. Pratiques Interdites (Legacy)
*Dette technique immédiate à bannir.*
- **`useEffect` pour le data fetching :** Interdit. Utiliser le data fetching serveur (async/await dans le composant).
- **API REST séparée (Express) :** Inutilement complexe pour ce MVP. Utiliser les Route Handlers Next.js uniquement si une app externe doit consommer la data.
- **Typage `any` :** Strictement interdit en TypeScript.
- **État global complexe (Redux) :** Inutile. Utiliser l'URL comme source de vérité et React Context si nécessaire.

## 4. Mapping de Migration (Java/Angular $\rightarrow$ Next.js)
*Guide de traduction technique pour développeur Java/Angular :*

| Concept [Java/Spring + Angular] | Concept [Next.js / Node] | Implémentation / Équivalence |
| :--- | :--- | :--- |
| **Controller** (`@RestController`) | **Server Action** / Route Handler | Fonction asynchrone exportée exécutée côté serveur (Node.js). Pas de mapping HTTP explicite nécessaire pour les formulaires. |
| **Service** (`@Service`) | **Utility Function** | Simple fonction TypeScript importée. L'injection de dépendance est remplacée par les imports ES6 modules. |
| **Entity / Model** (`@Entity`) | **Prisma Schema** (`schema.prisma`) | Définition déclarative de la DB. Génère automatiquement les types TypeScript. |
| **DTO** (Data Transfer Object) | **Zod Schema** | Validation runtime et inférence de type statique en un seul objet. |
| **Repository** (`JpaRepository`) | **Prisma Client** | `await prisma.article.findMany()` remplace `repository.findAll()`. |
| **Template** (`*ngFor`, `*ngIf`) | **JSX / TSX** | JavaScript natif dans le HTML : `{items.map(...)}` ou `{condition && <Component />}`. |
| **Routing** (`app-routing.module`) | **File-system Routing** | L'arborescence des dossiers définit les URLs (`/app/articles/page.tsx` $\rightarrow$ `/articles`). |
| **Modules** (`@NgModule`) | **N/A (Co-location)** | On n'utilise plus de modules. On importe ce dont on a besoin directement dans le fichier. |