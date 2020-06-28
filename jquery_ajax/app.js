$(function(){
var $orders=$('#order');

    $.ajax({
        type:'GET',
        url:"http://data.fixer.io/api/latest?access_key=25b5ed181f311e4488751ff1beffadac&format=1",
        success: function(data){
           $.each( data.rates, function(i,item){
            $orders.append("<li>Rate: "+item+"</li>");
           });
        }
    });
});