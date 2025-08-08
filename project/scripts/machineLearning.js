// Get current year and populate the copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", function () {
    const hamburguer = document.querySelector(".hamburguer");
    const menu = document.querySelector(".nav-menu ul");

    if (hamburguer && menu) {
        hamburguer.addEventListener("click", function () {
            menu.classList.toggle("active");
            hamburguer.textContent = menu.classList.contains("active") ? "✖" : "☰";
        });
    }

    // Get Started redirect
    const startNowButton = document.querySelector(".startNow");
    if (startNowButton) {
        startNowButton.addEventListener("click", function () {
            window.location.href = "resources.html#beginner";
        });
    } else {
        console.warn("Get Started button not found in the DOM");
    }
});

// Initialize entries array
let studyEntries = JSON.parse(localStorage.getItem('studyEntries')) || [];

// Function to save entries
function saveEntry(entryObject) {
    studyEntries.push(entryObject)
    localStorage.setItem('studyEntries', JSON.stringify(studyEntries));
}

// Function to display entries
function displayEntries(entries) {
    // Selecting container of logs
    const container = document.querySelector("#studyLogs");

    // Clearing the container
    container.innerHTML = "";

    // Loop through each entry in the array
    entries.forEach(entry => {
        const logDiv = document.createElement("div");
        logDiv.classList.add("log-entry");

        // Inner HTML
        logDiv.innerHTML = `
        <h3>${entry.topic}</h3>
        <p>Date: ${entry.date}</p>
        <p>Notes: ${entry.notes}</p>
        <p>Feeling: ${entry.feeling}</p>
        <div class="tags">
            ${entry.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        `;

        container.appendChild(logDiv);

    });
}

// Function to filter entries
function filterEntries() {
    const keyword = searchKeyword.value.toLowerCase();
    const selectedTag = tagFilter.value;

    const filteredEntries = studyEntries.filter(entry => {
        const matchesKeyword = entry.topic.toLowerCase().includes(keyword) || entry.notes.toLowerCase().includes(keyword);
        const matchesTag = selectedTag === 'All' || entry.tags.includes(selectedTag);
        return matchesKeyword && matchesTag;
    });

    displayEntries(filteredEntries);
}

// Form submission
const studyEntryForm = document.querySelector('#study-form');
const searchKeyword = document.querySelector('#searchKeyword');
const tagFilter = document.querySelector('#tagFilter');

if (studyEntryForm) {
    studyEntryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const tags = Array.from(document.querySelectorAll('input[name="entryTags"]:checked')).map(checkbox => checkbox.value);
        if (tags.length === 0) {
            alert('Please select at least one tag.');
            return;
        }

        // Create new entry
        const entry = {
            date: document.querySelector('#logDate').value,
            topic: document.querySelector('#topics').value,
            notes: document.querySelector('#comments').value,
            feeling: document.querySelector('#entryFeeling').value,
            tags: tags
        };

        // Debug log
        console.log('Form submitted, entry:', entry);
        // Save and update
        saveEntry(entry);
        displayEntries(studyEntries);
        studyEntryForm.reset();
        alert('Entry saved successfully!');
    });
}

// Event listeners for filters
if (searchKeyword && tagFilter) {
    searchKeyword.addEventListener('input', filterEntries);
    tagFilter.addEventListener('change', filterEntries);
}

// Display
if (document.querySelector('#studyLogs')) {
    displayEntries(studyEntries);
}
