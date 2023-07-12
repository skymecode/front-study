
var myName="skyme";
console.log("name:",myName);
let n1=100;
alert(Number.MAX_VALUE);
let bool1 =true;
let bool2 =false;
let str1 = `hello!`;
console.log(str1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
let b1=100n;
console.log("b1:",b1);
let s3=Symbol("b");
let s4=Symbol("b");
console.log(s3==s4);
let s1=Symbol.for("a");
let s2=Symbol.for("a");
console.log(s1==s2);
let ob1=new Object();
let ob2 ={

}
//ob1和ob2的内存地址不同
console.log(ob1==ob2);
let ob3=new Object("skyme");
let ob4=new Boolean(true);
console.log(typeof ob3);
console.log(typeof ob4);