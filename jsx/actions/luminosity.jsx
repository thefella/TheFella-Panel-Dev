//! Variables 
cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };



//! Prefix for luminosity channels
var lumPrefix = "";
var chnlsCount = 7; 



//! Create ALL luminosity channels
lumAllChannels = function(mode) {
	
	//! Create all channels
	lumAllHighlights();
	lumAllShadows();
	allMidtones(); 
	
	//! If basic mode, delete a few expanded channels
	if (mode == 'basic') {
		if ( channelExists(lumPrefix+'Highlights 6') ) { deleteChannelByName(lumPrefix+'Highlights 6'); }
		if ( channelExists(lumPrefix+'Highlights 5') ) { deleteChannelByName(lumPrefix+'Highlights 5'); }
		if ( channelExists(lumPrefix+'Shadows 6') ) { deleteChannelByName(lumPrefix+'Shadows 6'); }
		if ( channelExists(lumPrefix+'Shadows 5') ) { deleteChannelByName(lumPrefix+'Shadows 5'); }
		if ( channelExists(lumPrefix+'Midtones 6') ) { deleteChannelByName(lumPrefix+'Midtones 6'); }
		if ( channelExists(lumPrefix+'Midtones 5') ) { deleteChannelByName(lumPrefix+'Midtones 5'); }
		if ( channelExists(lumPrefix+'Midtones 4') ) { deleteChannelByName(lumPrefix+'Midtones 4'); }
	}
}



//! Delete all of our luminosity channels
lumDeleteAll = function() {
	lumDeleteChannels(lumPrefix+'Highlights');
	lumDeleteChannels(lumPrefix+'Shadows');
	lumDeleteChannels(lumPrefix+'Midtones');
}


//! Delete highlights luminosity channels
lumDeleteHighlights = function() {
	lumDeleteChannels(lumPrefix+'Highlights');
}


//! Delete shadows luminosity channels
lumDeleteShadows = function() {
	lumDeleteChannels(lumPrefix+'Shadows');
}


//! Delete midtone luminosity channels
lumDeleteMidtones = function() {
	lumDeleteChannels(lumPrefix+'Midtones');
}



//! Create all highlights and delete all but one
lumHighlights = function(ch) {
	lumAllHighlights();
	lumDeleteChannels(lumPrefix+'Highlights', ch);
}


//! Create all shadows and delete all but one
lumShadows = function(ch) {
	lumAllShadows();
	lumDeleteChannels(lumPrefix+'Shadows', ch);
}


//! Create all midtones and delete all but one
lumMidtones = function(ch) {
	lumAllMidtones();
	lumDeleteChannels(lumPrefix+'Midtones', ch);
}




//! All Midtones needs Highlights and Shadows 
lumAllMidtones = function(mode) {
	
	var deleteHighlights = false;
	var deleteShadows = false;
	
	//! See if highlights exists or not
	if (fullChannelsExist('Highlights') == false) {
		
		//alert('need to create highlights');
		
		//! Create highlights
		lumAllHighlights();
		
		deleteHighlights = true;
	}

	
	//! See if shadows exists or not
	if (fullChannelsExist('Shadows') == false) {
		
		//alert('need to create shadows');
		
		//! Create shadows
		lumAllShadows();
		
		deleteShadows = true;
	}
	
	//! Now create midtones
	allMidtones();
	
	//! If needed, delete highlights
	if (deleteHighlights && (mode != 'full') ) {
		//alert('need to DELETE highlights');
		lumDeleteHighlights();
	}
	
	//! If needed, delete shadows
	if (deleteShadows && (mode != 'full') ) {
		//alert('need to DELETE shadows');
		lumDeleteShadows();
	}
}


//! Check and see if all channels are there or not
fullChannelsExist = function(type) {
	
	//! Loop through channels   
	for (var i = 1; i < chnlsCount; i++) 
	{
		if ( channelExists(lumPrefix + type + ' ' + i) ) {
			//alert(lumPrefix + type + ' ' + i + ' exists!');
		}
		else 
		{
			//alert(lumPrefix + type + ' ' + i + ' does not exist');
			return false;
		}
	}
	return true;
}




//
//==================== All Lights ==============
//
lumAllHighlights = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 1");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 5");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 6");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Duplicate
  step3();      // Set
  step4();      // Set
  step5();      // Intersect
  step6();      // Duplicate
  step7();      // Set
  step8();      // Set
  step9();      // Intersect
  step10();      // Duplicate
  step11();      // Set
  step12();      // Set
  step13();      // Intersect
  step14();      // Duplicate
  step15();      // Set
  step16();      // Set
  step17();      // Intersect
  step18();      // Duplicate
  step19();      // Set
  step20();      // Set
  step21();      // Intersect
  step22();      // Duplicate
  step23();      // Set
};



//
//==================== All Shadows ==============
//
lumAllShadows = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Inverse
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(cTID('Invs'), undefined, dialogMode);
  };

  // Duplicate
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 1");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 5");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Shadows 5");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Intersect
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 5");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Duplicate
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 6");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Set
  step5();      // Set
  step6();      // Intersect
  step7();      // Duplicate
  step8();      // Set
  step9();      // Set
  step10();      // Intersect
  step11();      // Duplicate
  step12();      // Set
  step13();      // Set
  step14();      // Intersect
  step15();      // Duplicate
  step16();      // Set
  step17();      // Set
  step18();      // Intersect
  step19();      // Duplicate
  step20();      // Set
  step21();      // Set
  step22();      // Intersect
  step23();      // Duplicate
  step24();      // Set
};



//
//==================== All Midtones ==============
//
allMidtones = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Subtract
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Subtract
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Duplicate
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Midtones 1");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Subtract
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Subtract
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Duplicate
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Midtones 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Subtract
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Subtract
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Duplicate
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Midtones 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Subtract
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Subtract
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Duplicate
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Midtones 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Subtract
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Subtract
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 5");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Duplicate
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Midtones 5");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Subtract
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 6");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Subtract
  function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 6");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(cTID('Sbtr'), desc1, dialogMode);
  };

  // Duplicate
  function step29(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Midtones 6");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Subtract
  step3();      // Subtract
  step4();      // Duplicate
  step5();      // Set
  step6();      // Set
  step7();      // Subtract
  step8();      // Subtract
  step9();      // Duplicate
  step10();      // Set
  step11();      // Set
  step12();      // Subtract
  step13();      // Subtract
  step14();      // Duplicate
  step15();      // Set
  step16();      // Set
  step17();      // Subtract
  step18();      // Subtract
  step19();      // Duplicate
  step20();      // Set
  step21();      // Set
  step22();      // Subtract
  step23();      // Subtract
  step24();      // Duplicate
  step25();      // Set
  step26();      // Set
  step27();      // Subtract
  step28();      // Subtract
  step29();      // Duplicate
  step30();      // Set
};



//! Delete channels (optional exclusion)
lumDeleteChannels = function(type, exclude) {
	
	//! Check if a document open
	if (app.documents.length == 0) {
		return;
	}
	
    //! Loop through channels   
	for (var i = 1; i < chnlsCount; i++) 
	{
		//! Construct channel name
		var channelName = lumPrefix + type + ' ' + i;

		//! If exists, delete channel
		if ( channelExists(channelName) && (i != exclude) ) 
		{
			deleteChannelByName(channelName); 
		}
	}
}



//! See if channel exists
function channelExists (theName) {  
	if (app.documents.length > 0) {  
		var ref = new ActionReference();  
		ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("numberOfChannels"));  
		ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );  
		var docDesc = executeActionGet(ref);  
		var channelsNumber = docDesc.getInteger(stringIDToTypeID("numberOfChannels"));  
		for (var m = 1; m <= channelsNumber; m++) {  
			var ref = new ActionReference();  
			ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("channelName"));  
			ref.putIndex( charIDToTypeID("Chnl"), m);  
			var channelDesc = executeActionGet(ref);  
			var thisName = channelDesc.getString(stringIDToTypeID("channelName"));  
			if (theName == thisName) {return true}  
		};  
		return false  
	}  
};



//! Delete channel by name
function deleteChannelByName(channelName) {  
    var desc = new ActionDescriptor(),  
        ref = new ActionReference();  
    ref.putName( stringIDToTypeID("channel"), channelName );  
    desc.putReference( stringIDToTypeID("target"), ref);  
    executeAction( stringIDToTypeID("delete"), desc, DialogModes.NO );  
}  

