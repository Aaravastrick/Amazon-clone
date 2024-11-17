// array intro //

// let arr =[];
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// arr.push(50);

// arr.pop();
// arr.unshift(80);
// arr.shift()
// arr.shift()
// console.log(arr);


// bubbel shorthing //


// let arr = [90,43,64,65,22,22,11,9,1]
// function bubbleSort(arr){
//     for( let i=0; i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 console.log(arr);
                
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr));


// selection sort //

// let arr =[8, 7, 6, 5, 4, 3, 2, 1]
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++) {
//         let min_idx = i;
//       for(let j=i+1; j < arr.length; j++) {
//         if(arr[j]<arr[min_idx]){
//             min_idx = j;
//         }
//       }  
//       let temp=arr[i];
//       arr[i] =arr[min_idx];
//       arr[min_idx] = temp;
// }
//  return arr;
// }
// console.log(selectionSort(arr));

// let array = [2,4,5,6,7,8,8,8,1,2,1]
// function countDuplicates(array) {
//     let count = {};
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<array.length;j++){
//             if(array[i] === array[j] && i !== j) {
//                 count.push(i);
//             }
//             }
//         }
//         return count;
//     }

//     console.log(countDuplicates(array));

let arr = [8,7,6,1,8,1,7,1,7,8]
function countDuplicates(arr){
    let set = new Set();
    let duplicate = new Set();
    for(let i of arr ){
        if(set.has(i)){
            duplicate.add(i);
        }
        else{
            set.add(i)
        }
    }
    return duplicate;
}
console.log(countDuplicates(arr));


// finder bigest number //

