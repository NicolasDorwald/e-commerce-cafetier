// Sélection des éléments
const modal = document.getElementById('cart-modal');
const modalText = document.getElementById('cart-modal-text');

function showCartModal(coffeeName) {
    if (!modal || !modalText) return;

    modalText.textContent = `Le café "${coffeeName}" a bien été ajouté au panier`;

    modal.classList.remove('hidden');

    // Cache la modale après 2 secondes
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 2000);
}
