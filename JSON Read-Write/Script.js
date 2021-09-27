import { appendFile, readFileSync, writeFileSync } from "fs";

let emp = {
  name: "Pratik",
  age: 28,
  technology: "WebApp with react",
  company: "Happiest Minds",
  location: "Banglore",
};

let empData = JSON.stringify(emp, null, 2);

appendFile("updatedJSON.json", empData, (err) => {
  if (err) throw err;
  console.log("Data written to new file");
});

const doc = readFileSync("data.json");
const toString = doc.toString(); // convert to string
const data = JSON.parse(toString); // string to object
console.log(data);

function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

writeFileSync("convertedToCSV.csv", convertToCSV(data), (err) => {
  if (err) throw err;
  console.log("Data written to new file");
});
