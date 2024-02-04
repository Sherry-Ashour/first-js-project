let btn = document.getElementById('btn');
let output = document.getElementById('output');
let websites = ['Edabit.com','hakerrank.com','letcode.com','gencraft.com','cubic-brzier.com','css-bud.com','element.com','css-buttons.com'];

btn.addEventListener('click',

function(){
   var result=websites[ Math.floor(Math.random()*websites.length)]
 output.innerHTML=result;
   


}

)