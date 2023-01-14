let headerTitle=document.getElementById('header-title');
let header=document.getElementById('main-header');
let a=document.querySelector('.title');

headerTitle.textContent="Hii";
header.style.border='solid 3px black'
a.style.fontWeight='bold';
a.style.color='green'

// let item=document.getElementsByClassName('list-group-item')
// item[2].style.backgroundColor='green'
// for(let i=0;i<item.length;i++){
//     item[i].style.fontWeight='bold';
// }

// let li=document.getElementsByTagName('li')
// li[2].style.backgroundColor='yellow'
// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

// let second=document.querySelector('li:nth-child(2)')
// second.style.backgroundColor='green'

let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
document.querySelectorAll('li')[1].style.backgroundColor='green'

let third=document.querySelector('li:nth-child(3)');
third.style.display="none";