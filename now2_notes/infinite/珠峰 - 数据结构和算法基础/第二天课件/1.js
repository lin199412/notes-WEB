function maxSubArray(nums) {
    let ans = nums[0],
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (sum > 0) {
            sum += item;
        } else {
            sum = item;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
}
console.log(maxSubArray([-2, 2, -1, 1, -3]));