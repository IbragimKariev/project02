

$(document ).ready(function() {
    $('.dropdown ul>li').click(function(){
        $('.dropdown ul>li').each(function(){
            $(this).removeClass('drop-selected');
        });
        $(this).toggleClass('drop-selected');
        $('.dropdown>span').text($(this).attr("val"))
    });
});



$(document ).ready(function() {
    $('.dropdownw ul>li').click(function(){
        $('.dropdownw ul>li').each(function(){
            $(this).removeClass('drop-selected');
        });
        $(this).toggleClass('drop-selected');
        $('.dropdownw>span').text($(this).attr("val"))
    });
});

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass(" icon-up-open");
});
