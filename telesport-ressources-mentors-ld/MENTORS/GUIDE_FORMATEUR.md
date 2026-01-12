# Guide Formateur - Projet TéléSport

## Introduction

Ce guide vous aide à accompagner les étudiants dans le projet TéléSport (Jeux Olympiques).

**Durée estimée** : 8-12 heures de travail étudiant
**Niveau** : Débutant à Intermédiaire
**Prérequis** : Connaissances de base en JavaScript, HTML, CSS

---

## Vue d'ensemble du projet

### Objectifs pédagogiques

1. **Architecture React moderne** : Comprendre et appliquer une architecture modulaire
2. **Custom Hooks** : Externaliser la logique métier
3. **TypeScript** : Typage strict sans `any`
4. **React Router** : Navigation avec paramètres dynamiques
5. **Visualisation de données** : Graphiques interactifs avec Recharts
6. **Responsive Design** : Interface adaptative avec Tailwind CSS

### Compétences techniques validées

- Functional Components (React 19)
- Custom Hooks pour la logique
- TypeScript en mode strict
- React Router 6 (navigation)
- Recharts (PieChart, LineChart)
- Tailwind CSS (responsive)
- Gestion d'états (loading, error, data)
- Composition de composants

---

## Structure des exercices

### Exercice 1 : Refactorisation de l'architecture (5 étapes)

**Durée estimée** : 4-6 heures

**Objectif** : Mettre en place une architecture React propre et modulaire

**Étapes** :
1. Analyse du code existant (identifier les problèmes)
2. Conception d'une nouvelle architecture
3. Refactorisation des composants
4. Externalisation des données dans un Custom Hook
5. Documentation de l'architecture

**Livrables** :
- `notes-architecture.md` (analyse + architecture)
- Code refactoré avec structure modulaire
- `ARCHITECTURE.md` (documentation finale)

### Exercice 2 : Implémentation de l'UI (4 étapes)

**Durée estimée** : 4-6 heures

**Objectif** : Implémenter l'interface complète avec graphiques et navigation

**Étapes** :
1. Dashboard avec graphique et statistiques
2. Page détail avec graphique d'évolution
3. Gestion des erreurs (404, pays inexistant)
4. Finalisation et documentation

**Livrables** :
- Dashboard fonctionnel avec PieChart
- Page détail fonctionnelle avec LineChart
- Navigation complète
- README à jour
- Captures d'écran (desktop + mobile)

---

## Comment accompagner l'étudiant

### Session de mentorat 1 : Démarrage du projet

**Durée** : 30-45 minutes

**Objectifs** :
1. Vérifier la compréhension des instructions
2. S'assurer que l'environnement est prêt
3. Valider l'approche pour l'Exercice 1

**Points à aborder** :

✅ **Compréhension des attendus** :
- "Que doivent contenir les livrables ?"
- "À quoi ressemblera le dashboard final ?"
- "Quel est le niveau de précision attendu pour les maquettes ?"

✅ **Environnement de développement** :
- Docker Desktop installé et fonctionnel ?
- OU Node.js 22 LTS installé ?
- Git configuré ?
- IDE (VS Code recommandé) prêt ?

✅ **Méthodologie pour l'Exercice 1** :
- Encourage l'étudiant à bien explorer le starter code
- A-t-il identifié les mauvaises pratiques ?
- Peut-il expliquer pourquoi elles posent problème ?

### Session de mentorat 2 : Validation de l'architecture

**Durée** : 30-45 minutes

**Objectifs** :
1. Valider l'architecture proposée
2. Corriger les incompréhensions
3. Préparer l'Exercice 2

**Points à aborder** :

✅ **Architecture** :
- La structure proposée est-elle claire ?
- Les dossiers ont-ils des responsabilités bien définies ?
- Le Custom Hook est-il bien compris ?

✅ **Code** :
- Les composants sont-ils dans les bons dossiers ?
- Le typage TypeScript est-il correct ?
- Pas de `any` ?

✅ **Préparation Exercice 2** :
- L'étudiant comprend-il ce qu'il doit implémenter ?
- A-t-il lu les spécifications de Recharts ?

### Session de mentorat 3 : Suivi de l'implémentation

**Durée** : 30-45 minutes

**Objectifs** :
1. Débloquer les difficultés techniques
2. Vérifier la progression
3. Valider l'approche

**Points à aborder** :

✅ **Graphiques** :
- Le PieChart s'affiche-t-il ?
- La navigation au clic fonctionne-t-elle ?
- Le LineChart montre-t-il l'évolution ?

✅ **Calculs** :
- Les statistiques sont-elles correctes ?
- L'étudiant utilise-t-il `reduce` correctement ?

✅ **Navigation** :
- React Router est-il bien configuré ?
- La gestion des erreurs fonctionne-t-elle ?

### Session de mentorat 4 : Finalisation

**Durée** : 30 minutes

**Objectifs** :
1. Valider le projet final
2. Vérifier la responsivité
3. Préparer la soutenance (si applicable)

**Points à aborder** :

✅ **Tests** :
- Toutes les fonctionnalités marchent-elles ?
- Le responsive est-il testé ?
- Les captures d'écran sont-elles fournies ?

✅ **Code** :
- Pas de `console.log` ni `any` ?
- Le README est-il à jour ?
- L'historique Git est-il propre ?

---

## Lacunes récurrentes et solutions

### Lacune 1 : Architecture et modularité

**Symptômes** :
- Tout le code dans un seul fichier
- Pas de séparation components/ vs pages/
- Données en dur dans les composants

**Solutions** :
- Revoir le cours OpenClassrooms "Utilisez des design patterns en JavaScript"
- Expliquer la séparation des responsabilités
- Montrer des exemples d'architecture modulaire

### Lacune 2 : Custom Hooks

**Symptômes** :
- Ne comprend pas quand créer un Custom Hook
- Confond Hook et composant
- Appelle le Hook conditionnellement

**Solutions** :
- Revoir le cours OpenClassrooms "Débutez avec React" (Partie 5)
- Expliquer que les Hooks sont pour la logique, pas l'UI
- Rappeler les règles des Hooks (toujours au top level)

### Lacune 3 : TypeScript

**Symptômes** :
- Utilise `any` partout
- Ne type pas les props
- Ne comprend pas les interfaces

**Solutions** :
- Revoir la documentation TypeScript
- Expliquer l'intérêt du typage (éviter les bugs)
- Montrer des exemples concrets d'interfaces

### Lacune 4 : React Router

**Symptômes** :
- Ne comprend pas `useParams`
- Confond Routes et navigation
- Oublie la route wildcard

**Solutions** :
- Revoir le cours OpenClassrooms "Débutez avec React" (Partie 5)
- Expliquer la différence entre déclaration (Routes) et utilisation (Link, useNavigate)
- Montrer des exemples de paramètres dynamiques

### Lacune 5 : Recharts

**Symptômes** :
- Le graphique ne s'affiche pas
- Données mal formatées
- Pas de `ResponsiveContainer`

**Solutions** :
- Consulter la documentation Recharts
- Vérifier que les données sont au bon format
- Toujours utiliser `ResponsiveContainer`

---

## Points de vigilance par exercice

### Exercice 1 : Architecture

**Mettez l'accent sur** :
- L'importance d'architecture modulaire
- Custom Hooks React
- Design patterns (Composition)
- Séparation container/presentational

**Assurez-vous qu'il sache** :
- Ce que doit contenir l'architecture front-end
- Pourquoi un refactoring est nécessaire
- Comment la nouvelle structure va favoriser la maintenabilité

### Exercice 2 : UI

**Mettez l'accent sur** :
- Bonnes pratiques React (pas de console, pas d'any)
- Navigation fluide et responsive
- Gestion d'erreurs front-end

**Assurez-vous qu'il a** :
- Bien réutilisé le Hook `useOlympicData`
- Testé la navigation et le responsive
- Produit un README clair

---

## Grille d'évaluation simplifiée

### Exercice 1 (80 points)

| Critère | Points |
|---------|--------|
| Analyse des problèmes (`notes-architecture.md`) | 10 |
| Architecture claire et documentée | 20 |
| Composants réutilisables (StatCard, etc.) | 15 |
| Interfaces TypeScript | 10 |
| Custom Hook `useOlympicData` | 15 |
| Typage strict (pas de `any`) | 10 |

### Exercice 2 (100 points)

| Critère | Points |
|---------|--------|
| Dashboard avec statistiques | 10 |
| PieChart fonctionnel + navigation | 25 |
| Page Country avec statistiques | 10 |
| LineChart fonctionnel | 15 |
| Gestion erreurs (404, pays inexistant) | 10 |
| Responsive (desktop + mobile) | 10 |
| Documentation (README + captures) | 10 |
| Code propre (pas de console, any) | 10 |

**Total** : 180 points

---

## Questions fréquentes des étudiants

**Q : Combien de pays minimum dans les données ?**

R : Au minimum 3 pays pour avoir un graphique intéressant, idéalement 5 (comme dans la solution).

**Q : Dois-je respecter les maquettes au pixel près ?**

R : Non. Le but est le bon fonctionnement de l'interface avec la prise en main de React et TypeScript. Les maquettes sont une inspiration, pas une contrainte stricte.

**Q : Puis-je utiliser BarChart au lieu de PieChart ?**

R : Oui, les deux sont acceptables tant que le graphique affiche le total de médailles par pays et permet la navigation au clic.

**Q : Docker est-il obligatoire ?**

R : Docker est recommandé mais pas obligatoire. L'étudiant peut utiliser `npm run dev` directement.

**Q : Faut-il des tests automatisés ?**

R : Non, ce projet demande uniquement des tests manuels.

**Q : Combien de temps dois-je passer sur ce projet ?**

R : 8-12 heures environ (4-6h par exercice).

---

## Erreurs courantes et déblocage

### Erreur : "Cannot find module 'recharts'"

**Solution** :
```bash
npm install recharts
```

### Erreur : Graphique ne s'affiche pas

**Causes possibles** :
1. Pas de `ResponsiveContainer`
2. Hauteur non définie
3. Données mal formatées

**Solution** :
```tsx
<ResponsiveContainer width="100%" height={400}>
  <PieChart>...</PieChart>
</ResponsiveContainer>
```

### Erreur : Navigation ne fonctionne pas

**Causes possibles** :
1. `useNavigate` pas importé
2. Clic mal géré
3. Routes mal configurées

**Solution** :
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const handleClick = () => navigate('/country/1');
```

---

## Ressources à partager avec l'étudiant

- [Documentation React](https://react.dev/)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation Recharts](https://recharts.org/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- Cours OpenClassrooms : "Débutez avec React"
- Cours OpenClassrooms : "Utilisez des design patterns en JavaScript"

---

## Conseils pour une évaluation efficace

1. **Avant l'évaluation** :
   - Consulter le `CORRIGE.md` pour connaître les attendus
   - Préparer une grille d'évaluation
   - Tester la solution de référence

2. **Pendant l'évaluation** :
   - Demander à l'étudiant de faire une démo
   - Poser des questions sur les choix techniques
   - Vérifier la compréhension (pas juste le code)

3. **Après l'évaluation** :
   - Donner un feedback constructif
   - Partager le `CORRIGE.md` si nécessaire
   - Encourager l'amélioration continue

---

## Contact et support

Pour toute question sur ce projet :
- Consulter le `CORRIGE.md` (correction détaillée)
- Consulter le `README_SOLUTION.md` (dans telesport-solution/)
- Consulter le `rex.md` (journal des décisions)

---

**Document créé pour accompagner le projet TéléSport**
**Date : 2026-01-09**
