// function hello(x,y,z){
//     console.log(x,y,z);
    
// }
// hello("lanflnal",()=>{return("this is callback function")})



// function addTwoNumbers(x,y){
//     return (x+y);
    
    
// }
// let data = addTwoNumbers(5,7);
// console.log(data);

// fat arrow function , lamda function

// let fnArr =(a,b)=> a+b ;
// console.log(fnArr(12,13));

// function addNumber(a,b,c){
//     let show = (a+b)*c 
//     console.log("printing",show);
//     return a+b;

// }
// // console.log(addNumber(1,2,3));
// let result = addNumber(1,2,3);
// console.log(result);

// function NamesWrittern(Name){
//     console.log(Name);
//     return  Name.length
// }

// console.log(NamesWrittern("gaurav"))

// function addNumbers(num){
//     let number =1;
//     for(let i=1;i <= 5 ; i++){
//         number*=i;
//     }
//     return number;
// }
// let a = addNumbers(5)
// console.log(a);


// function facts (n){
//     let facts = 1;
//     for (let i = n; i >= -n; i--){
//         if(i == 0){
//             continue;
//         }
//             facts *= i;
            
//     }
//     return facts;

// }
// console.log(facts(5));

// function jass(cb){
//     console.log("hello jass");
//     console.log("this is a higher order function"); 
// }
// function greet(dev){
//     console.log("my code is done");   
// }
// jass(greet)

// returing function //  like a nestred function
//  function myfunc(){
//     function hello(){
//         console.log("hello world");
//     }
//     return hello;
//  }
// //   console.log(myfunc());
//    let data = myfunc()
//    data();


// let arr =[1,2,3,4,5,6];
//  let newMapArr = arr.map((val,index,arr)=> val*3)
//  console.log(newMapArr);

// filter //

// let arr =[1,2,3,4,5,6];
// let newMapArr = arr.filter((val,index,arr)=> val>3)
// console.log(newMapArr);

//reduce//

// let arr =[1,2,3,4,5,6];
// let newMapArr = arr.reduce((acc,val,index,arr)=> acc+val)
// console.log(newMapArr);

// let arr = [2,3,4,5,6];
// let newMapArr = arr.reduce((acc,val,index,arr)=> acc+val,10)
// console.log(newMapArr);



// every method//


// let arr =[1,2,3,4,5,6];
// let sArr = arr.every((val)=>val>5)
// console.log(sArr);                        output // *false*

// some method
// let arr =[1,2,3,4,5,6];
// let sArr = arr.some((val)=>val<5)
// console.log(sArr);                        // output *true*


// fill method
// let arr =[1,2,3,4,5,6];
// let sArr = arr.fill(0,1,)
// console.log(sArr);                        // output *[1,0,0,4,5,6

// splice method

let arr =[1,2,3,4,5,6];
let sArr = arr.splice(1,2)
console.log(arr);                        // output *[2,3]* ,*[1,4,5,6"?]*
