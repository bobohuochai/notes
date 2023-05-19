function solution(A, X, Y, Z) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxX = 0
    let maxY = 0
    let maxZ = 0
    let max = 0

    let maxM = Math.max(Math.max(X, Y), Z)

    let map = new Map()

    while (true) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== 0 && A[i] <= X && max >= maxX) {
                X -= A[i]
                map.set(i, max)
                maxX += A[i]
                A[i] = 0
                break;
            }
        }
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== 0 && A[i] <= Y && max >= maxY) {
                Y -= A[i]
                map.set(i, max)
                maxY+= A[i]
                A[i] = 0
                break;
            }
        }

        for (let i = 0; i < A.length; i++) {
            if (A[i] !== 0 && A[i] <= Z&& max >= maxZ) {
                Z -= A[i]
                map.set(i, max)
                maxZ+= A[i]
                A[i] = 0
                break;
            }
        }

        max++

        if(max>maxM){
            break;
        }
        
    }
    console.log(map)

    if(map.size!=A.length){
        return -1
    }else{
       return map.get(A.length-1)
    }
}

console.log(solution([2,8,4,3,2],7,11,3))
