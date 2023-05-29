const md5 = require("md5")
console.log(md5("123456"))

const sb = require("silly-datetime")
console.log(sb.format(new Date(),'YYYY-MM-DD HH:mm'))

console.log(sb)