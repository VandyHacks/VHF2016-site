const path = require('path');
const pg = require('pg');
const validator = require('validator');

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

function rsvp_get(app) {
  app.get('/rsvp/:user_id', (req, res) => {
    res.sendFile(path.join(__dirname, '../rsvp.html'));
  });
}

function rsvp_post(app) {
  app.post('/rsvp/:user_id/', (req, res) => {
    var hashed_id = req.params.user_id;
    if (!validator.isAlphanumeric(hashed_id)) {
      console.log('non alphanumberic hashed_id');
      res.status(400).send('error')
      return;
    }
    var pool = getPool();
    var get_hacker_id_query = 'select id from hacker where hashed_id = \'' + hashed_id + '\';';
    var update_rsvp_query = 'update application set rsvp = TRUE where hackerid = $1::int;';
    var hackerid = null;
    pool.connect()
      .then(client => {
        return client
          .query(get_hacker_id_query)
          .then(query_res => {
            if (!query_res.rows[0] || !query_res.rows[0].id) {
              console.log('couldn\'t find hacker for hashed id');
              res.status(400).send('error');
            }
            hackerid = query_res.rows[0].id;
            console.log(hackerid);
          })
          .catch(e => {
            client.release()
            res.status(400).send('error');
            console.log(e)
          })
          .then(() => client)
      })
      .then(client => {
        return client
          .query(update_rsvp_query, [hackerid])
          .then(query_res => {
            console.log(query_res);
            if (query_res.rowCount === 0) {
              console.log('couldn\'t update rsvp');
              res.status(400).send('error');
            }
            res.status(200).send();
          })
          .catch(e => {
            client.release()
            res.status(400).send('error');
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
  rsvp_get,
  rsvp_post,
}
