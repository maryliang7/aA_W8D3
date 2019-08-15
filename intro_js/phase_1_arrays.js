Array.prototype.uniq = function() {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!new_arr.includes(this[i])) {
      new_arr.push(this[i]);
    }
  }
  return new_arr;
};

// console.log([1,2,3,4,3,2,5].uniq());

Array.prototype.twoSum = function() {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        new_arr.push([i, j]); 
      }
    }
  }
  return new_arr;
};

// console.log([1, -4, 4, 5, 3, -1, 0, 0].twoSum());

Array.prototype.transpose = function() {
  let new_arr = [];

  // for (let i = 0; i < this[0].length; i ++) {
  //   let j = 0;
  //   let sub_arr = [];
  //   while (j < this.length) {
  //     sub_arr.push(this[j][i]);
  //     j++;
  //   }
  //   new_arr.push(sub_arr);
  // }
  for (let i = 0; i < this[0].length; i ++) {
    let sub_arr = [];
    for(let j = 0; j < this.length; j++) {
      sub_arr.push(this[j][i])
    }
    new_arr.push(sub_arr);
  }
  return new_arr;
};

// console.log([[1,2,3],[4,5,6]].transpose());