import React, { useEffect, useState } from "react";
import './Cart.css';

export default function Cart() {
    // State pour stocker le panier
    const [cartItems, setCartItems] = useState([]);

    // Lire localStorage au chargement du composant
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    // Calculer le total
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-container">
        {cartItems.length === 0 ? (
            <p>Votre panier est vide.</p>
        ) : (
            <table className="cart-table">
            <thead>
                <tr>
                <th>Produit</th>
                <th>Prix (€)</th>
                <th>Quantité</th>
                <th>Total (€)</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                <td colSpan="3"><strong>Total général</strong></td>
                <td><strong>{total.toFixed(2)}</strong></td>
                </tr>
            </tfoot>
            </table>
        )}
        <button className="btn-pay" disabled>
            Payer
        </button>
        </div>
    );
}
