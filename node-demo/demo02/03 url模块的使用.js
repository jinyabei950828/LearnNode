const url = require('url')

var api = 'http://www.itying.com?name=zhangsan&age=20'


//true表示转换成对象
var getValue = url.parse(api,true).query

console.log(getValue)

console.log(`姓名:${getValue.name}`)
console.log(`年龄:${getValue.age}`)