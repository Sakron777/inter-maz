$(function() {
    var price = parseFloat($('#price').text());

    $('#subtract').on("click",function() {
      var $qty = $('#qty');
      var current = parseInt($qty.val());
      if ( current > 0 ) {
          $qty.val(current-1);
          $('#total').val(price*(current-1));
      } else {
          $('#total').val(0);
      }
    });

    $('#add').on("click",function() {
      var $qty = $('#qty');
      var current = parseInt($qty.val());
      $qty.val(current+1);
      $('#total').val(price*(current+1));
    });
  });

