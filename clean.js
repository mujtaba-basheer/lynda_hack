const fs = require("fs");
const structure = require("./structure");

const createFolders = () => {
    structure.forEach((section) => {
        const folderName = section.title;
        fs.mkdir(`course/${folderName}`, {}, console.error);
    });
};

const moveFiles = () => {
    structure.forEach((section) => {
        const folderName = section.title;
        section.videos.forEach((vidFile, index) => {
            const { id, title } = vidFile;
            const num = index + 1 < 10 ? "0" + (index + 1) : index + 1 + "";
            fs.rename(
                `videos/${id}.mp4`,
                `course/${folderName}/${num}.${title}.mp4`,
                console.error
            );
        });
    });
};

createFolders();
moveFiles();
