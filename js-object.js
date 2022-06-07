//1
var user = {};
user.name = "John";
user.subName = "Mike";
user.name = "Peter"
delete user.name
//2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

var cal=function(fruit) {
    var total = 0;
    for (var i in fruit) {
        total+=fruit[i];
        console.log(typeof fruit[i])
    }
    return total;
}
