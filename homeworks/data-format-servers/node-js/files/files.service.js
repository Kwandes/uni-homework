import * as csv from "csvtojson";
import fs from "fs";
import * as yaml from "js-yaml";
import xml2js from "xml2js";

export class FilesService {
  /**
   * Return the json file
   */
  getJson() {
    const rawdata = fs.readFileSync("./files/constants/planets.json");
    return JSON.parse(rawdata);
  }

  getYaml() {
    const rawdata = fs.readFileSync("./files/constants/planets.yml");
    return yaml.load(rawdata);
  }

  async getXml() {
    // Each property is handled as if it was an array because XML is meh for this
    const rawdata = fs.readFileSync("./files/constants/planets.xml");
    let readData;
    await xml2js.parseString(rawdata, (err, result) => {
      if (err) {
        throw err;
      }
      readData = result.root.row;
    });
    return readData;
  }

  async getCsv() {
    // Loss of data types (everything is string) and nested arrays/objects
    csv({ delimiter: ";" })
      .fromFile("./files/constants/planets.csv")
      .then((jsonObj) => {
        return jsonObj;
      });
  }

  getTxt() {
    // Would require custom parser to get the nested array of objects
    const rawdata = fs.readFileSync("./files/constants/planets.txt");
    return rawdata.toString("utf8"); // doesn't work with tpye:module for some great amazing reason...
  }
}
