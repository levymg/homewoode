
/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */
var J = jQuery.noConflict();
;(function(J){
	J.fn.superfish = function(op){

		var sf = J.fn.superfish,
			c = sf.c,
			Jarrow = J(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var JJ = J(this), menu = getMenu(JJ);
				clearTimeout(menu.sfTimer);
				JJ.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var JJ = J(this), menu = getMenu(JJ), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=(J.inArray(JJ[0],o.Jpath)>-1);
					JJ.hideSuperfishUl();
					if (o.Jpath.length && JJ.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.Jpath);}
				},o.delay);	
			},
			getMenu = function(Jmenu){
				var menu = Jmenu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function(Ja){ Ja.addClass(c.anchorClass).append(Jarrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = J.extend({},sf.defaults,op);
			o.Jpath = J('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				J(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			J('li:has(ul)',this)[(J.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( J('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var Ja = J('a',this);
			Ja.each(function(i){
				var Jli = Ja.eq(i).parents('li');
				Ja.eq(i).focus(function(){over.call(Jli);}).blur(function(){out.call(Jli);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !(J.browser.msie && J.browser.version < 7)) menuClasses.push(c.shadowClass);
			J(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = J.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if (J.browser.msie && J.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'fast',
		autoArrows	: false,
		dropShadows : false,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	J.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.Jpath : '';
			o.retainPath = false;
			var Jul = J(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call(Jul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				Jul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call(Jul);
			o.onBeforeShow.call(Jul);
			Jul.animate(o.animation,o.speed,function(){ sf.IE7fix.call(Jul); o.onShow.call(Jul); });
			return this;
		}
	});

})(jQuery);
