# Spécifications (Cahier des charges) - TÉLÉSPORT

## Contexte
TéléSport a préparé une section « Jeux Olympiques » pour visualiser les performances des pays.
Ce projet contient deux pages principales en **React** :
1.  Un **Dashboard** (page d'accueil) : statistiques (nombre total des pays participants, nombre total de jeux olympiques), vue d'ensemble avec un pie chart.
2.  Une **Page détail pays** : statistiques (nombre total d'athlètes, nombre de participations, nombre de médailles) + évolution des médailles (graphique).

Les pages actuelles ne sont pas maintenables. Elles ne permettent pas aux utilisateurs d'avoir une expérience fluide ni responsive.

## Pages Ciblées
Les pages devront avoir une navigation fluide et une UI responsive, utilisables à la fois sur ordinateur, tablette et mobile.

## Périmètre
* Graphiques (barres pour totaux ; ligne/aires pour évolution).
* Tri/sélection simple et navigation par clic.
* Gestion des états : loading, empty, error (au minimum visuels).
* Accessibilité de base (contraste, focus visibles, ARIA simples).

## Hors périmètre
* Authentification, rôles.
* Édition/saisie des données.
* Persistance réelle côté serveur.

---

## Détails des pages

### 1 - Dashboard (page d'accueil)
L'utilisateur arrivera sur cette page au démarrage de l'application (il s'agit de la route par défaut).

Cette page :
1.  Présentera le contexte de l'application.
2.  Contiendra un graphique (type "bar" ou "pie", comme vous pouvez le voir dans le design sur Figma).

Ce graphique permettra la visualisation du nombre de médailles pour chaque pays, toutes années confondues.
Pour pouvoir présenter ce graphique, l'affichage de la page d'accueil devra automatiquement déclencher la récupération des données nécessaires (via `useEffect`).

En cliquant sur un des pays, l'utilisateur sera redirigé vers une page "détail" à propos de ce pays.

*Note : Pour ce projet, on ne prépare pas encore le détail par sport, cela fera partie d'une version ultérieure.*

### 2 - Page détail
Lors de son affichage, cette page devra automatiquement récupérer les données propres au pays sélectionné par l'utilisateur.

Cette page devra ensuite afficher les données relatives à ce pays :
* Nombre de participations aux JOs.
* Nombre total de médailles obtenues.
* Nombre total d'athlètes présentés aux JOs.

Pour finir, un nouveau graphique (de type "line" ou "bar") devra permettre à l'utilisateur de visualiser sur cette page le nombre de médailles obtenues par le pays au cours de chaque édition des Jeux olympiques.

Il sera bien entendu essentiel de pouvoir retourner à la page d'accueil depuis cette page.
Aussi, l'utilisateur peut saisir dans l'URL le pays dont il souhaite connaître les détails. Il faut donc vérifier que le pays existe.

---

## User stories

* **US-01** - En tant que visiteur, je veux voir un graphique des totaux de médailles par pays, afin de repérer les leaders.
* **US-02** - En tant que visiteur, je veux pouvoir cliquer sur un pays sur le Dashboard, afin d'ouvrir sa page de détail.
* **US-03** - En tant que visiteur, sur la route `/country/:id`, je veux voir les informations clés (participations, total médailles, athlètes) et un graphique d'évolution, afin de connaître les détails du pays sélectionné.
* **US-04** - En tant que visiteur, je veux pouvoir revenir au Dashboard depuis la page de détail, afin de naviguer facilement entre les pages.
* **US-05** - En tant que visiteur mobile, je veux que l'affichage reste lisible et utilisable, afin de consulter les informations sur mon appareil.

---

## Spécifications techniques

### Modèle de données (simulé) et Services (données simulées)

Créez des interfaces TypeScript dans `src/models/` :

```typescript
export interface Participation {
    id: number;
    year: number;
    city: string;
    medalsCount: number;
    athleteCount: number;
}

export interface Olympic {
    id: number;
    country: string;
    participations: Participation[];
}