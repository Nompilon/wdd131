function calculateWindChill(tempC, windKmh) {
    const tempF = (tempC * 9 / 5) + 32;
    const windMph = windKmh * 0.621371;

    if (tempF > 50 || windMph <= 3) {
        return "N/A";
    }

    const windChillF = 35.74 + (0.6215 * tempF)
        - (35.75 * Math.pow(windMph, 0.16))
        + (0.4275 * tempF * Math.pow(windMph, 0.16));

    const windChillC = (windChillF - 32) * 5 / 9;
    return windChillC.toFixed(1) + "°C";
}

document.addEventListener("DOMContentLoaded", () => {
    // Static inputs:
    const tempC = 9;    // 9°C
    const windKmh = 7;  // 7 km/h

    const windChill = calculateWindChill(tempC, windKmh);
    document.getElementById("windchill").textContent = windChill;
});