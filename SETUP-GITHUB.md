# Guide de configuration Git et GitHub pour non-développeurs

Ce guide vous accompagne pas à pas dans la configuration complète de Git et GitHub sur votre ordinateur. Aucune connaissance technique préalable n'est requise.

## Table des matières

1. [Installation de Git](#1-installation-de-git)
2. [Création d'un compte GitHub](#2-création-dun-compte-github)
3. [Configuration de votre identité Git](#3-configuration-de-votre-identité-git)
4. [Génération et configuration de votre clé SSH](#4-génération-et-configuration-de-votre-clé-ssh)
5. [Configuration du repository](#5-configuration-du-repository)
6. [Faire votre premier commit et push](#6-faire-votre-premier-commit-et-push)
7. [Vérifications finales](#7-vérifications-finales)

---

## 1. Installation de Git

### Sur Mac

Git est normalement déjà installé sur Mac. Pour vérifier :

1. Ouvrez le **Terminal** (Applications → Utilitaires → Terminal)
2. Tapez :
   ```bash
   git --version
   ```
3. Si vous voyez un numéro de version (ex: `git version 2.39.0`), Git est installé ✅
4. Sinon, installez-le via Homebrew ou téléchargez-le sur https://git-scm.com/download/mac

### Sur Windows

1. Téléchargez Git sur https://git-scm.com/download/windows
2. Lancez l'installateur
3. Gardez toutes les options par défaut
4. Ouvrez **Git Bash** (cherchez dans le menu Démarrer)
5. Vérifiez l'installation :
   ```bash
   git --version
   ```

---

## 2. Création d'un compte GitHub

Si vous n'avez pas encore de compte GitHub :

1. Allez sur https://github.com
2. Cliquez sur "Sign up" (S'inscrire)
3. Suivez les étapes :
   - Entrez votre email professionnel
   - Créez un mot de passe
   - Choisissez un nom d'utilisateur
   - Vérifiez votre compte (puzzle ou code email)
4. Notez votre nom d'utilisateur GitHub quelque part (vous en aurez besoin)

---

## 3. Configuration de votre identité Git

Git a besoin de savoir qui vous êtes pour attribuer vos modifications.

### Étape 3.1 : Configurer votre nom

Dans votre terminal ou Git Bash :

```bash
git config --global user.name "Votre Prénom Nom"
```

**Exemple** :
```bash
git config --global user.name "Simon Stoll"
```

### Étape 3.2 : Configurer votre email

Utilisez l'email associé à votre compte GitHub :

```bash
git config --global user.email "votre.email@exemple.com"
```

**Exemple** :
```bash
git config --global user.email "simon.stoll@openclassrooms.com"
```

### Étape 3.3 : Vérifier la configuration

```bash
git config --global --list
```

Vous devriez voir vos informations affichées :
```
user.name=Simon Stoll
user.email=simon.stoll@openclassrooms.com
```

✅ **Checkpoint** : Votre identité Git est configurée !

---

## 4. Génération et configuration de votre clé SSH

SSH permet de vous connecter à GitHub de manière sécurisée sans taper de mot de passe à chaque fois.

### Étape 4.1 : Vérifier si vous avez déjà une clé SSH

```bash
ls -la ~/.ssh/id_*.pub
```

- Si vous voyez un fichier comme `id_ed25519.pub` ou `id_rsa.pub`, vous avez déjà une clé → passez à l'étape 4.3
- Si vous voyez "No such file", continuez à l'étape 4.2

### Étape 4.2 : Générer une nouvelle clé SSH

**Important** : Remplacez l'email par le vôtre (celui configuré sur GitHub).

```bash
ssh-keygen -t ed25519 -C "votre.email@exemple.com" -f ~/.ssh/id_ed25519 -N ""
```

**Exemple** :
```bash
ssh-keygen -t ed25519 -C "simon.stoll@openclassrooms.com" -f ~/.ssh/id_ed25519 -N ""
```

Vous devriez voir :
```
Your identification has been saved in /Users/votre-nom/.ssh/id_ed25519
Your public key has been saved in /Users/votre-nom/.ssh/id_ed25519.pub
```

### Étape 4.3 : Ajouter votre clé à l'agent SSH

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Vous devriez voir :
```
Agent pid 12345
Identity added: /Users/votre-nom/.ssh/id_ed25519
```

### Étape 4.4 : Copier votre clé publique

Affichez votre clé publique :

```bash
cat ~/.ssh/id_ed25519.pub
```

Vous verrez quelque chose comme :
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJhZ3A7JN0HHzsOdmETA37GIG8mdhH6PWU4jZL618Ll2 simon.stoll@openclassrooms.com
```

**Copiez toute cette ligne** (du début `ssh-ed25519` jusqu'à votre email).

### Étape 4.5 : Ajouter la clé sur GitHub

1. Allez sur https://github.com/settings/keys
2. Cliquez sur **"New SSH key"** (bouton vert)
3. Remplissez :
   - **Title** : Donnez un nom reconnaissable (ex: "MacBook Pro de Simon" ou "PC Bureau")
   - **Key** : Collez la clé publique copiée à l'étape 4.4
4. Cliquez sur **"Add SSH key"**
5. GitHub peut vous demander votre mot de passe → entrez-le

### Étape 4.6 : Tester la connexion SSH

```bash
ssh -T git@github.com
```

**Première fois** : Vous verrez un message comme :
```
The authenticity of host 'github.com' can't be established.
Are you sure you want to continue connecting (yes/no)?
```
→ Tapez `yes` et appuyez sur Entrée

**Succès** : Vous devriez voir :
```
Hi votre-username! You've successfully authenticated, but GitHub does not provide shell access.
```

✅ **Checkpoint** : Votre clé SSH est configurée et fonctionne !

---

## 5. Configuration du repository

### Étape 5.1 : Vérifier le remote actuel

Dans votre terminal, allez dans le dossier de votre projet et vérifiez l'URL du remote :

```bash
git remote -v
```

Vous verrez quelque chose comme :
```
origin  https://github.com/utilisateur/nom-projet.git (fetch)
origin  https://github.com/utilisateur/nom-projet.git (push)
```

### Étape 5.2 : Changer le remote vers SSH (si nécessaire)

Si l'URL commence par `https://`, changez-la vers SSH :

```bash
git remote set-url origin git@github.com:utilisateur/nom-projet.git
```

**Exemple** : Si votre projet est `carolinebelot/Test-duplication-projet` :
```bash
git remote set-url origin git@github.com:carolinebelot/Test-duplication-projet.git
```

### Étape 5.3 : Vérifier le changement

```bash
git remote -v
```

Vous devriez maintenant voir :
```
origin  git@github.com:utilisateur/nom-projet.git (fetch)
origin  git@github.com:utilisateur/nom-projet.git (push)
```

✅ **Checkpoint** : Votre repository est configuré pour utiliser SSH !

---

## 6. Faire votre premier commit et push

### Étape 6.1 : Vérifier l'état de votre projet

```bash
git status
```

Cela montre :
- Les fichiers modifiés (en rouge)
- Les fichiers prêts à être committés (en vert)

### Étape 6.2 : Ajouter des fichiers à l'index

Pour ajouter tous les fichiers modifiés :
```bash
git add .
```

Ou pour ajouter un fichier spécifique :
```bash
git add nom-du-fichier.txt
```

### Étape 6.3 : Créer un commit

```bash
git commit -m "Votre message décrivant les changements"
```

**Exemple** :
```bash
git commit -m "docs: Add GitHub setup guide"
```

### Étape 6.4 : Pousser vers GitHub

```bash
git push
```

Ou si c'est la première fois sur cette branche :
```bash
git push -u origin nom-de-la-branche
```

**Si tout fonctionne**, vous verrez :
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
...
To github.com:utilisateur/projet.git
   abc1234..def5678  main -> main
```

✅ **Checkpoint** : Vos modifications sont sur GitHub !

---

## 7. Vérifications finales

### ✅ Checklist de configuration complète

Cochez mentalement chaque point :

- [ ] Git est installé sur mon ordinateur
- [ ] J'ai un compte GitHub
- [ ] Mon nom et email sont configurés dans Git
- [ ] Ma clé SSH est générée
- [ ] Ma clé SSH est ajoutée sur GitHub
- [ ] Le test SSH fonctionne (`ssh -T git@github.com`)
- [ ] Mon remote est configuré en SSH (commence par `git@github.com:`)
- [ ] Je peux faire des commits
- [ ] Je peux push sur GitHub

### Commandes récapitulatives

```bash
# Vérifier Git
git --version

# Vérifier votre identité
git config user.name
git config user.email

# Vérifier votre clé SSH
ls -la ~/.ssh/id_ed25519.pub

# Tester GitHub
ssh -T git@github.com

# Vérifier votre remote
git remote -v

# Vérifier l'état du projet
git status
```

---

## Problèmes courants et solutions

### Problème : "Permission denied (publickey)"

**Cause** : Votre clé SSH n'est pas configurée correctement.

**Solution** :
1. Vérifiez que votre clé est ajoutée sur GitHub (https://github.com/settings/keys)
2. Relancez l'agent SSH :
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```
3. Retestez : `ssh -T git@github.com`

### Problème : "Permission denied to repository"

**Cause** : Vous n'avez pas les droits sur ce repository.

**Solution** :
- Demandez au propriétaire de vous ajouter comme collaborateur
- Ou créez un fork du repository

Consultez le fichier [TROUBLESHOOTING.md](TROUBLESHOOTING.md) pour plus de détails.

### Problème : "fatal: not a git repository"

**Cause** : Vous n'êtes pas dans le bon dossier.

**Solution** :
```bash
cd /chemin/vers/votre/projet
```

### Problème : Conflit lors du push

**Cause** : Quelqu'un a modifié le code sur GitHub avant vous.

**Solution** :
```bash
git pull
# Résolvez les conflits si nécessaire
git push
```

---

## Ressources supplémentaires

### Documentation officielle
- Git : https://git-scm.com/doc
- GitHub : https://docs.github.com

### Tutoriels recommandés
- GitHub Skills : https://skills.github.com
- Git Immersion (en anglais) : http://gitimmersion.com

### Aide visuelle
- GitHub Desktop (interface graphique) : https://desktop.github.com
  - Alternative plus simple si le terminal vous intimide

---

## Commandes Git essentielles (mémo)

```bash
# Voir l'état du projet
git status

# Ajouter des fichiers
git add .                    # Tout ajouter
git add fichier.txt          # Ajouter un fichier spécifique

# Créer un commit
git commit -m "Message"

# Envoyer sur GitHub
git push

# Récupérer depuis GitHub
git pull

# Voir l'historique
git log --oneline

# Voir les différences
git diff

# Changer de branche
git checkout nom-branche

# Créer une branche
git checkout -b nouvelle-branche

# Voir les branches
git branch
```

---

## Félicitations ! 🎉

Vous avez maintenant un environnement Git/GitHub complètement configuré et prêt à l'emploi.

N'hésitez pas à revenir à ce guide si vous avez besoin de reconfigurer Git sur un nouvel ordinateur ou si vous rencontrez des problèmes.

**Pro tip** : Gardez ce fichier à portée de main et n'hésitez pas à l'annoter avec vos propres notes ou commandes fréquentes !
