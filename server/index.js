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