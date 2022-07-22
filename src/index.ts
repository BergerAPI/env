import path from "path";
import {EOL} from "os";
import fs from "fs";

/**
 * This simply checks if a char is alphabetic (a-zA-Z)
 * @param c the char to check
 */
function isAlphabetic(c: string): boolean {
    return c.length === 1 && c.match(/[a-z]/i) !== null;
}

/**
 * This is the function which does all the parsing and adds
 * all environment variables into `process.env`
 * @param file the file to parse the environment variables from
 */
export default function env(file: string = ".env") {
    const content = fs.readFileSync(path.resolve(process.cwd(), file))
        .toString("utf-8")

    for (const line of content.split(EOL).filter(l => l.trim().length > 0)) {
        let split = line.split("=");

        if (split.length !== 2 || !isAlphabetic(split[0][0])
            || Object.prototype.hasOwnProperty.call(process.env, split[0]))
            throw new Error("Failed parsing the env-file. Check if all keys start with an alphabetic character.")

        process.env[split[0]] = split[1]
    }
}