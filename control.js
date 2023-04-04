//question1
let num=[10,21,3,8,7,9,12];
function elements(num) {
   
for(let i=0;i<num.length ;i++){
    console.log(num[i]);

   
}

}
(elements(num))

//question2
let nums=[3,6,9,12,10,8]
function multiplictaion(nums) {
   nums.forEach((x)=> {
      console.log(x*2)
   });
}
multiplictaion(nums)

//question3
let numbers=[1,6,8,11,3,6,5,2];
let arrs=[];
function calculate(numbers) {
  for(let i=0;i<=numbers.length-1;i++){
  if (i===3) {
   break;
  }
  arrs.push(numbers[i]*8);
}
  
for(let  i=numbers.length-2;i<=numbers.length-1;i++){
   if(i===numbers.length-2);
   arrs.push(numbers[i]+5);


   }
console.log(arrs);
}
 calculate(numbers);

 //question4
 function values(num1) {
   let newnum1=[];
   let i=0;
   while (i<num1.length) {
      console.log(num1[i]);
      i++
      if (i===4) {
         break;
      }
   }
   newnum1.push(num1[i]);
   
 }
 let num1=[1,2,3,4,5,6,7,8,9];
 values(num1);

 //question5
 let fruits= ["apple","plum","banana","strawberries","kiwi"]
string(fruits)
  function string(fruits) {
    for(let i = 0; i < fruits.length; i++) {
      if(i === 2) {
        continue;
      }
      console.log(fruits[i]);
    }
  }





