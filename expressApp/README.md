Api rest qui récupère / ajoutes des data dans la bdd local et dessert la vue

# bdd

CREATE TABLE users (
  idUser SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  pwd VARCHAR(20));

CREATE TABLE articles (
  idArticles SERIAL PRIMARY KEY,
  articleContent VARCHAR(5000),
  postDate DATE,
  titre VARCHAR(30),idUser INTEGER REFERENCES users(idUser));
**Un utilisateur peu avoir aucun ou plusieurs articles**

CREATE TABLE comments (
  idComment SERIAL PRIMARY KEY,
  Comment VARCHAR(500),
  commentDate DATE,
  idArticle INTEGER REFERENCES articles(idArticles),idUser INTEGER REFERENCES users(idUser));
**Un article peut avoir aucun ou plusieurs commentaires**


# structure

user: 
    Contient tte 