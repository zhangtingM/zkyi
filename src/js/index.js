$(function() {
    $(".box").onclick(function() {
        alert(1)
    })
    $.ajax({
        url: '../data/data.json',
        success: function(res) {
            render(res)
        }
    })


})