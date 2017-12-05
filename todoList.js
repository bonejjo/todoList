var titleList=new Array();
var contextList=new Array();
var i=0;
function myFunction(){
    var bar=$('.ui.sidebar');
    bar.sidebar('toggle');
}
function saveFunction(){
    var title=$('#title').val();
    var context=$('#context').val();
    titleList.push(title);
    contextList.push(context);
    $('.content').append("<li id="+i+">"+titleList[i]+" <i class=\"empty star icon\"></i></li>");
    i++;
}
$(document).on('click','i.empty.star.icon',function(){
    $(this).parent().css('background-color','yellow');
});
$(document).on('click','i.write.icon',function(){
    var bar=$('.ui.sidebar');
    bar.sidebar('hide');
    $('#title').val('');
    $('#context').val('');
});


