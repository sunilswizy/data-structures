var MyQueue = function() {
    this.front = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.front.push(x);
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    console.log(this.front)
    let holder = this.front.shift();
    console.log("this.front ", this.front, holder);
    return holder;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front.length ? this.front[this.front.length - 1] : null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !!this.front.length;
};


 var obj = new MyQueue()
 obj.push(1)
 obj.push(2)
 var param_2 = obj.pop()
 var param_3 = obj.peek()
 var param_4 = obj.empty()