# REX - Retour d'Expérience P7-DFSJS

## Session 1 - 2026-01-22 18:30:33

### Phase 0 - Vérification des fichiers markdown
- ✅ project.md présent : Instructions complètes du projet CI/CD pour Orion
- ✅ stack.md présent : Stack MERN modernisé (React 19, Node.js 22, TypeScript 5.x, Express 5)
- ✅ assets.md présent : Conversation avec Maria sur monitoring et métriques DORA
- ✅ template-etudiant.md présent : Template de documentation technique à remplir
- ❌ Dossier ./example absent (non obligatoire)

### Phase 0.5 - Définition du nom du projet
- **Nom choisi par l'utilisateur** : P7-DFSJS
- **Convention** : Minuscules avec tirets
- **Repositories à créer** :
  - p7-dfsjs-starter (code starter étudiants)
  - p7-dfsjs-solution (codebase solution complète)
  - p7-dfsjs-setup (ressources mentors/LD)

### Phase 1 - Définition de la stack technique

#### Analyse de l'exemple P7-FSJA
**Repository de référence** : https://github.com/OpenClassrooms-Student-Center/P7-FSJA

**Architecture de l'exemple** :
- Monorepo avec dossiers `back/` et `front/` séparés
- Backend : Java SpringBoot 3 + Gradle
- Frontend : Angular 17 + TypeScript
- Application CRM simplifiée : création, édition, visualisation d'individus liés à des organisations
- Niveau : Faible à Moyen (base pédagogique)
- Tests présents : Karma/Jasmine (front), Gradle test (back)
- Docker : Multi-stage build avec 3 configurations (front, back, standalone)

**Fonctionnalités CRM de l'exemple** :
- CRUD individus (personnes/contacts)
- Liaison avec organisations
- Interface simple de visualisation

#### Adaptation pour P7-DFSJS (Stack MERN)

**Stack technique définie** (basée sur stack.md) :
- **Frontend** : React 19 (Hooks & Functional Components)
- **Backend** : Node.js 22 LTS + Express.js 5
- **Langage** : TypeScript 5.x (Mode Strict obligatoire)
- **Build Tool** : Vite
- **Base de données** : Prisma + SQLite (dev) / PostgreSQL (prod)
- **Styling** : Tailwind CSS
- **State Management** : Context API ou Zustand
- **API Client** : TanStack Query + Axios
- **Validation** : Zod (schémas)

**Technologies CI/CD additionnelles** (project.md) :
- GitHub Actions
- Docker + Docker Compose
- SonarQube Cloud
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Métriques DORA

**Niveau de séniorité** : Intermédiaire à Avancé
- Concepts : CI/CD, conteneurisation, métriques DORA, architecture Controller-Service-Repository
- Les étudiants doivent industrialiser le pipeline, pas créer l'application from scratch

**Architecture de l'application CRM P7-DFSJS** :
- Monorepo avec structure `/client` (React) et `/server` (Express)
- Fonctionnalités CRM simplifiées similaires à P7-FSJA :
  - CRUD contacts (personnes)
  - CRUD organisations (entreprises)
  - Liaison contacts ↔ organisations
  - Dashboard simple avec stats
- Backend Pattern : Controller-Service-Repository
- Frontend Pattern : Pages → Components → Custom Hooks

**Objectif pédagogique principal** :
Les étudiants reçoivent une application fonctionnelle et doivent :
- Créer les Dockerfiles et docker-compose.yml (CI/CD = objectif pédagogique)
- Mettre en place le pipeline CI/CD avec GitHub Actions
- Intégrer SonarQube pour l'analyse de qualité/sécurité
- Configurer ELK Stack pour le monitoring
- Analyser les métriques DORA
- Documenter le tout

### Phase 2 - Analyse de project.md et identification des objectifs

#### Objectifs pédagogiques détaillés

**Mission Partie 1** :
1. Analyser la structure du dépôt (front React + back Node.js/Express)
2. Définir les plans (testing, sécurité, conteneurisation/déploiement)
3. Configurer CI avec GitHub Actions + tests + SonarQube Cloud
4. **Créer** Dockerfiles + docker-compose.yml (conteneurisation)
5. Automatiser CD (publication images Docker)
6. (Facultatif) Releases avec versioning sémantique

**Mission Partie 2** :
7. Monitoring local avec stack ELK
8. Métriques DORA + KPI personnalisés
9. Analyse sécurité/qualité SonarQube
10. Plans : déploiement, sauvegarde, mise à jour
11. Documentation technique finale (PDF 10-15 pages)

#### Compétences à valider
- Mise en œuvre CI/CD complet
- Conteneurisation Docker (Frontend + Backend + orchestration)
- Analyse qualité/sécurité (SonarQube + OWASP)
- Monitoring (ELK Stack + DORA + KPI)
- Documentation technique professionnelle

#### Livrables attendus
1. **Dépôt GitHub** : workflows YAML, Dockerfiles, docker-compose.yml, README, code source
2. **Documentation PDF** (10-15 pages) : pipeline, plans, métriques, monitoring

#### Décision Docker (CAS A - Objectif Pédagogique)

**Analyse project.md** :
- Étape 4 : "Mettez en œuvre la conteneurisation" → les étudiants doivent créer les fichiers
- Étape 4 : "À partir des Dockerfiles déjà présents dans le projet : vérifiez leur pertinence, adaptez-les si nécessaire"
- Mail Maria : "Vérifier et, si nécessaire, adapter la conteneurisation"

**⚠️ AMBIGUÏTÉ DÉTECTÉE** :
- D'un côté : "créer/mettre en œuvre" (suggère création par étudiants)
- D'autre côté : "Dockerfiles déjà présents" (suggère fichiers existants)

**🔴 DÉCISION PRISE** : CAS A - Docker = Objectif Pédagogique PRINCIPAL

**Justification** :
- Le projet s'appelle "Industrialisation CI/CD" → conteneurisation est centrale
- Mail Maria ligne 68 : "Vérifier... la conteneurisation du front-end et du back-end"
- Étape 4 demande adaptation/optimisation des Dockerfiles
- L'exemple P7-FSJA (Java/Angular) contient déjà des Dockerfiles → cohérent

**Stratégie retenue** :
- ✅ **STARTER** : Dockerfiles basiques fonctionnels (mais non optimisés)
- ✅ **Exercice étudiant** : Analyser, optimiser, créer docker-compose.yml, créer workflows CI/CD
- ❌ **STARTER** : Pas de docker-compose.yml (étudiants doivent le créer)
- ❌ **STARTER** : Pas de .github/workflows/ (étudiants doivent le créer)
- ✅ **SOLUTION** : Dockerfiles optimisés + docker-compose.yml complet + workflows CI/CD complets

**Compromis pédagogique** :
Les Dockerfiles basiques dans le starter permettent aux étudiants de :
- Analyser une première version fonctionnelle
- Identifier les manquements (sécurité, optimisation, multi-stage)
- Appliquer les best practices Docker
- Créer l'orchestration docker-compose.yml
- Automatiser avec GitHub Actions

### Phase 3 - Génération de la structure et du code starter

#### Structure créée

```
p7-dfsjs-starter/
├── client/                     # Frontend React 19
│   ├── src/
│   │   ├── components/        # Layout, Card
│   │   ├── pages/             # Dashboard, ContactList, OrganizationList
│   │   ├── hooks/             # useContacts, useOrganizations (TanStack Query)
│   │   ├── services/          # api.ts (Axios client)
│   │   ├── types/             # TypeScript interfaces
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   └── Dockerfile             # BASIQUE (à optimiser par étudiants)
├── server/                    # Backend Express 5 + Node.js 22
│   ├── src/
│   │   ├── controllers/      # organizationController, contactController
│   │   ├── services/         # organizationService, contactService
│   │   ├── repositories/     # organizationRepository, contactRepository
│   │   ├── models/           # schemas.ts (Zod validation)
│   │   ├── routes/           # organizationRoutes, contactRoutes
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma    # Models: Organization, Contact
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── Dockerfile            # BASIQUE (à optimiser par étudiants)
├── .gitignore
└── README.md
```

#### Fonctionnalités implémentées

**Backend (API REST)** :
- Architecture Controller-Service-Repository stricte
- 2 models Prisma : Organization, Contact (relation 1-N)
- CRUD complet pour Organizations et Contacts
- Endpoints stats pour Dashboard
- Validation Zod sur tous les inputs
- TypeScript strict mode
- Gestion d'erreurs basique

**Frontend (React SPA)** :
- 3 pages principales : Dashboard, Contacts, Organizations
- Components réutilisables : Layout, Card
- Custom hooks avec TanStack Query (cache, mutations)
- Services API centralisés (Axios)
- Routing React Router
- Tailwind CSS responsive
- TypeScript strict mode

**Points pédagogiques** :
- ✅ Application fonctionnelle complète
- ✅ Architecture professionnelle (séparation concerns)
- ✅ Dockerfiles BASIQUES inclus (volontairement non optimisés)
- ❌ PAS de docker-compose.yml (étudiants doivent le créer)
- ❌ PAS de workflows GitHub Actions (étudiants doivent les créer)
- ❌ PAS de configuration SonarQube (étudiants doivent l'intégrer)
- ❌ PAS de configuration ELK Stack (étudiants doivent la créer)

#### Décisions techniques

**Base de données** : SQLite (dev) - facile pour démarrer, pas de configuration
**Validation** : Zod (remplace DTOs Java)
**State Management** : TanStack Query (cache API) + hooks locaux (pas de Zustand nécessaire pour starter)
**Styling** : Tailwind CSS (utility-first)
**Testing** : Vitest configuré mais pas de tests écrits (étudiants peuvent en ajouter)

#### Dockerfiles basiques (stratégie pédagogique)

**Choix** : Fournir des Dockerfiles fonctionnels MAIS volontairement non optimisés

**Manques intentionnels** :
- Pas de multi-stage build
- Image de base lourde (node:22 au lieu de node:22-alpine)
- Pas d'optimisation des layers
- Pas de .dockerignore
- Pas de user non-root
- Pas de health checks
- Pas d'optimisation npm ci --only=production

**Objectif** : Les étudiants doivent :
1. Analyser les Dockerfiles fournis
2. Identifier les problèmes de sécurité et performance
3. Appliquer les best practices Docker (multi-stage, alpine, security)
4. Créer docker-compose.yml pour orchestrer les services
5. Documenter leurs améliorations

### Phase 4 - Configuration Docker

✅ **CHECKPOINT VALIDÉ** - Voir Phase 3 ci-dessus (Dockerfiles basiques créés)

**Stratégie retenue** : CAS A adapté - Dockerfiles basiques dans starter

**Fichiers créés** :
- `client/Dockerfile` - Dockerfile basique frontend (à optimiser)
- `server/Dockerfile` - Dockerfile basique backend (à optimiser)

**Fichiers NON créés (volontairement)** :
- ❌ `docker-compose.yml` - Les étudiants doivent le créer
- ❌ `.github/workflows/` - Les étudiants doivent créer le pipeline CI/CD
- ❌ `.dockerignore` - Les étudiants doivent l'ajouter
- ❌ `nginx.conf` - Les étudiants peuvent l'ajouter (multi-stage frontend)

---

### Phase 5 - Documentation

**README.md** :
✅ Créé à la racine avec :
- Description de l'application
- Prérequis techniques
- Instructions d'installation détaillées (backend + frontend)
- Instructions de lancement (npm run dev)
- Scripts disponibles (dev, build, test, lint, prisma)
- Structure du projet expliquée
- Liste des features
- API endpoints documentés
- Stack technique complète
- Guidelines de développement
- Principes d'architecture

**rex.md** :
✅ Mis à jour avec :
- Phase 0 : Vérification fichiers markdown
- Phase 0.5 : Nom du projet (p7-dfsjs)
- Phase 1 : Stack technique définie (analyse P7-FSJA + adaptation MERN)
- Phase 2 : Objectifs pédagogiques identifiés (11 étapes)
- Phase 3 : Structure et code générés
- Phase 4 : Docker (stratégie CAS A adapté)
- Phase 5 : Documentation complète

**État du starter** :
- 🟢 Application fonctionnelle complète
- 🟢 README professionnel (comme un vrai projet)
- 🟢 Dockerfiles basiques fournis
- 🟢 Pas de guides pédagogiques dans le starter (respecte AGENTS.md)
- 🟢 Architecture professionnelle (MVC + Hooks + Services)
- 🟢 TypeScript strict sans any
- 🟢 Prêt pour industrialisation CI/CD par les étudiants

---

