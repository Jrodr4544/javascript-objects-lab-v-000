var recipes = {}

var updateObjectWithKeyAndValue = (object,key,value) => {
  var newObj = Object.assign({}, object, {[key] : value});
  return newObj
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  
  return object
}


var deleteFromObjectByKey = (object, key) => {
<<<<<<< HEAD
  var newObj  = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}
=======
  var newObj = Object.assign({}, object, {[key]});
  delete newObj[key]
}
>>>>>>> 86d45f86b293a9ce0d9e8c58b2c7fb1f15872f2a
