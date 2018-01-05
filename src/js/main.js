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
	
	//! Check cookies for tools menu
	checkToolsMenuCookies();

	//! Check cookies for custom names
	checkButtonCookies();

	//! Load external JSX files
    loadJSX();
    
    //! Stop context menu, e.g. View Source
    window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
    
    //! Build the flyout menu
    generateFlyoutMenu();
    
    // Listen for the flyout menu interaction
	csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", flyoutMenuClicked);

	//! Get current tool	
	csInterface.evalScript("getCurrentTool()", function(tool) {
		selectTool(tool);
	});
}
//! End onLoad();






//! Change name of custom buttons
function changeButton(data) {
	
	//! Get and set variables
	var buttonDetails = data.split(",");
	var buttonId = buttonDetails[0];
	var buttonName = buttonDetails[1];
	var button = $("#customButton"+buttonId).html(buttonName);
	var allButtons = [];
	
	//! Loop through buttons and get name
	$("#custom-buttons-group > button.custom-button").each(function(index) {
		allButtons[index] = $(this).html();
	});
	
	//! Get JSON string to store data
	var json_str = JSON.stringify(allButtons);

	//! Set cookie to store names
	setCookie("customButtons", json_str);
}



//! Check cookies for custom button names
function checkButtonCookies() {
	
	//! If cookie exists
	if (getCookie("customButtons")) {
		
		//! Get details
		var cookieInfo = JSON.parse(getCookie("customButtons"));
		
		//! Loop through buttons and set name
		$("#custom-buttons-group > button.custom-button").each(function(index) {
			$(this).html(cookieInfo[index]);
		});	
	}
}



//! Set cookie
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60));
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
}



//! Get cookie
function getCookie(key) {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : null;
}



//! Delete cookie
function deleteCookie(key) {
    var expires = new Date();
    expires.setTime(expires.getTime() - (10 * 365 * 24 * 60 * 60));
    document.cookie = key + "=" + null + ";expires=" + expires.toUTCString();
}



//! Set the panel theme based on the Photoshop theme
function setTheme(theme) {

		var themeClass;
		var themeName;
		var themeColor = "rgb("+theme.panelBackgroundColor.color.red+","+theme.panelBackgroundColor.color.green+","+theme.panelBackgroundColor.color.blue+")";
		var themeFontSize = theme.baseFontSize + "px";
		var themeFontFamily = theme.baseFontFamily;		
		
		//! Set background color asap
		document.documentElement.style.backgroundColor = themeColor;
		document.body.style.backgroundColor = themeColor;
		
		//! Find out if light or dark theme
        if (theme.panelBackgroundColor.color.red > 122) {
            themeClass = "light";
        } else {
	        themeClass = "dark";
        }
        
        //! Find out which theme is being used and give it a name (based on uiBrightnessLevel names)        
        switch (theme.panelBackgroundColor.color.red) {
		    case 50:
		        themeName = "dark-grey";
		        break;
		    case 83:
		        themeName = "medium-grey";
		        break;
		    case 184:
		        themeName = "light-grey";
		        break;
		    case 240:
		        themeName = "original";
		        break;
		    default:
		        themeName = "unknown-theme";
		}

		//! Set the body theme
		$(document.body).removeClass("light dark original light-grey medium-grey dark-grey").addClass(themeClass).addClass(themeName);
		var style = $("<style rel=\"stylesheet\">html{ font-size:"+themeFontSize+";} ul.tabs>li.current{ background-color:"+themeColor+" !important;}</style>");
		$(document.head).append(style);
		
		//! Set class based on font-size
		var uiFontSize = "font-unknown";
		if (theme.baseFontSize == 9) {
			uiFontSize = "tiny"; 
		} else if (theme.baseFontSize == 10) {
			uiFontSize = "small";
		} else if (theme.baseFontSize == 11) {
			uiFontSize = "medium";
		} else if (theme.baseFontSize == 12) {
			uiFontSize = "large";
		}
		$(document.documentElement).addClass("font-"+uiFontSize);
}



//! If the Photoshop theme is changed, update the panel theme 
//! From davidebarranca.com
function changeTheme(event) {
    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
    setTheme(skinInfo);
}



//! Load external JSX files
function loadJSX() {
    var csInterface = new CSInterface();
    var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/actions/";
    csInterface.evalScript("$._ext.evalFiles(\"" + extensionRoot + "\")");
}



//! Use the button ID to trigger the right script
$(document).on("click", "button", function(event) {
	
	//! If a shift click / also can have ctrlKey and altKey
	if ( $(this).hasClass("custom-button") && event.shiftKey ) {
			event.preventDefault();
			var csInterface = new CSInterface(); 
			csInterface.evalScript($(this).attr("data-action2") + "()"); 
	} else {
    	var csInterface = new CSInterface();
		csInterface.evalScript($(this).attr("data-action") + "()"); 
    } 
});



//! Edit button
function editButton(id) {
	var csInterface = new CSInterface();
	csInterface.evalScript("renameButton()");
}



//! Select tool
function selectTool(tool) {
	$("#tools button").removeClass("selected");
	$("#tools button#"+tool).addClass("selected");
}


//! Check cookies for tools menu
function checkToolsMenuCookies() {
	
	//! If cookie exists
	if (getCookie("toolsMenu")) {
		toolsMenu("show");
	} else {
		toolsMenu("hide");
	}
}


//! Show and hide tools menu
function toolsMenu(mode) {
	if (mode == "show") {
		$(document.body).addClass("tools-menu");
		setCookie("toolsMenu", true);
		$("#tools-menu-checkbox").attr("checked", true);
	} else {
		$(document.body).removeClass("tools-menu");
		deleteCookie("toolsMenu");
		$("#tools-menu-checkbox").attr("checked", false);
	}
}



//! jQuery document ready
$(document).ready(function() {
	
	/*
	//! Temp code to build tools buttons (laziness)
	if ('content' in document.createElement('template')) {
		
		var tools = [
			//{'tool': '', 'name': ''},
			{'tool': 'zoomTool', 'name': 'Zoom tool'},
			{'tool': 'paintbrushTool', 'name': 'Brush tool'},
			{'tool': 'spotHealingBrushTool', 'name': 'Spot Headling Brush tool'},
			{'tool': 'cloneStampTool', 'name': 'Clone Stamp tool'},
			{'tool': 'patchSelection', 'name': 'Patch tool'},
			{'tool': 'dodgeTool', 'name': 'Dodge tool'},
			{'tool': 'burnInTool', 'name': 'Burn tool'},
			{'tool': 'gradientTool', 'name': 'Gradient tool'},
			{'tool': 'eyedropperTool', 'name': 'Eyedropper tool'},	
			{'tool': 'cropTool', 'name': 'Crop tool'},	
			{'tool': 'magicWandTool', 'name': 'Magic Wand tool'},
			{'tool': 'lassoTool', 'name': 'lasso tool'},
			{'tool': 'marqueeRectTool', 'name': 'Rectangular Marquee tool'},
			{'tool': 'marqueeEllipTool', 'name': 'Elliptical Marquee tool'},
			{'tool': 'moveTool', 'name': 'Move tool'}
		];
		
		// Get a reference to the comments list in the main DOM.
		var toolsSection = "";
		
		// Loop through each of the comments and add them to the comments list.
		for (var i = 0; i < tools.length; i++) {
			
			var tool = tools[i];
			toolsSection += "<li><button id=\""+tool.tool+"\" data-action=\"selectTool('"+tool.tool+"')\" data-js=\"tooltip\" title=\""+tool.name+"\"><img alt=\""+tool.name+"\" class=\"dark-theme\" src=\"img/more_tools/dark_theme/"+tool.tool+".png\"><img alt=\""+tool.name+"\" class=\"light-theme\" src=\"img/more_tools/light_theme/"+tool.tool+".png\"></button></li>";
			//$("#tools-list").html(toolsSection);
			console.log(toolsSection);
		}
	}*/
	
	
	//! Fade in the body
	$(document.body).hide().fadeIn("slow");

	
	$("#tools-menu-checkbox").change(function() {
        if(this.checked) {
            toolsMenu("show");
        } else {
	        toolsMenu("hide");
        }
    });


	//! Tabs
	$("#tab-menu > li").click(function() {
		var tab_id = $(this).attr("data-tab");

		$("#tab-menu > li").removeClass("current");
		$("#panel > div.tab-content").removeClass("current");

		$(this).addClass("current");
		$("#"+tab_id).addClass("current");
	});
	
	
	//! Handle web links
	$("a.external-link").click(function(e) {
		e.preventDefault();
		var link = $(this).attr("href");
		window.cep.util.openURLInDefaultBrowser(link);
	});


	//! Change title in adjustment brush section
	$("section.adjustment-tools > div.button-group>button").hover(
		function adjHoverOver() {
			$("[data-js='adjustmentsHeader']").text( $(this).attr("title") );
		}, function adjHoverOut() {
			$("[data-js='adjustmentsHeader']").text( $("[data-js='adjustmentsHeader']").attr("title") );
			
		}
	);
	
	
	//! Update tools menu
	$("#tools button").on("click", function() {
		var tool = $(this).attr("id");
		selectTool(tool);
	});


	//! Tooltip
	//! http://www.alessioatzeni.com/blog/simple-tooltip-with-jquery-only-text/
	$("[data-js='tooltip']").hover(function toolTipHover() {
		
	        //! Hover over code
	        var title = $(this).attr("title");
	        var type = $(this).attr("data-tooltip-type");
	        $("<p data-type=\""+ type +"\" class=\"tooltip "+ type +"\"></p>").delay(1500)
	        .text(title)
	        .appendTo("body")
	        .hide()
	        .fadeIn(100);
	        $(this).dequeue();
	}, function() {
	        //! Hover out code
	        $("p.tooltip").remove();
	}).mousemove(function(e) {
			var tooltipWidth = $("p.tooltip").width();
			var type = $("p.tooltip").attr("data-type");
			
			//! Change position depending on type
			if (type == "inside") {
				var mousex = e.pageX - 2 - tooltipWidth; //Get X coordinates
				var mousey = e.pageY + 12; //Get Y coordinates
			} else {
				var mousex = e.pageX - 6; //Get X coordinates
				var mousey = e.pageY + 12; //Get Y coordinates
			}
	        
	        //! Add CSS
	        $("p.tooltip").css({ top: mousey, left: mousex });
	});

});



//! When flyout menu is clicked
function flyoutMenuClicked(e) {
	var action = e.data.menuId;

	//! Do action
	switch(action) {
		case "reloadPanel": 
			window.location.reload();
			break;
		default: 
			console.log(action + " clicked!");
	}
}



//! Build the flyout menu
function generateFlyoutMenu() {

	// Flyout menu XML string 
	var flyoutXML = "<Menu><MenuItem Id=\"reloadPanel\" Label=\"Reload Panel\"/></Menu>";

	// Uses the XML string to build the menu
	csInterface.setPanelFlyoutMenu(flyoutXML);
}
