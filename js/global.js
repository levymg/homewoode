$(document).ready(function(){
						   
	//scroll to anchor
	$('.scroll').click(function(){$('#top').ScrollTo(1000);return false});
	$('.write, .add').click(function(){$('#respond').ScrollTo(1000);return false});


	//toggle .linkprefs
	$(".linkprefs p").hide();
								  
	$(".linkprefs span").click(function(){
		$('.linkprefs p').slideToggle(800);
	});

	//contact pop
	$("#subnav .contact").hover(function() {
		$(".feedcount").css({ display: "none"});
		$("#contact-pop").css({ display: "block"});
	}, function() {
		$("#contact-pop").css({ display: "none"});
		$(".feedcount").css({ display: "block"});
	});

	//feedcount
	$("#subnav .rss").hover(function() {
		$(".feedcount .subscribers").css({ display: "none"});
		$(".feedcount .after").css({ display: "block"});
	}, function() {
		$(".feedcount .after").css({ display: "none"});
		$(".feedcount .subscribers").css({ display: "block"});
	});

	//toggle .comment author url
	$(".commentlist cite a").hover(function() {
		$(this).next("small").css({ display: "inline"});
	}, function() {
		$(this).next("small").css({ display: "none"});
	});

	//toggle .comment-entry
	$(".expand-all").hover(function() {
		$(this).addClass("over");
	}, function() {
		$(this).removeClass("over");
	});

	
	//toggle .comment-entry
	$(".collapse").click(function(){
		$(this).parents(".comment-data").next(".comment-entry").slideToggle(800);
		$(this).toggleClass("expand");
	});

	
	//collapse or expand all comments
	$(".expand-all").click(function(){
		$(".comment-entry").slideToggle(800);
		$(".collapse").toggleClass("expand");
	});

	
	//hide guidelines
	$(".guidelines").hide();
	//toggle comment guidelines
	$(".comment-guidelines").click(function(){
		$(".guidelines").slideToggle(800);
	});

	//custom banner
	$(".custom-banner, .custom-square").click(function() {
    	window.location=$(this).find("a").attr("href");return false;
	}); 	

	//live comment preview
	$('#comment').one('focus',function() {
		//$('#comment').parent().after('<div id="preview-box"><h3>Live Comment Preview</h3><div id="live-preview"></div></div>');
		$('#preview-box').show();
	});
	var $comment = '';
	$('#comment').keyup(function() {
		$comment = $(this).val();
		$comment = $comment.replace(/\n\n+/g, '<br /><br />').replace(/\n/g, "<br />");
		$('#live-preview').html( $comment );
	});

	$("#preview-box #comment-preview").click(function(){
		$("#live-preview").slideToggle(300);
	});

	$(".thickbox img").before('<span class="zoom"></span>');
	
	$(".custom-square").insertAfter("#single h1");

	$(".custom-banner, .horizontal-banner").appendTo(".post:first");

	$("#single .custom-banner, #single .horizontal-banner").insertAfter("#single .postnav");

	//bookmark tools
	$(".post h2").each(function() {
		var urlTitle = $(this).find("a").text();
		$(this).parent(".post").find(".bookmark-tools .delicious, .bookmark-tools .stumbleupon").attr("href", function() { return this.href + "&title=Web Designer Wall - " + urlTitle; });
	});

	$("#single h1").each(function() {
		var urlTitle = $(this).text();
		$(this).parent(".post").find(".bookmark-tools .delicious, .bookmark-tools .stumbleupon").attr("href", function() { return this.href + "&title=Web Designer Wall - " + urlTitle; });
	});
	
	$("#searchbox").autocomplete({
		source: "search.php",
		minLength: 2, 
		select: function( event, ui ) { 
            window.location.href = ui.item.value;
        }
	});
	
	$("#nav li a").hover(function() { 
		$(this).parent().find("ul.subnav").stop(true,true).slideDown('fast').show(); //Drop down the subnav on hover
		$(this).parent().addClass("subhover2");
		
		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subnav").stop(true,true).slideUp('slow'); //When the mouse hovers out of the subnav, move it back up
			$(this).removeClass("subhover2");
		});

		//Following events are applied to the trigger (Hover events for the trigger)
		}).hover(function() { 
			$(this).addClass("subhover"); //On hover over, add class "subhover"
		}, function(){	//On Hover Out
			$(this).removeClass("subhover"); //On hover out, remove class "subhover"
	});

}); //close doc ready


//////////////////// scroll by jquery ////////////////////////////////////////////////////////////////////////////
jQuery.getPos = function (e)
{
	var l = 0;
	var t  = 0;
	var w = jQuery.intval(jQuery.css(e,'width'));
	var h = jQuery.intval(jQuery.css(e,'height'));
	var wb = e.offsetWidth;
	var hb = e.offsetHeight;
	while (e.offsetParent){
		l += e.offsetLeft + (e.currentStyle?jQuery.intval(e.currentStyle.borderLeftWidth):0);
		t += e.offsetTop  + (e.currentStyle?jQuery.intval(e.currentStyle.borderTopWidth):0);
		e = e.offsetParent;
	}
	l += e.offsetLeft + (e.currentStyle?jQuery.intval(e.currentStyle.borderLeftWidth):0);
	t  += e.offsetTop  + (e.currentStyle?jQuery.intval(e.currentStyle.borderTopWidth):0);
	return {x:l, y:t, w:w, h:h, wb:wb, hb:hb};
};
jQuery.getClient = function(e)
{
	if (e) {
		w = e.clientWidth;
		h = e.clientHeight;
	} else {
		w = (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth;
		h = (window.innerHeight) ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight;
	}
	return {w:w,h:h};
};
jQuery.getScroll = function (e) 
{
	if (e) {
		t = e.scrollTop;
		l = e.scrollLeft;
		w = e.scrollWidth;
		h = e.scrollHeight;
	} else  {
		if (document.documentElement && document.documentElement.scrollTop) {
			t = document.documentElement.scrollTop;
			l = document.documentElement.scrollLeft;
			w = document.documentElement.scrollWidth;
			h = document.documentElement.scrollHeight;
		} else if (document.body) {
			t = document.body.scrollTop;
			l = document.body.scrollLeft;
			w = document.body.scrollWidth;
			h = document.body.scrollHeight;
		}
	}
	return { t: t, l: l, w: w, h: h };
};

jQuery.intval = function (v)
{
	v = parseInt(v);
	return isNaN(v) ? 0 : v;
};

jQuery.fn.ScrollTo = function(s) {
	o = jQuery.speed(s);
	return this.each(function(){
		new jQuery.fx.ScrollTo(this, o);
	});
};

jQuery.fx.ScrollTo = function (e, o)
{
	var z = this;
	z.o = o;
	z.e = e;
	z.p = jQuery.getPos(e);
	z.s = jQuery.getScroll();
	z.clear = function(){clearInterval(z.timer);z.timer=null};
	z.t=(new Date).getTime();
	z.step = function(){
		var t = (new Date).getTime();
		var p = (t - z.t) / z.o.duration;
		if (t >= z.o.duration+z.t) {
			z.clear();
			setTimeout(function(){z.scroll(z.p.y, z.p.x)},13);
		} else {
			st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.y-z.s.t) + z.s.t;
			sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.x-z.s.l) + z.s.l;
			z.scroll(st, sl);
		}
	};
	z.scroll = function (t, l){window.scrollTo(l, t)};
	z.timer=setInterval(function(){z.step();},13);
};