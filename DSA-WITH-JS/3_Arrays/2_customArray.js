class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index){
    const item = this.data[index];

    for(let i=0;i<this.length;i++){
        if(i>=index){
            this.data[i]=this.data[i+1];
        }
    }

    delete this.data[this.length-1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("banana");
myNewArray.push("orange");
myNewArray.push("grape");
console.log(myNewArray.get(0));
console.log(myNewArray);
// myNewArray.pop();
console.log(myNewArray.shift());
console.log(myNewArray);
console.log(myNewArray.deleteByIndex(1));
console.log(myNewArray);
