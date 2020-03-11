/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-11-26 14:53:34
 * @LastEditors: hrt
 * @LastEditTime: 2019-11-26 15:00:25
 */
/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    //暴力累加
    let res = Array(n).fill(0)
    let start, end, num
    bookings.forEach(d => {
       start = d[0] - 1
       end = d[1]
       num = d[2]
       for(start; start < end; start++){
        res[start] += num
       }
    })
    return res
};
// @lc code=end

