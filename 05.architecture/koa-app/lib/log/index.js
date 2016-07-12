const colors = require('colors');

module.exports = {
  info: function () {
    console.info.apply(null, arguments)
  },
  success: function (str) {
    console.log(colors.green(str))
  },
  error: function (str) {
    console.error.apply(null, arguments)
  }
}
