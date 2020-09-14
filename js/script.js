$(document).ready(function(){
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

    $("#submucluc").hide()
    $(window).scroll(function(){
        var t=$(this).scrollTop()
        if (t>=500)
            $("#submucluc").show(500)
        else
            $("#submucluc").hide(500)
    });

    $("#muc1").click(function(){
        var obj = $("#muc1js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc2").click(function(){
        var obj = $("#muc2js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc3").click(function(){
        var obj = $("#muc3js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc4").click(function(){
        var obj = $("#muc4js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc5").click(function(){
        var obj = $("#muc5js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });

    $("#muc1top").click(function(){
        var obj = $("#muc1js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc2top").click(function(){
        var obj = $("#muc2js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc3top").click(function(){
        var obj = $("#muc3js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc4top").click(function(){
        var obj = $("#muc4js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });
    $("#muc5top").click(function(){
        var obj = $("#muc5js").offset();
        $('html, body').animate({
            'scrollTop': obj.top
        }, 1000)
    });

});