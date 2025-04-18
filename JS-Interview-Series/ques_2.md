# Implement custom forEach loop
#### You are given an array and you need to implement a custom forEach loop that will iterate over the array and execute a callback function for each element.

### Basic Approach - Code:
```javascript
Array.prototype.customForEachOne = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}
```

### Interview Approach(SDE2 LEVEL) - Code:
```javascript
Array.prototype.forEachTwo = function(callback,thiscontext){
    if(typeof callback!='function'){
        throw new TypeError(callback + ' is not a function');
    }

    const length = this.length;
    let i=0;
    while(i<length){
        if(this.hasOwnProperty(i)){
            callback.call(thiscontext,this[i],i,this);
        }
        i++;
    }
}
```

### Explanation:
1. The `customForEachOne` method is a simple implementation of the `forEach` loop that iterates over the array and executes the callback function for each element.
2. The `forEachTwo` method is a more robust implementation that checks if the callback is a function and allows for a custom context (`thiscontext`) to be passed in.
3. The `hasOwnProperty` method is used to ensure that only the properties that belong to the array itself are iterated over, not any inherited properties.
4. The `call` method is used to set the value of `this` inside the callback function to the provided context (`thiscontext`).
5. The `while` loop is used instead of a `for` loop to demonstrate a different approach to iterating over the array.
6. The `length` variable is used to store the length of the array to avoid recalculating it in each iteration.
7. The `i` variable is incremented in each iteration to move to the next element in the array.
8. The `callback` function is called with the current element, index, and the array itself as arguments.
9. The `throw` statement is used to raise an error if the callback is not a function, which helps in debugging and ensures that the method is used correctly.
10. The `this` keyword refers to the array on which the method is called, allowing for a more flexible and reusable implementation.
11. 
### Output:
```bash
1
2
3
4
5
```