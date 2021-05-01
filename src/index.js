function showMenu(dropdownToggle, itemsId) {
    const toggleBtn = document.getElementById(dropdownToggle);
    const items = document.getElementById(itemsId);
    const arrow = document.querySelector('.arrow');

    if(dropdownToggle && itemsId){
        toggleBtn.addEventListener('click', ()=>{
            items.classList.toggle('hidden');
            arrow.classList.toggle('rotate');
        })
    }
}


showMenu('1','2')