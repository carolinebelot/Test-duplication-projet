# Configuration des branches - Projet TéléSport

## 📋 Résumé

Le projet TéléSport est maintenant organisé sur **deux branches Git distinctes** :

### 1. Branche formateurs : `setup-projetv2` (branche actuelle)

**Contenu** :
- Dossier `telesport-ressources-mentors-ld/` avec :
  - `LEARNING_DESIGNER/` : Fichiers internes (project.md, stack.md, rex.md, solution complète)
  - `MENTORS/` : Guides de correction (CORRIGE.md, GUIDE_FORMATEUR.md)
  - `instructions/` : Fichiers d'instructions (README_SETUP.md, assets.md, etc.)
- `AGENTS.md` : Workflow de génération mis à jour

**Objectif** : Ressources pour les Learning Designers et Mentors

### 2. Branche étudiants : `telesport-starter-etudiants-openclassrooms`

**Contenu** :
- Code starter React + TypeScript + Vite + Tailwind CSS
- README.md pour les étudiants
- Configuration Docker (Dockerfile + docker-compose.yml)
- Structure modulaire (components/, hooks/, models/, pages/)
- **AUCUNE** référence aux corrections ou ressources formateurs

**Objectif** : Code de départ pour les étudiants

---

## 🔄 Historique des commits

### Branche `setup-projetv2`
- `2a03b3d` - feat: Add mentor and LD resources for telesport + update AGENTS.md workflow

### Branche `telesport-starter-etudiants-openclassrooms`
- `2fa7f11` - feat: Initial starter code for students (clean version)

---

## 📂 Structure sur la branche formateurs (`setup-projetv2`)

```
/
├── telesport-ressources-mentors-ld/
│   ├── LEARNING_DESIGNER/
│   │   ├── project.md
│   │   ├── stack.md
│   │   ├── rex.md
│   │   ├── SUMMARY_SETUP.md
│   │   └── telesport-solution/          # Solution complète
│   │       ├── src/
│   │       ├── README_SOLUTION.md
│   │       └── ...
│   │
│   ├── MENTORS/
│   │   ├── CORRIGE.md                   # Guide de correction détaillé
│   │   └── GUIDE_FORMATEUR.md           # Guide d'accompagnement
│   │
│   └── instructions/
│       ├── README_SETUP.md
│       ├── project.md
│       ├── stack.md
│       └── assets.md
│
├── AGENTS.md                             # Workflow de génération
└── [autres fichiers du repo]
```

---

## 📂 Structure sur la branche étudiants (`telesport-starter-etudiants-openclassrooms`)

```
/
├── README.md                  # Documentation pour étudiants
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── .eslintrc.cjs
├── .gitignore
└── src/
    ├── components/            # StatCard, LoadingSpinner, ErrorMessage
    ├── hooks/                 # useOlympicData
    ├── models/                # Olympic.ts
    ├── pages/                 # Home, Country, NotFound
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## 🚀 Commandes utiles

### Voir le contenu de la branche étudiants

```bash
git checkout telesport-starter-etudiants-openclassrooms
ls -la
```

### Revenir à la branche formateurs

```bash
git checkout setup-projetv2
```

### Lister toutes les branches

```bash
git branch -a
```

### Pousser les branches sur GitHub

```bash
# Pousser la branche formateurs (si pas déjà fait)
git push origin setup-projetv2

# Pousser la branche étudiants
git push origin telesport-starter-etudiants-openclassrooms
```

---

## 📦 Publication aux étudiants

### Étape 1 : Configurer la branche par défaut sur GitHub

1. Aller dans **Settings > Branches** du repository
2. Définir `telesport-starter-etudiants-openclassrooms` comme **Default branch**
3. Sauvegarder

### Étape 2 : Rendre le repository public (si nécessaire)

1. Aller dans **Settings > General**
2. Descendre à **Danger Zone**
3. Cliquer sur **Change visibility** → **Make public**

### Étape 3 : Partager le lien

Les étudiants cloneront automatiquement la branche par défaut :

```bash
git clone https://github.com/[username]/[repo-name].git
```

---

## ✅ Avantages de cette approche

✅ **Séparation claire** : Étudiants et formateurs ont des branches dédiées
✅ **Pas de risque de fuite** : Les corrections ne sont jamais dans la branche étudiants
✅ **Pas de suppression manuelle** : Plus besoin de fichiers "A SUPPRIMER"
✅ **Historique propre** : Chaque branche a son propre historique
✅ **Collaboration facilitée** : Les formateurs peuvent collaborer sur la branche ressources
✅ **Publication simple** : Il suffit de rendre publique la branche étudiants

---

## 📝 Notes importantes

- **Ne jamais merger** la branche formateurs dans la branche étudiants
- La branche étudiants est **orpheline** (pas d'historique commun avec les autres branches)
- Les modifications sur la branche étudiants sont **indépendantes** des ressources formateurs
- Pour mettre à jour le code étudiant, faire les modifications directement sur la branche étudiants

---

**Date de création** : 2026-01-12
**Créé par** : Claude (Assistant IA)
