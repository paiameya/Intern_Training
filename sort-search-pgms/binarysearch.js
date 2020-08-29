const arr = [-1,4,76,23,32];

const binarySearch = (arr, start, end, num) => {
   const mid = start + Math.floor((end - start)/2);
   if(start <= end){
      if(arr[mid] === num){
         return mid;
      }
      if(num < arr[mid]){
         return binarySearch(arr, start, mid-1, num);
      }
      if(num > arr[mid]){
         return binarySearch(arr, mid+1, end, num);
      }
   }
   return -1;
};
console.log(binarySearch(arr, 0, arr.length-1, 4));
console.log(binarySearch(arr, 0, arr.length-1, 51));




















// function BinarySearch(array, low, high, target)
// {
  
//   if(low > high) {
//     return -1;
//   }
//   //calculate the midpoint of array
//   let mid=Math.floor( (low+ high)/2) ;
//   if (target == array[mid]) {
//     console.log('Target is found at index: ', mid)
//     return mid;
//   }else if(target !== array[mid]){
//     console.log('not found')
//     //return 
//   }
//   else if (target < array[mid]) {
//   //if the target is less the number at the midpoint of array
//   //Search the 2nd half. 
//     return BinarySearch(array, low, mid-1, target);
//   }
//   else {
//   //if the target is larger number at the midpoint of array
//   //Search the 1st half.
//     return BinarySearch(array, mid+1, high, target);
//   }
// }

// BinarySearch([1,5,7,8,9,10,15], 0, 6, 5)

