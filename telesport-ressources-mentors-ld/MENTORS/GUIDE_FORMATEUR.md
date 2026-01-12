# GUIDE_FORMATEUR.md - Guide d'Accompagnement Pédagogique

## Introduction

Ce guide est destiné aux **mentors et formateurs OpenClassrooms** qui accompagnent les étudiants sur le projet TéléSport. Il fournit des conseils pédagogiques, des stratégies d'accompagnement et des réponses aux situations courantes.

## Vue d'ensemble du projet

**Nom** : TéléSport - Historique des Jeux Olympiques
**Durée estimée** : 10-14 heures
**Niveau** : Intermédiaire (Full Stack JavaScript)
**Stack** : React 19 + TypeScript + Vite + Tailwind CSS + React Router + Recharts

### Compétences travaillées

- Architecture front-end moderne
- React 19 (Functional Components, Hooks)
- TypeScript strict
- Custom Hooks
- React Router (navigation, paramètres d'URL)
- Visualisation de données (Recharts)
- Design responsive (Tailwind CSS)

## Structure des exercices

### Exercice 1 : Refactorisation de l'architecture (4-6h)

**Objectif** : Apprendre à analyser, concevoir et refactoriser une architecture front-end.

**5 étapes** :
1. Analyser le code existant et repérer les problèmes
2. Concevoir une nouvelle architecture adaptée
3. Refactoriser les composants existants
4. Externaliser la gestion des données dans un Custom Hook
5. Documenter l'architecture et la valider

### Exercice 2 : Implémentation de l'interface (6-8h)

**Objectif** : Implémenter des fonctionnalités UI complètes avec React.

**4 étapes** :
1. Améliorer le dashboard existant
2. Améliorer la page détail et ajouter la navigation
3. Gérer les erreurs de navigation et d'affichage
4. Finaliser l'application et la documenter sur GitHub

## Approche pédagogique recommandée

### Principe général

**Laissez l'étudiant chercher avant de donner la solution.**

Le but est de développer l'autonomie et la capacité de résolution de problèmes. N'intervenez qu'en cas de blocage réel.

### Première session de mentorat

**Objectif** : Valider la compréhension des attendus

Questions à poser :
1. "Explique-moi avec tes mots ce que tu dois faire dans ce projet"
2. "Quelles sont les technologies que tu vas utiliser ?"
3. "As-tu déjà utilisé React ? TypeScript ? React Router ?"
4. "Quelle est la première étape selon toi ?"

**Points à vérifier** :
- L'étudiant a bien lu `project.md` et `assets.md`
- Il comprend la différence entre Exercice 1 (refactoring) et Exercice 2 (implémentation)
- Il sait comment lancer le projet (`npm install`, `npm run dev`)

### Sessions intermédiaires

**Exercice 1** : Refactorisation

Si l'étudiant a des difficultés :
- **Étape 1 (Analyse)** : Demandez-lui de vous montrer le code et d'expliquer pourquoi c'est un problème
- **Étape 2 (Conception)** : Dessinez ensemble un schéma de l'architecture cible
- **Étape 3 (Refactoring)** : Faites refactoriser un composant ensemble, puis laissez-le faire les autres seul
- **Étape 4 (Custom Hook)** : Expliquez le concept avec un exemple simple, puis laissez-le implémenter
- **Étape 5 (Documentation)** : Relisez ensemble le fichier ARCHITECTURE.md

**Exercice 2** : Implémentation UI

Si l'étudiant a des difficultés :
- **Étape 1 (Dashboard)** : Montrez un exemple de PieChart dans la doc Recharts, laissez-le adapter
- **Étape 2 (Page détail)** : Expliquez `useParams`, montrez un exemple d'URL dynamique
- **Étape 3 (Gestion erreurs)** : Discutez des cas limites : que se passe-t-il si l'ID est invalide ?
- **Étape 4 (Finalisation)** : Testez l'application ensemble, notez les bugs

### Dernière session de mentorat

**Objectif** : Valider le travail et préparer la soutenance

**Checklist de validation** :
- [ ] L'application démarre sans erreur (`npm run dev`)
- [ ] Le dashboard affiche le graphique et les stats
- [ ] Le clic sur un pays redirige vers la page détail
- [ ] La page détail affiche les stats, le graphique et le tableau
- [ ] Le bouton retour fonctionne
- [ ] Une URL invalide affiche la page 404
- [ ] L'application est responsive (testez sur mobile)
- [ ] Le code est propre (pas de console.log, pas de `any`)
- [ ] Le README.md est complet
- [ ] Le repository GitHub est public et accessible

**Questions pour la fiche d'autoévaluation** :
- "Quelle est la compétence que tu as le plus travaillée ?"
- "Qu'est-ce qui t'a posé le plus de difficultés ?"
- "Quelle est la partie dont tu es le plus fier ?"

## Stratégies d'accompagnement par profil

### Étudiant autonome

**Profil** : Avance rapidement, pose peu de questions, livre un code de qualité.

**Approche** :
- Validez régulièrement mais laissez-le travailler seul
- Challengez-le sur l'architecture : "Pourquoi as-tu choisi cette approche ?"
- Proposez des améliorations optionnelles (tests, animations, filtres)
- Encouragez la créativité dans le design

### Étudiant en difficulté technique

**Profil** : Bloqué sur des concepts React, TypeScript ou architecture.

**Approche** :
- Identifiez les lacunes : "Peux-tu m'expliquer ce qu'est un Hook ?"
- Renvoyez vers les cours OpenClassrooms appropriés
- Faites des exemples simples avant de revenir au projet
- Décomposez les étapes en sous-tâches plus petites
- Encouragez la pratique : "Essaie de créer un composant simple avant"

### Étudiant découragé

**Profil** : Pense que c'est trop difficile, manque de confiance.

**Approche** :
- Valorisez chaque petite victoire : "Tu as réussi à afficher le graphique, c'est super !"
- Rappelez que c'est normal de bloquer : "Tout le monde passe par là"
- Montrez que vous êtes là pour aider : "On va y arriver ensemble"
- Fractionnez le travail : "Concentre-toi juste sur cette étape aujourd'hui"
- Rassurez sur le temps : "Tu as encore X jours, c'est largement faisable"

### Étudiant qui va trop vite

**Profil** : Livre rapidement mais code de mauvaise qualité ou incomplet.

**Approche** :
- Ralentissez-le : "Prenons le temps de regarder ton code ensemble"
- Posez des questions : "Pourquoi as-tu fait comme ça ?"
- Pointez les problèmes : "Et si l'utilisateur entre un ID invalide, que se passe-t-il ?"
- Insistez sur les bonnes pratiques : "Peux-tu typer cette variable ?"
- Encouragez la relecture : "Relis ton code comme si c'était celui d'un collègue"

## Problèmes fréquents et solutions

### Problème 1 : "Je ne comprends pas les Custom Hooks"

**Symptôme** : L'étudiant met la logique dans les composants, pas dans un hook.

**Solution** :
1. Expliquez le concept : "Un Hook, c'est comme une fonction qui retourne des données et des fonctions"
2. Montrez un exemple simple :
   ```typescript
   const useCounter = () => {
     const [count, setCount] = useState(0);
     const increment = () => setCount(count + 1);
     return { count, increment };
   };
   ```
3. Demandez-lui de créer un hook similaire pour les données olympiques

**Ressource** : Cours OpenClassrooms "Débutez avec React", Partie 5, Chapitre "Partagez de la logique avec les Custom Hooks"

### Problème 2 : "TypeScript me bloque avec des erreurs"

**Symptôme** : L'étudiant met `any` partout pour éviter les erreurs.

**Solution** :
1. Expliquez que `any` = désactiver TypeScript
2. Montrez comment créer une interface :
   ```typescript
   interface Props {
     label: string;
     value: number;
   }
   ```
3. Demandez-lui de typer une variable ensemble
4. Rappelez que TypeScript aide à éviter les bugs

**Ressource** : TypeScript Handbook - Interfaces

### Problème 3 : "Mon graphique ne s'affiche pas"

**Symptôme** : Le graphique Recharts reste vide.

**Solution** :
1. Vérifiez que les données sont bien récupérées : `console.log(data)`
2. Vérifiez le format des données : Recharts attend `{ name: string, value: number }`
3. Vérifiez que ResponsiveContainer a une hauteur : `height={400}`
4. Vérifiez que le dataKey correspond aux données : `dataKey="value"`

### Problème 4 : "La navigation ne fonctionne pas"

**Symptôme** : Le clic sur un pays ne redirige pas.

**Solution** :
1. Vérifiez que `useNavigate` est importé : `import { useNavigate } from 'react-router-dom'`
2. Vérifiez que la fonction `handleClick` est appelée : `onClick={handleClick}`
3. Vérifiez que l'ID est passé : `navigate(\`/country/\${id}\`)`
4. Vérifiez que la route existe dans `App.tsx` : `<Route path="/country/:id" ... />`

### Problème 5 : "Le projet ne démarre pas"

**Symptôme** : Erreur au lancement de `npm run dev`.

**Solution** :
1. Vérifiez Node.js version : `node -v` (doit être >= 18)
2. Supprimez `node_modules` et `package-lock.json`, puis : `npm install`
3. Vérifiez qu'il n'y a pas d'erreur de syntaxe dans les fichiers
4. Lisez attentivement le message d'erreur

### Problème 6 : "Je ne sais pas comment gérer les erreurs"

**Symptôme** : L'application plante si l'ID est invalide.

**Solution** :
1. Expliquez les cas limites : "Que se passe-t-il si l'utilisateur tape `/country/999` ?"
2. Montrez comment vérifier l'existence : `if (!country) { navigate('/not-found') }`
3. Insistez sur l'importance de la gestion d'erreurs pour l'UX

## Critères d'évaluation

### Exercice 1 : Refactorisation

**Critères obligatoires** :
- ✅ Architecture claire avec dossiers `components/`, `hooks/`, `models/`, `pages/`
- ✅ Custom Hook `useOlympicData` créé et fonctionnel
- ✅ Interfaces TypeScript définies
- ✅ Composants réutilisables créés
- ✅ Fichier `ARCHITECTURE.md` présent

**Critères de qualité** :
- TypeScript strict (pas de `any`)
- Code modulaire et réutilisable
- Composants bien nommés
- Documentation claire

### Exercice 2 : Implémentation UI

**Critères obligatoires** :
- ✅ Dashboard avec graphique interactif
- ✅ Page détail avec stats et graphique d'évolution
- ✅ Navigation fluide entre pages
- ✅ Page 404 pour routes invalides
- ✅ Design responsive
- ✅ README.md complet sur GitHub

**Critères de qualité** :
- Gestion des états (loading, error)
- Code propre (pas de console.log)
- Bouton retour fonctionnel
- URL invalides gérées

## Conseils pratiques

### Avant la session

1. Lisez le CORRIGE.md pour connaître la solution de référence
2. Clonez le repository de l'étudiant
3. Testez l'application en local
4. Notez les points positifs et les points à améliorer

### Pendant la session

1. Commencez par féliciter l'étudiant pour son travail
2. Demandez-lui de vous faire une démo
3. Posez des questions pour comprendre ses choix
4. Pointez les problèmes sans donner la solution immédiatement
5. Encouragez-le à chercher dans la documentation
6. Donnez des indices progressifs si besoin

### Après la session

1. Envoyez un résumé par email :
   - Points positifs
   - Points à améliorer
   - Ressources recommandées
   - Prochaines étapes
2. Encouragez l'étudiant à continuer
3. Fixez la prochaine session si nécessaire

## Ressources pour les mentors

### Documentation officielle

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Cours OpenClassrooms recommandés

- "Débutez avec React"
- "Utilisez des design patterns en JavaScript"
- "Devenez un expert de Git et GitHub"

### Outils utiles

- **React DevTools** : Extension Chrome/Firefox pour déboguer React
- **VS Code** : IDE recommandé avec extension TypeScript
- **Chrome DevTools** : Pour tester le responsive

## FAQ Mentors

### Q : Combien de temps dois-je accorder à un étudiant bloqué ?

**R** : Maximum 30-45 minutes sur un problème spécifique. Si ça ne débloque pas, orientez-le vers les cours, la documentation ou proposez une nouvelle session.

### Q : L'étudiant a copié-collé du code d'Internet, que faire ?

**R** : Demandez-lui d'expliquer le code ligne par ligne. S'il ne sait pas, demandez-lui de le refaire lui-même. Insistez sur l'importance de comprendre plutôt que copier.

### Q : L'étudiant n'a pas terminé dans les temps, que faire ?

**R** : Évaluez le travail réalisé. Si la majeure partie est faite et de qualité, validez. Sinon, donnez un délai supplémentaire raisonnable (1-2 semaines max).

### Q : Le design ne ressemble pas aux maquettes, est-ce grave ?

**R** : Non. Le projet indique "grosso modo". L'important est que l'application soit fonctionnelle et responsive, pas qu'elle soit pixel-perfect.

### Q : L'étudiant veut ajouter des fonctionnalités non demandées, dois-je l'encourager ?

**R** : Seulement s'il a fini tous les critères obligatoires. Sinon, rappelez-lui de se concentrer sur les attendus avant d'ajouter des bonus.

### Q : Comment évaluer la qualité du code ?

**R** : Utilisez la grille d'évaluation du CORRIGE.md. Les critères clés : architecture claire, TypeScript strict, code modulaire, gestion d'erreurs, responsive.

---

**Bon mentorat !**
