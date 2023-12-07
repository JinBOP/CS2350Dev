$(document).ready(function(){   // selector runs when webpage is fully loaded
    $('.sue').slideUp(1000);
    $('.sue').delay(1000).slideDown(1000, function(){
        $('div').fadeOut(2000);
        $('div').delay(1000).fadeIn(2000);
    });


    $('#fireworks').click(function(){   // occurs when user clicks fireworks button
        $('h2').fadeOut();

        // resets animation
        $('.purple').animate({
            height:'0px',
            width:'0px',
            top:'300px',
            left:'460px'
        },function(){
            $(this).show();
        });

        $('.green').animate({
            height:'0px',
            width:'0px',
            top:'300px',
            left:'460px'
        }, function(){
            $(this).show();
        });

        $('.red').animate({
            height:'0px',
            width:'0px',
            top:'300px',
            left:'460px'
        }, function(){
            $(this).show();
        });

        // carries out animation
        $('.purple').animate({
            height:'640px',
            width:'640px',
            top:'15px',
            left:'150px'
        }, 600, 'linear', function(){
            $(this).hide();
        });

        $('.green').delay(560).animate({
            height:'640px',
            width:'640px',
            top:'15px',
            left:'150px'
        }, 600, 'linear', function(){
            $(this).hide();
        });

        $('.red').delay(1100).animate({
            height:'640px',
            width:'640px',
            top:'15px',
            left:'150px'
        }, 600, 'linear', function(){
            $(this).fadeOut(600);
        });

        $('h2').delay(2200).fadeIn();

    });
})