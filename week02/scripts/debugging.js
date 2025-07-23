const radiousOutput = document.getElementById('radious');
const areaOutput = document.querySelector('area');

let area = 0;
const PI = 3.14159;

let radious = 10;
area = PI * radious * radious;
radiousOutput.textContent = radious;
areaOutput.textContent = area;

radious = 20;
area = PI * radious * radious;
radiousOutput = radious;
areaOutput = area;