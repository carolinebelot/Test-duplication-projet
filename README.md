# Test-duplication-projet

Cet espace est créé pour tester les possibilités de traduction de langage.

## Structure du repository

Ce repository contient les éléments suivants :

- **`./example`** : Projet d'exemple montrant comment le projet a été implémenté dans un autre langage/framework. Ce dossier sert de référence pour comprendre l'architecture et les patterns utilisés.

- **`project.md`** : Instructions du projet fournies à l'étudiant. Ce fichier décrit les objectifs pédagogiques, les activités à réaliser et les compétences à acquérir.

- **`docker-compose.yml`** : Fichier de configuration Docker Compose permettant de lancer l'ensemble du projet avec une seule commande.

- **`Dockerfile`** : Fichier définissant l'image Docker nécessaire pour exécuter le projet. Il contient toutes les dépendances et configurations requises.

- **À la racine** : Le projet lui-même, avec sa structure de dossiers et fichiers selon le langage et framework choisis.

## Prérequis : Installation de Docker Desktop

Avant de pouvoir lancer le projet, vous devez installer Docker Desktop sur votre machine.

### Installation sur macOS

Suivez les instructions officielles pour installer Docker Desktop sur macOS :
https://docs.docker.com/desktop/setup/install/mac-install/

### Installation sur Windows

Suivez les instructions officielles pour installer Docker Desktop sur Windows :
https://docs.docker.com/desktop/setup/install/windows-install/

### Vérification de l'installation

Une fois Docker Desktop installé, vérifiez que Docker fonctionne correctement en exécutant dans votre terminal :

```bash
docker --version
docker-compose --version
```

## Lancement du projet

Une fois Docker Desktop installé et démarré, vous pouvez lancer le projet avec la commande suivante :

```bash
docker-compose up
```

Cette commande va :

1. Construire l'image Docker si nécessaire
2. Démarrer le conteneur avec l'application
3. Exposer les ports configurés

Pour lancer le projet en arrière-plan (mode détaché) :

```bash
docker-compose up -d
```

Pour arrêter le projet :

```bash
docker-compose down
```

Pour voir les logs du projet :

```bash
docker-compose logs -f
```

## Développement

Le projet est configuré pour le développement avec des volumes montés, permettant de modifier le code sans reconstruire l'image Docker.

Les modifications dans les fichiers du projet seront automatiquement reflétées dans le conteneur selon la configuration du langage/framework utilisé.
