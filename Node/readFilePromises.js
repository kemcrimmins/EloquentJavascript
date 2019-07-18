const {readFile} = require("fs").promises;
readFile("file.txt", "utf8")
  .then(text => console.log("the file contains:", text));
