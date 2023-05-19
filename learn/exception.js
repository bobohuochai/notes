function test() {
    let a = 1
    try {
        throw new Error("error")
    } catch (e) {
        a++
        console.log(a)
        return a
    } finally{
       return 3
    }
}

console.log(test())