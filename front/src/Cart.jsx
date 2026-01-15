import React, { useEffect, useState } from "react";


export default function Cart() {
  // ---------------------------
  // State pour stocker le panier
  // ---------------------------
  const [cartItems, setCartItems] = useState([]);

  // ----------------------------------------
  // Charger le panier depuis le localStorage
  // au chargement du composant
  // ----------------------------------------
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // ----------------------------------------
  // Mettre à jour le panier (state + localStorage)
  // ----------------------------------------
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // ----------------------------------------
  // Modifier la quantité d’un produit
  // ----------------------------------------
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // on ne peut pas mettre moins de 1
    const newCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Number(quantity) };
      }
      return item;
    });
    updateCart(newCart);
  };

  // ----------------------------------------
  // Supprimer un produit du panier
  // ----------------------------------------
  const handleRemove = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
    updateCart(newCart);
  };

  // ----------------------------------------
  // Calculer le total du panier
  // ----------------------------------------
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ----------------------------------------
  // Rendu JSX
  // ----------------------------------------
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map(item => (
            <div className="cart-row" key={item.id}>
              {/* Nom du produit */}
              <div className="cart-cell">{item.name}</div>

              {/* Prix unitaire */}
              <div className="cart-cell">{item.price.toFixed(2)} €</div>

              {/* Quantité modifiable */}
              <div className="cart-cell">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              {/* Total par produit */}
              <div className="cart-cell">{(item.price * item.quantity).toFixed(2)} €</div>

              {/* Bouton supprimer */}
              <div className="cart-cell">
                <button onClick={() => handleRemove(item.id)} className="btn-remove">
                  Supprimer
                </button>
              </div>
            </div>
          ))}

          {/* Total général */}
          <div className="cart-total">
            Total : {total.toFixed(2)} €
          </div>
        </div>
      )}

      {/* Bouton payer */}
      <button className="btn-pay" disabled={cartItems.length === 0}>
        Payer
      </button>
    </div>
  );
}
