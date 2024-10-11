const { Client } = require("pg");

const obtenerLibro = async () => {

    const client = new Client({
        user: "historyhouse_user",
        host: "dpg-cs2qhlo8fa8c73eguvm0-a.oregon-postgres.render.com",
        database: "historyhouse",
        password: "ckbyXt8RsNBWK9vztxOZvaq0ED1Z1cnl",
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }); 

    await client.connect();
    
    const res = await client.query("SELECT * FROM libro");
    
    const result = res.rows[0].titulo_libro;
    
    await client.end();    

    return result; 
};

obtenerLibro().then((result) => {
    console.log(result);
})


/**
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: '',  
    database: 'historyhouse' 
});

db.connect(err => {
    if (err) {
        console.log('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos historyhouse');
    }
});


app.get('/libro', (req, res) => {
    const query = 'SELECT sinopsis_libro, objetivos_libro FROM libro WHERE id_libro = 1';

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error en la consulta de la base de datos');
        } else {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).send('Libro no encontrado');
            }
        }
    });
});


app.get('/libro/detalles', (req, res) => {
    const query = `
        SELECT nombre_del_autor, nombre_editorial, numero_paginas, fecha_publicacion, genero_libro 
        FROM libro 
        WHERE id_libro = 1
    `;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error en la consulta de la base de datos');
        } else {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).send('Libro no encontrado');
            }
        }
    });
});

app.listen(3001, () => {
    console.log('Servidor ejecutándose en http://localhost:3001');
});
*/