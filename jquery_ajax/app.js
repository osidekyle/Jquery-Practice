



$(function(){
var $orders=$('#order');
var $name=$("#name");
var $drink=$("#drink");

var orderTemplate = $('#order-template').html();

function addOrder(order){
    $orders.append(Mustache.render(orderTemplate, order));
    
}



    $.ajax({
        type:'GET',
        url:"https://jsonplaceholder.typicode.com/posts",
        success: function(data){
           $.each( data, function(i,item){
            addOrder(item);
           });
        },
        error: function(){
            alert("Error loading API");
        }
    });


    $("#add-order").on('click',function(){
            var order={
                title: $name.val(),
            };


            $.ajax({
                type:'POST',
                url:"https://jsonplaceholder.typicode.com/posts",
                data: order,
                success:function(newOrder){
                    addOrder(newOrder);
                    console.log(newOrder);
                },
                error: function(){
                    alert("error saving info")
                }

            })

    })


    $orders.delegate(".remove",'click',function(){
        var $li = $(this).closest('li');
        
        $.ajax({
            type:'DELETE',
            url:"https://jsonplaceholder.typicode.com/posts/"+$(this).attr('data-id'),
            success: function(){
                $li.fadeOut(300,function(){
                    $(this).remove()
                });
            },
            error: function(){
                alert("error deleting");
            }
    });
    });


    $orders.delegate(".editOrder","click", function(){
        var $li=$(this).closest('li');
        $li.find("input.name").val($li.find('span.name').html());
        $li.addClass('edit');
    });
    $orders.delegate(".cancelEdit","click", function(){
        $(this).closest('li').removeClass('edit');
    })


    $orders.delegate('.saveEdit', 'click', function(){
        var $li=$(this).closest('li');
        var order={
            name:$li.find('input.name').val()
        }
        $.ajax({
            type:'PUT',
            url:"https://jsonplaceholder.typicode.com/posts/"+$li.attr('data-id'),
            data: order,
            success:function(newOrder){
                $li.find('span.name').html(order.name);
                $li.removeClass('edit')
            },
            error: function(){
                alert("error updating info")
            }

        })
    })

});