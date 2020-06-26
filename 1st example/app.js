
$(document).ready(function(){

    /*Basic Showing and Hiding
    $('#panel').css({
        color:"red",
        fontWeight:"bold",

        
    }).fadeOut(1000)
    $("#panel2").css({
        opacity:".5"
    })
    */

    /*Changing HTML
    $('#panel').html('<h2>dang</h2>');
    */

    //DRY
    $(".panel-main").hide();
    $(".panel-button").on('click',function(){
        var panelId = $(this).attr('data-panelid');
        $('#'+panelId).fadeToggle(200)
        $("#"+panelId+' .panel-text').html('got em')
    })




});



    