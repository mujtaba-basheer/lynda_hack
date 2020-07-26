const fs = require("fs");
const structure = require("./structure");

const root = process.argv[2] || "root";

const createRootFolder = () => {
    fs.mkdir(`course/${root}`, {}, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

const createFolders = () => {
    structure.forEach((section) => {
        const folderName = section.title
            .replace(":", " - ")
            .replace("/", " or ")
            .replace("?", "Q");
        fs.mkdir(`course/${root}/${folderName}`, {}, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
};

const moveFiles = () => {
    return new Promise((res) => {
        structure.forEach((section) => {
            const folderName = section.title
                .replace(":", " - ")
                .replace("/", " or ")
                .replace("?", "Q");
            section.videos.forEach((vidFile, index) => {
                let { id, title } = vidFile;
                title = title
                    .replace(":", " - ")
                    .replace("/", " or ")
                    .replace("?", "Q");
                const num = index + 1 < 10 ? "0" + (index + 1) : index + 1 + "";
                const fileName = num + ". " + title;
                fs.rename(
                    `videos/${id}.mp4`,
                    `course/${root}/${folderName}/${fileName}.mp4`,
                    (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                    }
                );
            });
        });
        res(true);
    });
};

createRootFolder();
createFolders();
moveFiles().then(() => console.log("\nYou're good to go :-)"));
