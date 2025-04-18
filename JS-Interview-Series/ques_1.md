# A question on Array
#### You are given an array with some additional properties. You need to run a loop and display only the original properties of the array.

💡Now, here's a catch - Here the interview wants you to ask if you have a clarity on prototypes or not.

### Discuss with Interviewer:
1. Sir, I have a question. Have you used prototypes to add the extra property to the array?
2. If yes, then I can use the `hasOwnProperty` method to check if the property belongs to the array or not.
3. Ask if I'm on the right track.

### Code:
```javascript
Array.prototype.extraProperty = "susmita";
let arr = [1, 2, 3, 4, 5];
for(let v in arr){
    if(arr.hasOwnProperty(v)){
        console.log(v);
    }
}
```

### Explanation:
1. The `for...in` loop iterates over all enumerable properties of the array, including those added via the prototype.
2. The `hasOwnProperty` method checks if the property belongs to the object itself (the array) and not to its prototype chain.
3. If the property is an original property of the array, it will be logged to the console.
4. In this case, only the original properties of the array (the indices) will be displayed, while the `extraProperty` will be ignored.

### Output:
```bash
0
1
2
3
4
```