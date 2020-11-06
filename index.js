var recipe = { egg : "3"}

function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object)
  clone[key] = value
  return clone
}