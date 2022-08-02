
const rangeSliderInit3 = () => {

    let weidth3 = document.querySelector('.filter-weidth');


    noUiSlider.create(weidth3, {
        start: [18, 22],
        connect: true,
        tooltips: [wNumb ({decimals: 0}), wNumb ({decimals: 0})],
        range: {
            'min': 18,
            'max': 22
        }
    });

    const priceStart3 = document.getElementById ('wmin');
    const priceEnd3 = document.getElementById ('wmax');

    priceStart3.addEventListener('change', setPriceValues)
    priceEnd3.addEventListener('change', setPriceValues)

    function setPriceValues() {
        let priceStartValue3;
        let priceEndValue3;

        if(priceStart3.value != ''){
            priceStartValue3 = priceStart3.value;
    }

    if(priceEnd3.value != ''){
        priceEndValue3 = priceEnd3.value;
    }

    weidth3.noUiSlider.set ([priceStartValue3, priceEndValue3]);

    }


    if (!weidth3 || !priceStart3 || !priceEnd3) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок


    const inputs3 = [priceStart3, priceEnd3]; // создаем массив из меньшего и большего значения

    weidth3.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
          inputs3[handle].value = parseInt(values[handle]);
        });



      }



      const init3 = () => {
        rangeSliderInit3() // запускаем функцию инициализации слайдера
      }


      window.addEventListener('DOMContentLoaded', init3) // запускаем функцию init, когда



