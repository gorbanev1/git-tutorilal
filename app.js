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