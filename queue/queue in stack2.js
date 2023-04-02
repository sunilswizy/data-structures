let MyQueue = function() {
    this.first = [];
    this.last = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let last  = this.first.length;
    for(let i = 0; i< last; i++) {
        this.last.push(this.first.pop())
    }

    this.last.push(x);
    console.log("this.firset ", this.first);
    console.log("this.last ", this.last);
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let last = this.last.length;

    for(let i = 0; i< last; i++) {
        this.first.push(this.last.pop())
    }

    console.log("this.pop ", this.first);
    console.log("pop.last ", this.last);
    
    return this.first.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  };

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.first.length === 0;
}; 

var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
obj.push(3)
var param_3 = obj.peek()
var param_4 = obj.empty()