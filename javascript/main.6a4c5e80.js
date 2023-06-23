function stringConcatenation(){
    const str = 'isdfdf'
    let newString = ''
    let appendCount =5000
    while(appendCount--){
        newString += str
    }
}

console.time('string')
stringConcatenation()
console.timeEnd('string')