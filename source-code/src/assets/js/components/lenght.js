
const rangeSliderInit2 = () => {

    let lenght3 = document.querySelector('.filter-length');


    noUiSlider.create(lenght3, {
        start: [120, 152],
        connect: true,
        tooltips: [wNumb ({decimals: 0}), wNumb ({decimals: 0})],
        range: {
            'min': 120,
            'max': 152
        }
    });

    const priceStart2 = document.getElementById ('lmin');
    const priceEnd2 = document.getElementById ('lmax');

    priceStart2.addEventListener('change', setPriceValues)
    priceEnd2.addEventListener('change', setPriceValues)

    function setPriceValues() {
        let priceStartValue2;
        let priceEndValue2;

        if(priceStart2.value != ''){
            priceStartValue2 = priceStart2.value;
    }

    if(priceEnd2.value != ''){
        priceEndValue2 = priceEnd2.value;
    }

    lenght3.noUiSlider.set ([priceStartValue2, priceEndValue2]);

    }


    if (!lenght3 || !priceStart2 || !priceEnd2) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок


    const inputs2 = [priceStart2, priceEnd2]; // создаем массив из меньшего и большего значения

        lenght3.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
          inputs2[handle].value = parseInt(values[handle]);
        });



      }



      const init2 = () => {
        rangeSliderInit2() // запускаем функцию инициализации слайдера
      }


      window.addEventListener('DOMContentLoaded', init2) // запускаем функцию init, когда



