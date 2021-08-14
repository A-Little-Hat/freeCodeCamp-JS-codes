function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  var len=arr.length
  for(var i=0;i<len;i++){
    var len2=arr[i].length
    for(var j=0;j<len2;j++){
      product*=arr[i][j]
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);