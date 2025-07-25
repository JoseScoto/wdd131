// Get current year and populate the copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate the last modified paragraph
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;

// Static data for the wind chill calculation
const temperature = 30;// Temperature in Celsius
const windSpeed = 5; // Wind speed in km/h

// Windchill function to calculate the wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return windChill = Math.round(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
    } else {
        return 'N/A';
    }
}

// Calculate wind chill and display it
const windChillValue = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').textContent = windChillValue === 'N/A' ? 'N/A' : windChillValue + '˚ C';