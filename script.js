const d = document.getElementById("display");
const add = v =>d.value += v; //v is value  //it adds value
const clearDisplay = () => d.value ="";
const calculate = () => d.value = eval(d.value) || "";