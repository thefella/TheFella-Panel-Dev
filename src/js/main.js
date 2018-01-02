//! Panel loaded
function onLoad() {

	//! Basic variables and themes
	var csInterface = new CSInterface();
	var extId = csInterface.getExtensionID();
	setTheme(csInterface.hostEnvironment.appSkinInfo);
	csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, changeTheme);
	
	//! Make panel persistent     
    var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");   
    event.extensionId = extId;  
    csInterface.dispatchEvent(event); 

    //! Listen for dialog events
	csInterface.addEventListener("dialogEvent", function(evt) {
	    changeButton(evt.data);
	});

	//deleteCookie('customButtons');

	//! Check cookies for custom names
	checkButtonCookies();

	//! Load external JSX files
    loadJSX();
    
    //! Stop context menu, e.g. View Source
    document.addEventListener('contextmenu', event => event.preventDefault());
}
//! End onLoad();





//! Change name of custom buttons
function changeButton(data) {
	
	//! Get and set variables
	var buttonDetails = data.split(',');
	var buttonId = buttonDetails[0];
	var buttonName = buttonDetails[1];
	var button = $('#customButton'+buttonId).html(buttonName);
	var allButtons = [];
	
	//! Loop through buttons and get name
	$("#custom-buttons-group > button.custom-button").each(function(index) {
		allButtons[index] = $(this).html();
	});
	
	//! Get JSON string to store data
	var json_str = JSON.stringify(allButtons);

	//! Set cookie to store names
	setCookie('customButtons', json_str);
}



//! Check cookies for custom button names
function checkButtonCookies() {
	
	//! If cookie exists
	if (getCookie('customButtons')) {
		
		//! Get details
		var cookieInfo = JSON.parse(getCookie('customButtons'));
		
		//! Loop through buttons and set name
		//$(".custom-buttons > .custom-button").each(function(index) {
		$("#custom-buttons-group > button.custom-button").each(function(index) {
			$(this).html(cookieInfo[index]);
		});	
	}
}



//! Set cookie
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}



//! Get cookie
function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}



//! Delete cookie
function deleteCookie(key) {
    var expires = new Date();
    expires.setTime(expires.getTime() - (10 * 365 * 24 * 60 * 60));
    document.cookie = key + '=' + null + ';expires=' + expires.toUTCString();
}



//! Set the panel theme based on the Photoshop theme
function setTheme(theme) {

		var themeClass;
		//var themeColor = toHex(theme.panelBackgroundColor.color);
		var themeColor = "rgb("+theme.panelBackgroundColor.color.red+","+theme.panelBackgroundColor.color.green+","+theme.panelBackgroundColor.color.blue+")";
		var themeFontSize = theme.baseFontSize + "px";
		var themeFontFamily = theme.baseFontFamily;		
		
		//! Set background color asap
		//$('html').css('background-color', "#" + themeColor);
		//$('body').css('background-color', "#" + themeColor);
		
		//$(document.documentElement).css('background-color', "#" + themeColor);
		//$(document.body).css('background-color', "#" + themeColor);
		
		document.documentElement.style.backgroundColor = themeColor;
		document.body.style.backgroundColor = themeColor;
		
		//! Find out if light or dark theme
        if (theme.panelBackgroundColor.color.red > 122) {
            themeClass = 'light';
        } else {
	        themeClass = 'dark';
        }

		//! Set the body theme
		//$('body').removeClass("light dark").addClass(themeClass);
		$(document.body).removeClass("light dark").addClass(themeClass);
		//$('body').prepend(themeFontSize);		
		//$('head').append('<style>.current { background-color: #' + themeColor + '; }</style>');
		/*
		var dynamicCSS = "html { font-size: " + themeFontSize + "; } body { font-family: " + themeFontFamily + ", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; } ul.tabs li.current { background-color: #" + themeColor + " !important; border-bottom-color: #" + themeColor + " !important; }";
		var styleElement = document.createElement('style');
		//styleElement.styleSheet.cssText = dynamicCSS;
		styleElement.appendChild(document.createTextNode(dynamicCSS));
		document.head.appendChild(styleElement);
		*/
		var style = $("<style rel=\"stylesheet\">html{ font-size:"+themeFontSize+";} body{ font-family:"+themeFontFamily+",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; } ul.tabs>li.current{ background-color:"+themeColor+" !important;}</style>");
		//$('html > head').append(style);
		$(document.head).append(style);
}



//! If the Photoshop theme is changed, update the panel theme 
//! From davidebarranca.com
function changeTheme(event) {
    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
    setTheme(skinInfo);
}


/*
//! Change the app color to something more usable
//! From davidebarranca.com
function toHex(color, delta) {
        
    function computeValue(value, delta) {
        var computedValue = !isNaN(delta) ? value + delta : value;
        if (computedValue < 0) {
            computedValue = 0;
        } else if (computedValue > 255) {
            computedValue = 255;
        }
        
        computedValue = Math.floor(computedValue);

        computedValue = computedValue.toString(16);
        return computedValue.length === 1 ? "0" + computedValue : computedValue;
    }

    var hex = "";
    if (color) {
        hex = computeValue(color.red, delta) + computeValue(color.green, delta) + computeValue(color.blue, delta);
    }
    return hex;
}
*/


//! Load external JSX files
function loadJSX() {
    var csInterface = new CSInterface();
    var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/actions/";
    csInterface.evalScript('$._ext.evalFiles("' + extensionRoot + '")');
}



//! Use the button ID to trigger the right script
$(document).on("click", "button", function(event) {
	
	//! If a shift click
	if ( $(this).hasClass('custom-button') && event.shiftKey ) {
			event.preventDefault();
			var csInterface = new CSInterface(); 
			csInterface.evalScript($(this).attr("data-action2") + "()"); 
	} else {
    	var csInterface = new CSInterface();
		csInterface.evalScript($(this).attr("data-action") + "()"); 
    } 
});



function editButton(id) {
	var csInterface = new CSInterface();
	csInterface.evalScript("renameButton()");
}



/*
//! On load and resize, check width and add class
$(window).on('load resize', function () {
	var windowSize = $(window).width();
	var panelSize = 'x-large';
	
	//document.documentElement.style.width = windowSize+"px";
	
	if ( windowSize <= 360 ) {
		panelSize += ' large';
	}
	if ( windowSize <= 340 ) {
		panelSize += ' medium-large';
	}
	if ( windowSize <= 320 ) {
		panelSize += ' medium';
	}
	if ( windowSize <= 280 ) {
		panelSize += ' small';
	}
	if ( windowSize <= 260 ) {
		panelSize += ' x-small';
	}
	if ( windowSize <= 250 ) {
		panelSize += ' xx-small';
	}
	panelSize = panelSize.trim();

    //$("html").removeClass().addClass(panelSize);
    $(document.documentElement).removeClass().addClass(panelSize);
    //$("html").attr('data-width', windowSize);
});
*/


//! jQuery document ready
$(document).ready(function(){
	
	//! Fade in the body
	$(document.body).hide().fadeIn('slow');
	
	
	//! Tabs
	//$('ul.tabs li').click(function(){
	$('#tab-menu > li').click(function() {
		var tab_id = $(this).attr('data-tab');

		//$('ul.tabs li').removeClass('current');
		$('#tab-menu > li').removeClass('current');
		$('#panel > div.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	
	//! Handle web links
	$('a.external-link').click(function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		window.cep.util.openURLInDefaultBrowser(link);
	});
	
	
	/*
	//! If alt/opt, ctrl/cmd, shift keys pressed while button click
	$('button').bind('click', function(event) {
	   if(event.ctrlKey) 
	      alert('ctrl');
	   if(event.altKey)
	      alert('alt');
	   if(event.shiftKey)
	      alert('shift');
	});*/


	//! Change title in adjustment brush section
	//$(".adjustment-tools button").hover(
	$("section.adjustment-tools > div.button-group>button").hover(
		function() {
			$("[data-js='adjustmentsHeader']").text( $(this).attr('title') );
		}, function() {
			$("[data-js='adjustmentsHeader']").text( $("[data-js='adjustmentsHeader']").attr('title') );
			
		}
	);
	
	


	//! Tooltip
	//! http://www.alessioatzeni.com/blog/simple-tooltip-with-jquery-only-text/
	$("[data-js='tooltip']").hover(function() {
		
	        //! Hover over code
	        var title = $(this).attr('title');
	        var type = $(this).attr('data-tooltip-type');
	        $('<p data-type="'+ type +'" class="tooltip '+ type +'"></p>').delay(1500)
	        .text(title)
	        .appendTo('body')
	        .hide()
	        .fadeIn(100);
	        $(this).dequeue();
	}, function() {
	        //! Hover out code
	        $('p.tooltip').remove();
	}).mousemove(function(e) {
			var tooltipWidth = $('p.tooltip').width();
			var type = $('p.tooltip').attr('data-type');
			
			//! Change position depending on type
			if (type == 'inside') {
				var mousex = e.pageX - 2 - tooltipWidth; //Get X coordinates
				var mousey = e.pageY + 12; //Get Y coordinates
			} else {
				var mousex = e.pageX - 6; //Get X coordinates
				var mousey = e.pageY + 12; //Get Y coordinates
			}
	        
	        //! Add CSS
	        $('p.tooltip')
	        .css({ top: mousey, left: mousex })
	});

});