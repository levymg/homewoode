<!--
/*
	Link Target Preferences v.1.1
	http://www.noscope.com/journal/2004/10/link-target-preferences
*/

// BEGIN Configuration
	// The following URLs are considered "on-site", and will be ignored
	// Consider adding both your main URL and the no-ww URL
	var url_1 = "http://www.webdesignerwall.com";
	var url_2 = "http://webdesignerwall.com";

	// Default link-target preference. What should be default for new users?
	// Value true opens in _blank by default, false opens in _top by default
	var open_blank_default = false;
	
	// Website title - used only for cookie name to prevent cookie conflicts with other sites using this
	// No spaces, no special characters, just a unique name
	var site_title = "wdw";
// END Configuration

// Cookie Functions
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name) {
	createCookie(name,"",-1);
}
// Checkbox Loader
function loadLinkPrefs () {
	if (readCookie(site_title+"_linkprefs_cookie")) {
		initVal = readCookie(site_title+"_linkprefs_cookie");	// Load cookied preference
	} else {
		createCookie(site_title+"_linkprefs_cookie", true, 20000)
		initVal = open_blank_default;	// If no cookie is set
	}
	openBlank = initVal;
	setCheckbox(eval(initVal))
}
// Set Checkbox State
function setCheckbox(state) {
	openBlank = state;
	document.getElementById('linkprefs').checked = state;
	setTargets();
	createCookie(site_title+"_linkprefs_cookie", state, 20000)
}
// Configure Link Targets
function setTargets() {
	var link, l = 0;
	if (openBlank == true) {
		while (link = document.links[l++]) {
			// Open in _blank, except all links starting with...
			if (link.href.indexOf(url_1) == -1 && link.href.indexOf(url_2) == -1 && link.href.indexOf('javascript') == -1) link.target = '_blank'; 
		}
	} else {
		while (link = document.links[l++]) {
			// Open in _top, except all links starting with...
			if (link.href.indexOf(url_1) == -1 && link.href.indexOf(url_2) == -1 && link.href.indexOf('javascript') == -1) link.target = '_top'; 
		}
	}
}
// Event Listener, by Scott Andrew
function addEvent(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, true);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent('on'+evType, fn);
		return r;
	} else {
		return false;
	}
}
//-->
