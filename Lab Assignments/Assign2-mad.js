/** Program 1 */
let args=[4,6,7,9,3,5];
let z=0;
let x= parseInt(args[0]);
let y= parseInt(args[1]);
for( let i=0;i<y;i++){
    z= args[1]
}
console.log((y+1), "th item from last is.....="+z);

/* Program 2*/
//Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20 
  
var value = 23617, 
    sum = value 
        .toString() 
        .split('') 
        .map(Number) 
        .reduce(function (a, b) { 
            return a + b; 
        }, 0); 
 
console.log(sum);

/* program 3 */
//Write program to find sum of even digits. Input 23617 output 2+6=8. 
  
let numStr = [2,3,6,1,7]; 
  let sum = 0; 
  for (let i = 0; i < numStr.length; i++) { 
    if (numStr[i] % 2 === 0){  
    sum = sum + numStr[i]; 
    } 
  } 
  
 console.log(sum);

/* Program 4 */
//Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10. 
  
for(let i=0;i<=10;i++) 
{ 
    console.log("square"+(i*i)); 
    console.log("cube"+(i*i*i)); 
}
 
  /* program 5*/
 
 // Develop and demonstrate JavaScript script that uses functions for the following problems:  
 
  function vowel(str) 
  { 
      var x=str.split(",") 
      console.log(x[0]) 
  } 
  vowel("a,e,i,o,u") 
   
  function reverse_a_number(n) 
  { 
          n = n + ""; 
          return n.split("").reverse().join(""); 
  } 
  console.log(Number(reverse_a_number(34587)));
  
  /* Program 6*/

  const num = Math.ceil(Math.random() * 10); 
   
   let gnum=5; 
   if (gnum == num) 
     console.log('Matched'); 
    else 
     console.log('Not matched, the number was '+gnum);


  /* Program 7*/
  function first_last(nums) 
 { 
   var end_pos = nums.length - 1; 
   if(nums.length>=2){ 
   return nums[0] == 10 || nums[end_pos] == 10; 
   } 
 } 
 console.log(first_last([10])); 
 console.log(first_last([1, 3, 5, 10])); 
 console.log(first_last([2, 4, 6]));

 /* program 8*/
 function alphabet_order(str) 
   { 
 return str.split('').sort().join(''); 
   } 
 console.log(alphabet_order("comsats"));