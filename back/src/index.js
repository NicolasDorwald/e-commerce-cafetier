import express from 'express';
import path from "path"; 
import dotenv from 'dotenv';
import csrf from "csurf";
import { router } from './router/router.js';
import session from "express-session";
import { fileURLToPath } from "url"; 

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- Vues ---
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// --- Fichiers statiques ---
app.use(express.static(path.join(__dirname, "public")));

// --- Middleware de parsing ---
app.use(express.urlencoded({ extended: true }));

// --- Middleware session (nécessaire pour csurf) ---
app.use(session({
    secret: process.env.SESSION_SECRET || "unsecretpardefault",
    resave: false,
    saveUninitialized: true
}));

// --- Middleware CSRF ---
const csrfProtection = csrf();
app.use(csrfProtection);

// --- Rendre le token accessible dans toutes les vues ---
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// --- Router principal ---
app.use(router);

// --- Lancement du serveur ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
// 