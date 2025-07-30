// Get current year and populate the copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate the last modified paragraph
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;

// Hamburger menu toggle functionality
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Medford Oregon",
        location: "Oregon, United States",
        dedicated: "2000, April, 16",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/medford-oregon-temple/medford-oregon-temple-51593-thumb.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Illinois, United States",
        dedicated: "1846, May, 1",
        area: 50000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-3058-thumb.jpg"
    },
    {
        templeName: "San Salvador El Salvador",
        location: "San Salvador, El Salvador",
        dedicated: "2011, August, 21",
        area: 27986,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-salvador-el-salvador-temple/san-salvador-el-salvador-temple-3965-thumb.jpg"
    },
];

// Function to create and display temple cards
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';

    // HTML content for the card
    card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    return card;
}

// Function to display all temples
function displayTemples(templeList) {
    const container = document.querySelector('.temple-grid');
    
    // Clear existing content
    container.innerHTML = '';

    // Create and append each temple card
    templeList.forEach(temple => {
        const templeCard = createTempleCard(temple);
        container.appendChild(templeCard);
    });

}

// Filter functionality
function filterOldTemples() {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900; // Filter for temples dedicated before the year 1900
    });
    displayTemples(oldTemples);
}

function filterNewTemples() {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year >= 2000; // Filter for temples dedicated in or after the year 2000
    });
    displayTemples(newTemples);
}

function filterLargeTemples() {
    const largeTemples = temples.filter(temple => temple.area > 90000); // Filter for temples larger than 50,000 sq ft
    displayTemples(largeTemples);
}

function filterSmallTemples() {
    const smallTemples = temples.filter(temple => temple.area <= 10000); // Filter for temples 50,000 sq ft or smaller
    displayTemples(smallTemples);
}

function showAllTemples() {
    displayTemples(temples); // Show all temples
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    // Navigation links
    const homeLink = document.querySelector('a[href="home.html"]');
    const oldLink = document.querySelector('a[href="Old.html"]');
    const newLink = document.querySelector('a[href="New.html"]');
    const largeLink = document.querySelector('a[href="Large.html"]');
    const smallLink = document.querySelector(' a[href="Small.html"]');

    // Display all temples
    displayTemples(temples);

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showAllTemples();
    });

    oldLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterOldTemples();
    });

    newLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterNewTemples();
    });

    largeLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterLargeTemples();
    });

    smallLink.addEventListener('click', (e) => {
        e.preventDefault();
        filterSmallTemples();
    });

});