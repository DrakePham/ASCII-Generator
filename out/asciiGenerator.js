"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figlet = require('figlet');
// Function to generate ASCII art
const generateASCIIArt = (text, font = 'Standard') => {
    return new Promise((resolve, reject) => {
        figlet.text(text, { font: font }, (err, data) => {
            if (err) {
                reject(`Error generating ASCII art: ${err.message}`);
            }
            else {
                resolve(data || '');
            }
        });
    });
};
const main = async () => {
    const text = "Hello World!";
    const font = "Slant"; // Specify font as a valid Fonts type
    try {
        const asciiArt = await generateASCIIArt(text, font);
        console.log(asciiArt);
    }
    catch (error) {
        console.error(error);
    }
};
main();
