
let counter = 1;

function interface1() {
    if(counter > 5) {
        console.log("Ended...")
        return 'ented!'
    }
    counter++;
    interface1();
}

console.log(interface1())