$(document).ready(function () {
    let currentFloor = 02;
    let floorPath = $('.home path');
    let counterUp = $('.counter__up');
    let counterDown = $('.counter__down');
    let modal = $('.modal');
    let modalCloseButton = $('.modal__button-close');
    let viewFlatsButton = $('.view-flats');
    let active = $('.navbar__item_active')

    function toggleModal() { 
        modal.toggleClass('is-open');
     };

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor')
        currentFloor = $(this).attr('data-floor');
        $('.count').text(currentFloor)
      })
    counterUp.on('click', function () {
        if(currentFloor < 18) {
            currentFloor++;
            let usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits:2, useGrouping:false })
            $('.count').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })

    counterDown.on('click', function () {
        if(currentFloor > 2) {
            currentFloor--;
            let usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits:2, useGrouping:false })
            $('.count').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })

    $('.navbar__item').on('mouseenter', function () {
    $('.navbar__item_active').removeClass('navbar__item_active');
    $(this).addClass('navbar__item_active');
  }).on('mouseleave', function () {
    $('.navbar__item_active').removeClass('navbar__item_active');
    active.addClass('navbar__item_active');
  });
});