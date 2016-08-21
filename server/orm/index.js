/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'hr');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('TAB_USERS', {
  username: Sequelize.STRING
});

var Message = db.define('TAB_MESSAGES', {
  message: Sequelize.STRING,
  objectId: Sequelize.STRING,
  userid: Sequelize.INTEGER,
  roomnameid: Sequelize.INTEGER
});

var Room = db.define('TAB_ROOMS', {
  roomname: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);
Message.belongsTo(Room);
Room.hasMany(Room);

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
User.sync();
Message.sync();
Room.sync();

exports.User = User;
exports.Message = Message;
exports.Room = Room;

  // .then(function() {  , 
  //   // Now instantiate an object and save it:
  //   return User.create({username: 'Jean Valjean'});
  // })
  // .then(function() {
  //   // Retrieve objects from the database:
  //   return User.findAll({ where: {username: 'Jean Valjean'} });
  // })
  // .then(function(users) {
  //   users.forEach(function(user) {
  //     console.log(user.username + ' exists');
  //   });
  //   db.close();
  // })
  // .catch(function(err) {
  //   // Handle any error in the chain
  //   console.error(err);
  //   db.close();
  // });
