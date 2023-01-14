// let headerTitle=document.getElementById('header-title');
// let header=document.getElementById('main-header');
// let a=document.querySelector('.title');

// headerTitle.textContent="Hii";
// header.style.border='solid 3px black'
// a.style.fontWeight='bold';
// a.style.color='green'

// // let item=document.getElementsByClassName('list-group-item')
// // item[2].style.backgroundColor='green'
// // for(let i=0;i<item.length;i++){
// //     item[i].style.fontWeight='bold';
// // }

// // let li=document.getElementsByTagName('li')
// // li[2].style.backgroundColor='yellow'
// // for(let i=0;i<li.length;i++){
// //     li[i].style.fontWeight='bold';
// // }

// // let second=document.querySelector('li:nth-child(2)')
// // second.style.backgroundColor='green'

// let odd=document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green'
// }
// document.querySelectorAll('li')[1].style.backgroundColor='green'
// let third=document.querySelector('li:nth-child(3)');
// third.style.display="none";


let item=document.querySelector('#items')
item.parentElement.style.backgroundColor='grey'
item.lastElementChild.style.color='red'
item.firstElementChild.style.color='red'
item.previousElementSibling.style.color='red'

var ne=document.createElement('div');
var tex=document.createTextNode("Hello Word");
ne.appendChild(tex);
let con=document.querySelector('#main-header .container')
let befor=document.querySelector('#main-header .container h1')
con.insertBefore(ne,befor)

var nee=document.createElement('div');
var texx=document.createTextNode("Hello Word");
nee.appendChild(texx);
let li=document.querySelector('.list-group-item')
item.insertBefore(nee,li)

