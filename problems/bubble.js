/** bubbleSort
 * given unsorted list of integers, 
 * return sorted list using bubble sort method
 */
function bubbleSort(nums) {
  for (let i = nums.length - 1 ; i > 0; i--){
    for(let j = 0; j < nums.length; j++){
      if(nums[j] > nums[j + 1]){
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums;
}