$(document).ready(function(){
    $('.next').on('click', function(){
        var curr = $('.active');
        var next = curr.next();

        if(next.length!=0){
            curr.removeClass('active');
            next.addClass('active');
        }
        else{
            curr.removeClass('active');
            $('#first').addClass('active');
        }

    })
    $('.prev').on('click', function(){
        var curr = $('.active');
        var prev = curr.prev();

        if(prev.length!=0){
            curr.removeClass('active');
            prev.addClass('active');
        }
        else{
            curr.removeClass('active');
            $('#last').addClass('active');
        }

    })




});
