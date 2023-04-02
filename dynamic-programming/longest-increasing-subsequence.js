let list = [5, 2, 8, 6, 3, ,6, 9, 5]; 

//longest 2, 3, 6, 9 ---> 4


// eg: [3, 1, 8, 2, 5]

// 1) vizualize
//     3, 5
//     1, 2, 5
//     2,5

//     the higher length will be answer
    
// 2) find a subproblem

//     LIS[3] = 2;

// 3) find relationship on subproblem

function lis(arr) {
    let check = new Array(arr.length).fill(1);

    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                check[i] = Math.max(check[i], check[j] + 1);
            }
        }   
    }

    
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    maxLength = Math.max(maxLength, check[i]);
  }

   console.log(maxLength);
}

console.log( lis([3, 1, 8, 2, 5]))