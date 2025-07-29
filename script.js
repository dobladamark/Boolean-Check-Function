function booWho(bool) {
 return typeof bool === "boolean";


}

console.log("1 " + booWho(true));//boolean
console.log("2 " +booWho(false));//boolean
console.log("3 " +booWho([1, 2, 3]))//object
console.log("4 " +booWho([].slice))//function
console.log("5 " +booWho({"a" : 1}))//object
console.log("6 " +booWho(1));//number
console.log("7 " +booWho(NaN));//number
console.log("8 " +booWho("a"));//string
console.log("9 " +booWho("true"));//string
console.log("10 " +booWho("false"))//string


