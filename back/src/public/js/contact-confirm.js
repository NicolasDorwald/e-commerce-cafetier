document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = new FormData(form);

        try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            formMessage.textContent = "✅ Message envoyé avec succès !";
            form.reset();           
            // ⏱️ disparaît après 4 secondes
            setTimeout(() => {
            formMessage.textContent = "";
            formMessage.className = "";
            }, 4000);

        } else {
            formMessage.textContent = "❌ Erreur lors de l’envoi.";
            formMessage.className = "error";
        }
        } catch {
            formMessage.textContent = "❌ Problème réseau.";
            formMessage.className = "error";
        }
    });
});
