

const item = document.getElementsByClassName('item');
const itemActive = document.getElementsByClassName('item active');

const button = document.getElementById('next')


button.addEventListener("click",show);

function show(){
    
        item.className = 'item active';
        itemActive.className = 'item'
}  