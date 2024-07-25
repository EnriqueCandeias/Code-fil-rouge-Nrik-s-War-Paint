window.addEventListener("scroll", function() {
    var footer = document.getElementById("myFooter");
    var windowHeight = window.innerHeight; // Hauteur de la fenêtre du navigateur
    var bodyHeight = document.body.clientHeight; // Hauteur totale du corps du document
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop; // Position de défilement actuelle

    // Détecte si l'utilisateur est arrivé en bas de la page
    if (windowHeight + scrollPosition >= bodyHeight) {
        footer.style.bottom = "0"; // Affiche le footer
    } else {
        footer.style.bottom = "-100px"; // Cache le footer
    }
});

window.addEventListener("scroll", checkFooterVisibility);
window.addEventListener("resize", checkFooterVisibility);
document.addEventListener("DOMContentLoaded", checkFooterVisibility);

function checkFooterVisibility() {
    var footer = document.getElementById("myFooter");
    var windowHeight = window.innerHeight; // Hauteur de la fenêtre du navigateur
    var bodyHeight = document.body.scrollHeight; // Hauteur totale du corps du document
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop; // Position de défilement actuelle

    // Si la hauteur du contenu est moins que la hauteur de la fenêtre, affiche le footer
    if (bodyHeight <= windowHeight) {
        footer.style.bottom = "0";
    } else {
        // Détecte si l'utilisateur est arrivé en bas de la page
        if (windowHeight + scrollPosition >= bodyHeight - 1) {
            footer.style.bottom = "0"; // Affiche le footer
        } else {
            footer.style.bottom = "-100px"; // Cache le footer
        }
    }
}


// Liste des armées avec leur nom, image et jeu associé
const armies = [
    { name: "Adepta Sororitas", image: "Icone, image etc/40 000/Adepta Sororitas/AdeptaSororitasv9.jpeg", game: "40K", link: "Outil-de-suivi/40K/Armée-Adepta-Sororitas.html" },
    { name: "Adepte Custodes", image: "Icone, image etc/40 000/Adepte Custodes/GardienDuPalaisImperial.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Adepte-Custodes.html" },
    { name: "Adeptus Mechanicus", image: "Icone, image etc/40 000/Adestus Mechanicus/AdeptusMechanicus.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Adeptus-Mechanicus.html" },
    { name: "Aeldari", image: "Icone, image etc/40 000/Aeldari/dainton-warhammer-40-000-eldar-aeldari-eldars-32w8.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Aeldari.html" },
    { name: "Agents de l'Imperium", image: "Icone, image etc/40 000/Agents de l'Imperium/jp4n8odoudh61.png", game: "40K", link: "Outil-de-suivi/40K/Armée-Agents-de-l'imperium.html" },
    { name: "Astra Militarum", image: "Icone, image etc/40 000/Astra Militarum/w3bip6sr6uea1.png", game: "40K", link: "Outil-de-suivi/40K/Armée-Astra-Militarum.html" },
    { name: "Black Templars", image: "Icone, image etc/40 000/Black Templars/db1gntq-777e197a-f792-4d4e-9170-2134e62a2cd0.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Black-Templars.html" },
    { name: "Blood Angels", image: "Icone, image etc/40 000/Blood Angels/blood_angels_by_taz_mar_deqr8nk-fullview.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Blood-Angels.html" },
    { name: "Cultes Genestealers", image: "Icone, image etc/40 000/Cultes Genestealers/Genestealers.webp", game: "40K", link: "Outil-de-suivi/40K/Armée-Cultes-Genestealers.html" },
    { name: "Dark Angels", image: "Icone, image etc/40 000/Dark Angels/dark_angels_by_taz_mar_denm308-fullview.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Dark-Angels.html" },
    { name: "Death Watch", image: "Icone, image etc/40 000/Death Watch/233a371ed010f8371e8bc78f12a60002.png", game: "40K", link: "Outil-de-suivi/40K/Armée-Death-Watch.html" },
    { name: "Death Guard", image: "Icone, image etc/40 000/Death Guard/4ee2eb27fcc861a7d204354ec6563183.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Death-Guard.html" },
    { name: "Démons du Chaos", image: "Icone, image etc/40 000/Démons du Chaos/7d761ceb018f921f1c687fd39ae07b56.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Démons-du-Chaos.html" },
    { name: "Drukhari", image: "Icone, image etc/40 000/Drukhari/drukhari_raider_by_darko_stojanovic_art_dfxtmmg-fullview.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Drukhari.html" },
    { name: "Grey Knights", image: "Icone, image etc/40 000/Grey Knights/0c100be87fc47877931ad63e0798edd3.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Grey-Knights.html" },
    { name: "Imperial Fists", image: "Icone, image etc/40 000/Imperial Fists/dgnqdp1-18294c85-0296-4071-bcc4-c60862702c19.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Imperial-Fists.html" },
    { name: "Imperial Knights", image: "Icone, image etc/40 000/Imperial Knights/Imperial-Knights-768x546.jpg.webp", game: "40K", link: "Outil-de-suivi/40K/Armée-Imperial-Knights.html" },
    { name: "Iron Hands", image: "Icone, image etc/40 000/Iron Hands/Iron-Hands-1-768x913.jpg.webp", game: "40K", link: "Outil-de-suivi/40K/Armée-Iron-Hands.html" },
    { name: "Leagues of Votann", image: "Icone, image etc/40 000/Leagues of Votann/warhammer-40k-leagues-of-votann-void-heading-550x309.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-League-of-Votann.html" },
    { name: "Necrons", image: "Icone, image etc/40 000/Necrons/ec8706b50395fbcd8fb6482e6cc8950b.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Necrons.html" },
    { name: "Orks", image: "Icone, image etc/40 000/Orks/Orkboyz.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Orks.html" },
    { name: "Raven Guard", image: "Icone, image etc/40 000/Raven Guard/800px-RavenGuardCouverture.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Raven-Guard.html" },
    { name: "Salamanders", image: "Icone, image etc/40 000/Salamanders/warhammer-40k-salamanders-deathfire.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Salamanders.html" },
    { name: "Space Marines", image: "Icone, image etc/40 000/Space Marines/Crimson-Fists-500x625.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Space-Marines-du-Chaos.html" },
    { name: "Space Marines du Chaos", image: "Icone, image etc/40 000/Space Marines du Chaos/151-23-11-9-13-11-9m.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Space-Marines-du-Chaos.html" },
    { name: "Space Wolves", image: "Icone, image etc/40 000/Space Wolves/f276fc22389041.56311e4c340ea.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Space-Wolves.html" },
    { name: "Thousand Sons", image: "Icone, image etc/40 000/Thousand Sons/ThousandSons.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Thousand-Sons.html" },
    { name: "Tyranids", image: "Icone, image etc/40 000/Tyranids/Tyranids.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Tyranids.html" },
    { name: "T'au Empire", image: "Icone, image etc/40 000/T'au Empire/New40kDamoclesTauLanding.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-T'au-Empire.html" },
    { name: "Ultramarines", image: "Icone, image etc/40 000/Ultramarines/wh_40k_ultramarine_by_faroldjo_db5d6xz-fullview.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-Ultramarines.html" },
    { name: "White Scars", image: "Icone, image etc/40 000/White Scars/28o26k82cun81.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-White-Scars.html" },
    { name: "World Eaters", image: "Icone, image etc/40 000/World Eaters/Buthcerhorde01.jpg", game: "40K", link: "Outil-de-suivi/40K/Armée-World-Eaters.html" },
    { name: "Beasts of Chaos", image: "Icone, image etc/Age of Sigmar/Illustration Beasts of chaos/Brayherd_01.webp", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Beasts-of-Chaos.html" },
    { name: "Blades of Khorne", image: "Icone, image etc/Age of Sigmar/Illustration Blades of khorne/BladesofKhorne.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Blades-of-Khorne.html" },
    { name: "Cities of Sigmar", image: "Icone, image etc/Age of Sigmar/Illustration Cities of Sigmar/CitiesofSigmar.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Cities-of-Sigmar.html" },
    { name: "Daughters of Khaine", image: "Icone, image etc/Age of Sigmar/Illustration Daughters of Khaine/6f9834f6cb7c693025251dad552d054b.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Daughters-of-Khaine.html" },
    { name: "Disciples of Tzeentch", image: "Icone, image etc/Age of Sigmar/Illustration Disciples of Tzeentch/w1vfwcFKmvnLS2HVIuuwMtWmD5W2UShsGHKl5eURKE8.webp", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Disciples-of-Tzeentch.html" },
    { name: "Flesh-eater Courts", image: "Icone, image etc/Age of Sigmar/Illustration Flesh-eater courts/Age-of-sigmar-artwork-flesheaters-courts-horde.webp", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Flesh-eater-Courts.html" },
    { name: "Fyreslayers", image: "Icone, image etc/Age of Sigmar/Illustration Fyreslayers/Fyreslayers.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Fyreslayers.html" },
    { name: "Gloomspite Gitz", image: "Icone, image etc/Age of Sigmar/Illustration Gloomspite Gitz/Gloomspite_Gitz_01.jpeg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Gloomspite-Gitz.html" },
    { name: "Hedonites of Slaanesh", image: "Icone, image etc/Age of Sigmar/Illustration Hedonites of Slaanesh/cilZdybWCR9jOK_RV_qx2UtFGzaeQe0PC6eIYzPlRE0.webp", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Hedonites-of-Slaanesh.html" },
    { name: "Idoneth Deepkin", image: "Icone, image etc/Age of Sigmar/Illustration Idoneth Deepkin/IdonethDeepkin.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Idoneth-Deepkin.html" },
    { name: "Kharadron Overlords", image: "Icone, image etc/Age of Sigmar/Illustration Kharadron Overlords/5a42235b68ec3fbe78cdf9bc7a20dc67.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Kharadron-Overlords.html" },
    { name: "Lumineth Realm lords", image: "Icone, image etc/Age of Sigmar/Illustration Lumineth Realm-lords/ER4QTmk39cq1oKBf.png", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Lumineth-Realms-lords.html" },
    { name: "Maggotkin of Nurgle", image: "Icone, image etc/Age of Sigmar/Illustration Maggotkin of Nurgle/johan-grenier-nurgle-sketches15.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Maggotkin-of-Nurgle.html" },
    { name: "Nighthaunt", image: "Icone, image etc/Age of Sigmar/Illustration Nighthaunt/550px-Nighthaunt_3.jpeg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Nighthaunt.html" },
    { name: "Ogor Mawtribes", image: "Icone, image etc/Age of Sigmar/Illustration Ogor Mawtribes/ogor1.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Ogor-Mawtribes.html" },
    { name: "Orruk Warclans", image: "Icone, image etc/Age of Sigmar/Illustration Orruk Warclans/johan-grenier-sketch-14.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Orruk-Warclans.html" },
    { name: "Ossiarch Bonereapers", image: "Icone, image etc/Age of Sigmar/Illustration Ossiarch Bonereapers/869bad1dee5888c6aea86d4e597ad993.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Ossiarch-Bonereapers.html" },
    { name: "Seraphon", image: "Icone, image etc/Age of Sigmar/Illustration Seraphon/seraphon2.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Seraphon.html" },
    { name: "Skaven", image: "Icone, image etc/Age of Sigmar/Illustration Skaven/47g3oc6fsww11.webp", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Skaven.html" },
    { name: "Slaves to Darkness", image: "Icone, image etc/Age of Sigmar/Illustration Slaves to Darkness/Warriors_of_chaos.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Slaves-to-Darkness.html" },
    { name: "Sons of Behemat", image: "Icone, image etc/Age of Sigmar/Illustration Sons of Behemat/billy-christian-sons-of-behemat-final2.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Sons-of-Behemat.html" },
    { name: "Soulblight Gravelords", image: "Icone, image etc/Age of Sigmar/Illustration Soulblight Gravelords/soul_blight_gravelords_cover_by_thomas_elliott_art_der9llp-fullview.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Soulblight Gravelords.html" },
    { name: "Stormcast Eternals", image: "Icone, image etc/Age of Sigmar/Illustration global age of sigmar/warhammer-age-of-sigmar-stormcast-eternals-lore-tactics-annihilator-artwork.webp", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Stormcast-Eternals.html" },
    { name: "Sylvaneth", image: "Icone, image etc/Age of Sigmar/Illustration Sylvaneth/Sylvaneth.jpg", game: "AOS", link: "Outil-de-suivi/AOS/Armée-Sylvaneth.html" },
    { name: "Orc du Mordor", image: "Icone, image etc/Illustration-Photo-Etc/Illustration de chaque faction/OrcMordor.jpg", game: "SDA", link: "Outil-de-suivi/SDA/Armée-Orc-du-mordor.html" },
    // Ajoutez d'autres armées selon vos besoins
];

// Fonction pour générer les cartes d'armées
function generateArmyCards() {
    const armyListElement = document.getElementById('armyList');
    armyListElement.innerHTML = ''; // Vide le contenu actuel pour éviter les duplications

    armies.forEach(army => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'mb-3');
        card.dataset.game = army.game; // Ajoute l'attribut data-game

        card.innerHTML = `
            <img src="${army.image}" class="card-img-top" alt="${army.name}">
            <div class="card-body">
                <h5 class="card-title">${army.name}</h5>
            </div>
        `;

        card.style.display = 'none'; // Masque initialement toutes les cartes
        armyListElement.appendChild(card);

        card.addEventListener('click', () => {
            window.location.href = army.link;
        });
        
    });
}

// Appel initial pour générer les cartes
generateArmyCards();

// Fonction pour filtrer les cartes par jeu sélectionné
function filterByGame() {
    const checkboxes = document.querySelectorAll('.game-checkbox');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const game = card.dataset.game; // Récupère le jeu de la carte
        let isVisible = false;

        checkboxes.forEach(checkbox => {
            const selectedGame = checkbox.dataset.game; // Récupère le jeu de la checkbox
            if (checkbox.checked && (selectedGame === "all" || selectedGame === game)) {
                isVisible = true;
            }
        });

        card.style.display = isVisible ? 'block' : 'none';
    });
}

// Réinitialiser les cases à cocher et l'affichage des cartes lors du retour en arrière
window.onpageshow = function(event) {
    if (event.persisted) {
        // Réinitialiser les cases à cocher
        document.querySelectorAll('.game-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        // Réinitialiser l'affichage des cartes
        filterByGame();
    }
};

// Gestion des événements change sur les checkboxes
document.querySelectorAll('.game-checkbox').forEach(input => {
    input.addEventListener('change', filterByGame);
});
