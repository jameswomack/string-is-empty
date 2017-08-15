const isString = require('is-string')

function stringIsEmpty (aString) {
  if (!isString(aString)) {
    return false
  } else if (aString.trim() === '') {
    return true
  } else {
    return false
  }
}

module.exports = stringIsEmpty
