# Manuel d'utilisation
L'idée est de faire un terminal qui permet de naviguer dans les exercices et de les lancer.

Pour ceci il est nécessaire de savoir utiliser quelques commandes
## Commandes
### ls
ls fait une liste de tous les contenus du dossier courant : si le dossier courant est la racine, il affiche la liste des modules et si le dossier courant est un module, il affiche la liste des exercices.

Exemple :
```
$ ls module1
```
Retournera la liste des exercices du module1 :
```
exercice1 exercice3 exercice4
```
### cd
change directory permet de changer de dossier : si le dossier courant est la racine, il permet de changer de module, il faut alors spécifier le dossier dans lequel l'on voudrait se déplacer et si le dossier courant est un module, il permet de changer d'exercice.

Exemple :
```
$ cd module1
```
Cette commande ne retourne rien mais change le dossier courant en module1, visible dans la case entrée :
```
timhaller@ocinfo module1
```
### open
ouvre le fichier spécifié : il faut spécifier le fichier à ouvrir

Exemple :
```
$ open module1/exercice1
```
Cette commande ouvre le fichier exercice1 du module1 dans un nouvel onglet du navigateur.

### rm -rf
ceci est une commande dangereuse, elle déactive de manière permanente le terminal. Si vous voulez le réactiver, il faut enlever le cookie du navigateur.
