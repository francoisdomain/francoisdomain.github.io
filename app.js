const translations = {
    en: {
        about: "About François",
        bio: "François Domain is a French-English writer, 50 years old, based in London for over 15 years. His latest work, Above the Waterline, is a brutally honest and heart-wrenching exploration of introspection. In this novel, and throughout his body of work, he delves into the fragility of human relationships, dissecting the inner turmoil of love in collapse. Domain’s style is a unique blend that sits at the crossroads of psychological thriller and detective fiction, yet it is always the characters who take center stage.",
        bio2: "Domain’s writing is driven by a deep passion for identity, self-discovery, and the inner struggles of human nature, themes that permeate all his narratives. His characters often play with the boundaries between love, sexuality, friendship, and everything in between, blurring the lines between stereotypes and a more modern, fluid approach to intimacy and relationships. In exploring these complex dynamics, he aims to challenge traditional conceptions of love and human connection, presenting multifaceted relationships that defy easy categorization.", 
        bio3: "In addition to his novels, several of Domain’s short stories have been published in various collections, including La Mèche Rebelle, a biting and incisive piece that imagines, with dark irony, the behind-the-scenes chaos in Boris Johnson’s office during the early days of Brexit.", 
        bio4: "Domain approaches his writing with the same methodical precision he applies to his career as a technical architect, constructing his narratives with an almost clinical accuracy. Fascinated by intricate plots, he weaves his stories like a puzzle where timelines intersect and every detail finds its place within the larger whole. This process has become a hallmark of his style: tales where the fragments of the past lock seamlessly into the present, and where each character’s choices echo long after they have been made. The result is a narrative depth that intertwines action with existential reflection, exploring the intersection of human connection and inner conflict, and pushing the boundaries of how love and identity can be portrayed in contemporary fiction.",
        coming_soon: "Coming Soon",
        waterline: "Above the Waterline",
        waterline_desc: "After twenty years of marriage, Edward’s life shatters when Mathilda announces she wants a divorce, sending him spiraling into a world of regret and self-recrimination. Fleeing to a remote island, he’s forced to confront the pieces of himself he’s long buried—his fear of time slipping away, his inability to let go of lost love, and the bitter truth that he’s been his own worst enemy. While an unexpected friendship with a group of young Swedes momentarily distracts him, the real battle is internal: a struggle to understand how he lost his way and whether there’s a chance to reclaim the man he once hoped to be. ",
        contact: "Contact François"

    },
    fr: {
        about: "À propos de François",
        bio: "François Domain est un écrivain franco-anglais de 50 ans, installé à Londres depuis plus de 15 ans. Son dernier ouvrage, Above the Waterline, est une exploration brutale et déchirante de l’introspection. Dans ce roman, comme dans l'ensemble de son œuvre, il se penche sur la fragilité des relations humaines, disséquant les tourments intérieurs de l’amour en pleine décomposition. Le style de Domain est un mélange unique, à la croisée du thriller psychologique et du roman policier, où ce sont toujours les personnages qui occupent le devant de la scène.", 
        bio2: "La plume de Domain est animée par une profonde passion pour l'identité, la découverte de soi et les luttes intérieures de la nature humaine, des thèmes qui traversent tous ses récits. Ses personnages jouent souvent avec les frontières entre amour, sexualité, amitié et tout ce qui se situe entre ces notions, brouillant les lignes entre les stéréotypes et une approche plus moderne et fluide de l'intimité et des relations. En explorant ces dynamiques complexes, il cherche à remettre en question les conceptions traditionnelles de l'amour et de la connexion humaine, en présentant des relations multifacettes qui défient toute catégorisation simpliste.", 
        bio3: "En plus de ses romans, plusieurs nouvelles de Domain ont été publiées dans diverses collections, dont La Mèche Rebelle, un texte incisif et mordant qui imagine, avec une ironie sombre, le chaos en coulisses dans le bureau de Boris Johnson au début du Brexit.", 
        bio4: "Domain aborde son écriture avec la même précision méthodique qu’il applique à sa carrière d'architecte technique, construisant ses récits avec une précision presque clinique. Fasciné par les intrigues complexes, il tisse ses histoires comme un puzzle où les lignes temporelles se croisent et où chaque détail trouve sa place dans l'ensemble plus vaste. Ce processus est devenu l'un des signes distinctifs de son style : des récits où les fragments du passé s'imbriquent harmonieusement dans le présent, et où les choix de chaque personnage résonnent bien après qu'ils ont été faits. Le résultat est une profondeur narrative qui entrelace l'action et la réflexion existentielle, explorant l'intersection entre la connexion humaine et le conflit intérieur, et repoussant les limites de la manière dont l'amour et l'identité peuvent être dépeints dans la fiction contemporaine.",
        coming_soon: "À paraitre",
        waterline: "La Glissade",
        waterline_desc: "Après vingt ans de mariage, la vie d'Edward s'effondre lorsque Mathilda lui annonce qu'elle veut divorcer, le plongeant dans un tourbillon de regrets et d'auto-flagellation. Fuyant vers une île isolée, il est contraint de faire face aux parties de lui-même qu'il avait longtemps enfouies — sa peur de voir le temps lui échapper, son incapacité à se détacher d'un amour perdu, et la vérité amère qu'il a toujours été son pire ennemi. Alors qu'une amitié inattendue avec un groupe de jeunes Suédois le distrait momentanément, le véritable combat reste intérieur : une lutte pour comprendre comment il a perdu son chemin et s'il existe encore une chance de retrouver l'homme qu'il avait autrefois espéré devenir.",
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
