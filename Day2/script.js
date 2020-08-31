// **************************       variable in js 

// let name=1;
// console.log(name);
// console.log(typeof name);

//let is block scoped
//var is function scoped
//***************************       example of var using function scope
// for (var i=1;i<=5; i++)
// {
//     console.log(i);
// }
// console.log(i);

//***************************       example of let using block scope
// for (let j=1;j<=5; j++)
// {
//     console.log(j);
// }
// console.log(i);

// **************************       constant
// var Name='Prince Kumar';
// console.log(Name);
// Name='spider'
// console.log(Name);


// const NAme='iron name';
// console.log(NAme)
// const NAme='bat man';
// console.log(NAme)

// **************************     templating way of concaniting string 
// let data1='Thor';
// let data2='stromebreaker';
// let data3=1500;
// let data4= `Superhero ${data1} has ${data2} aand his age is ${data3}`;
// console.log(data4);
// let data5=`<h1>${data1}</h1>`;
// console.log(data5);

// ***************************  BASIC_ STRING_OPERATION
// console.log('Length of thor '+data1.length)
// console.log('Replace of thor with '+data1.replace("o","0000"))
// let index=data1.indexOf("o");
// console.log("index of O in thor is "+index)
// let substr=data2.substr(0,4);
// console.log(substr);

 // **************************   last three character of string strombreaker 
// console.log(data2.substr(2,9))      //romebreak
// let str=data2.substr(data2.length-3,3);
// console.log(str);


// **************************   array[collection of same data type ]

// console.log(data2[2]);
// let array=['LAPTOP ','MOUSE','HDD','cpu','antivirus','MOUSE','HDD','cpu','antivirus'];
// let number=[23,24,25,26,27,28,29,30];
// console.log(number[5]);
// console.log(array[0]);

// let data6=['collect',true,20];
// console.log(data6);
// console.log(array.slice(1,5));
// console.log(array.slice(1,4));

// **************************       control statement 
//*****************************      loops and conditional
// ***********************          FOR LOOP
let count=12;
// for (let i=0;i<=count;i++)
// {
// console.log(i+' for loop');
// }
// ***********************          WHILE LOOP
// let j=0;
// while(j<=count)
// {
//     console.log(j+" while loop");
//     j++;
// }
// ***********************          DO-WHILE LOOP
// let k=1;
// do{
//     console.log(k+ " do while loop");
//     k++;
// }while(k<=20);

//************************       */ arrary printing values using loop
let array=['LAPTOP ','MOUSE','HDD','cpu','antivirus','MOUSE','HDD','cpu','antivirus'];
array.push('mike');
for (let i=0; i<array.length;i++)
{
    console.log(array[i]);
}
array.forEach(function(ele){
    console.log(ele+" ==>using foreach function of js");
})
//************************       */ boolleans
let a=2;
let b=3;
// console.log(a==2);

if (a==b&&a>b){
    console.log("a is greater or equal");
}
else if(a<b){
    console.log("b is greater")
}
else{
    console.log('not equal');
}