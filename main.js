var x = [2,3,5]; 
x.reduce((accumulator, current) => accumulator*current,1);

console.log(x);
document.getElementById("out").innerHTML = x;
