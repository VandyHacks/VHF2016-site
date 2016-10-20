const path = require('path'); 
const pg = require('pg');

  function getDB() {
    return new pg.Client({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      port: 5432,
      host: process.env.DB_HOST,
      ssl: true
    });
  }
  
  function rsvp_get(app) {
    app.get('/rsvp/:user_id', (req, res) => {
      res.sendFile(path.join(__dirname, '../rsvp.html'));
    });
  }
  
  function rsvp_post(app) {
    app.post('/rsvp/:user_id/', (req, res) => {
      var hashed_id = req.params.user_id;
      var client = getDB();
      try {
        client.connect();
      } catch(err) {
        console.log(err);
      }
      var query = 'select id from hacker where hashed_id = \'' + hashed_id + '\';';
      console.log(query);
      client.query(query, function(err, result) {
        if (err || !result.rows[0]) {
            console.log(err);
            console.log(query);
            res.status(400).send('error')
            return;
        }
        var hacker_id = result.rows[0].id;
        if (!hacker_id) {
          res.status(400).send('error')
          return;
        }
        query = 'update application set rsvp = TRUE where hackerid = \'' + hacker_id + '\'';
        var hacker_udate = client.query(query, function(err, result) {
            if (err) {
                console.log(err);
                console.log(query);
                res.status(400).send('error')
                return;
            }
            res.status(200).send();
        });
      });
    });
  }

module.exports = {
  rsvp_get,
  rsvp_post,
}
