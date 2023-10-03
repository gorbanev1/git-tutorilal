/*function Post(author, likes) {
    const result={};
    this.author=author;
    this.likes=likes;
    return result;    
}
const post= new Post('Росбанк',100);
*/
function hello(){
    console.log('Hello', this)
}
const person = {
    name: 'Igor',
    age: 36,
    sayHello: hello,
    sayHelloWindow: hello .bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}
const lena = {
    name: 'Elena',
    age: 23
}
const fnLenaInfoLog = person.logInfo.bind(lena,'sekretar', '8342342323423');
fnLenaInfoLog();
// person.logInfo.bind(lena, 'sekretar', '8342342323423')();
// person.logInfo.call(lena, 'sekretar', '8342342323423');
person.logInfo.apply(lena, ['sekretar', '8342342323423']);

const array1=  [1,2,4,6];
function mathOp (m){
console.log(array1.map((i)=>i/m));
}
mathOp(32);
Array.prototype.multBy = function(n){
    console.log('multBy',this.map((i)=>i/n));
}
array1.multBy(11);

function urlGenerator(domain){
    return function(url){
        return `${url}.${domain}`
    }
}
const comUrl=urlGenerator('com');
console.log(comUrl('pizduk'));

function bind(context, fn) {
    return function (){
        fn.bind(context)()
    }
}
function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1={name: 'Михаил', age: 22, job: 'Frontend'}
bind(person1, logPerson)();
 const module={
    x:42,
    getX: function(){
        return this.x;
    }
 };
 const unboundGetX=console.log(module.getX());
 const boundGetX=console.log(module.getX.bind(module)());

 const unboundGetX2 = module.getX;
console.log(unboundGetX2()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX2 = unboundGetX2.bind(module);
console.log(boundGetX2());
// Expected output: 42

// const myObject = {

//     myMethod(items) {
    
//     console.log(this); // myObject
    
//     const callback = function ()  {
    
//     console.log(this); // myObject
    
//     };
    
//     items.forEach(callback);
    
//     }
    
//     };
//     myObject.myMethod([1, 2, 3]);
//     console.log('----------------------------');
//     myObject.myMethod.bind(myObject.myMethod)([1, 2, 3]);

const myObject = {

    // a:23,
    myMethod(items) {
    
    console.log(this); // myObject
    
    const callback = function()  {
    
    console.log(this); // myObject
    
    };
    
    items.forEach(callback);
    
    }
    
    };
    
    myObject.myMethod.bind(myObject.myMethod)([1, 2, 3]);
   
    // console.log('Request data....');
    // setTimeout(()=>{
    //     console.log('Preparing data...')

    //     const backendData ={
    //         server: "ebanserv",
    //         port: 2000,

    //     }
    //     setTimeout(()=>{
    //         backendData.modified=true;
    //         console.log('Data received',backendData)
    //     },4444)
        
    // },2000)

    const p = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log('Preparing data...')
            const backendData={
            server: "ebanserv",
            port: 2000,
            }
            reject(backendData);
        },2000)
    })
    p.then((data)=>{
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                data.modified=true
                resolve(data)
            },1000)
        })
    })
    .then(clientData=>{
        console.log('Data received', clientData);
        clientData.fromPromise=true;
        return clientData
}).then(data=>{
    console.log('Modified', data)
})
.catch(err=>console.error('Error:', err))
.finally(()=>console.log('Finally'))

const sleep=ms=>{
    return new Promise(resolve=>{
        setTimeout(() => resolve(), ms);
    })
}
sleep(3000).then(()=>console.log('Afr 3'));
Promise.all([sleep(2000), sleep(3000)]).then(() =>{
    console.log('All promises')
})

function Calculator(a,b){
    this.read=function(){
    this.a=+prompt('a?');
    this.b=+prompt('b?');
    }
    this.sum=function()
    {return (this.a+this.b)};
    this.mul=(a,b)=>a*b;
}

const calc = new Calculator()
// let a=Number(prompt('a'));
// let b=Number(prompt('b'));
calc.read();
console.log(calc.a);
console.log(calc.b);
console.log(calc.sum());