//#Spread Operator
function sum(x,y,z){
    return x+y+z;
}
//first way to call sum;
console.log(sum(2,3,4));//ouptut-9

//second way
const num = [3,2,2];
console.log(sum(num[0],num[1],num[2])); //output-7

/*Now Here Comes the Spread Operator (...) i.e three dots 
This is new way provided by ES6
we have array called nums so we can call it in below way
*/

const nums = [3,2,9,5];
console.log(sum(...nums)) //3+2+9 = 14
/*here's the question what if my nums array has more than 3 values? 
As the sum function needs three arguments, so sum will get first 3 values
of they nums array i.e 3+2+9 = 14 it ignores 5
now we can use rest in sum function also if we dont know the arguments
here's the example
*/

//REST OPERATOR
function sums(a,b,c,...All/*REST Combined*/ ) {
    console.log(...All/*Spread Divided*/);
    return a+b+c;
}
console.log(sums(3,3,4,6,7,8));//output 3+3+4 = 10

 