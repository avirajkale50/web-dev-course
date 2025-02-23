//Fundamentals of JavaScript
//arrays and objects
//functions return
//async js coding

//arrays
var arr = [1,2,3,4,{},"hello",function(){},[]]
var array = [1,2,3,4]
//foreach map  filter find indexOf
//forEach
array.forEach(function(val){
    console.log(val + ".Hello")
}) 
//map - map make a array in comp. to original array and return a new array with same no. of element with some function we applied on it
let ans = array.map(function(val){
    //here we used function statement we can use arrow function as well
    return val*9;
})
console.log(ans)

//filter - filter will make a new array which can be samll or equal to the main array also it remove some element which not satisfy the condition

let new_array = array.filter(function(val){
    if(val > 2){
        return true;//it tells weather to include the particulart value in the new array
    }else{
        return false;//if we not write it still we are okay
    }
})
console.log(new_array)

//find - search element in array
ans = array.find(function(val){
    if(val ===2 ) return val;
})
console.log(ans)

//indexOf - to get the indexOf elements
ans = array.indexOf(1)
console.log(ans)


///Objects - in JavaScript almost everything is a object
{ } // this is a objet

var obj ={
    key : "value"//key value pairs
}
Object.freeze(obj)//then we can't change the value of key value pair
obj.key = "new_value"//this will not work if we freeze it
//to access the elements in the objects
console.log(obj.key)
console.log(obj['key'])

//Note - function lenght is it's number of parameter
function abcd(a,b,c){

}
console.log(abcd.length)


//Functions return

function abcd(){
    return "Hello World";
}
console.log(abcd());//form this fucntion it's control goto function

//async javascript coding
//when code is executing line by line it said to be synchronous
//when code is of async in nature put it to side stack and run the code of sync nature , when all the sync code executed then we chek async code is completed or not if it is completed then put it to main stack and run it\
//example
async function fun(){
    var blob = await fetch("https://randomuser.me/api/");
    ans = await blob.json()
    console.log(ans.results[0].name)
}


fun()




//trying await without async
/*
let blob = await fetch(`https://randomuser.me/api/`);
var res = await blob.json()
console.log(blob)
*/
//this won't work currently let explore it and make it working
