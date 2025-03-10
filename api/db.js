import  mysql from "mysql";
import "dotenv/config";


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
})