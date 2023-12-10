$(document).ready(function(){   // selector runs when webpage is fully loaded
    $('.silouette').hide();
    $('.name').hide();
    $('.backdrop').fadeOut(1, function(){
        $('.backdrop').delay(1000).fadeIn(1000, function(){
            $('.silouette').show()
            $('.silouette').animate({
                height:'450px',
                width:'450px',
                top:'200px',
                left:'200px'
            }, 600 
            );
        });
    });

    $('#reveal').click(function(){   // occurs when user clicks reveal button
        $('.silouette').fadeOut();

        $('.answer').show()
        $('.name').show()
            $('.answer').animate({
                height:'450px',
                width:'450px',
                top:'200px',
                left:'200px'
            }, 600 
            );
    });
})