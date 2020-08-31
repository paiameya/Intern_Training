
function linearSearch(arr, elToFind) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i] == elToFind) {
        return i;
      }
    } return null;
  }
  const array = [43,7,1,33,98,100,32]
  console.log(linearSearch(array, "7")); // returns 2

  