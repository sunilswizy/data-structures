
var maxUncrossedLines = function(nums1, nums2) {
   let dp = Array(nums2.length + 1).fill(0);

   for(let i = 1; i <= nums1.length; i++) {
      let prev = 0;

      for(let j = 1; j <= nums2.length; j++) {
         let curr = dp[j];

         if(nums1[i - 1] === nums2[j - 1]) {
            dp[j] = prev + 1;
         }
         else {
            dp[j] = Math.max(dp[j - 1], curr);
         }

         prev = curr;
      }
   }

   return dp[nums2.length];
};


// dp with o(n * m) space


//   let n = nums1.length;
//    let m = nums2.length;

//    let dp = Array(n + 1).fill().map(_=> Array(m + 1).fill(0));

//    for(let i = 1; i <= n; i++) {
//       for(let j = 1; j <= m; j++) {
//          if(nums1[i - 1] === nums2[j - 1]) {
//             dp[i][j] = dp[i - 1][j - 1] + 1;
//          }
//          else {
//             dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
//          }
//       }
//    }

//    return dp[n][m]









// memorized


// var maxUncrossedLines = function(nums1, nums2) {
//     let memo = {};
//     return getCount(nums1, nums2, 0, 0, memo);
// };

// function getCount(a, b, index, start, memo) {
//     let key = `${index}, ${start}`;

//     if(key in memo) return memo[key];

//     if(a.length == index || b.length == start) return 0;

//     let sum = 0;
//     if(a[index] === b[start]) {
//         sum += getCount(a, b, index + 1, start + 1, memo) + 1;
//     }
//     else {
//         sum += Math.max(getCount(a, b, index, start + 1 , memo), 
//                getCount(a, b, index + 1, start, memo));
//     }

//     memo[key] = sum;
//     return memo[key];
// }

