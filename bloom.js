fs = require("fs");

function load(file) {
  // let wordsArr = "";
  let wordsArr = fs.readFileSync(`${file}`, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    wordsArr = data.split("\r\n");
    console.log(wordsArr.length);
    return wordsArr;
  });
  return wordsArr.length;
}

load("words");

module.exports = { load };
