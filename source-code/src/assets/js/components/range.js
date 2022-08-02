
const rangeSliderInit = () => {

let srange = document.querySelector('.filter-range');




noUiSlider.create(srange, {
    start: [5000, 50000],
    connect: true,
    tooltips: [wNumb ({decimals: 0}), wNumb ({decimals: 0})],
    range: {
        'min': 0,
        'max': 50000
    }
});



//filter-range
const priceStart = document.getElementById ('start');
const priceEnd = document.getElementById ('end');



//filter-range
priceStart.addEventListener('change', setPriceValues)
priceEnd.addEventListener('change', setPriceValues)




//filter-range
function setPriceValues() {
    let priceStartValue;
    let priceEndValue;

    if(priceStart.value != ''){
        priceStartValue = priceStart.value;
}

if(priceEnd.value != ''){
    priceEndValue = priceEnd.value;
}

srange.noUiSlider.set ([priceStartValue, priceEndValue]);

}




//filter-range
if (!srange || !priceStart || !priceEnd) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок




const inputs = [priceStart, priceEnd]; // создаем массив из меньшего и большего значения



    srange.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
      inputs[handle].value = parseInt(values[handle]);
    });



  }



  const init = () => {
    rangeSliderInit() // запускаем функцию инициализации слайдера
  }


  window.addEventListener('DOMContentLoaded', init) // запускаем функцию init, когда



