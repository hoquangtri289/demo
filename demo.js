console.log('hello demo.js');
function showName(){
    console.log(this.name);
}

let user = {
    name: 'demo',
    age: 89
};

showName.call(user);