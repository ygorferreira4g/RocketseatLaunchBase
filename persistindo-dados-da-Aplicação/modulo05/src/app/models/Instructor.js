const { age, date } = require("../lib/utils")

const db = require('../config/db')

module.exports = {
    all(callback){
        db.query(`select * from instructors`, function(err, results){
            if(err) return res.send("Erro no banco de dados!")

            callback(results.rows)
           })

           //parei aqui

    },
    create(data, callback){
        const query = `
        INSERT INTO instructors (
            name,
            avatar_url,
            gender,
            services,
            birth,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id
    `

    const values = [
        data.name,
        data.avatar_url,
        data.gender,
        data.services,
        date(data.birth).iso,
        date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
        if(err) return res.send("Erro banco de dados!")

        callback(results.rows[0])
        
    })

    }
}

