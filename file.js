const { writeFile, mkdir, readFileSync } = require('fs');
const { tmpdir } = require('os');
const path = require('path')

//const destDir = join(tmpdir(), 'movies');
const filename = "movies/movies.txt";
const message = "Chemin du fichier  : " + filename;

let fichier = readFileSync(path.join("/data", "/movies.json"));
let content = JSON.parse(fichier);

writeFile(filename, content, (err) => {
    if(err) console.log(err);
    console.log(message);
});


