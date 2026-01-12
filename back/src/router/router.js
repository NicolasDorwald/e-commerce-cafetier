import express from "express";
import mainController from "../controllers/maincontroller.js";

export const router = express.Router();

router.get("/", mainController.getRandomCoffees);
router.get("/catalog", mainController.getCoffeesList);   
router.get("/entreprise", (req, res) => {res.render("entreprise");});
router.get("/article/:id", mainController.getOneCoffee);
// router.post('/contact', mainController.postContact);
// router.get("/contact/confirmation", (req, res) => {res.render("contactConfirmation");});

router.use((req, res) => {
    res.status(404).render('error', { message: "Page non trouvée" });
});