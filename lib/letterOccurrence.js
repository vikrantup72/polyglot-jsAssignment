function letterOccurrence() {
  letterOccurrence.prototype.find = function (string) {
    if (string === null || string === "") return string;
    var count = {};
    var resp = [];
    string.split("").forEach(function (s) {
      count[s] ? count[s]++ : (count[s] = 1);
    });
    for (res in count) {
      if (count[res] != 1 && res != " ") {
        resp.push(`${res}:${count[res]}`);
      }
    }
    return resp.join(",");
  };
}
module.exports = letterOccurrence;
