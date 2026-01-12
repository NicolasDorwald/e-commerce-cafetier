import dataMappers from '../datamappers/datamapper.js'; 
// import { contactSchema } from '../validators/contactValidator.js';
// import sanitizeHtml from 'sanitize-html';


const mainController = {

    async getCoffeesList(req, res) {
        try {
            const sort = req.query.sort; 
            const coffeesList = await dataMappers.getAllCoffees(sort);
            res.render('catalog', { coffeesList, sort });
            } catch (error) {
            console.error(error);
            res.status(500).send(`Erreur avec la base de données :\n${error.message}`);
            }
    },

    async getOneCoffee(req, res) {
        try {
            const id = req.params.id;
            const onlyOneCoffee = await dataMappers.getOneCoffee(id);
                if (onlyOneCoffee) {
                  res.render('article', { onlyOneCoffee });
                } else {
                  res.render('error')
                }
            } catch (error) {
            console.error(error);
            res.status(500).send(`Erreur avec la base de données :\n${error.message}`);
            }
    },

    async getRandomCoffees(req, res) {
        try {
            const coffeesList = await dataMappers.getAllCoffees();
            const randomCoffees = [];
            while (randomCoffees.length < 3) {
                const randomIndex = Math.floor(Math.random() * coffeesList.length);
                const coffee = coffeesList[randomIndex];
                if (!randomCoffees.includes(coffee)) {
                    randomCoffees.push(coffee);
                }
            }
            res.render('home', { randomCoffees , csrfToken: req.csrfToken() });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occurred: ${error.message}`);
        }
    },

    postContact(req, res) {
        const result = contactSchema.safeParse(req.body);
            if (!result.success) {
              return res.status(400).send("Données invalides");
            }
        // Désinfection XSS
        const name = sanitizeHtml(result.data.name);
        const email = sanitizeHtml(result.data.email);
        const message = sanitizeHtml(result.data.message);

        console.log("Message reçu :", { name, email, message });
        // Redirection vers une page dédiée après envoi
        res.redirect('/contact/confirmation');
    }

}

export default mainController;