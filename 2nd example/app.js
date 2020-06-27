//DOM Traversal\\
//Basic

$(document).ready(function(){
    /*
    $("li").on('click',function(){
        $(this).closest('.sublist').addClass('special')
    })

*/



    //Filtering
    $(".list").on('click',function(){
        //$(this).find('li').filter('.special').remove()
        $(this).find('.special').remove()
    })
})

