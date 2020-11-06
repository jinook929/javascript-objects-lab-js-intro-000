var recipe = { egg : "3"}

function updateObjectWithKeyAndValue(object, key, value) {
  var clone = object[key] = value
  return object
}