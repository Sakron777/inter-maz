
//бургер

const filter = document.getElementById("filterToggle");
const catalog = document.getElementById("filt");
const page2  = document.getElementById('page');
const body2 = document.body;

//вещаем разработчик собийтий клика

filter.addEventListener("click", event => {
    if (body2.classList.contains('show-filter')){
        closeFilter();
    } else{
        showFilter();
    }
});

function showFilter () {
    body2.classList.add('show-filter');
}

//при клике на маску закрываем сайтбар

function closeFilter(){
    body2.classList.remove('show-filter');
}

