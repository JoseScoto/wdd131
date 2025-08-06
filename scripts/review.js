document.addEventListener('DOMContentLoaded', function () {
    // localStorage to hold count of reviews
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount.toString());

    // Showing the counter 
    console.log(`Total reviews: ${reviewCount}`); 

    // Updating the dates
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});