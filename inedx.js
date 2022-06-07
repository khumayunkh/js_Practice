console.log('hello')

function sum(a){
    let x = 0
    for(let i = 0; i<=a; i++){
        x+=i
    }
    return x
}

console.log(sum(4)) // 10

a = [1,2,3,4,5,6]

function santa(){
    let date = new Date()
    if(date.getDate()===11 && date.getDate()===23){
        return true
    }else{
        return false
    }
}
console.log(santa())
