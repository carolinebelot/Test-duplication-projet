1 : Transcription enregistrée
# **TRANSCRIPTION VIDEO : RÉUNION DE LANCEMENT**

**ORLANDO** Bonjour à tous. Bon, étant donné que tu ne peux pas être avec nous à cette réunion, on va l'enregistrer afin que tu puisses avoir les informations importantes qui te permettront d'accomplir ce projet.

En tout cas, on est tous très enthousiastes pour le lancement de MDD, et on a hâte de voir ce que tu vas faire.

**HEIDI** Oui c'est clair \! Ce qui est bien avec ce projet c'est qu'il est très stimulant pour nous, mais il va aussi l'être pour beaucoup de développeurs. Bon il s'avère que je ne pourrai pas finaliser le projet, donc c'est à toi de reprendre la main...

**ORLANDO** Effectivement, on espère avoir un bel impact avec ce projet. Juana, peux-tu lui expliquer les visuels qu'un utilisateur va voir ?

**JUANA** Oui bien sûr \! Alors voici les maquettes.

Tout d'abord la page d'accueil, comme tu notes elle a un format classique et ce qui est important c'est d'accéder rapidement à la page de connexion ou d'inscription. Ensuite la page d'inscription puis la page de connexion, très standard pour cette version MVP.

Une fois connecté, sur la page d'accueil on voit son fil d'actualité mais on peut aussi :

* Ouvrir la page des thèmes pour les parcourir et s'abonner à ceux de notre choix  
* Ouvrir un article pour le consulter  
* Ouvrir un formulaire qui permet de créer un nouvel article  
* Ouvrir sa page de profil

Si on regarde chacune des pages :

* La page des thèmes est simple : une liste de thèmes et pour chacun un bouton pour s'abonner.  
* La page de consultation de l'article permet de lire confortablement toutes les informations et permet aussi de commenter l'article.  
* Le formulaire pour créer un nouvel article est classique, attention l'auteur et la date doivent être renseignés automatiquement. Tout comme pour un commentaire d'ailleurs.  
* La page de profil doit permettre de modifier les informations du profil utilisateur mais aussi de voir tous les abonnements et de se désabonner si on le souhaite.

Et voilà, je pense j'ai fait le tour \!

**ORLANDO** Super Juana, merci beaucoup, c'est très clair.

Techniquement il y a quand même quelques contraintes à respecter ; déjà, tu devras développer l'application en **Next.js / TypeScript**. Côté architecture, c'est le **Next.js App Router** qui a été choisi pour gérer à la fois le front et le back.

On utilise Git et GitHub pour le versionning avec un seul repository pour tout le projet, fait d'ailleurs attention à ce que tout soit bien organisé.

Tu peux consulter les documents de spécifications fonctionnelles et de contraintes techniques pour voir tout ce qu'on a déjà choisi.

Tu as le choix pour l'implémentation logique, par exemple je sais que certains développeurs iraient jusqu'à mettre en place une API séparée complexe (sourire) mais c'est à toi de voir \!

En tout cas, il y a beaucoup de latitude pour les développeurs chez nous, pas vrai Heidi ?

**HEIDI** Absolument, bon j'étais pas partie sur une API séparée moi (sourire) \! En fait j'avais commencé à travailler sur le projet seulement quelques heures donc je ne suis pas allé très loin dans les choix qui nous incombent.

J'imaginais par exemple utiliser une base de données relationnelle et donc **PostgreSQL** avec l'ORM **Prisma**, je le préfère aux requêtes SQL brutes.

Tu t'en rendras compte dans le repository GitHub.

La partie UI (**Client Components**), c'est ce que j'ai le moins touché parce que j'ai plutôt l'habitude de commencer par le schéma de données (**Schema.prisma**) dans mes projets. Mais bon, à toi de voir comment tu veux t'organiser.

**ORLANDO** Même si tu as pas mal de liberté, on a tout de même une procédure de validation. Tu dois faire un document où tu listes les justifications pour chaque choix.

Un conseil, reste objectif sur les avantages et inconvénients de chacun d'entre eux. Par expérience, je sais que les développeurs n'aiment pas trop faire ce genre de documentation, mais c'est important \!

Bon, et bien je crois qu'on a rien oublié ?

**HEIDI** Pour moi c'est bon \!

**JUANA** Pour moi aussi \!

**ORLANDO** Dans ce cas, je vous souhaite à tous une bonne journée, et bon courage pour la suite \!

**HEIDI & JUANA** Salut, au revoir.





2 : Spécifications fonctionnelles
# ORION

# Spécifications fonctionnelles

# Projet MDD

```
Auteur : Orlando Espinoza
Version 0.0.
```

- Objet du document
- Périmètre
- Glossaire
- Liste des fonctionnalités
   - Gestion des utilisateurs
   - Gestion des abonnements
   - Gestion des articles
- Exigences particulières


## Objet du document

Le document “Spécifications fonctionnelles” liste les fonctionnalités à
implémenter pour le projet MDD. Ces fonctionnalités sont exprimées du
point de vue métier sous la forme d’actions que l’utilisateur peut effectuer
sur l’application.

## Périmètre

Les spécifications fonctionnelles formalisées dans ce document
concernent uniquement la version MVP (Minimum Viable Product) du
projet MDD.
La version MVP ne prévoit pas de back-office, c'est-à-dire une zone
administrateur qui permettrait de gérer les données de l'application.

## Glossaire

Cette table donne les termes clés en français et en anglais pour
implémenter les fonctionnalités de l’application.
Terme français Terme anglais Description
Utilisateur User Personne physique connectée au
réseau social
Sujet, thème Subject, topic Thème du monde de la
programmation informatique
Article Post Message abordant un thème
identifié
Abonnement Subscription Un utilisateur souhaite voir les
articles correspondant à un sujet
Fil Feed Ensemble des articles des
abonnements d’un utilisateur


## Liste des fonctionnalités

### Gestion des utilisateurs

```
● Accéder au formulaire de connexion et d’inscription à partir de la
page d’accueil (non connectée).
● S’inscrire grâce à un e-mail, un mot de passe et un nom d’utilisateur.
● Se connecter à partir d’un e-mail ou d’un nom d’utilisateur et d’un
mot de passe.
○ Attention  : la connexion d’un utilisateur doit persister entre les
sessions.
● Consulter son profil (e-mail, nom d’utilisateur et abonnements) via la
page de profil.
● Modifier son profil (e-mail, nom d’utilisateur et mot de passe) via la
page de profil.
● Se déconnecter.
```
### Gestion des abonnements

```
● Consulter la liste de tous les thèmes (que l’utilisateur y soit abonné
ou non) via une page dédiée.
● S’abonner à un thème via la page des thèmes.
● Se désabonner via la page de profil.
```

### Gestion des articles

```
● Consulter son fil d’actualité sur la page d’accueil par chronologie (du
plus récent au plus ancien) une fois connecté.
● Trier le fil d’actualité du plus récent au plus ancien ou bien du plus
ancien au plus récent.
● Ajouter un article (choisir le thème associé, définir le titre et le
contenu).
● Consulter un article (thème associé, titre, auteur, date, contenu,
commentaires).
● Ajouter un commentaire à un article (définir le contenu).
```
## Exigences particulières

Note : Ces exigences concernent les fonctionnalités précédemment citées,
et n’amènent pas l’ajout d’autres fonctionnalités.
L’application doit pouvoir être utilisée aussi bien sur mobile que sur
ordinateur. De ce fait, chaque écran devra être **responsive** et s’adapter à la
taille de l’appareil utilisé.
Un mot de passe est valide si :

- son nombre de caractère est supérieur ou égal à 8 caractères ;
- il contient au moins un de chacun de ces types de caractères :
    - chiffre,
    - lettre minuscule,
    - lettre majuscule,
    - caractère spécial.
Lors de l’ajout d’un article, l’auteur et la date sont définis
automatiquement.
Lors de l’ajout d’un commentaire, l’auteur et la date sont définis
automatiquement.


Un commentaire correspond uniquement à un article, il n’est pas récursif
(pas de sous-commentaires).
Après avoir cliquer sur le bouton “S’abonner” dans la page des Thèmes, le
bouton devient inactif et le texte “S’abonner” est remplacé par “Déjà
abonné”.


3. Contraintes Techniques

# **ORION**

## **Contraintes techniques**

### **Projet MDD**

Auteur: Orlando Espinoza

Version: 0.0.1

---

## **Sommaire**

| Section | Page |
| :---- | :---- |
| **Objet du document** | 3 |
| **Périmètre** | 3 |
| **Architecture logicielle** | 3 |
| **Langages de programmation et framework** | 4 |
| **Gestion de code** | 4 |

---

## **Objet du document**

Ce document liste les contraintes techniques imposées par ORION pour le projet MDD (Monde de Dév).

Les choix qui restent à faire sont à la discrétion du développeur, mais ne doivent pas entrer en conflit avec ces contraintes.

## **Périmètre**

Les contraintes techniques formalisées dans ce document concernent la version MVP (Minimum Viable Product) du projet MDD.

Si le MVP atteint ses objectifs, les choix techniques seront conservés pour les versions suivantes.

## **Architecture logicielle**

* Le back-end (Server Components) est logiquement distinct du front-end (Client Components). Des **Server Actions** permettront l'interaction entre les 2\.  
* L'interaction entre le front-end et le back-end doit être sécurisée (Validation Zod).  
  * Les méthodes de sécurisation sont laissées à la discrétion du développeur.  
* Respect des principes de programmation propre (Clean Code / SOLID).

---

## **Langages de programmation et framework**

**Back-end : TypeScript / Node.js**

* **Next.js (App Router)** est obligatoire pour son architecture Server Components et Server Actions.  
* **Node.js 22 LTS** est le moteur d'exécution imposé.  
* Pour répondre aux besoins des développements, on choisira en priorité des outils standards de l'écosystème Next.js. Par exemple, pour l'interaction avec la base de données, on prend **Prisma ORM** plutôt que des requêtes SQL brutes.

**Front-end : TypeScript / React**

* Respecter les bonnes pratiques mises en avant par Next.js, comme : [https://nextjs.org/docs/security](https://www.google.com/search?q=https://nextjs.org/docs/security).  
* **Next.js CLI** est fortement recommandé pour l'initialisation et la gestion du projet.

## **Gestion de code**

* Utiliser Git et GitHub pour la gestion de code.  
* Garder un seul repository pour tout le projet (Monorepo).


