const translations = {
    en: {
        about: "About François",
        bio: "François is an accomplished author known for his evocative prose...",
        latest_novel: "Latest Novel: \"Above the Waterline\"",
        novel_description: "\"Above the Waterline\" explores themes of love, loss...",
        contact: "Contact François"
    },
    fr: {
        about: "À propos de François",
        bio: "François est un auteur accompli, connu pour sa prose évocatrice...",
        latest_novel: "Dernier roman : \"Above the Waterline\"",
        novel_description: "\"Above the Waterline\" explore les thèmes de l'amour...",
        contact: "Contactez François"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.innerText = translations[lang][key];
    });
}

document.getElementById('languageSwitcher').addEventListener('change', (e) => {
    switchLanguage(e.target.value);
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    const form = e.target;

    // Send form data via AJAX
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset();
            document.getElementById('confirmationMessage').style.display = 'block';
        } else {
            alert("There was an issue submitting the form. Please try again.");
        }
    });
});
