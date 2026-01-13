# Ressources Formateurs - Projet TéléSport

Bienvenue dans l'espace ressources formateurs du projet TéléSport.

## Contenu de ce dossier

### 📋 CORRIGE.md
**Corrigé exhaustif du projet** (1400+ lignes)
- Corrections détaillées pour chaque étape des 2 exercices
- Explications des erreurs fréquentes
- Extraits de code commentés
- Checklist de validation par étape
- Grille d'évaluation complète

**Utilisation** : Document de référence pour corriger les livrables des étudiants

### 👨‍🏫 GUIDE_FORMATEUR.md
**Guide pédagogique pour les mentors**
- Conseils spécifiques par exercice et par étape
- FAQ mentor (questions fréquentes)
- Problèmes récurrents et solutions
- Grille d'évaluation rapide
- Préparation de la session de bilan

**Utilisation** : Document à lire AVANT la première session de mentorat

## Structure du projet TéléSport

Le projet est organisé en 3 espaces :

### 1. Espace étudiant
**Branche** : `p2-dfsjs-telesport-starter-etudiants-openclassrooms`

**Contenu** :
- Code starter (intentionnellement mal structuré)
- README avec instructions et liste des problèmes à identifier
- Configuration complète (Vite, TypeScript, Tailwind, etc.)

**Usage** : L'étudiant clone cette branche et travaille dessus

### 2. Espace formateurs (CE DOSSIER)
**Dossier** : `p2-dfsjs-telesport-ressources-mentors-ld/MENTORS/`

**Contenu** :
- CORRIGE.md : Corrections exhaustives
- GUIDE_FORMATEUR.md : Guide pédagogique
- README_FORMATEUR.md : Ce fichier

**Usage** : Ressources pour accompagner les étudiants

### 3. Espace Learning Designer
**Dossier** : `p2-dfsjs-telesport-ressources-mentors-ld/LEARNING_DESIGNER/`

**Contenu** :
- Solution complète (code professionnel de référence)
- REX.md : Retour d'expérience sur la création du projet
- Architecture et documentation complète

**Usage** : Référence technique et retour d'expérience

## Workflow d'accompagnement

### Avant la première session

1. **Lire le GUIDE_FORMATEUR.md** en entier
2. **Parcourir le CORRIGE.md** pour voir les solutions attendues
3. **Cloner et tester** le code starter :
   ```bash
   git clone <url-repo> -b p2-dfsjs-telesport-starter-etudiants-openclassrooms
   cd p2-dfsjs-telesport-starter
   npm install
   npm run dev
   ```
4. **Consulter** la solution dans `../LEARNING_DESIGNER/telesport-solution/`

### Durant les sessions

1. **Exercice 1** (Refactorisation)
   - Session 1-2 : Aide à l'analyse du code et conception architecture
   - Session 3-4 : Validation de la refactorisation
   - Référez-vous au GUIDE_FORMATEUR.md section "Exercice 1"

2. **Exercice 2** (Interface)
   - Session 5-6 : Aide à l'implémentation du dashboard et page détail
   - Session 7 : Gestion des erreurs et finalisation
   - Référez-vous au GUIDE_FORMATEUR.md section "Exercice 2"

### Session de bilan finale

1. **Cloner le travail de l'étudiant**
2. **Tester l'application** (tous les parcours utilisateur)
3. **Vérifier avec la grille d'évaluation** (CORRIGE.md section "Grille d'évaluation")
4. **Préparer le feedback** avec points forts et axes d'amélioration
5. **Session de bilan** : voir GUIDE_FORMATEUR.md section "Session de bilan"

## Grille d'évaluation rapide

| Critère | Validé ✅ | À revoir ❌ |
|---------|-----------|-------------|
| Architecture refactorisée (components, pages, hooks, models) | | |
| Typage strict (aucun `any`) | | |
| Custom Hook créé et utilisé | | |
| Dashboard fonctionnel avec graphique interactif | | |
| Page détail avec navigation | | |
| Gestion des erreurs (404, données manquantes) | | |
| Code propre (lint OK, build OK) | | |
| Documentation (README, ARCHITECTURE) | | |

**Validation** : Tous les critères doivent être ✅

## Problèmes fréquents

### 1. "Mon useEffect crée une boucle infinie"
→ Voir GUIDE_FORMATEUR.md section "Problèmes fréquents #1"

### 2. "J'ai des erreurs TypeScript partout"
→ Voir GUIDE_FORMATEUR.md section "Problèmes fréquents #2"

### 3. "Mon graphique ne s'affiche pas"
→ Voir GUIDE_FORMATEUR.md section "Problèmes fréquents #3"

### 4. "La navigation ne fonctionne pas"
→ Voir GUIDE_FORMATEUR.md section "Problèmes fréquents #4"

## FAQ Express

**Q : Combien de temps doit prendre le projet ?**
R : 30-40h réparties sur 3-4 semaines (7-8 sessions de mentorat)

**Q : L'étudiant doit-il avoir une vraie API ?**
R : Non. Données mockées dans un Custom Hook suffisent.

**Q : Le design doit-il être parfait ?**
R : Non. L'objectif est fonctionnel, pas esthétique.

**Q : Faut-il des tests unitaires ?**
R : Non pour ce projet. Introduits dans les projets suivants.

**Plus de questions ?** → Voir GUIDE_FORMATEUR.md section "FAQ Mentor"

## Ressources complémentaires

### Documentation officielle
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Cours OpenClassrooms recommandés
- [PLACEHOLDER COURS] - Fondamentaux React
- [PLACEHOLDER COURS] - TypeScript pour React
- [PLACEHOLDER COURS] - Architecture front-end

## Contact et support

**Questions techniques** : [À compléter]
**Feedback projet** : [À compléter]

---

**Bon accompagnement !** 🚀
