/***
 * teams:未参赛队伍
 * result:结果组合
 * m=2
 */
function combination(teams,result,m){
    if(result.length ===m){
        console.log('参赛队伍====>',result)
        return
    }
    for(let i=0;i<teams.length;i++){
       const newResult =[...result]
       newResult.push(teams[i])
       const restTeams = teams.slice(i+1)
       console.log('rest teams===>',restTeams)
       combination(restTeams,newResult,m)
    }
}
combination(['t1','t2','t3','t4'],[],2)


