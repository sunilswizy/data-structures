
class Union {
    constructor(size) {
        this.array = Array(size).fill(0).map((el, idx) => idx);
        console.log(this.array)
    }

    connected(a, b) {
        return this.array[a] === this.array[b]
    }

    union(a, b) { 
        if(!this.connected(a, b)) {

            let basic = this.array[b]; 
            let aCheck = this.array[a]

            for(let i = 0; i< this.array.length; i++) {
                if(this.array[i] === aCheck) {
                    this.array[i] = basic;
                }
            }

            console.log(this.array)
        }
    }
}


let u = new Union(10);

u.union(4,3);
u.union(3, 8);
u.union(6, 5);
u.union(9, 4);
u.union(2, 1);

console.log(u.connected(4, 3))
console.log(u.connected(8, 9))
console.log(u.connected(5, 0))

u.union(5, 0)

console.log(u.connected(5, 0))

u.union(7, 2)
u.union(6, 1)


