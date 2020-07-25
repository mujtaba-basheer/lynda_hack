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
        section.videos.forEach((vidFile) => {
            const { id, title } = vidFile;
            fs.rename(
                `videos/${id}.mp4`,
                `course/${folderName}/${title}.mp4`,
                console.error
            );
        });
    });
};

createFolders();
moveFiles();
