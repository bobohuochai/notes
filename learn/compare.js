function compareVersion(v1, v2) {
    const v1Arr = v1.split('.')
    const v2Arr = v2.split('.')
    const length = v1Arr.length > v2Arr.length ? v2Arr.length : v1Arr.length
    let result
    let i = 0
    for (; i < length; i++) {
        if (Number(v1Arr[i]) > Number(v2Arr[i])) {
            result = 1
            break
        } else if (Number(v1Arr[i]) < Number(v2Arr[i])) {
            result = -1
            break
        } else {
            result = 0
        }
    }
    if (result === 0) {
        if (v1Arr.length > v2Arr.length) {
            if (v1Arr.slice(i).every(num => Number(num) === 0)) {
                return 0
            } else {
                return 1
            }
        } else if (v1Arr.length < v2Arr.length) {
            if (v2Arr.slice(i).every(num => Number(num) === 0)) {
                return 0
            } else {
                return -1
            }
        } else {
            return 0
        }
    } else {
        return result
    }

}

console.log(compareVersion('0.1', '1.1.1')); // 返回-1 
console.log(compareVersion('13.37', '1.2 ')); // 返回1 
console.log(compareVersion('1.1.0', '1.1.0')); // 返回0