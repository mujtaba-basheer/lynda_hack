const fs = require("fs");
const download = require("download");

const links = require("./links");
const titles = require("./titles");

console.log("Initializing download...");

let memo = 0;
if (process.argv[2]) {
    memo = process.argv[2] - 1;
}

const download_file = async (link, path) => {
    return new Promise(async (res) => {
        // download(link).pipe(fs.createWriteStream(path));

        fs.writeFile(path, await download(link), () => res(true));
    });
};

const start = () => {
    return new Promise(async (res) => {
        const len = links.length;
        for (let i = memo; i < len; i++) {
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
        res(true);
    });
};

if (links.length == titles.length) {
    start().then((completed) => {
        if (completed) {
            console.log("Run 'node clean.js' to structre the files correctly");
        }
    });
} else {
    console.log("Oops, there was an error!");
}
