// Contenu de outil-aos.js

document.addEventListener('DOMContentLoaded', function () {
    const figurineList = [
        { name: "Aspiring Deathbringer", image: "/Icone, image etc/Outil-suivi/AOS/Blades-of-Khorne/Aspiring-Deathbringer-avec-hache-gore-et-marteau-à-crâne.jpg", owned: false },
        { name: "Blood-Warriors", image: "/Icone, image etc/Outil-suivi/AOS/Blades-of-Khorne/Blood-Warriors.jpg", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        { name: "", image: "", owned: true },
        // Ajoute d'autres figurines selon tes besoins
    ];

    const figurineListElement = document.getElementById('figurineList');

    figurineList.forEach(figurine => {
        const card = document.createElement('div');
        card.classList.add('card-outil', 'col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'mb-3');

        card.innerHTML = `
            <img src="${figurine.image}" class="card-img-top" alt="${figurine.name}">
            <div class="card-body">
                <h5 class="card-title-outil">${figurine.name}</h5>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="${figurine.name.replace(/\s+/g, '')}" ${figurine.owned ? 'checked' : ''}>
                    <label class="form-check-label" for="${figurine.name.replace(/\s+/g, '')}">Je le possède</label>
                </div>
            </div>
        `;

        figurineListElement.appendChild(card);
    });
});
