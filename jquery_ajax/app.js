$(function(){
var $orders=$('#order');
var $name=$("#name");
var $drink=$("#drink");

    $.ajax({
        type:'GET',
        url:"https://jsonplaceholder.typicode.com/posts",
        success: function(data){
           $.each( data, function(item){
            $orders.append("<li>Order: "+item+"</li>");
           });
        },
        error: function(){
            alert("Error loading API");
        }
    });


    $("#add-order").on('click',function(){
            var order={
                name: $name.val(),
                drink: $drink.val()
            };


            $.ajax({
                type:'POST',
                url:"https://jsonplaceholder.typicode.com/posts",
                data: order,
                success:function(newOrder){
                    $orders.append("<li>Order: "+newOrder.name+"</li>");
                },
                error: function(){
                    alert("error saving info")
                }

            })

    })
});