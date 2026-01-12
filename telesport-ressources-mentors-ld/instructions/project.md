## **(Section) “Exercice \- Réfactorisez l'architecture front-end existante”**

Conseils mentor  
250 mots max. Mots importants en gras.  
L’étudiant peut potentiellement réaliser cet exercice en quelques heures, sans même une session de mentorat.

Cependant, s’il a des difficultés pendant l'exercice et que vous avez une session de mentorat, demandez-lui de vous parler de :  
son avancement ;  
ses difficultés ;  
sa compréhension de l’exercice.  
Vous pourrez ainsi identifier ses problèmes, ses lacunes, ses processus ou méthodologies erronés.  
**Compréhension des attendus**

Assurez-vous que l’étudiant puisse répondre à ces questions : Que doivent contenir les livrables ? À quoi ressembleront-ils ? Quel est le niveau de précision attendu ?

**Lacunes récurrentes**

Si vous sentez que votre étudiant n’est pas à l’aise avec la modélisation (fichier d’organisation des composants, **Custom Hooks**, structure de dossier, etc.), n’hésitez pas à lui conseiller de revoir les parties de Creational et Structural Design patterns du cours OpenClassrooms *Utilisez des design patterns en JavaScript* avant d’aller plus loin et de vous faire un résumé oral.

**Méthodologie**

Encouragez votre étudiant à bien explorer le starter code. A-t-il bien identifié les mauvaises pratiques dans le code fourni ? Peut-il expliquer pourquoi elles posent problème (maintenabilité, duplication, mauvaise séparation) ?

**Points de vigilance**

Mettez l'accent sur l'importance d’architecture modulaire, Custom Hooks React, et design patterns. Assurez-vous qu’il sache :  
ce que doit contenir l’architecture front-end,  
pourquoi un refactoring est nécessaire,  
comment la nouvelle structure va favoriser la maintenabilité.  
Voici les documents qui vous aideront à faire un bilan avec l’étudiant :  
sa fiche d’autoévaluation P2 FSJA \- Fiche d'auto-évaluation  
Elle permet de faire le point sur ce que l'étudiant a appris. Il la complète seul et en discute avec vous.  
À ce stade, ne partagez pas encore les corrigés du document rédigé ni du code avec votre étudiant.

### ---

**Prêt à résoudre l’exercice ?**

Dans cet exercice, vous plongerez dans un projet React d’entreprise à travers une application web en cours de développement pour TéléSport, une chaîne de télévision nationale.  
TéléSport souhaite publier une page dédiée à l’historique des Jeux Olympiques, avec un tableau interactif affichant les performances des pays.  
Mais le code de départ codebase à générée) est mal structuré, difficile à maintenir et loin des standards professionnels. C’est ici que vous intervenez \!  
Votre responsable Jeannette vous donne les spécifications pour améliorer le code : (@assets.md)

En somme, votre mission consiste à :  
analyser le starter code existant ;  
identifier les problèmes techniques et structurels ;  
et concevoir une architecture front-end claire, modulaire et scalable, prête à accueillir les développements de l’interface dans le prochain exercice.  
\#info Si vous avez besoin de remettre à niveau en Git et GitHub, vous pouvez suivre le cours OpenClassrooms Devenez un expert de Git et GitHub. Si vous avez déjà ce niveau d'expérience en Git \+ GitHub, vous pouvez le laisser.  
Cet exercice est entièrement guidé.  
Vous pouvez suivre les étapes ci-dessous.

### **Étapes**

#### **Étape 1 – ​​Analysez le code existant et repérez les problèmes**

Vous allez explorer le starter code fourni et repérer les mauvaises pratiques **React**, les risques de dette technique et les violations de lisibilité. Cette étape est cruciale pour comprendre ce qui doit être amélioré dans le projet.

Prérequis  
Avoir :  
lu et compris la demande de Jeannette (votre manager chez TéléSport)  
cloné et ouvert le starter code dans votre environnement de travail  
lancé l’application avec npm run dev pour confirmer qu’elle démarre.  
Résultat attendu  
Une liste structurée des problèmes identifiés, accompagnée de commentaires personnels, sauvegardée dans un fichier notes-architecture.md  
Recommandations  
D’abord, lancez l’application (npm run dev) et explorez son rendu.  
Prenez le temps d’ouvrir chaque fichier et de repérer les éléments confus ou problématiques. Ouvrez src et repérez :  
des fichiers trop volumineux,  
du code dupliqué ou obsolète,  
des appels HTTP directement dans les composants (sans Hooks),  
l’absence de typage strict (any),  
les bouts de code à supprimer (console.log par exemple)  
la mauvaise gestion des useEffect  
Vérifiez si des données sont gérées directement dans un composant → notez-le comme anti-pattern.  
Repérez des fichiers mal placés (ex. un hook dans components).  
Rédigez vos observations dans un fichier notes-architecture.md.  
Ce fichier sera un sous-livrable inclut dans votre répository GitHub  
Points de vigilance  
Même si ici les données proviennent d’un tableau statique, rappelez-vous que dans un vrai projet, elles viendraient d’une API back-end.  
Vous préparez donc déjà le terrain pour faire du code front-end qui va interagir avec une API aux projets suivants.  
Ne modifiez pas encore le code à cette étape.  
N’arrêtez-vous pas seulement à la structure des fichiers : regardez aussi le contenu logique.  
Vérifiez le comportement visuel (même si c’est encore simple).  
Outils  
VS Code  
Vite / Node (npm run dev, eslint)  
Bloc-notes ou Markdown (pour le fichier notes-architecture.md)  
Ressources  
Dans le cours Utilisez des design patterns en JavaScript, le chapitre Initiez-vous aux design patterns dans la partie 1\.  
Dans le cours Débutez avec React :  
le chapitre Créez une application React avec Vite dans la partie 1\.  
le chapitre Créez votre premier composant dans la partie 2\.  
React Style Guide / Best Practices

#### **Étape 2 –​ Concevez une nouvelle architecture adaptée**

Vous allez proposer une organisation plus claire et évolutive du code, en vous basant sur des principes de design patterns. Vous réorganisez la structure de dossiers et de fichiers de l’application pour respecter une architecture **React** claire. Cette architecture guidera toutes vos prochaines implémentations.

Prérequis  
Avoir :  
exploré et analysé le starter code  
dressé la liste des problèmes identifiés dans notes-architecture.md.  
Résultat attendu  
Un schéma simple ou même une liste décrivant la nouvelle structure du front-end, accompagné d’explications dans notes-architecture.md.  
Recommandations  
Démarrez par identifier les blocs logiques et par créer un plan de composants, hooks et fichiers de types interface, page, etc.  
Puis proposez une arborescence comme ci-dessous :  
src/  
├── components/  
├── pages/  
├── hooks/ (ou services/)  
├── types/  
Déplacez virtuellement (c’est-à-dire, dans vos notes) les fichiers vers la bonne catégorie.  
Choisissez les patterns adaptés à votre besoin (Custom Hooks pour la logique partagée, séparation container/presentational, etc.) et indiquez comment cela va améliorer le projet.  
Notez comment cette organisation faciliterait l’intégration future d’un back-end (les hooks deviennent des points de contact avec l’API).  
Ajoutez ce schéma dans votre fichier notes-architecture.md.  
Points de vigilance  
Prévoyez que tous les accès aux données passent par un dossier hooks/ ou services/.  
Dans ce projet, les réponses du backend seront mockées dans des fichiers JSON, mais dans les prochains projets, ce sera une API REST réelle.  
Ne refactoriser pas encore le code : contentez-vous de préparer la nouvelle structure.  
Évitez de sur-complexifier la structure ou de multiplier inutilement les sous-dossiers : la clarté prime.  
Ne copiez pas une architecture sans lien avec le projet.  
Outils  
Outils de schéma, comme draw.io, Whimsical, Figma  
VS Code  
Ressources  
Dans le cours Utilisez des design patterns en JavaScript, le chapitre Gérez vos connexions avec le Singleton Pattern (Note : En React, pensez Context/Hooks) dans la partie 2\.  
Le cours Débutez avec React, dans la Partie 5 :  
le chapitre Partagez des données avec les Custom Hooks / Context  
le chapitre Gérez la navigation avec React Router  
React Custom Hooks Guide

#### **Étape 3 – Refactorez les composants existants en appliquant l’architecture**

Vous allez restructurer le projet en suivant votre plan. Vous appliquerez l’architecture définie lors de l’étape précédente en créant les bons composants, en séparant les responsabilités, et en typant correctement les données.

Prérequis  
Avoir :  
conçu votre nouvelle structure d’architecture (et la valider si vous avez des doutes)  
identifié les composants et hooks à créer ou modifier  
Résultat attendu  
Une nouvelle base React propre et modulaire, avec des composants spécialisés (Fonctionnels), chacun dans son fichier dédié, compilable et prête pour les développements.  
Recommandations  
Commencez par identifier un gros composant dans le starter code.  
Découpez-le en composants enfants (par exemple : MedalChart, CountryCard).  
Refactoriser le reste du code :  
Déplacez les fichiers dans les bons dossiers (components/ ou pages/).  
Déplacez les appels API dans un hook ou un service,  
Créez manuellement les fichiers nécessaires (.tsx, .ts).  
Créez des interfaces pour typer les données (Typescript Interfaces),  
Nettoyez les composants (supprimez les Classes si présentes, passez en Fonctionnel).  
Testez au fur et à mesure avec npm run dev pour vérifier que l’application compile après vos changements.  
Ajoutez un commit Git clair : Refactor: séparation des composants.  
Points de vigilance  
Vérifiez les exports des composants enfants après refactor.  
Mettez à jour les imports dans App.tsx ou main.tsx.  
Ne laissez pas de code orphelin (console.log, variables inutilisées).  
Ne supprimez ni renommez les fichiers sans mettre à jour les imports  
Typez votre code (aucun any ne doit subsister)  
Gardez en tête pour le futur l’importance de découper les composants : ceci permettra d’afficher des données venues d’un back-end, sans que tout repose sur un seul fichier.  
Outils  
Vite / Node (npm run dev, eslint)  
VS Code  
Git & GitHub  
Ressources  
Dans le cours Utilisez des design patterns en JavaScript, le chapitre Intégrez une nouvelle fonctionnalité à un objet existant avec le Decorator Pattern (Note : En React, privilégiez la Composition/Hooks) dans la partie 3\.  
Dans le cours Débutez avec React, partie 2 :  
le chapitre Construisez votre premier composant  
le chapitre Utilisez les Props pour passer des données  
React Documentation

#### **Étape 4 – Externalisez la gestion des données dans un Custom Hook**

Déplacez la logique de données (tableaux, JSON) des composants vers un **Custom Hook** (ou Service).

Prérequis  
Avoir :  
refactoré les composants  
identifié où les données étaient codées en dur.  
Résultat attendu  
Un useData (ou DataService) unique gérant les données, utilisé dans les composants.  
Recommandations pas à pas  
D’abord, créez un fichier hook, par exemple hooks/useData.ts.  
Déplacez-y le tableau statique des pays/médailles.  
Importez et utilisez ce hook dans vos composants fonctionnels.  
Testez que l’application fonctionne toujours.  
Pour ce projet, il s’agit de tests faits à la main ; aucun test automatisé n’est attendu.  
Committez avec un message clair, comme Refactor: centralisation des données dans useData.  
Points de vigilance  
Ne laissez aucun tableau en dur dans les composants.  
Vérifiez que le hook gère correctement l'état (via useState si nécessaire).  
Testez l’affichage du dashboard et de la page détail.  
Même si dans ce projet, votre Hook retourne un tableau statique, mais dans des projets futurs, il pointera vers une API REST pour récupérer des données réelles.  
Outils  
Vite / Node  
VS Code  
Git & GitHub  
Ressources  
Dans le cours Utilisez des design patterns en JavaScript, la partie 2, le chapitre Gérez vos connexions avec le Singleton Pattern (Adaptation React : Context/Hooks)  
Dans le cours Débutez avec React, Partie 5, le chapitre Partagez de la logique avec les Custom Hooks

#### **Étape 5 – Documentez l’architecture et validez-la**

Rédigez une documentation simple de votre nouvelle architecture front-end. Si vous n’êtes pas assez confiant, validez-la avec votre mentor avant de passer à l’implémentation UI lors de l’exercice prochain.

Prérequis  
Avoir :  
externalisé les données dans un hook/service ;  
testé à la main l’application refactorée.  
Résultat attendu  
Un fichier ARCHITECTURE.md décrivant la structure, les composants, et l’usage du hook/service.  
Recommandations pas à pas  
Dans ARCHITECTURE.md, décrivez :  
l’arborescence des dossiers ;  
les composants et leurs rôles ;  
le Custom Hook (ou service) et son rôle.  
Vous pouvez utiliser vos notes dans le fichier notes-architecture.md pour servir comme base de texte du fichier ARCHITECTURE.md.  
Mentionnez comment cette architecture prépare à une future connexion back-end/API.  
Relisez-vous : si un nouveau développeur arrive, doit-il comprendre votre projet ?  
Committez votre fichier.  
Points de vigilance  
Ne recopiez pas tout le code : restez synthétique.  
Vérifiez la cohérence entre vos notes, votre code, et la doc.  
Outils  
VS Code (Markdown)  
Git & GitHub  
Ressources  
Dans le cours Utilisez des design patterns en JavaScript, Partie 4, le chapitre Écoutez vos objets avec l’Observer Pattern (Adaptation React : useEffect / State changes)  
Dans le cours Débutez avec React, Partie 5, le chapitre Centralisez votre logique  
**⬇️ Vérifiez votre travail et faites le point avec votre mentor**

Pour vérifier que vous n’avez rien oublié dans la réalisation de votre exercice, téléchargez et complétez la fiche d’autoévaluation P2 FSJA \- Fiche d'auto-évaluation

Parlez-en avec votre mentor durant votre dernière session de mentorat.

---

## **(Section) “Exercice \- Implémentez des nouvelles fonctionnalités dans l’interface utilisateur avec React”**

Conseils mentor  
250 mots max. Mots importants en gras.  
L’étudiant peut potentiellement réaliser cet exercice en quelques heures, sans même une session de mentorat.

Cependant, s’il a des difficultés pendant l'exercice et que vous avez une session de mentorat, demandez-lui de vous parler de :  
son avancement ;  
ses difficultés ;  
sa compréhension de l’exercice.  
Vous pourrez ainsi identifier ses problèmes, ses lacunes, ses processus ou méthodologies erronés.  
**Compréhension des attendus**

Assurez-vous que l’étudiant puisse répondre à ces questions : Que doivent contenir les livrables ? À quoi ressembleront-ils ? Quel est le niveau de précision attendu ?

Lacunes récurrentes  
Si vous sentez que votre étudiant n’est pas à l’aise avec l’implémentation des composants réutilisables, de la navigation, ou de la gestion des erreurs, n’hésitez pas à lui conseiller de revoir le cours Débutez avec React, notamment Partie 2 (Créez des composants) et Partie 5 (Hooks et routing) avant d’aller plus loin et de vous faire un résumé oral.  
S’il avait du mal à préparer l’architecture dans l’exercice précédent, n’hésitez pas à lui conseiller de revoir les chapitres sur la **Composition** et les **Custom Hooks** du cours *Utilisez des design patterns en JavaScript* pour structurer ses interactions UI.

**Méthodologie**

Encouragez votre étudiant à creuser la gestion d’erreurs front-end : 404, URL erronée, perte de connexion, etc.  
Vérifiez qu’il a :  
bien réutilisé le useData Hook (ou DataService) créé à l’Exercice 1,  
testé la navigation et le responsive avant de finaliser,  
produit un README.md clair en plus du code.  
Lors de cet exercice guidé, vous pouvez lui faire décrire l’organisation de ses fichiers et composants. Pour le préparer au projet suivant, vous pouvez également valider ses choix de Custom Hooks pour simuler une API REST.  
**Points de vigilance**

Mettez l'accent sur l'importance de suivre les bonnes pratiques **React** : séparation container/presentational, typage strict, useEffect cleanups, routing, pas de console inutiles.

Insistez également à la navigation fluide et la responsivité pour assurer une expérience utilisateur de bonne qualité. Votre étudiant doit tester la navigation et la responsivité lors du développement, pas seulement à l’étape finale.

Voici les documents qui vous aideront à faire un bilan avec l’étudiant :  
sa fiche d’autoévaluation P2 FSJA \- Fiche d'auto-évaluation  
Elle permet de faire le point sur ce que l'étudiant a appris. Il la complète seul et en discute avec vous.  
le corrigé du code que vous pourrez partager avec votre étudiant une fois qu’il a terminé.

### ---

**Prêt à résoudre l’exercice ?**

Dans cet exercice, vous allez poursuivre votre travail sur le projet TéléSport en suivant les spécifications techniques fournies par votre responsable, Jeannette : Spécifications \- Télésport  
Après avoir défini une architecture claire, vous êtes désormais chargé·e d’implémenter l’interface complète. Cette interface permettra aux utilisateurs de visualiser les médailles olympiques et d’interagir avec les données.  
Votre objectif est de rendre l’application fonctionnelle, responsive et maintenable :  
intégrer les maquettes fournies des deux pages en composants React :  
un dashboard affichant le nombre de médailles par pays ;  
une page détail présentant les statistiques d’un pays sélectionné ;  
assurer la qualité de l’expérience utilisateur :  
la navigation fluide entre les pages ;  
la responsivité dans différents appareils ;  
et gérer les cas d’erreur côté front.  
Cet exercice est entièrement guidé.  
Vous pouvez suivre les étapes ci-dessous.

### **Étapes**

#### **⬇️ Étape 1 – Améliorez le dashboard existant**

Vous commencez par construire le dashboard **React** fonctionnel à partir des maquettes Figma, en utilisant les composants bien structurés que vous avez mis en place précédemment.

Prérequis  
avoir mis en place l’architecture front-end dans l’exercice précédent  
avoir lu à nouveau les spécifications techniques  
Résultat attendu  
Un dashboard responsive qui affiche correctement :  
un texte introductif  
un graphique interactif avec les données prévues  
une redirection vers la page détail lorsqu’on clique sur un pays  
Recommandations  
D’abord, améliorer un composant Home dans pages/.  
Importez le Hook useData (que vous avez créé lors de l’exercice 1\) pour récupérer la liste des pays avec leurs médailles.  
Utilisez Recharts (ou Chart.js adapté React) pour afficher un pie chart simple.  
Ajoutez un onClick sur les barres → navigation /country/:id.  
Vérifiez que la navigation fonctionne bien pour un utilisateur.  
Créer un composant réutilisable dans components/ qui affiche :  
le titre de la page  
les indicateurs/statistiques qui sont en tête de page. Chaque indicateur/statistique a un libellé et une valeur. Vous pouvez faire une liste d’indicateurs/statistiques sur laquelle vous mappez (.map()) pour afficher la liste des indicateurs / statistiques.  
Réutilisez ce composant dans le composant Home dans pages/  
Travaillez de manière modulaire.  
Points de vigilance  
Ne pas mettre de logique métier complexe dans le JSX  
Ne pas utiliser any pour les types  
Testez la lisibilité sur un appareil mobile pour vérifier la responsivité  
Bien gérer les effets de bord (nettoyer les listeners ou timers dans useEffect si nécessaire)  
Outils  
VS Code  
Vite / Node  
Recharts / React-Chartjs-2  
Ressources  
Le cours Débutez avec React – Partie 2 & Partie 3  
Le cours Utilisez des design patterns en JavaScript – Partie 4

#### **Étape 2 – Améliorez la page détail et ajoutez la navigation entre les pages**

Vous allez améliorer la page de détail d’un pays qui affiche les informations détaillées d’un pays et l’évolution de ses performances. Puis, vous allez assurer la navigation entre le dashboard principal et la page de détail, en utilisant le routing **React Router**.

Prérequis  
avoir développé le dashboard principal  
avoir identifié les données spécifiques à afficher par pays ou filtre  
Résultat attendu  
Une page de détail responsive qui affiche :  
les infos clés pour un pays (participations, médailles, athlètes)  
un graphique d’évolution pour le pays.  
Une navigation fluide entre le dashboard et la page de détail via l’URL.  
Recommandations  
Comme avant, commencez par améliorer le composant Country dans pages/.  
Utilisez useParams (React Router) pour récupérer l’ID et le Hook useData pour extraire les données du pays.  
Réutiliser le composant des indicateurs/statistiques développés précédemment.  
Vérifiez la navigation entre les pages  
Chaque clic sur le dashboard doit mener à une page cohérente avec la donnée attendue.  
Ajoutez un bouton retour vers le dashboard (utilisez \<Link\> ou useNavigate).  
Ajoutez la gestion d’erreurs côté utilisateur : URL inexistante, pays inexistant, données manquantes.  
Points de vigilance  
Testez que la gestion des erreurs fonctionne en tant qu’utilisateur.  
Par ex., si on saisit un ID inexistant → redirection vers page d’erreur.  
Ne pas dupliquer la logique de récupération des données  
Outils  
React Router  
Navigateurs avec DevTools  
Ressources  
Le cours Débutez avec React  
dans la Partie 3 les chapitre Affichez des listes et Gérez le style  
dans la partie 5, le chapitre Gérez la navigation avec React Router  
React Router Guide

#### **Étape 3 – Gérez les erreurs de navigation et d’affichage**

Vous allez sécuriser votre application en gérant les erreurs côté utilisateur : mauvaise URL, pays inexistant, données manquantes.

Prérequis  
avoir mis en place la navigation entre les pages  
avoir simulé les données dans un hook/service  
Résultat attendu  
Une page d’erreur s’affiche clairement en cas de problème de navigation ou de récupération de données.  
Recommandations  
Ajoutez une route générique \* (Wildcard) dans la configuration des routes.  
Créez un NotFoundComponent.  
Simulez une erreur de récupération dans le hook pour tester vos cas limites.  
Points de vigilance  
Ne pas afficher un écran vide  
Ne pas exposer de messages techniques (ex: “undefined is not a function”)  
Outils  
DevTools du navigateur  
React Router \+ Hooks  
Ressources  
Le cours Débutez avec React – Partie 5, notamment les chapitres :  
Passez d’une route à l’autre  
Récupérez les paramètres d'URL  
Le cours Utilisez des design patterns en JavaScript – Partie 4, chapitre Écoutez vos objets (Adaptation React: State/Effect)  
React Error Boundaries

#### **Étape 4 – Finalisez l’application et documentez-la sur GitHub**

Testez l’ensemble de votre application React et vérifiez la gestion des erreurs côté utilisateur. Assurez-vous que l’application :  
respecte les maquettes – grosso modo, pas au pixel prêt  
est responsive – elle fonctionne bien sur desktop et mobile  
suit les bonnes pratiques.  
Vous allez finaliser le projet en rédigeant un README clair sur GitHub.  
Prérequis  
avoir terminé toutes les fonctionnalités attendues  
avoir validé le bon fonctionnement sur desktop et mobile  
Résultat attendu  
Un dépôt GitHub propre, public, contenant le code final, bien documenté.  
Captures d’écran d’UI qui montre les pages du site, toutes zippées en un dossier.  
​​Elles doivent montrer les deux pages de l’application, sur desktop et mobile.  
Recommandations  
Vérifiez le bon fonctionnement de toute l’application :  
le dashboard affiche le graphique des médailles.  
la page détail affiche les informations d’un pays  
la navigation est fluide : la redirection correcte lors d’un clic  
Testez la responsivité (DevTools mobile).  
Supprimez les fichiers inutiles et renommez les composants si nécessaire  
Organisez votre README.md avec un sommaire, instructions de lancement, structure du projet et captures d’écran si possible.  
Points de vigilance  
Gardez en tête qu’il n’est pas demandé de respecter les maquettes au pixel pret.  
Le but ici est le bon fonctionnement de l’interface avec la prise en main de React et Typescript.  
Ne pas publier un projet cassé ou non responsif.  
Assurez-vous que le repo GitHub est bien nettoyé :  
Pas de code mort  
Supprimez console.log et any.  
Vérifiez l'historique des commits  
Ne pas oublier d’indiquer les prérequis techniques (Node, Vite/npm, etc.)  
Outils  
Git & GitHub  
VS Code  
Markdown preview  
Ressources  
Le cours Débutez avec React – Partie 4  
Le cours Devenez un expert de Git & GitHub  
Vite Documentation  
**⬇️ Toggle. Vérifiez votre travail et faites le point avec votre mentor**

Pour vérifier que vous n’avez rien oublié dans la réalisation de votre exercice, téléchargez et complétez la fiche d’autoévaluation P2 FSJA \- Fiche d'auto-évaluation

Parlez-en avec votre mentor durant votre dernière session de mentorat.
