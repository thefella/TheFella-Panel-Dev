//! Variables
var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };



//! Stack all open documents into one
stack = function() {
	app.activeDocument.suspendHistory("Combine All Open Documents", "stack_hidden();" );
};
stack_hidden = function() {
	//! If only one document open
	if (app.documents.length==1) {
		alert("Only One Image Open \r\nYou can't stack images together with only one document open.");
	}
	
	//! Loop through all open documents
	var layerName;
	while (app.documents.length>1) {
		app.activeDocument = app.documents[1];  
		layerName = decodeURI(activeDocument.name).replace(/\....$/,'');
		activeDocument.activeLayer.duplicate(documents[0]);  
		app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);  
		activeDocument.activeLayer.name = layerName;
	}
};



//! Fit image to screen
fitToScreen = function() {
	runMenuItem(app.charIDToTypeID("FtOn")); 
};



//! Zoom image
zoom = function(zoom) {
	var ref = new ActionReference(); 
	ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
	var getScrRes = executeActionGet(ref).getObjectValue(stringIDToTypeID('unitsPrefs')).getUnitDoubleValue(stringIDToTypeID('newDocPresetScreenResolution'))/72; 
	var docRes = activeDocument.resolution; 
	activeDocument.resizeImage( undefined, undefined, getScrRes/(zoom/100), ResampleMethod.NONE ); 
	var desc = new ActionDescriptor(); 
	ref = null;
	ref = new ActionReference(); 
	ref.putEnumerated( charIDToTypeID( "Mn  " ), charIDToTypeID( "MnIt" ), charIDToTypeID( 'PrnS' ) ); 
	desc.putReference( charIDToTypeID( "null" ), ref ); 
	executeAction( charIDToTypeID( "slct" ), desc, DialogModes.NO ); 
	activeDocument.resizeImage( undefined, undefined, docRes, ResampleMethod.NONE ); 
};



//! Create new layer
newLayer = function() {
	var layerRef = app.activeDocument.artLayers.add();
	layerRef.name = "New Layer";
	layerRef.blendMode = BlendMode.NORMAL;
};



//! Dodge and burn layer using 50% gray
dodgeAndBurn = function() {
	app.activeDocument.suspendHistory("Create Dodge & Burn Layer", "dodgeAndBurn_hidden();" );
};
dodgeAndBurn_hidden = function() {
	var layerRef = app.activeDocument.artLayers.add();
    layerRef.name = "Dodge / Burn";  
    layerRef.blendMode = BlendMode.SOFTLIGHT;
    var myColor = new SolidColor();  
    myColor.rgb.red = 128;  
    myColor.rgb.green = 128;  
    myColor.rgb.blue = 128;  
    activeDocument.selection.fill(myColor);
    blackAndWhiteColors();
};



//! Change foreground/background colours to white/black
blackAndWhiteColors = function() {
	var bgColor = app.backgroundColor;
	bgColor.rgb.red = 255;
	bgColor.rgb.green = 255;
	bgColor.rgb.blue = 255;
	app.backgroundColor = bgColor;
	
	var fgColor = app.foregroundColor;
	fgColor.rgb.red = 0;
	fgColor.rgb.green = 0;
	fgColor.rgb.blue = 0;
	app.foregroundColor = fgColor;
};


/*
layerHasLayerMask = function() {
	//var thisLayer = activeDocument.activeLayer;
	if (hasLayerMask() ) {
		alert('yes to mask');
	}
	else 
	{
		alert('ulster says no');
	}
};*/



//
//==================== Camera Raw ==============
//
cameraRaw = function() {
  // Camera Raw Filter
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CMod'), "Filter");
    desc1.putEnumerated(cTID('Sett'), cTID('Sett'), cTID('Defa'));
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  }

  step1(true, true);      // Camera Raw Filter
};



//
//==================== Hue/Saturation ==============
//
hueSaturation = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc3.putBoolean(cTID('Clrz'), false);
    desc2.putObject(cTID('Type'), cTID('HStr'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  }

  // Set
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Clr '));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  }

  step1();      // Make
  step2();      // Set
};



//
//==================== Merge All Always ==============
//
mergeAllToNewLayer = function() {
	app.activeDocument.suspendHistory("Stamp Visible To New Layer", "mergeAllToNewLayer_hidden();" );
};
mergeAllToNewLayer_hidden = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 70);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  }

  // Merge Visible
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Dplc'), true);
    executeAction(sTID('mergeVisible'), desc1, dialogMode);
  }

  // Move
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frnt'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  }
  
  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Merged");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  }

  step1();      // Make
  step2();      // Merge Visible
  step3();      // Move
  step4();      // Set
};


btnDeleteLayerMask = function() {
	if (hasLayerMask()) {
		DeleteLayerMask();
	} else {
		alert("No Layer Mask \r\nThe current layer has no layer mask to delete");
	}
};


//
//==================== Delete Layer Mask ==============
//
DeleteLayerMask = function() {
  // Delete
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled) {
      return; 
    }
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  }

  step1();      // Delete
};



//! See if layer has layer mask
hasLayerMask = function() {   
	var hasLayerMask = false;   
	try {   
		var ref = new ActionReference();   
		var keyUserMaskEnabled = app.charIDToTypeID( 'UsrM' );   
		ref.putProperty( app.charIDToTypeID( 'Prpr' ), keyUserMaskEnabled );   
		ref.putEnumerated( app.charIDToTypeID( 'Lyr ' ), app.charIDToTypeID( 'Ordn' ), app.charIDToTypeID( 'Trgt' ) );   
		var desc = executeActionGet( ref );   
		if ( desc.hasKey( keyUserMaskEnabled ) ) {   
			hasLayerMask = true;   
		}   
	}catch(e) {   
		hasLayerMask = false;   
	}   
	return hasLayerMask;   
};


focusStack = function() {
	
	var layers = getSelectedLayersIdx();  
	
	if (layers.length < 2) {  
    	alert("Not Enough Layers\r\nYou need to select two or more layers to focus stack");  
		return;  
    } 
	
	focusStackAction();
};



//
//==================== Focus Stacking 2 ==============
//
focusStackAction = function() {
	app.activeDocument.suspendHistory("Focus Stack Images", "focusStackAction_hidden();" );
};
focusStackAction_hidden = function() {
  // Align
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID("ADSContent"));
    desc1.putEnumerated(cTID('Aply'), sTID("projection"), cTID('Auto'));
    desc1.putBoolean(sTID("vignette"), false);
    desc1.putBoolean(sTID("radialDistort"), false);
    executeAction(cTID('Algn'), desc1, dialogMode);
  };

  // Auto-Blend Layers
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Aply'), sTID("autoBlendType"), sTID("maxDOF"));
    desc1.putBoolean(cTID('ClrC'), false);
    desc1.putBoolean(sTID("autoTransparencyFill"), false);
    executeAction(sTID('mergeAlignedLayers'), desc1, dialogMode);
  };

  step1();      // Align
  step2();      // Auto-Blend Layers
}



//! Get selected layers
function getSelectedLayersIdx(){   
      var selectedLayers = new Array();   
      var backGroundCounter = 1;  
            if(activeDocument.artLayers.length > 0){  
            backGroundCounter = activeDocument.artLayers[activeDocument.artLayers.length - 1].isBackgroundLayer ? 0 : 1;  
            }  
      var ref = new ActionReference();   
      ref.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("targetLayers"));  
      ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
      var desc = executeActionGet(ref);   
      if( desc.hasKey( stringIDToTypeID( "targetLayers" ) ) ){   
         desc = desc.getList( stringIDToTypeID( "targetLayers" ));   
          var c = desc.count;   
          var selectedLayers = new Array();   
          for(var i=0;i<c;i++){   
               selectedLayers.push(  desc.getReference( i ).getIndex() +backGroundCounter );   
          }   
      if(app.version.match(/^\d+/) > 15) return selectedLayers ;  
       }else{   
           if(app.version.match(/^\d+/) > 15) return selectedLayers ;  
         var ref = new ActionReference();   
         ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "ItmI" ));   
         ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );   
         if(!backGroundCounter){  
            selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" )) -1);  
            }else{  
                selectedLayers.push( executeActionGet(ref).getInteger(charIDToTypeID( "ItmI" )));  
                }  
     var vis = app.activeDocument.activeLayer.visible;  
        if(vis == true) app.activeDocument.activeLayer.visible = false;  
        var desc9 = new ActionDescriptor();  
    var list9 = new ActionList();  
    var ref9 = new ActionReference();  
    ref9.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );  
    list9.putReference( ref9 );  
    desc9.putList( charIDToTypeID("null"), list9 );  
    executeAction( charIDToTypeID("Shw "), desc9, DialogModes.NO );  
    if(app.activeDocument.activeLayer.visible == false) selectedLayers.shift();  
        app.activeDocument.activeLayer.visible = vis;  
      }   
      return selectedLayers;   
};  


//! Select the tool
//function s2t(s) { return app.stringIDToTypeID(s); }
//function t2s(t) { return app.typeIDToStringID(t); }
selectTool = function(stringID) {
	//alert(stringID);
	//alert(app.currentTool);
	app.currentTool = stringID;
	/*return;
	
	var d = new ActionDescriptor();
	var r = new ActionReference();
	r.putClass( s2t(stringID) );
	d.putReference( s2t("target"), r);
	d.putBoolean( s2t("dontRecord"), true );
	d.putBoolean( s2t("forceNotify"), true );
	executeAction( s2t("select"), d, DialogModes.NO );*/
}


//! Get the current tool
getCurrentTool = function() {
	//alert(app.currentTool);
	return app.currentTool;
}



