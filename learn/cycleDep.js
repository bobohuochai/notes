/**
 * 检查 npm 依赖项中有没有循环依赖
 *（不用考虑版本，只考虑包名即可）
 * 入参 pkgs 为项目中所有的依赖（包括子依赖）
 * 返回 true/false
 * 
 * pkg 数据结构为 package.json, 如有三个包 a, b, c
 * 入参为
 *
 * [{
 *    "name": "a",
 *    "dependencies": {
 *      "b": "^1.0.0"
 *    }
 * }, {
 *    "name": "b",
 *    "dependencies": {
 *      "c": "^1.0.0"
 *    }
 * }, {
 *    "name": "c",
 *    "dependencies": {
 *      "d": "^1.0.0"
 *    }
 * }]
 *
 */
function checkDeps(pkgs) {
    const depMap = new Map()
    for (const pkg of pkgs) {
        const deps = Object.keys(pkg.dependencies)
        depMap.set(pkg.name, deps)
    }
    let flag = false
    for (let [pkg, deps] of depMap) {
        console.log(`${pkg} package deps:${deps}`)
        let depIndex = 0
        while (depIndex < deps.length) {
            const curDep = deps[depIndex]
            console.log('current deps==>', deps)
            const subDeps = depMap.get(curDep)
            console.log(`${curDep}子依赖===>`, subDeps)
            if (subDeps) {
                deps = deps.concat(subDeps)
            }
            // deps中有无重复元素
            const newDeps = Array.from(new Set([...deps]))
            if (newDeps.length < deps.length) {
                flag = true
                break;
            }
            // deps是否包含开始元素
            if (deps.includes(pkg)) {
                flag = true
                break;
            }
            depIndex++
        }
        return flag
    }
}

const pkgs = [{
    "name": "a",
    "dependencies": {
        "b": "^1.0.0"
    }
}, {
    "name": "b",
    "dependencies": {
        "c": "^1.0.0"
    }
}, {
    "name": "c",
    "dependencies": {
        "d": "^1.0.0"
    }
}, {
    "name": "d",
    "dependencies": {
        "c": "^1.0.0"
    }
}]
console.log(checkDeps(pkgs))
