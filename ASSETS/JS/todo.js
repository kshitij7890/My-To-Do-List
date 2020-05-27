$("ul").on("click","li",function(){
$(this).toggleClass("comp");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
     $(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13)
	{
     var value = $(this).val();
     $(this).val("");
     $("ul").append(" <li><span><i class='fa fa-trash'> </i></span> "+value+"</li>")
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});