import Client from '#models/client';
import fs from 'fs'
import { parse } from "csv-parse"
class FileUploadService {

  async store(csv: any)  {
    
    try {
        fs.createReadStream(csv.tmpPath).pipe(parse({ delimiter: ",", from_line: 1 }))
        .on("data", function (row) {
            Client
            .create({
                number: row[0],
                city: row[1]
            })
        })
        .on("error", function (error) {
            console.log(error.message);
        })
        .on("end", function () {
            console.log("finished");
        });
    } catch (error) {
        return false
    }

    return true
  }
}

export default new FileUploadService()
