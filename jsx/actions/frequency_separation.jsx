//! Variables
var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };



//! See what kind of FS we're going to be doing
frequencySeparation = function(mode) {
	
	if (getBits() == 16) 
	{
		if (mode == 'smartObject') 
		{
			//alert('Smart Object FS for 16-bit image');
			FS16_SmartObject();
		} 
		else 
		{
			//alert('FS for 16-bit image');
			FS16();
		}
	} 
	else if (getBits() == 8) 
	{
		if (mode == 'smartObject') 
		{
			//alert('Smart Object FS for 8-bit image');
			FS8_SmartObject();
		} 
		else 
		{
			//alert('FS for 8-bit image');
			FS8();
		}
	} 
	else 
	{
		alert('Something went wrong');
	}
}


//! See if image is 8-bit or 16-bit
getBits = function() {
	
	if (activeDocument.bitsPerChannel == "BitsPerChannelType.EIGHT") 
	{
		return 8;
	} 
	else if (activeDocument.bitsPerChannel == "BitsPerChannelType.SIXTEEN") 
	{
		return 16;
	} 
	else 
	{
		return false;
	}
}



//
//==================== FS 16 (Smart Object) ==============
//
FS16_SmartObject = function() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Colour + Tone (Low Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Details + Texture (High Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(13);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Hide
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(12);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Convert to Smart Object
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('newPlacedLayer'), undefined, dialogMode);
  };

  // Gaussian Blur
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 20);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Make
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 15);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Fix Colour + Tones");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details + Texture (High Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(13);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Show
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Apply Image
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc2.putReference(cTID('T   '), ref1);
    desc2.putBoolean(cTID('Invr'), true);
    desc2.putEnumerated(cTID('Clcl'), cTID('Clcn'), cTID('Add '));
    desc2.putDouble(cTID('Scl '), 2);
    desc2.putInteger(cTID('Ofst'), 0);
    desc1.putObject(cTID('With'), cTID('Clcl'), desc2);
    executeAction(sTID('applyImageEvent'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), sTID("linearLight"));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Fix Colour + Tones");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(15);
    list1.putInteger(13);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(14);
    list1.putInteger(15);
    list1.putInteger(13);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putInteger(sTID("layerSectionStart"), 16);
    desc1.putInteger(sTID("layerSectionEnd"), 17);
    desc1.putString(cTID('Nm  '), "Group 1");
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "16-bit Frequency Separation");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Hide
  step4();      // Select
  step5();      // Convert to Smart Object
  step6(true, true);      // Gaussian Blur
  step7();      // Make
  step8();      // Set
  step9();      // Select
  step10();      // Show
  step11();      // Apply Image
  step12();      // Set
  step13();      // Select
  step14();      // Select
  step15();      // Make
  step16();      // Set
};



//
//==================== FS 16 ==============
//
FS16 = function() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Colours + Tones (Low Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Details (High Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Select
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colours + Tones (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(2);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Hide
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details (High Frequency)");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Gaussian Blur
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 24);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Show
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details (High Frequency)");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Select
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details (High Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Apply Image
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    ref1.putName(cTID('Lyr '), "Colours + Tones (Low Frequency)");
    desc2.putReference(cTID('T   '), ref1);
    desc2.putBoolean(cTID('Invr'), true);
    desc2.putEnumerated(cTID('Clcl'), cTID('Clcn'), cTID('Add '));
    desc2.putDouble(cTID('Scl '), 2);
    desc2.putInteger(cTID('Ofst'), 0);
    desc1.putObject(cTID('With'), cTID('Clcl'), desc2);
    executeAction(sTID('applyImageEvent'), desc1, dialogMode);
  };

  // Set
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), sTID("linearLight"));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 4);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Fix Colours + Tones");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Move
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Lyr '), 2);
    desc1.putReference(cTID('T   '), ref2);
    desc1.putBoolean(cTID('Adjs'), false);
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(4);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details (High Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(4);
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colours + Tones (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(2);
    list1.putInteger(4);
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putInteger(sTID("layerSectionStart"), 5);
    desc1.putInteger(sTID("layerSectionEnd"), 6);
    desc1.putString(cTID('Nm  '), "Group 1");
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "16-bit Frequency Separation");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Select
  step4();      // Hide
  step5(true, true);      // Gaussian Blur
  step6();      // Show
  step7();      // Select
  step8();      // Apply Image
  step9();      // Set
  step10();      // Make
  step11();      // Set
  step12();      // Move
  step13();      // Select
  step14();      // Select
  step15();      // Make
  step16();      // Set
};



//
//==================== FS 8 (Smart Object) ==============
//
FS8_SmartObject = function() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Colour + Tone (Low Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Detail + Texture (High Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(55);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Hide
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(54);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Convert to Smart Object
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('newPlacedLayer'), undefined, dialogMode);
  };

  // Gaussian Blur
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 20);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Make
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 57);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Fix Colour + Tone");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Detail + Texture (High Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(55);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Show
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Apply Image
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc2.putReference(cTID('T   '), ref1);
    desc2.putEnumerated(cTID('Clcl'), cTID('Clcn'), cTID('Sbtr'));
    desc2.putDouble(cTID('Scl '), 2);
    desc2.putInteger(cTID('Ofst'), 128);
    desc1.putObject(cTID('With'), cTID('Clcl'), desc2);
    executeAction(sTID('applyImageEvent'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), sTID("linearLight"));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Fix Colour + Tone");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(57);
    list1.putInteger(55);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(56);
    list1.putInteger(57);
    list1.putInteger(55);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putInteger(sTID("layerSectionStart"), 58);
    desc1.putInteger(sTID("layerSectionEnd"), 59);
    desc1.putString(cTID('Nm  '), "Group 1");
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "8-bit Frequency Separation");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Hide
  step4();      // Select
  step5();      // Convert to Smart Object
  step6();      // Gaussian Blur
  step7();      // Make
  step8();      // Set
  step9();      // Select
  step10();      // Show
  step11();      // Apply Image
  step12();      // Set
  step13();      // Select
  step14();      // Select
  step15();      // Make
  step16();      // Set
};



//
//==================== FS 8 ==============
//
FS8 = function() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Colour + Tone (Low Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Details + Texture (High Frequency)");
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(29);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Hide
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(28);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Gaussian Blur
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 20);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Select
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details + Texture (High Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(29);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Show
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Apply Image
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc2.putReference(cTID('T   '), ref1);
    desc2.putEnumerated(cTID('Clcl'), cTID('Clcn'), cTID('Sbtr'));
    desc2.putDouble(cTID('Scl '), 2);
    desc2.putInteger(cTID('Ofst'), 128);
    desc1.putObject(cTID('With'), cTID('Clcl'), desc2);
    executeAction(sTID('applyImageEvent'), desc1, dialogMode);
  };

  // Set
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), sTID("linearLight"));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(28);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 30);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Fix Colour + Tone");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Details + Texture (High Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(30);
    list1.putInteger(29);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Colour + Tone (Low Frequency)");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(28);
    list1.putInteger(30);
    list1.putInteger(29);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putInteger(sTID("layerSectionStart"), 31);
    desc1.putInteger(sTID("layerSectionEnd"), 32);
    desc1.putString(cTID('Nm  '), "Group 1");
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "8-bit Frequency Separation");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Hide
  step4();      // Select
  step5();      // Gaussian Blur
  step6();      // Select
  step7();      // Show
  step8();      // Apply Image
  step9();      // Set
  step10();      // Select
  step11();      // Make
  step12();      // Set
  step13();      // Select
  step14();      // Select
  step15();      // Make
  step16();      // Set
};