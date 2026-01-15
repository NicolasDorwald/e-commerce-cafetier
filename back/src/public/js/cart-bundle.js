// Ajouter un café au panier (localStorage)
function addToCart(coffee) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Vérifie si le café est déjà dans le panier
    const existing = cart.find(item => item.id === coffee.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        coffee.quantity = 1;
        cart.push(coffee);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

// Capter tous les clics "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();

        const coffee = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: Number(button.dataset.price)
        };

        addToCart(coffee);

        // Pour tester : un petit alert
        showCartModal(coffee.name);

    });
});