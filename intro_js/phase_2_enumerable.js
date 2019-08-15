Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i ++) {
    this[i] = callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let new_arr = [];

  this.myEach(el => new_arr.push(callback(el)));
  
  // this.myEach(function(el) {
  //   new_arr.push(callback(el));
  // });

  return new_arr;
};

Array.prototype.myReduce = function(callback, initialValue = 0) {
  let acc = initialValue;
  this.myEach(x => {
    acc = callback(acc, x);
  });
  return acc;
};



