
//  问题 3
//  将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
//   例如`110000000000000000000000000000000000000000000000`，
//  表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。
//  一个位图中可能有多个不连续的
// 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
//      *
//  * 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
//  * 示例输入：`"110010000000000000000000000000000000000000000000"`
//  * 示例输出：`["00:00~01:00", "02:00~02:30"]`
function timeBitmapToRanges(bits){
   let start=-1
   let end =-1
   let result =[]
   for(let index=0;index<bits.length;index++){
       if(bits[index]=== '1'){
          if(start===-1){
              start=index
              end=index
          }else{
             end++
          }
       }else{
         // 该位置为0并且前面有1出现，需要记录
         if(start!==-1&&end!==-1){
            console.log(`start,end`,start,end)
            // 0->00:30 1->01:00 2->01:30 3->02:30 用60分钟为单位
            const startHour= parseInt((start+1)*30/60)
            const startMin = (start+1)*30%60
            const startStr=`${startHour>=10?startHour:`0${startHour}`}:${startMin>=10?startMin:`0${startMin}`}`
            const endHour = parseInt((end+1)*30/60)
            const endMin =  (end+1)*30%60
            const endStr=`${endHour>=10?endHour:`0${endHour}`}:${endMin>=10?endMin:`0${endMin}`}`
            console.log(`start,end str`,`${startStr,endStr}`)
            result.push([`${startStr}~${endStr}`])
         }
        // 重置
        start =-1
        end =-1  
       }
   }
   return result
}
console.log(timeBitmapToRanges("110010000000000000000000000000000000000000001100"))