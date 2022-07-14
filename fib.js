/*Challenge 1:
Get the nth number in the fibonacci sequence given n
Alternatively given a number F, print out whether it's a fibonacci number and what the closest index n in the
fibonacci sequence is.*/

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacci_series(5));