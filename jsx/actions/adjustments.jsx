//! Variables
var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };


//
//==================== Brightness ==============
//
adjBrightness = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(sTID("useLegacy"), false);
    desc2.putObject(cTID('Type'), cTID('BrgC'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Levels ==============
//
adjLevels = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc2.putObject(cTID('Type'), cTID('Lvls'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Black & White ==============
//
adjBW = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc3.putInteger(cTID('Rd  '), 40);
    desc3.putInteger(cTID('Yllw'), 60);
    desc3.putInteger(cTID('Grn '), 40);
    desc3.putInteger(cTID('Cyn '), 60);
    desc3.putInteger(cTID('Bl  '), 20);
    desc3.putInteger(cTID('Mgnt'), 80);
    desc3.putBoolean(sTID("useTint"), false);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 225.000457763672);
    desc4.putDouble(cTID('Grn '), 211.000671386719);
    desc4.putDouble(cTID('Bl  '), 179.001159667969);
    desc3.putObject(sTID("tintColor"), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), cTID('BanW'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Color Balance ==============
//
adjColorBalance = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(0);
    desc3.putList(cTID('ShdL'), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(0);
    desc3.putList(cTID('MdtL'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(0);
    desc3.putList(cTID('HghL'), list3);
    desc3.putBoolean(cTID('PrsL'), true);
    desc2.putObject(cTID('Type'), cTID('ClrB'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Exposure ==============
//
adjExposure = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc3.putDouble(cTID('Exps'), 0);
    desc3.putDouble(cTID('Ofst'), 0);
    desc3.putDouble(sTID("gammaCorrection"), 1);
    desc2.putObject(cTID('Type'), cTID('Exps'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Curves ==============
//
adjCurves = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Gradient Map ==============
//
adjGradientMap = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('SnpS'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('HstS'), cTID('CrnH'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putEnumerated(cTID('Usng'), cTID('HstS'), cTID('FllD'));
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Convert Mode
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putClass(cTID('T   '), sTID("RGBColorMode"));
    executeAction(sTID('convertMode'), desc1, dialogMode);
  };

  // Make
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 70);
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putString(cTID('Nm  '), "Blue, Red, Yellow");
    desc4.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc4.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc5 = new ActionDescriptor();
    var desc6 = new ActionDescriptor();
    desc6.putUnitDouble(cTID('H   '), cTID('#Ang'), 243.226318359375);
    desc6.putDouble(cTID('Strt'), 100);
    desc6.putDouble(cTID('Brgh'), 69.8039215686274);
    desc5.putObject(cTID('Clr '), cTID('HSBC'), desc6);
    desc5.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc5.putInteger(cTID('Lctn'), 0);
    desc5.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc5);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putUnitDouble(cTID('H   '), cTID('#Ang'), 359.994506835938);
    desc8.putDouble(cTID('Strt'), 100);
    desc8.putDouble(cTID('Brgh'), 100);
    desc7.putObject(cTID('Clr '), cTID('HSBC'), desc8);
    desc7.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc7.putInteger(cTID('Lctn'), 2048);
    desc7.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc7);
    var desc9 = new ActionDescriptor();
    var desc10 = new ActionDescriptor();
    desc10.putUnitDouble(cTID('H   '), cTID('#Ang'), 59.293212890625);
    desc10.putDouble(cTID('Strt'), 100);
    desc10.putDouble(cTID('Brgh'), 100);
    desc9.putObject(cTID('Clr '), cTID('HSBC'), desc10);
    desc9.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc9.putInteger(cTID('Lctn'), 4096);
    desc9.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc9);
    desc4.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc11 = new ActionDescriptor();
    desc11.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc11.putInteger(cTID('Lctn'), 0);
    desc11.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc12.putInteger(cTID('Lctn'), 4096);
    desc12.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc12);
    desc4.putList(cTID('Trns'), list2);
    desc3.putObject(cTID('Grad'), cTID('Grdn'), desc4);
    desc2.putObject(cTID('Type'), cTID('GdMp'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Ovrl'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Convert Mode
  step3();      // Make
  step4();      // Set
};



//
//==================== Hue/Saturation ==============
//
adjHueSaturation = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
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
  };

  // Set
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Clr '));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Set
};



//
//==================== Photo Filter ==============
//
adjPhotoFilter = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Lmnc'), 67.06);
    desc4.putDouble(cTID('A   '), 32);
    desc4.putDouble(cTID('B   '), 120);
    desc3.putObject(cTID('Clr '), cTID('LbCl'), desc4);
    desc3.putInteger(cTID('Dnst'), 25);
    desc3.putBoolean(cTID('PrsL'), true);
    desc2.putObject(cTID('Type'), sTID("photoFilter"), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Vibrance ==============
//
adjVibrance = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putClass(cTID('Type'), sTID("vibrance"));
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Channel Mixer ==============
//
adjChannelMixer = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    var desc4 = new ActionDescriptor();
    desc4.putUnitDouble(cTID('Rd  '), cTID('#Prc'), 100);
    desc3.putObject(cTID('Rd  '), cTID('ChMx'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putUnitDouble(cTID('Grn '), cTID('#Prc'), 100);
    desc3.putObject(cTID('Grn '), cTID('ChMx'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putUnitDouble(cTID('Bl  '), cTID('#Prc'), 100);
    desc3.putObject(cTID('Bl  '), cTID('ChMx'), desc6);
    desc2.putObject(cTID('Type'), cTID('ChnM'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Color Lookup ==============
//
adjColorLookup = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putClass(cTID('Type'), sTID("colorLookup"));
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Invert ==============
//
adjInvert = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putClass(cTID('Type'), cTID('Invr'));
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Posterize ==============
//
adjPosterize = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(cTID('Lvls'), 4);
    desc2.putObject(cTID('Type'), cTID('Pstr'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Selective Color ==============
//
adjSelectiveColor = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc2.putObject(cTID('Type'), cTID('SlcC'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};



//
//==================== Threshold ==============
//
adjThreshold = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(cTID('Lvl '), 128);
    desc2.putObject(cTID('Type'), cTID('Thrs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  step1();      // Make
};