function myFunction(){
    var bar=$('.ui.sidebar');
    bar.sidebar('toggle');
}
var titleList=new Array();
var contextList=new Array();
var i=0;
function saveFunction(){
        var title=$('#title').val();
        var context=$('#context').val();
        titleList.push(title);
        contextList.push(context);
        $('.content').append("<li id="+i+">"+titleList[i]+" <i class=\"empty star icon\"></i></li>");
        i++;
}
$(function(){
    var star=$("i.empty.star.icon");
    $("li").delegate(star,"click", function(){
        $(this).css('background-color', 'yellow');
    });
});

