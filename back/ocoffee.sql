-- =========================================================
-- Base de données O-Coffee
-- Création des tables et insertion des cafés
-- =========================================================

-- 1️⃣ Table cafés
CREATE TABLE IF NOT EXISTS cafes (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    reference VARCHAR(50),
    origine VARCHAR(50),
    prix_kg NUMERIC(6,2),
    caracteristique VARCHAR(50),
    disponible BOOLEAN
);

-- Insertion des cafés
INSERT INTO cafes (nom, description, reference, origine, prix_kg, caracteristique, disponible) VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 'Italie', 20.99, 'Corsé', true),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 'Colombie', 18.75, 'Acide', true),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 'Éthiopie', 22.50, 'Fruité', true),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 'Brésil', 17.80, 'Doux', true),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 'Guatemala', 21.25, 'Corsé', true),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 'Kenya', 23.70, 'Acide', true),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 'Indonésie', 19.95, 'Corsé', true),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 'Costa Rica', 24.50, 'Acide', true),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 'Vietnam', 16.75, 'Épicé', true),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 'Tanzanie', 26.80, 'Fruité', true),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 'Jamaïque', 39.25, 'Doux', true),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 'Rwanda', 21.90, 'Fruité', true),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 'Panama', 42.00, 'Fruité', true),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 'Pérou', 19.40, 'Chocolaté', false),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 'Hawaï', 55.75, 'Doux', false),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 'Nicaragua', 28.60, 'Fruité', false),
('Indian Monsooned Malabar', 'Café aux grains gonflés par la mousson, avec des notes douces et terreuses.', '701234567', 'Inde', 25.00, 'Doux', true),
('Yemen Mocha', 'Café complexe aux arômes chocolatés et acidité modérée.', '701234568', 'Yémen', 35.00, 'Chocolaté', true),
('Tahitian Vanilla', 'Café aromatisé naturellement à la vanille, doux et parfumé.', '701234569', 'Tahiti', 30.50, 'Doux', true);

-- 2️⃣ Table clients
CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(100) NOT NULL
);

-- 3️⃣ Table commandes
CREATE TABLE IF NOT EXISTS commandes (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id),
    cafe_id INT REFERENCES cafes(id),
    quantite INT NOT NULL,
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
