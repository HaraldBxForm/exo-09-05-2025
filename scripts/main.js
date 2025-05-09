// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs
const inputDescription = document.querySelector(`.input-text`);
const inputNumber = document.querySelector(`.input-number`);
const inputCategory = document.querySelector(`.input-select`);
const addButton = document.querySelector(`.add-button`);

// Display
const displayedDépenses = document.querySelector(`.displayed-list`);
const totalAmmount = document.querySelector(`.total-ammount`);
const displayedCategory = document.querySelector(`.displayed-category`)

// ==============================
// 🧠 Variables globales
// ==============================

// Liste des dépenses
const Dépenses = [];

// Total
let total = 0;

// Date du jour formatée
const formatedDate = new Date().toLocaleDateString('fr-FR');

// ==============================
// 🎊 Fonctionnalités
// ==============================

// Ajouter une nouvelle dépense
function addElementToDépenses() {
    // Vérifier que tous les champs sont remplis
    if (!inputDescription.value.trim() || !inputNumber.value.trim() || inputCategory.value === '') {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Ajout des dépenses à la liste "Dépenses"
    Dépenses.push([inputDescription.value, inputNumber.value, inputCategory.value, formatedDate]);

    console.log(Dépenses);
    
    // Reset les champs
    inputDescription.value = ``;
    inputNumber.value = ``;
    inputCategory.value = '';

}

// Afficher les dépenses
function displayDépenses() {
    // Display reset
    displayedDépenses.innerHTML = ``;
    totalAmmount.innerHTML = ``;

    let total = 0;
    Dépenses.forEach((Dépense, index) => {

        // Afficher la liste des dépenses
        // displayedDépenses.innerHTML += `<div class="displayed-list-element">
        // ${Dépense[1]}€ ${Dépense[0]} ${Dépense[2]} ${formatedDate}
        // <div class="delete-button" data-index="${index}">❌</div>
        // </div>`

        const catogoryContainer = document.querySelector(`.${Dépense[2]}`);
        if (catogoryContainer) {
            catogoryContainer.innerHTML += `<div class="displayed-list-element">
            ${Dépense[1]}€ ${Dépense[0]} ${Dépense[2]} ${formatedDate}
            <div class="delete-button" data-index="${index}">❌</div>
            </div>`
        }

        console.log(`${Dépense[2]}`);
        
        console.log(document.querySelector(`.${Dépense[2]}`));
        

        // Afficher le total
        total += Number(Dépense[1]);
    });

    totalAmmount.innerHTML += `Total = ${total} €`
}

// Supprimer une dépense
function deleteDépense(index) {

    let ammount = parseFloat(Dépenses[index][1]);
    Dépenses.splice(index, 1);
    total -= ammount;

    displayDépenses();
}

// ==============================
// 🧲 Événements
// ==============================
addButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Ajouter les dépénses
    addElementToDépenses();

    // Afficher la liste des dépenses
    displayDépenses();
  });

displayedDépenses.addEventListener(`click`, function(e) {
    if (e.target.matches(`.delete-button`)) {
        let index = e.target.dataset.index;
        deleteDépense(index);
    }
})