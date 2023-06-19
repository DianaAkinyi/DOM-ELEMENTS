document.getElementById('heading').style.color='red';
document.getElementById('heading').style.background='black'

document.getElementById('intro').innerHTML='My name is Diana Owiti and I am a student at AkiraChix.'
document.getElementById('intro').style.fontSize='24px'

let paragraph=document.createElement('p');
paragraph.innerHTML='I am 23 years old'
document.getElementById('container').appendChild(paragraph)
document.getElementById('container').appendChild(paragraph).style.color='green';
// document.getElementById('container').removeChild(paragraph)
let child =document.getElementById('container').children
console.log({child})
let button =document.getElementById('button');
button.addEventListener('click',function(){
button.innerHTML='Clicked !!!';
})
document.getElementById('container').setAttribute('class','containers');
