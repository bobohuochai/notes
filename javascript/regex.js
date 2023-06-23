const str = "<p>Para.1</p>"+
            "<img src='smiley.jpg'>"+
            "<p>Para 2.</p>" + 
            "<div>Div.</div>";

const regexGreedy = /<p>.*<\/p>/

const regexLazy = /<p>.*?<\/p>/g

console.log(regexGreedy.exec(str))

console.log(regexLazy.exec(str))


const normalHtml = `<html><head><title>12323</title></head><body><div id="test"></div></body></html>`
const errorHtml = `<html><head><title>12323</title></head><body><div id="test"></div></body>`

const htmlRegex =  /<html>[\s\S]*?<head>[\s\S]*?<title>[\s\S]*?<\/title><\/head>[\s\S]*?<body>[\s\S]*?<\/body>[\s\S]*?<\/html>/


console.log(htmlRegex.exec(errorHtml))