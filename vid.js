const fs = require("fs");
const download = require("download");

const links = require("./links");
const titles = require("./titles");

console.log("Initializing download...");

const download_file = (link, path) => {
    // download(link).pipe(fs.createWriteStream(path));

    fs.writeFileSync(path, await download(link));
};

if (links.length == titles.length) {
    const len = links.length;
    for (let i = 0; i < len; i++) {
        console.log(`downloading - [${i + 1}/${len}]`);
        const path = "videos/" + `${titles[i]}` + ".mp4";
        download_file(links[i], path);
    }

    console.log("All files downloaded successfully!\n");
    console.log("Run 'node clean.js' to structre the files correctly")
} else {
    console.log("Oops, there was an error!");
}
