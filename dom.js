let headerTitle=document.getElementById('header-title');
let header=document.getElementById('main-header');
let a=document.querySelector('.title');
headerTitle.textContent="Hii";
header.style.border='solid 3px black'
a.style.fontWeight='bold';
a.style.color='green'

let item=document.getElementsByClassName('list-group-item')
item[2].style.backgroundColor='green'
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}
