import * as parser from '@babel/parser'
import _traverse from '@babel/traverse'

const traverse = _traverse.default


const code = `function square(n) {
    return n * n;
}`;

const ast = parser.parse(code)

traverse(ast,{
    enter(path){
        if(path.isIdentifier({name:'n'})){
            path.node.name='x'
        }
    }
})


console.log(JSON.stringify(ast))
