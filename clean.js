const fs = require("fs");
const structure = require("./structure");

let root = "root";
if (process.argv[2]) {
    root = process.argv[2]
        .replace(":", " - ")
        .replace("/", " or ")
        .replace("?", "Q");
}

const createRootFolder = () => {
    return new Promise((res, rej) => {
        fs.mkdir(`course/${root}`, {}, (err) => {
            if (err) {
                rej(err);
            } else {
                res();
            }
        });
    });
};

const createFolders = () => {
    const makeFolder = (folderName) => {
        return new Promise((res, rej) => {
            fs.mkdir(`course/${root}/${folderName}`, {}, (err) => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            });
        });
    };
    structure.forEach(async (section) => {
        const folderName = section.title
            .replace(":", " - ")
            .replace("/", " or ")
            .replace("?", "Q");
        try {
            await makeFolder(folderName);
        } catch (err) {
            console.error(err);
        }
    });
};

const removeFiles = () => {
    fs.copyFile("structure.js", `course/${root}/`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    const files = ["links", "titles", "structure"];
    files.forEach((fileName) => {
        fs.unlink(fileName + ".js", (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
};

const moveFiles = () => {
    const rename = (id, folderName, fileName) => {
        return new Promise((res, rej) => {
            fs.rename(
                `videos/${id}.mp4`,
                `course/${root}/${folderName}/${fileName}.mp4`,
                (err) => {
                    if (err) {
                        rej(err);
                    } else {
                        res();
                    }
                }
            );
        });
    };
    return new Promise((res) => {
        structure.forEach((section) => {
            const folderName = section.title
                .replace(":", " - ")
                .replace("/", " or ")
                .replace("?", "Q");
            section.videos.forEach(async (vidFile, index) => {
                let { id, title } = vidFile;
                title = title
                    .replace(":", " - ")
                    .replace("/", " or ")
                    .replace("?", "Q");
                const num = index + 1 < 10 ? "0" + (index + 1) : index + 1 + "";
                const fileName = num + ". " + title;
                try {
                    await rename(id, folderName, fileName);
                } catch (error) {
                    console.error(error);
                }
            });
        });
        res(true);
    });
};

(async () => createRootFolder())();
createFolders();
moveFiles().then(() => console.log("\nYou're good to go :-)"));
removeFiles();
