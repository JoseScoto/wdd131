// Get current year and populate the copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="stars"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            // All stars are black by default
            radioButtons.forEach(r => {
                r.parentElement.style.color = '#03020080'; // Black
            });

            // Change stars color to red if selected
            this.parentElement.style.color = '#ff0505ff';
        });
    });
});

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the product select dropdown
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = `${product.name} (${product.averagerating} stars)`;
    productSelect.appendChild(option);
});