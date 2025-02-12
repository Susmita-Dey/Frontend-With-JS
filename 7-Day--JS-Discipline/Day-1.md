# Day 1 With JS
This is Day 1 of the 7-Day JavaScript Discipline. This is a series of articles that will help you learn JavaScript in a structured way.

## Closure
Closure is a function that returns another function where the returning function uses data/variables from the parent function. The returning function has access to the variables in the parent function even after the parent function has finished executing.

```javascript
function abcd(){
    var x = 12;
    return function(){
        console.log(x);
    }
}

var ans = abcd(); // here ans is a function that is being returned by abcd
ans(); // 12
```