const path = require('path');
const pg = require('pg');
const validator = require('validator');

var pool = getPool();

function getPool() {
  var config = {
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    max: 500, // max number of clients in the pool
    idleTimeoutMillis: 15000,
    ssl: true,
  };
  return new pg.Pool(config);
}

function checkin_qrcode_get(app) {
  app.get('/checkin/:user_id', (req, res) => {
    var hashed_id = req.params.user_id;
    if (!validator.isAlphanumeric(hashed_id)) {
      console.log('non alphanumberic hashed_id');
      res.status(400).send('error')
      return;
    }
    var get_hacker_id_query = 'select id, qr_code from hacker where hashed_id = \'' + hashed_id + '\';';
    var hackerid = null;
    pool.connect()
      .then(client => {
        return client
          .query(get_hacker_id_query)
          .then(query_res => {
            if (!query_res.rows[0] || !query_res.rows[0].qr_code) {
              console.log('couldn\'t find hacker for hashed unique id');
              res.status(400).send('couldn\'t find hacker for unique id');
            }
            hackerid = query_res.rows[0].id;
            console.log(hackerid);
            res.render('qr_code', {'qr_code': query_res.rows[0].qr_code});
          })
          .catch(e => {
            client.release()
            res.status(400).send('unknown error');
            console.log(e)
          })
          .then(() => client)
      })
      .then(client => client.release())
      .then(() => res.status(400).send())

    pool.on('error', function (err, client) {
      console.error('idle client error', err.message, err.stack)
    });
  });
}

module.exports = {
  checkin_qrcode_get,
}
