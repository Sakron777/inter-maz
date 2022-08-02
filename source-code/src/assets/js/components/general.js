
const rangeSliderInit1 = () => {

    let general = document.querySelector('.filter-general');


    noUiSlider.create(general, {
        start: [238, 269],
        connect: true,
        tooltips: [wNumb ({decimals: 0}), wNumb ({decimals: 0})],
        range: {
            'min': 238,
            'max': 269
        }
    });



    //filter-range
    const priceStart1 = document.getElementById ('start2');
    const priceEnd1 = document.getElementById ('end2');



    //filter-range
    priceStart1.addEventListener('change', setPriceValues)
    priceEnd1.addEventListener('change', setPriceValues)




    //filter-range
    function setPriceValues() {
        let priceStartValue1;
        let priceEndValue1;

        if(priceStart1.value != ''){
            priceStartValue1 = priceStart1.value;
    }

    if(priceEnd1.value != ''){
        priceEndValue1 = priceEnd1.value;
    }

    general.noUiSlider.set ([priceStartValue1, priceEndValue1]);

    }




    //filter-range
    if (!general || !priceStart1 || !priceEnd1) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок




    const inputs1 = [priceStart1, priceEnd1]; // создаем массив из меньшего и большего значения



        general.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
          inputs1[handle].value = parseInt(values[handle]);
        });



      }



      const init1 = () => {
        rangeSliderInit1() // запускаем функцию инициализации слайдера
      }


      window.addEventListener('DOMContentLoaded', init1) // запускаем функцию init, когда



