var titleList=new Array();
var contextList=new Array();
var i=0;
function wizardFunction(){
    var bar=$('.ui.sidebar');
    bar.sidebar('toggle');
}
function saveFunction(){
    var title=$('#title').val();
    var context=$('#context').val();
    titleList.push(title);
    contextList.push(context);
    $('.content').append("<li>"+titleList[i]+" <i class=\"empty star icon\"></i></li>");
    i++;
}
var check=0;
$(document).on('click','i.empty.star.icon',function(){
    if(!check){
        $(this).parent().css('background-color','yellow');
        check=check+1;
    }else{
        $(this).parent().css('background-color','transparent');
        check=check-1;
    }
});

$(document).on('click','i.write.icon',function(){
    var bar=$('.ui.sidebar');
    bar.sidebar('hide');
    $('#title').val('');
    $('#context').val('');
});


