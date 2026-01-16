# Projet e-commerce Le comptoir du Café ☕

La base du projet était réalisée dans le cadre de ma formation développeur web.
Le projet a changé de nom, et j'ai apporté quelques modifications, dont le design général et également la fonctionnalité du le panier pavec React.

## 🛠️ Technologies utilisées
- HTML
- CSS
- JavaScript
- NodeJS
- EJS
- PostGreSQL
- React (pour le panier)
- Figma (pour la maquette du projet d'origine)


## 🎯 Objectifs
Créer un site vitrine pour un détaillant de café fictif basé dans la ville de Hauts-de-Cloques.

Le site présente l'entreprise et les différents cafés disponibles. 

Ajout de la page "panier", gérée avec React.

## 📂 Structure du projet

```
e-commerce-cafetier/
├── back/
│   ├── src/
│   │   ├── config/ 
│   │   ├── controller/
│   │   ├── datamappers/  
│   │   ├── public/
│   │   │   ├── css/
│   │   │   ├── images/
│   │   │   └── js/
│   │   │       └── react/
│   │   ├── router/
│   │   ├── views/
│   │   │   └── partials/      
│   │   └── index.js
│   └──ocoffee.sql
├── front/
│   ├── public/
│   ├── App.jsx
│   └── Cart.jsx
└── README.md
```


## 📁 Description des dossiers

- **back/src/** : Contient la logique serveur et la gestion des routes.
- **back/src/controller/** : Contrôleurs traitant les requêtes et appellent les modèles.
- **back/src/datamappers/** : Gestion des interactions avec la base de données.
- **back/src/public/** : Fichiers statiques (CSS, images, JS).
- **back/src/public/js:react** : Contient le JS compilé de React.
- **back/src/router/** : Définition des routes de l’application.
- **back/src/views/** : Intégration et templates de pages HTML
- **back/src/config/** : Fichiers de configuration.
- **index.js** : Point d’entrée principal du serveur Node.js.
- **front/src/** : Contient la logique React et le composant Cart.jsx

## 🛠️ Dépoiement 

Le déploiement a été effectué sur Render, ainsi que sur Neon via un upload du backup de la base de données locale qui aura été modifiée en vue de l'extension du projet.

## ⚠️ En cours ⚠️

Il reste un peu de code de sécurité dû a l'encien projet ! 
Penser a nettoyer tout ça lors de l'extension du projet.  

## 📌 Auteur

[Nicolas Dorwald](https://github.com/NicolasDorwald)