function transform(nums) {
    let squaredNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        squaredNums.push(nums[i]*nums[i])
    }

    squaredNums.sort(function(a, b) {
        return a - b;
    });
    
    return squaredNums
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]