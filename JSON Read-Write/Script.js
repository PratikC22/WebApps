import { appendFile, readFileSync, writeFileSync } from "fs";

let emp = {
  name: "Pratik",
  age: 28,
  technology: "WebApp with react",
  company: "Happiest Minds",
  location: "Banglore",
};

let empData = JSON.stringify(emp, null, 2);

//Appending more data to JSON file
appendFile("updatedJSON.json", empData, (err) => {
  if (err) throw err;
  console.log("Data written to new file");
});

const doc = readFileSync("data.json");
const toString = doc.toString(); // convert to string
const data = JSON.parse(toString); // string to object
console.log(data);


//Conversion of JSON to XML
function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}


//Creating new file with CSV data
writeFileSync("convertedToCSV.csv", convertToCSV(data), (err) => {
  if (err) throw err;
  console.log("Data written to new file");
});

//Conversion of JSON to XML
function convertToXML(obj) {
  var xml = "";
  for (var prop in obj) {
    xml += obj[prop] instanceof Array ? "" : "<" + prop + ">";
    if (obj[prop] instanceof Array) {
      for (var array in obj[prop]) {
        xml += "<" + prop + ">";
        xml += convertToXML(new Object(obj[prop][array]));
        xml += "</" + prop + ">";
      }
    } else if (typeof obj[prop] == "object") {
      xml += convertToXML(new Object(obj[prop]));
    } else {
      xml += obj[prop];
    }
    xml += obj[prop] instanceof Array ? "" : "</" + prop + ">";
  }
  var xml = xml.replace(/<\/?[0-9]{1,}>/g, "");
  return xml;
}


//Creating new file with XML data
writeFileSync("convertedToXML.xml", convertToXML(data), (err) => {
  if (err) throw err;
  console.log("Data written to new file");
});
