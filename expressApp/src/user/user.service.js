import Pool from 'pg'

const pool = new Pool({
    user: 'mansour',
    host: 'localhost',
    database: 'api',
    password: 'Access/fedora/6',
    port: 5432,
  })

const getUserData = (request, response) => {
    const id = parseInt(request.params.id)
    try {
      pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    } catch (error) {
      console.log("error");
    }
  

}
module.exports= {
    getUserData
}