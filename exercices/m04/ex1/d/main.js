"use strict";

var nb1 = 33;
var nb2 = 42;
var nb3 = -3;
var nb4 = 20986;
var nb5 = 89;

function calculValeurAbsolueDifference(x, y) {
  if (x > y) {
    return x - y;
  } else {
    return y - x;
  }
}

alert(calculValeurAbsolueDifference(nb4, nb3));
