//importing file system object.
const fs = require('fs');

// function to delete the file by path
const DeleteFileByPath =  (filePath) => {
    fs.unlink(filePath , (err) => {
        if(err) throw (err);
    })
}

module.exports = {
    DeleteFileByPath
}