import dotenv from 'dotenv';
import mysql from "mysql2";

dotenv.config(); //Caregaas variaveis do .env

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DATA = process.env.DB_NAME;

// Criacao da colecao com banco de dados, uso do dotenv para protecao de variaveis sensiveis

export const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0305829l@",
    database: "data_estoque",
});



