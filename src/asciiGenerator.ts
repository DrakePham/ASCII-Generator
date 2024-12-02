import  { Fonts } from 'figlet';
const figlet = require('figlet');

// Function to generate ASCII art
const generateASCIIArt = (text: string, font: Fonts = 'Standard'): Promise<string> => {
    return new Promise((resolve, reject) => {
        figlet.text(text, { font: font as Fonts }, (err, data) => {
            if (err) {
                reject(`Error generating ASCII art: ${err.message}`);
            } else {
                resolve(data || '');
            }
        });
    });
};


const main = async () => {
    const text = "Hello World!";
    const font: Fonts = "Slant"; // Specify font as a valid Fonts type

    try {
        const asciiArt = await generateASCIIArt(text, font);
        console.log(asciiArt);
    } catch (error) {
        console.error(error);
    }
};

main();
