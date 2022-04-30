const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

//Routes

//Create an etude
app.post("/etudes" , async (req, res) => {
    try {
        const { etude_name,
                book,
                composer,
                etude_key,
                tempo,
                range_high,
                range_low } = req.body
        
        const newEtude = await pool.query("INSERT INTO etude (etude_name,"
                                            + "book, composer, etude_key,"
                                            + "tempo, range_high, range_low)"
                                            + "VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
                                            [etude_name, book, composer,
                                            etude_key, tempo, range_high, range_low]);    
        res.json(newEtude.rows[0]);
        // console.log(etude_name, book, composer, etude_key, tempo, range_high, range_low);
    } catch (err) {
        console.error(err.message)
    }
})

//Get all etudes
app.get("/etudes", async (req, res) => {
    try {
        const allEtudes = await pool.query("SELECT * FROM etude")
        res.json(allEtudes.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//Get one etude
app.get("/etudes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const etude = await pool.query("SELECT * FROM etude WHERE etude_id = $1", [id])
        res.json(etude.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

//Update an etude

//TODO: Figure out how to dynamically update DB based on body

app.put("/etudes/:id", async (req, res) => {
    try {
        console.log("id = " + req.params);
        console.log(req.body);

        const { id } = req.params;
        const { etude_name,
            book,
            composer,
            etude_key,
            tempo,
            range_high,
            range_low } = req.body

        const updateEtude = await pool.query('UPDATE etude SET etude_name = $1,'
            + 'book = $2, composer = $3, etude_key = $4,'
            + 'tempo = $5, range_high = $6, range_low = $7 WHERE etude_id = $8',
            [etude_name, book, composer,
            etude_key, tempo, range_high, range_low, id]); 

        res.json("Etude was updated!")

    } catch (err) {
        console.error(err.message);
    }
})