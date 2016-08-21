// pure sql version
// var db = require('../../server-pure-sql');
var db = require('../orm');

module.exports = {
  messages: {
    get: function(req, res) {
      // db.Message.findAll({include: [db.Users, db.Rooms]})
      //   .then(function(messages) {
      //     res.JSON(messages);
      //   });
    },
    // function (table, callback) {
    //   db.queryGET('TAB_MESSAGES', function(err, result) {
    //     callback(err, result);
    //   });

    // }, // a function which produces all the messages
    post: function() {}
    // function (table, message, callback) {
    //   // var post = ['hello', null, 'Sam', 'lobby'];
    //   db.queryPOST('TAB_MESSAGES', message, function() {
    //     callback();
    //   });
    // } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function() {}
    // function (table, username, callback) {
    //   username = (username ? username : 'unnamed');

    //   db.queryPOST(table, [username], function() {
    //     callback();
    //   });
    // }
  }
};

