# Page d'acceuil

# **Page d’accueil – Nouvelle version**

### **Qu’allez-vous apprendre dans ce projet ?**

Vous avez déjà des connaissances basiques du développement front-end, et vous savez concevoir au moins des interfaces web simples.

*\#info* Pour relire les fondamentaux de programmation front-end si nécessaire, vous pouvez réviser ces cours OpenClassrooms :

1. \[PLACEHOLDER COURS\]  
2. \[PLACEHOLDER COURS\]

Dans ce projet, vous plongez dans le cœur du développement front-end en utilisant la bibliothèque **React 19** et le langage **TypeScript** pour créer des applications web dynamiques et interactives.

Vous serez amené à :

* **améliorer un code existant** à l’aide des bonnes pratiques **React** ;  
* structurer une **architecture front-end claire et évolutive** ;  
* **développer une interface** professionnelle à partir de maquettes ;  
* gérer la **navigation et les erreurs** dans une application **React** ;  
* préparer le terrain pour l’intégration back-end via une API (dans le projet suivant).

En plus, vous allez intégrer des bonnes pratiques de versionnage avec Git et GitHub pour le suivi des modifications et la collaboration, et d’utilisation efficace d’un environnement de développement (IDE) comme VSCode.

### **En quoi ces compétences sont-elles importantes pour votre carrière ?**

Ces compétences front-end sont essentielles pour tout développeur souhaitant évoluer vers des projets professionnels de plus grande envergure. **React** est utilisé par de nombreuses entreprises pour concevoir des applications complexes et maintenables. Le maîtriser vous positionne comme un développeur polyvalent recherché.

Les recruteurs attendent des développeurs full-stack qu’ils soient capables de :

* **structurer leur code avec des composants réutilisables** ;  
* respecter les **design patterns** et bonnes pratiques de la bibliothèque ;  
* gérer la **navigation, l’architecture** et la **maintenabilité** dans des projets réels ;  
* intégrer efficacement les **custom hooks** et les **données**.

D’ailleurs, **Git & GitHub** sont des incontournables pour le travail collaboratif et la gestion de version du code.

### **Comment allez-vous procéder ?**

Ce projet est découpé en 4 activités.

* **Cours** : Vous suivrez le cours \[PLACEHOLDER COURS\] pour vous permettre de comprendre les design patterns utiles pour modéliser le front-end d’une application.  
* **Exercice – Réfactorisez l’architecture front-end existante** : vous analyserez un code starter **React** fonctionnel mais mal structuré d’une application web interactive pour une chaîne de télévision. Vous en définirez une architecture propre, adaptée et scalable.  
* **Cours** : Vous suivrez le cours \[PLACEHOLDER COURS\] pour vous permettre de comprendre les bases du code front-end en **React**.  
* **Exercice – Implémentez des nouvelles fonctionnalités dans l’interface utilisateur avec React** : vous construirez une interface complète pour l’application déjà restructurisée à partir des spécifications fonctionnelles, en respectant les bonnes pratiques de **React**.

Vous terminerez chaque exercice en complétant la fiche d’autoévaluation qui servira de base de discussion et de bilan avec votre mentor.

À l’issue de ce projet, vous aurez une **session de bilan** avec votre mentor pour discuter de votre projet.

Cela vous assurera que vous êtes sur la bonne voie avant de passer à la suite.

**Prêt à démarrer votre projet ?** Lancez-vous dans la première section Cours \- \[PLACEHOLDER COURS\].

Votre projet démarre : suivez ces quelques recommandations pour être plus efficace \!

* **Coupez** dès à présent toutes les sources de distraction : téléphone, messagerie, mails, notifications, etc.  
* **Évitez** les situations de multi tâches : n’écoutez pas un podcast ou les informations en travaillant.  
* **Préparez** votre environnement de travail : onglets, documents téléchargés, raccourcis, etc.

Vous avez toutes les cartes en main, c’est parti \!

Pour plus de conseils, suivez ce chapitre de cours : \[PLACEHOLDER COURS\].

# Exercice 1

Prêt à résoudre l’exercice ?

Dans cet exercice, vous plongerez dans un projet **React** d’entreprise à travers une application web en cours de développement pour **TéléSport**, une chaîne de télévision nationale.

TéléSport souhaite publier une page dédiée à l’historique des Jeux Olympiques, avec un tableau interactif affichant les performances des pays.

Mais le code de départ (\[codebase a générer\]) est **mal structuré**, difficile à maintenir et loin des standards professionnels. C’est ici que vous intervenez \!

Votre responsable Jeannette vous donnez les spécifications pour améliorer le code : (voir fichier assets.md)

\#NOTE : à déterminer si on pourra utiliser des parties de ce vidéo → \[PLACEHOLDER ASSETS\] . Ce serait dommage si on ne pourra pas du tout l’utiliser, mais je pense qu’on devrait éditer la vidéo afin de ne garder que les parties toujours pertinentes.

En somme, votre mission consiste à :

* **analyser le starter code existant** ;  
* **identifier les problèmes techniques et structurels** ;  
* et **concevoir une architecture front-end claire, modulaire et scalable**, prête à accueillir les développements de l’interface dans le prochain exercice.

*\#info* Si vous avez besoin de remettre à niveau en Git et GitHub, vous pouvez suivre le cours \[PLACEHOLDER COURS\]. Si vous avez déjà ce niveau d'expérience en Git \+ GitHub, vous pouvez le laisser.

Cet exercice est entièrement guidé. Vous pouvez suivre les étapes ci-dessous.

Étapes

### **Étape 1 – ​​Analysez le code existant et repérez les problèmes**

Vous allez explorer le starter code fourni et repérer les mauvaises pratiques **React**, les risques de dette technique et les violations de lisibilité. Cette étape est cruciale pour comprendre ce qui doit être amélioré dans le projet.

**Prérequis** Avoir :

* lu et compris la demande de Jeannette (votre manager chez TéléSport)  
* cloné et ouvert le starter code dans votre environnement de travail  
* lancé l’application avec `npm run dev` pour confirmer qu’elle démarre.

**Résultat attendu**

* Une liste structurée des problèmes identifiés, accompagnée de commentaires personnels, sauvegardée dans un fichier [`notes-architecture.md`](https://www.google.com/search?q=%5Bhttp://notes-architecture.md%5D\(http://notes-architecture.md\))

**Recommandations**

* D’abord, lancez l’application (`npm run dev`) et explorez son rendu.  
* Prenez le temps d’ouvrir chaque fichier et de repérer les éléments confus ou problématiques. Ouvrez `src` et repérez :  
  * des fichiers trop volumineux,  
  * du code dupliqué ou obsolète,  
  * des appels HTTP dans les composants,  
  * l’absence de typage strict (`any`),  
  * les bouts de code à supprimer (console.log par exemple)  
  * la mauvaise gestion des **Side Effects (useEffect)**  
* Vérifiez si des **données sont gérées directement dans un composant** → notez-le comme anti-pattern.  
* Repérez des fichiers mal placés (ex. un hook dans `components`).  
* Rédigez vos observations dans un fichier `notes-architecture.md`.  
  * Ce fichier sera un sous-livrable inclut dans votre répository GitHub

**Points de vigilance**

* Même si ici les données proviennent d’un tableau statique, rappelez-vous que dans un vrai projet, elles viendraient d’une API back-end.  
  * Vous préparez donc déjà le terrain pour faire du code front-end qui va interagir avec une API aux projets suivants.  
* Ne modifiez pas encore le code à cette étape.  
* N’arrêtez-vous pas seulement à la structure des fichiers : regardez aussi le contenu logique.  
* Vérifiez le comportement visuel (même si c’est encore simple).

**Outils**

* VS Code  
* Vite (`npm run dev`, `eslint`)  
* Bloc-notes ou Markdown (pour le fichier `notes-architecture.md`)

**Ressources**

* Dans le cours \[PLACEHOLDER COURS\], le chapitre \[PLACEHOLDER COURS\] dans la partie 1\.  
* Dans le cours \[PLACEHOLDER COURS\] :  
  * le chapitre *\[PLACEHOLDER COURS\]* dans la partie 1\.  
  * le chapitre *\[PLACEHOLDER COURS\]* dans la partie 2\.  
* [React Style Guide](https://www.google.com/search?q=https://react.dev/learn)

### **Étape 2 –​ Concevez une nouvelle architecture adaptée**

Vous allez proposer une organisation plus claire et évolutive du code, en vous basant sur des principes de design patterns. Vous réorganisez la structure de dossiers et de fichiers de l’application pour respecter une architecture **React** claire. Cette architecture guidera toutes vos prochaines implémentations.

**Prérequis**

Avoir :

* exploré et analysé le starter code  
* dressé la liste des problèmes identifiés dans `notes-architecture.md`.

**Résultat attendu**

* Un schéma simple ou même une liste décrivant la nouvelle structure du front-end, accompagné d’explications dans `notes-architecture.md`.

**Recommandations**

* Démarrez par identifier les blocs logiques et par créer un plan de composants, **hooks** et fichiers de types `models, pages`, etc.  
* Puis proposez une arborescence comme ci-dessous : `src/`  
  `├── components/` `├── pages/` `├── hooks/` `├── models/`  
* Déplacez virtuellement (c’est-à-dire, dans vos notes) les fichiers vers la bonne catégorie.  
* Choisissez les patterns adaptés à votre besoin (**Custom Hooks** pour la logique, séparation component/hook, etc.) et indiquez comment cela va améliorer le projet.  
  * Notez comment cette organisation faciliterait l’intégration future d’un back-end (les hooks deviennent des points de contact avec l’API).  
* Ajoutez ce schéma dans votre fichier `notes-architecture.md`.

**Points de vigilance**

* Prévoyez que tous les accès aux données passent par un dossier `hooks/`.  
  * Dans ce projet, les réponses du backend seront mockées dans des fichiers JSON, mais dans les prochains projets, ce sera une **API REST réelle**.  
* Ne refactoriser pas encore le code : contentez-vous de préparer la nouvelle structure.  
* Évitez de sur-complexifier la structure ou de multiplier inutilement les sous-dossiers : la clarté prime.  
* Ne copiez pas une architecture sans lien avec le projet.

**Outils**

* Outils de schéma, comme draw.io, Whimsical, Figma  
* VS Code

**Ressources**

* Dans le cours \[PLACEHOLDER COURS\], le chapitre \[PLACEHOLDER COURS\] dans la partie 2\.  
* Le cours \[PLACEHOLDER COURS\], dans la Partie 5 :  
  * le chapitre *\[PLACEHOLDER COURS\]*  
  * le chapitre *\[PLACEHOLDER COURS\]*  
* [React Hooks Documentation](https://www.google.com/search?q=https://react.dev/reference/react)

### **Étape 3 – Refactorez les composants existants en appliquant l’architecture**

Vous allez restructurer le projet en suivant votre plan. Vous appliquerez l’architecture définie lors de l’étape précédente en créant les bons composants, en séparant les responsabilités, et en typant correctement les données.

**Prérequis**

Avoir :

* conçu votre nouvelle structure d’architecture (et la valider si vous avez des doutes)  
* identifié les composants et hooks à créer ou modifier

**Résultat attendu**

* Une nouvelle base **React** propre et modulaire, avec des **Functional Components** spécialisés, chacun dans son fichier dédié (`.tsx`), compilable et prête pour les développements.

**Recommandations**

* Commencez par identifier un gros composant dans le starter code.  
  * Découpez-le en composants enfants (par exemple : `MedalChart`, `CountryCard`).  
* Refactoriser le reste du code :  
  * Déplacez les fichiers dans les bons dossiers (`components/` ou `pages/`).  
  * Déplacez les appels API dans un **Custom Hook**,  
  * Créez manuellement les fichiers (`.tsx`, `.ts`).  
  * Créez des interfaces pour typer les données,  
  * Nettoyez les composants.  
* Testez au fur et à mesure avec `npm run dev` pour vérifier que l’application compile après vos changements.  
* Ajoutez un commit Git clair : *Refactor: séparation des composants*.

**Points de vigilance**

* Vérifiez le **nom** des composants enfants après refactor.  
* Mettez à jour les imports dans `App.tsx` (ou le fichier principal).  
* Ne laissez pas de code orphelin (console.log, variables inutilisées).  
* Ne supprimez ni renommez les fichiers sans mettre à jour les imports  
* Typez votre code (aucun `any` ne doit subsister)  
* Gardez en tête pour le futur l’importance de découper les composants : ceci permettra d’afficher des données venues d’un **back-end**, sans que tout repose sur un seul fichier.

**Outils**

* Vite / Node (`npm run dev`, `eslint`)  
* VS Code  
* Git & GitHub

**Ressources**

* Dans le cours \[PLACEHOLDER COURS\], le chapitre \[PLACEHOLDER COURS\] dans la partie 3\.  
* Dans le cours \[PLACEHOLDER COURS\], partie 2 :  
  * le chapitre *\[PLACEHOLDER COURS\]*  
  * le chapitre *\[PLACEHOLDER COURS\]*  
* [Vite Documentation](https://www.google.com/search?q=https://vitejs.dev/guide/)

---

### **Étape 4 – Externalisez la gestion des données dans un Custom Hook**

Déplacez la logique de données (tableaux, JSON) des composants vers un **Custom Hook**.

**Prérequis** Avoir :

* refactoré les composants  
* identifié où les données étaient codées en dur.

**Résultat attendu**

* Un hook `useData` unique gérant les données, importé dans les composants.

**Recommandations pas à pas**

* D’abord, créez un hook dans le dossier hooks : `src/hooks/useData.ts`.  
* Déplacez-y le tableau statique des pays/médailles.  
* Importez et utilisez ce hook dans vos composants.  
* Testez que l’application fonctionne toujours.  
  * Pour ce projet, il s’agit de tests faits à la main ; aucun test automatisé n’est attendu.  
* Committez avec un message clair, comme *Refactor: centralisation des données dans useData*.

**Points de vigilance**

* Ne laissez aucun tableau en dur dans les composants.  
* Vérifiez que le hook est bien exporté.  
* Testez l’affichage du dashboard et de la page détail.  
* Même si dans ce projet, votre `useData` retourne un tableau statique, mais dans des projets futurs, il pointera vers une **API REST** pour récupérer des données réelles.

**Outils**

* Vite / Node  
* VS Code  
* Git & GitHub

**Ressources**

* Dans le cours \[PLACEHOLDER COURS\], la partie 2, le chapitre \[PLACEHOLDER COURS\]  
* Dans le cours \[PLACEHOLDER COURS\], Partie 5, le chapitre \[PLACEHOLDER COURS\]

---

### **Étape 5 – Documentez l’architecture et validez-la**

Rédigez une documentation simple de votre nouvelle architecture front-end. Si vous n’êtes pas assez confiant, validez-la avec votre mentor avant de passer à l’implémentation UI lors de l’exercice prochain.

**Prérequis** Avoir :

* externalisé les données dans un hook ;  
* testé à la main l’application refactorée.

**Résultat attendu**

* Un fichier `ARCHITECTURE.md` décrivant la structure, les composants, et l’usage du hook.

**Recommandations pas à pas**

* Dans `ARCHITECTURE.md`, décrivez :  
  * l’arborescence des dossiers ;  
  * les composants et leurs rôles ;  
  * le Custom Hook et son rôle.  
* Vous pouvez utiliser vos notes dans le fichier `notes-architecture.md` pour servir comme base de texte du fichier `ARCHITECTURE.md`.  
* Mentionnez comment cette architecture prépare à une future connexion back-end/API.  
* Relisez-vous : si un nouveau développeur arrive, doit-il comprendre votre projet ?  
* Committez votre fichier.

**Points de vigilance**

* Ne recopiez pas tout le code : restez synthétique.  
* Vérifiez la cohérence entre vos notes, votre code, et la doc.

**Outils**

* VS Code (Markdown)  
* Git & GitHub

**Ressources**

* Dans le cours \[PLACEHOLDER COURS\], Partie 4, le chapitre \[PLACEHOLDER COURS\]  
* Dans le cours \[PLACEHOLDER COURS\], Partie 5, le chapitre \[PLACEHOLDER COURS\]

*⬇️* Vérifiez votre travail et faites le point avec votre mentor

Pour vérifier que vous n’avez rien oublié dans la réalisation de votre exercice, téléchargez et complétez la fiche d’autoévaluation \[PLACEHOLDER ASSETS\]

Parlez-en avec votre mentor durant votre dernière session de mentorat.

# Exercice 2

Prêt à résoudre l’exercice ?

Dans cet exercice, vous allez poursuivre votre travail sur le projet **TéléSport** en suivant les spécifications techniques fournies par votre responsable, Jeannette : \[PLACEHOLDER ASSETS\]

Après avoir défini une architecture claire, vous êtes désormais chargé·e d’**implémenter l’interface complète** avec **React 19**. Cette interface permettra aux utilisateurs de visualiser les médailles olympiques et d’interagir avec les données.

Votre objectif est de rendre l’application **fonctionnelle, responsive et maintenable** :

* intégrer les **maquettes fournies des deux pages** en composants **React** :  
  * un **dashboard** affichant le nombre de médailles par pays ;  
  * une **page détail** présentant les statistiques d’un pays sélectionné ;  
* assurer la qualité **de l’expérience utilisateur** :  
  * la **navigation fluide** entre les pages (SPA) ;  
  * la **responsivité** sur différents appareils ;  
* et gérer les **cas d’erreur** côté front.

Cet exercice est entièrement guidé. Vous pouvez suivre les étapes ci-dessous.

---

### **Étape 1 – Améliorez le dashboard existant**

Vous commencez par construire le dashboard **React** fonctionnel à partir des maquettes, en utilisant les composants structurés que vous avez définis précédemment.

**Prérequis**

* avoir mis en place l’architecture front-end dans l’exercice précédent  
* avoir lu à nouveau les spécifications techniques

**Résultat attendu**

* Un dashboard responsive qui affiche correctement :  
  * un texte introductif  
  * un graphique interactif avec les données prévues  
  * une redirection vers la page détail lorsqu’on clique sur un pays

**Recommandations**

* D’abord, améliorez le composant `Home` dans `pages/`.  
  * Importez le hook `useData` (créé lors de l’exercice 1\) pour récupérer la liste des pays et leurs médailles.  
* Utilisez **Chart.js** (ou une librairie React compatible comme `react-chartjs-2`) pour affiner le pie chart.  
* Ajoutez un événement `onClick` sur les segments du graphique → navigation vers `/country/:id` via `useNavigate`.  
* Créez un composant réutilisable dans `components/` qui affiche :  
  * le titre de la page  
  * les indicateurs/statistiques en tête de page.  
  * Utilisez `.map()` pour itérer et afficher la liste des indicateurs.  
* Réutilisez ce composant dans la page `Home`.

**Points de vigilance**

* Ne mettez pas de logique métier complexe dans le JSX (préférez les Hooks).  
* N'utilisez pas `any` pour les types TypeScript.  
* Testez la lisibilité sur mobile.  
* Gérez correctement le cycle de vie du graphique (nettoyage dans `useEffect` si nécessaire).

**Outils**

* VS Code  
* Vite (`npm run dev`)  
* Chart.js

**Ressources**

* Le cours \[PLACEHOLDER COURS\] – Partie sur les listes et les événements.  
* [React Router Documentation](https://www.google.com/search?q=https://reactrouter.com/)

---

### **Étape 2 – Améliorez la page détail et ajoutez la navigation**

Vous allez améliorer la page de détail qui affiche les informations d’un pays et l’évolution de ses performances. Vous assurerez la navigation entre le dashboard et cette page via **React Router**.

**Prérequis**

* avoir développé le dashboard principal  
* avoir identifié les données à afficher par pays

**Résultat attendu**

* Une page de détail responsive affichant :  
  * les infos clés (participations, médailles, athlètes)  
  * un graphique d’évolution.  
* Une navigation fluide sans rechargement de page.

**Recommandations**

* Améliorez le composant `Country` dans `pages/`.  
* Utilisez le hook `useParams` de `react-router-dom` pour récupérer l’ID du pays depuis l'URL.  
* Utilisez votre hook `useData` pour trouver le pays correspondant à cet ID.  
* Réutilisez le composant d'indicateurs développé précédemment.  
* Vérifiez la navigation :  
  * Le clic sur le dashboard mène à la bonne page.  
  * Ajoutez un lien ou bouton "Retour" vers le dashboard (`<Link to="/">`).  
* Gérez les cas d'erreurs : ID inexistant ou données introuvables.

**Points de vigilance**

* Testez la navigation comme un utilisateur final.  
* Ne dupliquez pas la logique de récupération de données (tout doit venir du hook `useData`).

**Outils**

* React Router (`react-router-dom`)  
* React DevTools

**Ressources**

* Le cours \[PLACEHOLDER COURS\] – Partie sur le Routing.  
* [React Router Hooks](https://www.google.com/search?q=https://reactrouter.com/en/main/hooks/use-params)

---

### **Étape 3 – Gérez les erreurs de navigation et d’affichage**

Sécurisez votre application en gérant les erreurs : mauvaise URL, pays inexistant, etc.

**Prérequis**

* avoir mis en place la navigation  
* avoir simulé les données

**Résultat attendu**

* Une page d’erreur (404) explicite s'affiche en cas de problème.

**Recommandations**

* Ajoutez une route générique `path="*"` dans votre configuration de routing (ex: dans `App.tsx` ou `main.tsx`) pour capter les URLs inconnues.  
* Créez un composant `NotFound`.  
* Dans la page détail, si l'ID ne correspond à aucun pays, redirigez vers cette page d'erreur (via `Maps` ou `useEffect`).

**Points de vigilance**

* Ne laissez jamais l'utilisateur sur un écran vide (page blanche).  
* N'affichez pas d'erreurs techniques brutes à l'utilisateur.

**Outils**

* React Router

**Ressources**

* Le cours \[PLACEHOLDER COURS\] – Gestion des routes 404\.

---

### **Étape 4 – Finalisez l’application et documentez-la sur GitHub**

Testez l’ensemble de votre application **React** et vérifiez la gestion des erreurs. Assurez-vous que l’application est responsive et suit les bonnes pratiques.

**Prérequis**

* avoir terminé les fonctionnalités  
* avoir validé le fonctionnement desktop/mobile

**Résultat attendu**

* Un dépôt GitHub propre, public, contenant le code final.  
* Un fichier `README.md` complet.  
* Captures d’écran de l'UI (desktop et mobile).

**Recommandations**

* Vérifiez le parcours complet : Dashboard → Détail → Retour.  
* Testez la responsivité via les DevTools.  
* Nettoyez le code : supprimez les fichiers non utilisés, les `console.log` et les types `any`.  
* Organisez le `README.md` : instructions d'installation (`npm install`, `npm run dev`), structure du projet, choix techniques.

**Points de vigilance**

* L'objectif est le bon fonctionnement et la prise en main de **React** et **TypeScript**, pas le "pixel perfect".  
* Le dépôt doit être propre (pas de code mort).  
* Indiquez les prérequis (Node.js, Vite).

**Outils**

* Git & GitHub  
* VS Code

**Ressources**

* Le cours \[PLACEHOLDER COURS\] – Devenez un expert de Git & GitHub.  
* [Vite Guide](https://www.google.com/search?q=https://vitejs.dev/guide/)

---

*⬇️ Toggle.* Vérifiez votre travail et faites le point avec votre mentor

Pour vérifier que vous n’avez rien oublié, téléchargez et complétez la fiche d’autoévaluation \[PLACEHOLDER ASSETS\].

Parlez-en avec votre mentor durant votre dernière session de mentorat.

