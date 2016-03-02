var distance = function (x1, y1, x2, y2) {
  var xlen = 0;
  var ylen = 0; 

  if (x1 > x2){
    xlen = x1 - x2;
  } else {
    xlen = x2 - x1;
  }

  if (y1 > y2) {
    ylen = y1 - y2;
  } else {
    ylen = y2 - y1;
  }

  ylen = (ylen * (111.320 * Math.cos(x1 - xlen)) / 0.62137);
  xlen = (xlen * 110.574) / 0.62137;
  console.log(ylen, xlen);

  return Math.sqrt(Math.pow(xlen,2) + Math.pow(ylen,2));

}


console.log(distance(37.7836966, -122.4089664, 37.7916655, -122.3952124));
