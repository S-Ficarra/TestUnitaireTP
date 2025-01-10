# ------- User story -------

## 1. User :

### 1.1 Récupérer tous les utilisateurs (GET /)
**En tant qu'utilisateur,**  
**Je veux** voir une liste de tous les utilisateurs,  
**Afin de** pouvoir rapidement accéder aux informations sur tout le monde dans le système.  

#### Critères d'acceptation :
- Le système récupère une liste de tous les utilisateurs depuis la base de données.
- La réponse inclut les détails essentiels des utilisateurs (par exemple, ID, nom, email).
- S'il n'y a pas d'utilisateurs, le système renvoie une liste vide.

<br>

### 1.2 Récupérer un utilisateur par ID (GET /:id)
**En tant qu'utilisateur,**  
**Je veux** consulter des informations détaillées sur un utilisateur spécifique,  
**Afin de** pouvoir voir son profil complet ou effectuer des actions spécifiques.  

#### Critères d'acceptation :
- Le système récupère les détails d'un utilisateur sur la base de l'ID fourni.
- La réponse inclut tous les détails pertinents de l'utilisateur (par exemple, nom, email, rôle).
- Si l'ID de l'utilisateur n'existe pas, le système renvoie une erreur 404 avec un message explicatif.

<br>

### 1.3 Créer un utilisateur (POST /)
**En tant qu'administrateur,**  
**Je veux** créer un nouvel utilisateur,  
**Afin de** pouvoir l'ajouter au système avec les informations nécessaires.  

#### Critères d'acceptation :
- Une requête valide contient les informations de l'utilisateur (nom, email).
- Le système crée un nouvel utilisateur et le stocke dans la base de données.
- Si les données saisies sont invalides (par exemple, champs requis manquants), le système renvoie une erreur 400 avec un retour sur la validation.
- Après la création, le système répond avec les détails du nouvel utilisateur créé.

<br>

### 1.4 Mettre à jour un utilisateur (PUT /:id)
**En tant qu'administrateur,**  
**Je veux** mettre à jour les informations d'un utilisateur,  
**Afin de** pouvoir modifier ses données si nécessaire.  

#### Critères d'acceptation :
- Le système met à jour l'utilisateur sur la base de l'ID fourni et du corps de la requête.
- Une requête valide contient uniquement les champs à mettre à jour (nom, email).
- Si l'ID de l'utilisateur n'existe pas, le système renvoie une erreur 404.
- Si les données saisies sont invalides, le système renvoie une erreur 400 avec un retour sur la validation.
- Les détails mis à jour de l'utilisateur sont reflétés dans la base de données.

<br>

### 1.5 Supprimer un utilisateur (DELETE /:id)
**En tant qu'administrateur,**  
**Je veux** supprimer un utilisateur du système,  
**Afin de** pouvoir retirer les utilisateurs qui ne sont plus nécessaires.  

#### Critères d'acceptation :
- Le système supprime l'utilisateur associé à l'ID fourni.
- Si l'ID de l'utilisateur n'existe pas, le système renvoie une erreur 404.
- Si la suppression est réussie, le système répond avec un message de confirmation.
- L'utilisateur supprimé n'est plus récupérable dans la base de données.

<br>

---












# ------- API Documentation -------

### GET /users  
**Description** : Récupère tous les utilisateurs.  
**Response** : Liste des objets utilisateur.  

### GET /users/:id  
**Description** : Récupère un utilisateur par ID.  
**Response** : Objet utilisateur correspondant à l'ID.  

### POST /users  
**Description** : Crée un nouvel utilisateur.  
**Request Body** : `{ name, email}`.  
**Response** : Objet utilisateur nouvellement créé.  

### PUT /users/:id  
**Description** : Met à jour un utilisateur par ID.  
**Request Body** : Champs utilisateur partiels ou complets à mettre à jour.  
**Response** : Objet utilisateur mis à jour.  

### DELETE /users/:id  
**Description** : Supprime un utilisateur par ID.  
**Response** : Message de confirmation.
