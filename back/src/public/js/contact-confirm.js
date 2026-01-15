document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (!form || !formMessage) return;

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
                formMessage.className = "success"; // ✅ ajout de la classe success
                formMessage.style.opacity = 0; // préparation pour fade-in
                formMessage.style.display = "block";

                // fade-in
                setTimeout(() => formMessage.style.opacity = 1, 10);

                form.reset();

                // fade-out et disparition après 4 secondes
                setTimeout(() => {
                    formMessage.style.opacity = 0;
                    setTimeout(() => {
                        formMessage.style.display = "none";
                        formMessage.className = "";
                        formMessage.textContent = "";
                    }, 500); // temps pour fade-out
                }, 4000);

            } else {
                formMessage.textContent = "❌ Erreur lors de l’envoi.";
                formMessage.className = "error";
                formMessage.style.display = "block";
            }
        } catch {
            formMessage.textContent = "❌ Problème réseau.";
            formMessage.className = "error";
            formMessage.style.display = "block";
        }
    });
});