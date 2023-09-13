"use strict";
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  const nums = strNums.map(str => {
    if (!Number(str)) throw new BadRequestError(`${str} is not a number.`);
    return Number(str);
  });

  return nums;
}


module.exports = { convertStrNums };
