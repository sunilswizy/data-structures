function searchMe(arr, item) {
    for(let each of arr) {
        if(each === item){
            return item;
        }
    }
    return null;
}


console.log(searchMe([10, 20, 30, 40, 50, 4], 4))