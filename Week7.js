var order = [];
function fn1() {
    var str= document.getElementById("customerOrder").value;
    alert("You have selected "+ str);
    
    console.log(str);
   order = str.split(',');
console.log(order);
};




let menu = {
    'fry': 10,
    'shake': 10,
    'burger': 10,
    'salad': 10,
    'drink': 10,
    'cookie': 10

}