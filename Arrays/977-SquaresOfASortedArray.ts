function sortedSquares(nums: number[]): number[] {
    let i = 0; 
     let j = nums.length -1; 
     let squares = Array<number>(nums.length)
     
     for( let p = nums.length -1; p >= 0; p--)
         {
             if(Math.abs(nums[j]) > Math.abs(nums[i]))
                 {
                     squares[p] = nums[j]*nums[j];
                     j--
                 }
             else {
                 squares[p] = nums[i]*nums[i];
                 i++;
             }
         }
     
    
        
         return squares; 
 
 };
let nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums))