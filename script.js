let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', ()=>{
        if (button.innerHTML == '=') {
            string = eval(string)
            input.value = string;
        }
        else if (button.innerHTML == 'AC') {
            string = "";
            input.value = string ;
        }
        else if (button.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += button.innerHTML;
            input.value = string;
        }
    })
})