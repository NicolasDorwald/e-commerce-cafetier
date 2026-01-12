import { pgPool } from '../config/pgPool.js'

const dataMappers = {
    
    async getAllCoffees(sort) {
        try {
          let query = 'SELECT * FROM coffees ORDER BY name ASC';
      
          if (sort) {
            const order = sort.toLowerCase() === 'desc' ? 'DESC' : 'ASC';
            query = `SELECT * FROM coffees ORDER BY price ${order}`; 
          }
      
          const allCoffees = await pgPool.query(query);
          return allCoffees.rows;
        } catch (error) {
          console.error("Erreur SQL :", error);
          return [];
        }
      },

    async getOneCoffee(id) {
        try {
            const oneCoffee = await pgPool.query("SELECT * FROM coffees WHERE id = $1", [id]);
            return oneCoffee.rows[0]; 
        } catch (error) {
            console.error("Erreur SQL :", error);
        }
    }

}

export default dataMappers;
