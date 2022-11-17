function filterRangeInPlace(arr,min,max){
 for (let i=0;i<arr.length;i++){
     let val=arr[i]

    if (val<min || val>max){
        arr.splice(i,1)
        i--
    }
        }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert( arr );