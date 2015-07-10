function chunk(arr, size) {
  // Break it up.
  var chunky=[];
  var i=0;
  while(i<arr.length)
  {chunky.push(arr.slice(i,i+=size));}
  return chunky;
}

chunk(['a', 'b', 'c', 'd'], 2);
