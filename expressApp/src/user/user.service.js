const Pool = require('pg').Pool

const pool = new Pool({
    user: 'mansour',
    host: 'localhost',
    database: 'api',
    password: 'Access/fedora/6',
    port: 5432,
})

const getAllUsers = (req,res,next) => {
  pool.query('SELECT * FROM users ORDER BY iduser ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
    next();
  });
  
}
const createUser = (req,res) => {
  const { name, email } = req.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const getUserData = (req, res,next) => {
    const iduser = parseInt(req.params.id)
    console.log(iduser);
    try {
      pool.query('SELECT * FROM users WHERE iduser = $1', [iduser], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
        next()
      })
    } catch (error) {
      console.log("error");
    }

}
module.exports= {
    getUserData,
    getAllUsers
}