$(document).ready(function()
{
	//slides the element with class "menu_body" when paragraph with class "menu_head" is clicked 
	$(".sliderpane p.menu_head").click(function()
    {
		$(this).css({backgroundImage:"url(images/right.png)"}).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
       	$(this).siblings().css({backgroundImage:"url(images/up.png)"});
	});
});