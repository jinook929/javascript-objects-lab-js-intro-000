var recipe = { egg : "3"}

function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object)
  clone[key] = value
  return clone
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}