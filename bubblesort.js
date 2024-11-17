// bubble sort //


// let num = [7,8,9,4,52,16,52,12,3,4,5,6];

// function bubbleSort(arr){
//     for(let i = 0 ; i < arr.length; i++){
//         for(let j = 0 ; j < arr.length; j++){
//             if(arr[j] < arr[j+1]){
//                 [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(num));


// selection sort //

let num = [7,8,9,4,52,16,52,12];
function selectionSort(arr){
    let n = arr.length;
    for(let i = 0 ; i < n; i++){
        let min = i;
        for(let j = i+1 ; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[i], arr[min]]=[arr[min], arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort(num));

