const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/Person");

passport.use(new LocalStrategy(async(username, password, done) => {
  try {
    //console.log(`Authenticating user: ${username} with password: ${password}`);
    // Find the user by username
    const person = await Person.findOne({ username: username });
    if (!person) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (person.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, person);
  } catch (err) {
    return done(err);
  }
}));

module.exports = passport;