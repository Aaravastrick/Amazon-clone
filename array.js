
// let arr=[9,8,7,6,5,4,3,2,1,];
// console.log(arr.length);
// let sum=0
// for( let i=0; i<arr.length; i++){
//     // console.log(arr[i]);
//     sum+arr[i]
    
    
// }
// console.log(sum);



//swapping value//


// let a=10;
// let b=20;
// let c=0;
// b=a
// a=b
// b=c


// console.log(a,b,) = console.log(b,a);

// [a,b] =[b,a]
// console.log({a,b});






// let arr =[10,20,30,40,50]
// function high(arr){
//     let max = +8000
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]<max){
//             max = arr[i]; 
//     }
    
// }
// return max

// }

// console.log(high(arr));

// let arr=[1,2,3,4,5,6,7,8]

// function even(arr){
//     let arr1=[]
//     let arr2=[]
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]%2==0){
//             arr1.push(arr[i])
            
//     }
//     else{
//         arr2.push(arr[i])
//     }
// }

// }

// console.log(even(arr));


// let arr=[1,2,3,4,5,6,7,8]
// function findOddEvenInArr(arr){
//     let odd = []
//     let even = []
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]%2==0){
//             even.push(arr[i]);
//         }
//         else{
//             odd.push(arr[i]);
//             }
//         }
//         console.log(odd,even);
// }
// findOddEvenInArr(arr);

// let arr=[1,2,3,4,5,6,7,8,]
// function ReversValue(arr){ 
//     let arr1=[]
//     for(let i=0; i<arr.length;i++){
       
//         arr1.push(arr[arr.length-i-1])
//         }
//         return arr1
//         }
//         console.log(ReversValue(arr));


    //     function ReversValue(arr){
    //         let arr1 = []
    //         for(i=arr.length-1;i>=0; i--){
    //             arr1.push(arr[i])

    //     }
    //     return (arr1);
        

    // }

    // ReversValue(arr)

    // let arr1 = [1,2,3,4,5,6,7]


    // function findTarget(arr1,target){
        
    //     for(let i=0; i<arr1.length;i++){
    //        for(let j = i+1; j<arr1.length; j++){
    //         if(arr1[i] + arr1[j]===target){
    //             return true

            
    //         }
          
    //     }
    
    //     }
    //         return false
           
    // }
    // console.log(findTarget(arr1,7));
//     let arr=[9,8,7,6,4,5,67,32,14,85,]
//     function sortArray(arr){
//         for(let i=0; i<arr.length; i++){
//             for(let j=i+1; j<arr.length; j++){
//                 if(arr[i]>arr[j]){
//                     let temp = arr[j];
//                     arr[j] =arr[j+1]
//                     arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;

// }
// console.log(sortArray(arr));

// find intersaction  //

// temprature finder //


let sal = 50000;
let credit = 50;
let emploid = false;

function CreditScore(sal,credit,emploid){
        if(emploid === ture){
            console.log("frist level passed");
            if(sal <= 50000){
                if(credit === 40){
                    console.log("you are good to go");
                }
            }
        }
        else {
            console.log("you are not employed");
        }
}
CreditScore(sal,credit,emploid);


