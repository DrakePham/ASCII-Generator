"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
// Function to generate ASCII art
const generateASCIIArt = (text, font = 'Standard') => {
    return new Promise((resolve, reject) => {
        figlet_1.default.text(text, { font: font }, (err, data) => {
            if (err) {
                reject(`Error generating ASCII art: ${err.message}`);
            }
            else {
                resolve(data || '');
            }
        });
    });
};
// Example usage
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
//# sourceMappingURL=asciiGenerator.js.map