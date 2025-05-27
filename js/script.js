$(function () {


    // fadeIn() /fadeOut()

    $('.notice ul li:nth-child(1)').on('click', function () {
        $('.modal-wrap ').fadeIn()

    })
    $('.closeBtn').on('click', function () {
        $('.modal-wrap ').fadeOut()

    })

    // slideDown() , slideUp()
    $('.nav-list').hover(function () {
        $('.sub-list').stop().slideDown()
    })

    $('.sub-list').mouseleave(function () {

        setTimeout(function () {//함수 내용을 몇초 뒤에 실행

            $('.sub-list').stop().slideUp()
        }, 1000)
    })


    // $('.go').on('click', function () {
    //     window.location.href = $('#site').val()
    //     console.log($('#site').val())
    // })

})


document.querySelector('.go').addEventListener('click', function () {

    console.log(document.querySelector('#site').value)


    window.location.href = document.querySelector('#site').value;
});