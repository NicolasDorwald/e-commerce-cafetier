import express from "express";
import mainController from "../controllers/maincontroller.js";

export const router = express.Router();

router.get("/", mainController.getRandomCoffees);

router.get("/catalog", mainController.getCoffeesList);  

router.get("/company", (req, res) => {
    res.render("entreprise");});

router.get("/article/:id", mainController.getOneCoffee);

router.get("/contact", (req, res) => {
    res.render("contact");});

// router.post('/contact', (req, res) => {
//     récupérer req.body et envoyer un email en local, Formspree fait le job mantenant
// });

router.use((req, res) => {
    res.status(404).render('error', { message: "Page non trouvée" });
});