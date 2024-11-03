// Function to load translations based on the locale
function loadTranslations(locale) {

    // Update text based on the detected locale
    const path = window.location.pathname; // Gets the current page path
    
        if (translations[locale]) {
            const currentTranslations = translations[locale];
            
            // Iterate over each key in the current language's translations
            for (const [key, value] of Object.entries(currentTranslations)) {
                const element = document.getElementById(key);
                if (element) {
                    // Update text content for normal elements
                    if (element.tagName === 'A') {
                        element.href = value; // Set the href for link elements
                    } else if (element.tagName === 'IMG') {
                        element.src = value; // Set the src for image elements
                    } else {
                        element.innerText = value; // Update text content for other elements
                    }
                }
            }
        } else {
            console.warn(`No translations found for language: ${language}`);
        }

}





//---------------------------------------//
// Function get cookie value by name
//---------------------------------------//

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}


//---------------------------------------//
// Function set cookie with expiration time
//---------------------------------------//
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration in days
    document.cookie = `${name}=${value}; path=/; expires=${date.toUTCString()}`;
}


//---------------------------------------//
// Function detect and store locale 
//---------------------------------------//
function setUserLocale() {
    // Check if locale cookie is already set
    let locale = getCookie('locale');
    console.log("user locale 1 " + locale); 
    //console.log("path " + path);
    if (!locale) {
        // Get the user's locale from the browser
        const userLocale = navigator.language || navigator.userLanguage;
        
        // Determine which locale to store
        if (['fr-FR', 'en-GB'].includes(userLocale)) {
            locale = userLocale;
        } else {
            locale = 'en-US'; // Default locale
        }
        
        // Store the determined locale in a cookie for 1 year
        setCookie('locale', locale, 365);
    }

    // Load translations based on the stored locale
    loadTranslations(locale);
}



function changeLanguage(locale) {
    setCookie('locale', locale, 365);
    loadTranslations(locale);
}


//---------------------------------------//
// Run the locale check and translation load when the page loads
//---------------------------------------//

document.addEventListener('DOMContentLoaded', setUserLocale);

// Add click event listeners to each flag
document.querySelectorAll('.flag-selector span').forEach(flag => {
    flag.addEventListener('click', function() {
        const locale = this.getAttribute('data-lang');
        setCookie('locale', locale, 365);
        loadTranslations(locale);
    });
});

//---------------------------------------//
// Contact Form
//---------------------------------------//



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
            document.getElementById('contactForm').style.display = 'none';
        } else {
            alert("There was an issue submitting the form. Please try again.");
        }
    });
});


// Add click event listeners to each flag
//document.querySelectorAll('.flag-selector span').forEach(flag => {
//    flag.addEventListener('click', function() {
//        const locale = this.getAttribute('data-lang');
//        setCookie('locale', locale, 365);
//        loadTranslations(locale);
//    });
//});