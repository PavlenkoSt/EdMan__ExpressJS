/* Global setup modle.
 **
 ** This module exports an async function that is triggered
 ** once before all test suites.
 **
 */

module.exports = async function () {
  process.env.DEBUG = 'server:*,router:*,db';
  process.env.PORT = 3000;
  process.env.PASSWORD = 'Very_strong_pa$$word_is%123456789';
  process.env.SECRET_JWT = 'very_secret_string';
};
