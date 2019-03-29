console.log(
`////////////////////////////////////
//          vue practice          //
////////////////////////////////////\n`)


let a = 100
console.log(`test ,${a}`)
console.log(`\n---------------------------------\n`)


const math_double = (x) => x * x ;
console.log(`math_double(2)'s result = ${math_double(2)}`)

console.log(`\n---------------------------------\n`)

let number_arr = ["aaa","bbb","ccc"]
console.log(number_arr)

number_arr = number_arr.map((elm, idx) => console.log(`number_arr[${idx}] = ${elm}`) )

console.log(`\n---------------------------------\n`)

var get_this = function(){
  console.log(this.name)
}

get_this()
