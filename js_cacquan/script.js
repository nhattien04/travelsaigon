$(document).ready(function() {
    $("#caption1").show()
    $(".images img").click(function() {
        $("#mainImg").attr("src", $(this).attr("src"))

        var c = $(this).attr("id")
        $(".NoiDungAnh").hide()
        $(`#caption${c.slice(3)}`).show()

    })

    $("#tag").hide()
    $(window).scroll(function(){
        var t=$(this).scrollTop()
        var pageHeight = $('html, body').height();
        if (t>=350 && t < pageHeight - 1000)
            $("#tag").show(500)
        else
        $("#tag").hide(500)
    });
    
    $("#gototopjs").hide()
    $(window).scroll(function(){
        var t=$(this).scrollTop()
        if (t>=100)
            $("#gototopjs").show(500)
        else
            $("#gototopjs").hide(500)
    });

    $("#gototopjs").click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 1000)
    })

})