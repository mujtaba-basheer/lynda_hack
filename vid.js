const fs = require("fs");
const download = require("download");

const links = require("./links");
const titles = require("./titles");

console.log("Initializing download...");

const download_file = async (link, path) => {
    return new Promise(async (res) => {
        // download(link).pipe(fs.createWriteStream(path));

        fs.writeFile(path, await download(link), () => res(true));
    });
};

const start = async () => {
    const len = links.length;
    for (let i = 0; i < len; i++) {
        const path = "videos/" + `${titles[i]}` + ".mp4";
        try {
            const status = await download_file(links[i], path);
            if (status) {
                console.log(`downloaded - [${i + 1}/${len}]`);
            }
        } catch (error) {
            console.error(error);
        }
    }
};

if (links.length == titles.length) {
    start();
    console.log("Run 'node clean.js' to structre the files correctly");
} else {
    console.log("Oops, there was an error!");
}
