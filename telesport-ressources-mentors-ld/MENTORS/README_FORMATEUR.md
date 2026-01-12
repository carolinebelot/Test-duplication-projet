# README_FORMATEUR.md - Instructions pour Mentors

## Bienvenue, Mentor !

Ce fichier contient toutes les informations nécessaires pour accompagner les étudiants sur le projet **TéléSport - Historique des Jeux Olympiques**.

## Table des matières

1. [Vue d'ensemble du projet](#vue-densemble-du-projet)
2. [Ressources disponibles](#ressources-disponibles)
3. [Comment utiliser ce dossier](#comment-utiliser-ce-dossier)
4. [Checklist de validation](#checklist-de-validation)
5. [Contacts et support](#contacts-et-support)

---

## Vue d'ensemble du projet

### Informations générales

- **Nom** : TéléSport - Historique des Jeux Olympiques
- **Durée estimée** : 10-14 heures
- **Niveau** : Intermédiaire (Full Stack JavaScript)
- **Stack** : React 19, TypeScript, Vite, Tailwind CSS, React Router, Recharts

### Objectifs pédagogiques

Les étudiants doivent apprendre à :
- Analyser et refactoriser une architecture front-end
- Créer des Custom Hooks React
- Utiliser TypeScript en mode strict
- Implémenter la navigation avec React Router
- Visualiser des données avec Recharts
- Créer des interfaces responsives avec Tailwind CSS

### Structure des exercices

**Exercice 1** : Refactorisation de l'architecture (4-6h)
- 5 étapes : Analyse, Conception, Refactoring, Custom Hook, Documentation

**Exercice 2** : Implémentation de l'interface (6-8h)
- 4 étapes : Dashboard, Page détail, Gestion erreurs, Finalisation

---

## Ressources disponibles

Ce dossier `telesport-ressources-mentors-ld/MENTORS/` contient :

### 1. CORRIGE.md (60+ pages)

**Guide de correction complet** avec :
- Introduction (vue d'ensemble, compétences, architecture)
- Solution détaillée pour chaque étape des 2 exercices
- Objectifs pédagogiques par étape
- Code de référence avec commentaires
- Points de vigilance et erreurs courantes
- Grille d'évaluation
- Erreurs fréquentes (6 erreurs classiques + solutions)
- FAQ (10 questions fréquentes)

**Quand l'utiliser** :
- Avant chaque session de mentorat (pour connaître la solution)
- Pour corriger le travail de l'étudiant
- Pour répondre aux questions techniques

### 2. GUIDE_FORMATEUR.md

**Guide d'accompagnement pédagogique** avec :
- Stratégies d'accompagnement par profil d'étudiant
- Problèmes fréquents et solutions
- Conseils avant/pendant/après les sessions
- Critères d'évaluation
- FAQ mentors

**Quand l'utiliser** :
- Pour préparer vos sessions de mentorat
- Quand un étudiant est bloqué
- Pour adapter votre approche selon le profil

### 3. README_FORMATEUR.md (ce fichier)

**Instructions générales** pour naviguer dans les ressources.

---

## Comment utiliser ce dossier

### Avant la première session

1. **Lisez le CORRIGE.md** (au moins l'introduction et la vue d'ensemble)
2. **Clonez le repository étudiant** (demandez-lui le lien GitHub)
3. **Testez l'application** :
   ```bash
   cd [nom-du-repo]
   npm install
   npm run dev
   ```
4. **Ouvrez le GUIDE_FORMATEUR.md** pour préparer votre approche

### Pendant les sessions

**Session 1** : Validation de la compréhension
- Vérifiez que l'étudiant a lu `project.md` et `assets.md`
- Posez des questions sur les objectifs pédagogiques
- Validez qu'il sait lancer le projet (`npm run dev`)

**Sessions intermédiaires** : Accompagnement technique
- Demandez une démo de ce qu'il a fait
- Utilisez le CORRIGE.md pour comparer avec la solution de référence
- Référez-vous au GUIDE_FORMATEUR.md pour les problèmes fréquents
- Encouragez l'autonomie : ne donnez pas la solution immédiatement

**Session finale** : Validation du projet
- Utilisez la checklist de validation (voir ci-dessous)
- Testez l'application complète
- Validez le code avec la grille d'évaluation du CORRIGE.md
- Remplissez la fiche d'autoévaluation avec l'étudiant

### Après chaque session

1. Envoyez un résumé par email :
   - Points positifs
   - Points à améliorer
   - Ressources recommandées
   - Prochaines étapes

2. Notez vos observations pour la prochaine session

---

## Checklist de validation

Utilisez cette checklist lors de la session finale pour valider le projet.

### Exercice 1 : Refactorisation

**Architecture** :
- [ ] Dossiers `components/`, `hooks/`, `models/`, `pages/` créés
- [ ] Custom Hook `useOlympicData` créé et fonctionnel
- [ ] Interfaces TypeScript `Olympic` et `Participation` définies
- [ ] Composants réutilisables créés (Header, StatsCard, Loading, ErrorMessage)
- [ ] Fichier `ARCHITECTURE.md` présent et complet

**Qualité du code** :
- [ ] Aucun `any` TypeScript
- [ ] Code compile sans erreur (`npm run build`)
- [ ] Pas de console.log ou code mort
- [ ] Props typées avec interfaces

### Exercice 2 : Implémentation UI

**Fonctionnalités** :
- [ ] Dashboard affiche le graphique PieChart
- [ ] Statistiques globales affichées (nombre de pays, éditions JO)
- [ ] Clic sur un pays redirige vers la page détail
- [ ] Page détail affiche stats, LineChart et tableau
- [ ] Bouton retour fonctionne
- [ ] Page 404 pour routes invalides
- [ ] URL invalide redirige vers 404

**Qualité** :
- [ ] Gestion des états (loading, error)
- [ ] Design responsive (testez sur mobile avec DevTools)
- [ ] README.md complet sur GitHub
- [ ] Repository public et accessible

### Test manuel

**Dashboard** :
1. Lancez l'application : `npm run dev`
2. Vérifiez que le graphique s'affiche
3. Cliquez sur un pays → doit rediriger vers `/country/[id]`

**Page détail** :
1. Vérifiez que les stats s'affichent (participations, médailles, athlètes)
2. Vérifiez que le graphique d'évolution s'affiche
3. Vérifiez que le tableau récapitulatif s'affiche
4. Cliquez sur "Retour" → doit revenir au dashboard

**Gestion erreurs** :
1. Tapez une URL invalide (ex: `/invalid`) → doit afficher 404
2. Tapez un ID invalide (ex: `/country/999`) → doit afficher 404

**Responsive** :
1. Ouvrez DevTools (F12)
2. Activez le mode mobile (Ctrl+Shift+M)
3. Testez sur iPhone, iPad, desktop
4. Vérifiez que tout est lisible et fonctionnel

---

## Contacts et support

### Questions techniques

- **CORRIGE.md** : Solution de référence complète
- **GUIDE_FORMATEUR.md** : Problèmes fréquents et solutions

### Questions pédagogiques

- **GUIDE_FORMATEUR.md** : Stratégies d'accompagnement
- Section "Stratégies d'accompagnement par profil"
- Section "Problèmes fréquents et solutions"

### Ressources externes

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Router Documentation](https://reactrouter.com/)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Cours OpenClassrooms recommandés

Si l'étudiant a des lacunes :
- "Débutez avec React" : Composants, Hooks, Router
- "Utilisez des design patterns en JavaScript" : Architecture, patterns
- "Devenez un expert de Git et GitHub" : Git, GitHub

---

## Conseils rapides

### ✅ À faire

- Félicitez l'étudiant pour son travail
- Posez des questions pour comprendre ses choix
- Encouragez l'autonomie (chercher dans la doc)
- Donnez des indices progressifs
- Valorisez les petites victoires
- Testez l'application ensemble

### ❌ À éviter

- Donner la solution immédiatement
- Corriger le code à la place de l'étudiant
- Juger ou critiquer négativement
- Imposer votre façon de faire
- Oublier d'encourager l'étudiant
- Dépasser 45 minutes sur un même problème

---

## Organisation des fichiers

```
telesport-ressources-mentors-ld/
├── MENTORS/                    # Ressources formateurs (VOUS ÊTES ICI)
│   ├── CORRIGE.md             # ⭐ Guide de correction complet
│   ├── GUIDE_FORMATEUR.md     # ⭐ Guide d'accompagnement pédagogique
│   └── README_FORMATEUR.md    # ⭐ Ce fichier (instructions)
│
├── LEARNING_DESIGNER/          # Ressources Learning Designers
│   ├── rex.md                 # Journal des interactions
│   ├── SUMMARY_SETUP.md       # Résumé du setup
│   └── telesport-solution/    # Codebase solution complète
│
└── instructions/               # Fichiers d'instructions
    ├── project.md             # Instructions projet OC
    ├── stack.md               # Stack technique
    └── assets.md              # Spécifications techniques
```

---

## Temps recommandé par session

**Session 1** : 30-45 minutes
- Présentation du projet
- Validation de la compréhension
- Réponses aux questions

**Sessions intermédiaires** : 45-60 minutes
- Démo du travail réalisé
- Déblocage technique
- Conseils et encouragements

**Session finale** : 60 minutes
- Test complet de l'application
- Validation avec la checklist
- Fiche d'autoévaluation
- Préparation à la soutenance

---

**Bon mentorat ! 🚀**

Si vous avez des questions ou des suggestions d'amélioration pour ce guide, n'hésitez pas à les remonter.
