//DOM Traversal\\
//Basic

$(document).ready(function(){
    /*
    $("li").on('click',function(){
        $(this).closest('.sublist').addClass('special')
    })

*/



    //Filtering
    /*
    $(".list").on('click',function(){
        //$(this).find('li').filter('.special').remove()
        $(this).find('.special').remove()
    })
    */


    //Conditionals
    /*
    $('li').on('click', function(){
        $(this).hide();
        if($(this).not('special')){
            alert(" not special");
        }
        */

    //Specifying elements
    $('li').on('click', function(){
        alert('clicked on li')
        if($(this).parent().is(".sublist")){
        $(this).hide();
        }
    })


})

