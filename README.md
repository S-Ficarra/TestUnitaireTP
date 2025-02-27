# ------- User story -------

## 1. User :

### 1.1 Récupérer tous les utilisateurs (GET /)
**En tant qu'utilisateur,**  
**Je veux** voir une liste de tous les utilisateurs,  
**Afin de** pouvoir rapidement accéder aux informations sur tout le monde dans le système.  

#### Critères d'acceptation :
- Le système récupère une liste de tous les utilisateurs depuis la base de données.
- La réponse inclut les détails essentiels des utilisateurs (nom, email).
- S'il n'y a pas d'utilisateurs, le système renvoie une liste vide.

<br>

### 1.2 Récupérer un utilisateur par ID (GET /:id)
**En tant qu'utilisateur,**  
**Je veux** consulter des informations détaillées sur un utilisateur spécifique,  
**Afin de** pouvoir voir son profil complet ou effectuer des actions spécifiques.  

#### Critères d'acceptation :
- Le système récupère les détails d'un utilisateur sur la base de l'ID fourni.
- La réponse inclut tous les détails pertinents de l'utilisateur (nom, email).
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

## 2. Book :

### 2.1 Récupérer tous les livres (GET /)
**En tant qu'utilisateur,**  
**Je veux** voir une liste de tous les livres,  
**Afin de** pouvoir rapidement accéder aux informations sur tout les livres dans le système.  

#### Critères d'acceptation :
- Le système récupère une liste de tous les livres depuis la base de données.
- La réponse inclut les détails essentiels des livres (titre et auteur).
- S'il n'y a pas de livre, le système renvoie une liste vide.

<br>

### 2.2 Récupérer un livre par ID (GET /:id)
**En tant qu'utilisateur,**  
**Je veux** consulter des informations détaillées sur un livre spécifique,  
**Afin de** pouvoir voir son profil complet ou effectuer des actions spécifiques.  

#### Critères d'acceptation :
- Le système récupère les détails d'un livre sur la base de l'ID fourni.
- La réponse inclut tous les détails pertinents du livre (titre, auteur).
- Si l'ID du livre n'existe pas, le système renvoie une erreur 404 avec un message explicatif.

<br>

### 2.3 Créer un livre (POST /)
**En tant qu'administrateur,**  
**Je veux** créer un nouveau livre,  
**Afin de** pouvoir l'ajouter au système avec les informations nécessaires.  

#### Critères d'acceptation :
- Une requête valide contient les informations du livre (titre, auteur).
- Le système crée un nouveau livre et le stocke dans la base de données.
- Si les données saisies sont invalides (par exemple, champs requis manquants), le système renvoie une erreur 400 avec un retour sur la validation.
- Après la création, le système répond avec les détails du nouveau livre créé.

<br>

### 2.4 Mettre à jour un livre (PUT /:id)
**En tant qu'administrateur,**  
**Je veux** mettre à jour les informations d'un livre,  
**Afin de** pouvoir modifier ses données si nécessaire.  

#### Critères d'acceptation :
- Le système met à jour le livre sur la base de l'ID fourni et du corps de la requête.
- Une requête valide contient uniquement les champs à mettre à jour (titre, auteur).
- Si l'ID du livre n'existe pas, le système renvoie une erreur 404.
- Si les données saisies sont invalides, le système renvoie une erreur 400 avec un retour sur la validation.
- Les détails mis à jour du livre sont reflétés dans la base de données.

<br>

### 2.5 Supprimer un livre (DELETE /:id)
**En tant qu'administrateur,**  
**Je veux** supprimer un livre du système,  
**Afin de** pouvoir retirer les livres qui ne sont plus nécessaires.  

#### Critères d'acceptation :
- Le système supprime le livre associé à l'ID fourni.
- Si l'ID du livre n'existe pas, le système renvoie une erreur 404.
- Si la suppression est réussie, le système répond avec un message de confirmation.
- Le livre supprimé n'est plus récupérable dans la base de données.

<br>

---

## 3. Vinyl :

### 3.1 Récupérer tous les vinyls (GET /)
**En tant qu'utilisateur,**  
**Je veux** voir une liste de tous les vinyls,  
**Afin de** pouvoir rapidement accéder aux informations sur tout les vinyls dans le système.  

#### Critères d'acceptation :
- Le système récupère une liste de tous les vinyls depuis la base de données.
- La réponse inclut les détails essentiels des vinyls (titre et groupe).
- S'il n'y a pas de vinyls, le système renvoie une liste vide.

<br>

### 3.2 Récupérer un vinyl par ID (GET /:id)
**En tant qu'utilisateur,**  
**Je veux** consulter des informations détaillées sur un vinyl spécifique,  
**Afin de** pouvoir voir son profil complet ou effectuer des actions spécifiques.  

#### Critères d'acceptation :
- Le système récupère les détails d'un vinyl sur la base de l'ID fourni.
- La réponse inclut tous les détails pertinents du vinyl (titre, groupe).
- Si l'ID du vinyl n'existe pas, le système renvoie une erreur 404 avec un message explicatif.

<br>

### 3.3 Créer un vinyl (POST /)
**En tant qu'administrateur,**  
**Je veux** créer un nouveau vinyl,  
**Afin de** pouvoir l'ajouter au système avec les informations nécessaires.  

#### Critères d'acceptation :
- Une requête valide contient les informations du vinyl (titre, groupe).
- Le système crée un nouveau vinyl et le stocke dans la base de données.
- Si les données saisies sont invalides (par exemple, champs requis manquants), le système renvoie une erreur 400 avec un retour sur la validation.
- Après la création, le système répond avec les détails du nouveau vinyl créé.

<br>

### 3.4 Mettre à jour un vinyl (PUT /:id)
**En tant qu'administrateur,**  
**Je veux** mettre à jour les informations d'un vinyl,  
**Afin de** pouvoir modifier ses données si nécessaire.  

#### Critères d'acceptation :
- Le système met à jour le vinyl sur la base de l'ID fourni et du corps de la requête.
- Une requête valide contient uniquement les champs à mettre à jour (titre, groupe).
- Si l'ID du vinyl n'existe pas, le système renvoie une erreur 404.
- Si les données saisies sont invalides, le système renvoie une erreur 400 avec un retour sur la validation.
- Les détails mis à jour du vinyl sont reflétés dans la base de données.

<br>

### 3.5 Supprimer un vinyl (DELETE /:id)
**En tant qu'administrateur,**  
**Je veux** supprimer un vinyl du système,  
**Afin de** pouvoir retirer les vinyls qui ne sont plus nécessaires.  

#### Critères d'acceptation :
- Le système supprime le vinyl associé à l'ID fourni.
- Si l'ID du vinyl n'existe pas, le système renvoie une erreur 404.
- Si la suppression est réussie, le système répond avec un message de confirmation.
- Le vinyl supprimé n'est plus récupérable dans la base de données.

<br>

## 4. VHS : 

### 4.1 Récupérer toutes les VHS (GET /)  
**En tant qu'utilisateur,**  
**Je veux** voir une liste de toutes les VHS,  
**Afin de** pouvoir rapidement accéder aux informations sur toutes les VHS dans le système.  

#### Critères d'acceptation :  
- Le système récupère une liste de toutes les VHS depuis la base de données.  
- La réponse inclut les détails essentiels des VHS (titre et réalisateur).  
- S'il n'y a pas de VHS, le système renvoie une liste vide.  

---

### 4.2 Récupérer une VHS par ID (GET /:id)  
**En tant qu'utilisateur,**  
**Je veux** consulter des informations détaillées sur une VHS spécifique,  
**Afin de** pouvoir voir son profil complet ou effectuer des actions spécifiques.  

#### Critères d'acceptation :  
- Le système récupère les détails d'une VHS sur la base de l'ID fourni.  
- La réponse inclut tous les détails pertinents de la VHS (titre, réalisateur).  
- Si l'ID de la VHS n'existe pas, le système renvoie une erreur 404 avec un message explicatif.  

---

### 4.3 Créer une VHS (POST /)  
**En tant qu'administrateur,**  
**Je veux** créer une nouvelle VHS,  
**Afin de** pouvoir l'ajouter au système avec les informations nécessaires.  

#### Critères d'acceptation :  
- Une requête valide contient les informations de la VHS (titre, réalisateur).  
- Le système crée une nouvelle VHS et la stocke dans la base de données.  
- Si les données saisies sont invalides (par exemple, champs requis manquants), le système renvoie une erreur 400 avec un retour sur la validation.  
- Après la création, le système répond avec les détails de la nouvelle VHS créée.  

---

### 4.4 Mettre à jour une VHS (PUT /:id)  
**En tant qu'administrateur,**  
**Je veux** mettre à jour les informations d'une VHS,  
**Afin de** pouvoir modifier ses données si nécessaire.  

#### Critères d'acceptation :  
- Le système met à jour la VHS sur la base de l'ID fourni et du corps de la requête.  
- Une requête valide contient uniquement les champs à mettre à jour (titre, réalisateur).  
- Si l'ID de la VHS n'existe pas, le système renvoie une erreur 404.  
- Si les données saisies sont invalides, le système renvoie une erreur 400 avec un retour sur la validation.  
- Les détails mis à jour de la VHS sont reflétés dans la base de données.  

---

### 4.5 Supprimer une VHS (DELETE /:id)  
**En tant qu'administrateur,**  
**Je veux** supprimer une VHS du système,  
**Afin de** pouvoir retirer les VHS qui ne sont plus nécessaires.  

#### Critères d'acceptation :  
- Le système supprime la VHS associée à l'ID fourni.  
- Si l'ID de la VHS n'existe pas, le système renvoie une erreur 404.  
- Si la suppression est réussie, le système répond avec un message de confirmation.  
- La VHS supprimée n'est plus récupérable dans la base de données.  

<br>

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

# ----------------------------

### GET /books  
**Description** : Récupère tous les livres.  
**Response** : Liste des objets livres.  

### GET /books/:id  
**Description** : Récupère un livre par ID.  
**Response** : Objet livre correspondant à l'ID.  

### POST /books  
**Description** : Crée un nouveau livre.  
**Request Body** : `{ title, author}`.  
**Response** : Objet livre nouvellement créé.  

### PUT /books/:id  
**Description** : Met à jour un livre par ID.  
**Request Body** : Champs livre partiels ou complets à mettre à jour.  
**Response** : Objet livre mis à jour.  

### DELETE /books/:id  
**Description** : Supprime un livre par ID.  
**Response** : Message de confirmation.

# ----------------------------

### GET /vinyls  
**Description** : Récupère tous les vinyls.  
**Response** : Liste des objets vinyls. 

### GET /vinyls/:id  
**Description** : Récupère un vinyl par ID.  
**Response** : Objet vinyl correspondant à l'ID.  

### POST /vinyls  
**Description** : Crée un nouveau vinyl.  
**Request Body** : `{ title, groupe}`.  
**Response** : Objet livre nouvellement créé.  

### PUT /vinyls/:id  
**Description** : Met à jour un vinyl par ID.  
**Request Body** : Champs vinyl partiels ou complets à mettre à jour.  
**Response** : Objet vinyl mis à jour.  

### DELETE /vinyls/:id  
**Description** : Supprime un vinyl par ID.  
**Response** : Message de confirmation.

