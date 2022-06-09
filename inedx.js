// // console.log('hello')

// // function sum(a){
// //     let x = 0
// //     for(let i = 0; i<=a; i++){
// //         x+=i
// //     }
// //     return x
// // }

// // console.log(sum(4)) // 10

// // a = [1,2,3,4,5,6]

// // function santa(){
// //     let date = new Date()
// //     if(date.getDate()===11 && date.getDate()===23){
// //         return true
// //     }else{
// //         return false
// //     }
// // }
// // console.log(santa())


// let x = [1,12,2,3,4,5]
// console.log(x.sort())
// console.log(x.reverse())

document.querySelector('.button').onclick = circuitPower;

function circuitPower(){
    console.log('hellllo')
    let a = document.querySelector('.input_1').value;
    let b = document.querySelector('.input_2').value;
    console.log('aaaaaaaaaaaaa', a)
    return document.querySelector('.out').innerHTML = a*b
}

// function calcAge(a){
//     return a * 365
// }

// console.log(calcAge(2))

// function getFirstValue(a){
//     return a[0]
// }

// console.log(getFirstValue([1,2,3,4])) // 1

// function findPerimeter(a,b){
//     return (a+b)*2
// }

// console.log(findPerimeter(10,20))


// function giveMeSomething(a){
//     return 'something'+' '+a
// }

// console.log(giveMeSomething('to me'))

// function remainder(a,b){
//     if(a<b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(remainder(4,9)) // 4

// function points(a,b){
//     return (a*2)+(b*3)
// }

// console.log(points(7,5)) // 29

// function lessThen100(a,b){
//     return a+b<100 
// }

// console.log(lessThen100(12,38)) // true

