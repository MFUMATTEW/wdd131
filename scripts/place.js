function calculateWindChill(tempC, windKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
}

const temperature = 8; 
const windSpeed = 10; 

let windChillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(temperature, windSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("windchill").textContent = windChillValue;
});
