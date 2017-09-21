var BasicStrategry = require('passport-http').BasicStrategy;

// https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest
// https://scotch.io/tutorials/easy-node-authentication-setup-and-local
// const crypto = require('crypto');
// const key = crypto.pbkdf2Sync('password', 'OEU35qQi9q6d', 20000, 44, 'sha256');
// console.log(key.toString('base64'));  // '3745e48...aa39b34'
//

var models = require('../models')


module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });
    //
    // // used to deserialize the user
    // passport.deserializeUser(function(id, done) {
    //     User.findById(id, function(err, user) {
    //         done(err, user);
    //     });
    // });

     passport.use('basic', new BasicStrategry(
        function(username, password, done) {
          if(!username) return done({ message: 'Incorrect username.'+username +"-"}) ;

          models.ozpcenter_profile
                .findOne({include:[
                    {model:models.auth_user, as:'user', where:{'username': username}},
                ]})
                .then(result => {
                    return done(null, result);
                })
                .catch(result => {
                     return done({ message: result });
                 });

       }))

}
