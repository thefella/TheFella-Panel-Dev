/* dev-code */
//! Variables
var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };
/* end-dev-code */



//
//==================== ACR Vignette ==============
//
vignetteACR = function() {
	app.activeDocument.suspendHistory("Apply Adobe Camera Raw Vignette", "vignetteACR_hidden();" );
};
vignetteACR_hidden = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 111);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Merge Visible
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Dplc'), true);
    executeAction(sTID('mergeVisible'), desc1, dialogMode);
  };

  // Set
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "ACR Vignette");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Camera Raw Filter
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CMod'), "Filter");
    desc1.putEnumerated(cTID('Sett'), cTID('Sett'), cTID('Cst '));
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('AsSh'));
    desc1.putInteger(cTID('Temp'), 0);
    desc1.putInteger(cTID('Tint'), 0);
    desc1.putBoolean(cTID('CtoG'), false);
    desc1.putInteger(cTID('Strt'), 0);
    desc1.putInteger(cTID('Shrp'), 0);
    desc1.putInteger(cTID('LNR '), 0);
    desc1.putInteger(cTID('CNR '), 0);
    desc1.putInteger(cTID('VigA'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('Vibr'), 0);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 0);
    desc1.putInteger(cTID('STHS'), 0);
    desc1.putInteger(cTID('STB '), 0);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('PCVA'), -15);
    desc1.putInteger(cTID('PCVM'), 40);
    desc1.putInteger(cTID('PCVF'), 77);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 77);
    desc1.putInteger(cTID('GRNA'), 0);
    desc1.putInteger(cTID('LPEn'), 0);
    desc1.putInteger(cTID('MDis'), 0);
    desc1.putInteger(cTID('PerV'), 0);
    desc1.putInteger(cTID('PerH'), 0);
    desc1.putDouble(cTID('PerR'), 0);
    desc1.putInteger(cTID('PerS'), 100);
    desc1.putInteger(cTID('PerA'), 0);
    desc1.putInteger(cTID('PerU'), 0);
    desc1.putDouble(cTID('PerX'), 0);
    desc1.putDouble(cTID('PerY'), 0);
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putDouble(cTID('Ex12'), 0);
    desc1.putInteger(cTID('Cr12'), 0);
    desc1.putInteger(cTID('Hi12'), 0);
    desc1.putInteger(cTID('Sh12'), 0);
    desc1.putInteger(cTID('Wh12'), 0);
    desc1.putInteger(cTID('Bk12'), 0);
    desc1.putInteger(cTID('Cl12'), 0);
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('Dhze'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('CamP'), "Embedded");
    desc1.putString(cTID('CP_D'), "54650A341B5B5CCAE8442D0B43A92BCE");
    desc1.putInteger(cTID('PrVe'), 167772160);
    desc1.putString(cTID('Rtch'), "");
    desc1.putString(cTID('REye'), "");
    desc1.putString(cTID('LCs '), "");
    desc1.putString(cTID('Upri'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"35\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('GuUr'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  // Set
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Merge Visible
  step3();      // Set
  step4();      // Camera Raw Filter
  step5();      // Set
};



//
//==================== ACR Smart Object Vignette ==============
//
vignetteACRSmartObject = function() {
	app.activeDocument.suspendHistory("Apply Adobe Camera Raw Vignette (Smart Object)", "vignetteACRSmartObject_hidden();" );
};
vignetteACRSmartObject_hidden = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 121);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Merge Visible
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Dplc'), true);
    executeAction(sTID('mergeVisible'), desc1, dialogMode);
  };

  // Set
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "ACR Vignette (Smart Object)");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Convert to Smart Object
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('newPlacedLayer'), undefined, dialogMode);
  };

  // Camera Raw Filter
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CMod'), "Filter");
    desc1.putEnumerated(cTID('Sett'), cTID('Sett'), cTID('Cst '));
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('AsSh'));
    desc1.putInteger(cTID('Temp'), 0);
    desc1.putInteger(cTID('Tint'), 0);
    desc1.putBoolean(cTID('CtoG'), false);
    desc1.putInteger(cTID('Strt'), 0);
    desc1.putInteger(cTID('Shrp'), 0);
    desc1.putInteger(cTID('LNR '), 0);
    desc1.putInteger(cTID('CNR '), 0);
    desc1.putInteger(cTID('VigA'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('Vibr'), 0);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 0);
    desc1.putInteger(cTID('STHS'), 0);
    desc1.putInteger(cTID('STB '), 0);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('PCVA'), -15);
    desc1.putInteger(cTID('PCVM'), 40);
    desc1.putInteger(cTID('PCVF'), 77);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 77);
    desc1.putInteger(cTID('GRNA'), 0);
    desc1.putInteger(cTID('LPEn'), 0);
    desc1.putInteger(cTID('MDis'), 0);
    desc1.putInteger(cTID('PerV'), 0);
    desc1.putInteger(cTID('PerH'), 0);
    desc1.putDouble(cTID('PerR'), 0);
    desc1.putInteger(cTID('PerS'), 100);
    desc1.putInteger(cTID('PerA'), 0);
    desc1.putInteger(cTID('PerU'), 0);
    desc1.putDouble(cTID('PerX'), 0);
    desc1.putDouble(cTID('PerY'), 0);
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putDouble(cTID('Ex12'), 0);
    desc1.putInteger(cTID('Cr12'), 0);
    desc1.putInteger(cTID('Hi12'), 0);
    desc1.putInteger(cTID('Sh12'), 0);
    desc1.putInteger(cTID('Wh12'), 0);
    desc1.putInteger(cTID('Bk12'), 0);
    desc1.putInteger(cTID('Cl12'), 0);
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('Dhze'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('CamP'), "Embedded");
    desc1.putString(cTID('CP_D'), "54650A341B5B5CCAE8442D0B43A92BCE");
    desc1.putInteger(cTID('PrVe'), 167772160);
    desc1.putString(cTID('Rtch'), "");
    desc1.putString(cTID('REye'), "");
    desc1.putString(cTID('LCs '), "");
    desc1.putString(cTID('Upri'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"35\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('GuUr'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  // Set
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Merge Visible
  step3();      // Set
  step4();      // Convert to Smart Object
  step5();      // Camera Raw Filter
  step6();      // Set
};



//
//==================== Lens Correction Vignette ==============
//
vignetteLensCorrection = function() {
	app.activeDocument.suspendHistory("Apply Lens Correction Vignette", "vignetteLensCorrection_hidden();" );
};
vignetteLensCorrection_hidden = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 136);
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
    desc2.putString(cTID('Nm  '), "Lens Correction Vignette");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Visible
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Dplc'), true);
    executeAction(sTID('mergeVisible'), desc1, dialogMode);
  };

  // Lens Correction
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('LnAg'), false);
    desc1.putBoolean(cTID('LnAc'), false);
    desc1.putBoolean(cTID('LnAv'), false);
    desc1.putBoolean(cTID('LnAs'), false);
    desc1.putBoolean(cTID('LnIp'), false);
    desc1.putDouble(cTID('LnFo'), 0);
    desc1.putString(cTID('LnPp'), "/Library/Application Support/Adobe/CameraRaw/LensProfiles/1.0/Nikon/NIKON D3X (Nikon AF-S NIKKOR 28-300mm f3.5-5.6 ED VR) - RAW.lcp");
    desc1.putString(cTID('LnPr'), "<?xpacket begin=\"Ôªø\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n   <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n      <rdf:Description rdf:about=\"\"\n            xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\"\n            xmlns:stCamera=\"http://ns.adobe.com/photoshop/1.0/camera-profile\">\n         <photoshop:CameraProfiles>\n            <rdf:Seq>\n               <rdf:li rdf:parseType=\"Resource\">\n                  <stCamera:Make>NIKON CORPORATION</stCamera:Make>\n                  <stCamera:Model>NIKON D3X</stCamera:Model>\n                  <stCamera:Lens>28.0-300.0 mm f/3.5-5.6</stCamera:Lens>\n                  <stCamera:LensInfo>280/10 3000/10 35/10 56/10</stCamera:LensInfo>\n                  <stCamera:ImageWidth>6080.000000</stCamera:ImageWidth>\n                  <stCamera:ImageLength>4044.000000</stCamera:ImageLength>\n                  <stCamera:FocalLength>58.000000</stCamera:FocalLength>\n                  <stCamera:ApertureValue>4.339850</stCamera:ApertureValue>\n                  <stCamera:LensPrettyName>Nikon AF-S NIKKOR 28-300mm f/3.5-5.6 ED VR</stCamera:LensPrettyName>\n                  <stCamera:CameraPrettyName>NIKON D3X</stCamera:CameraPrettyName>\n                  <stCamera:CameraRawProfile>True</stCamera:CameraRawProfile>\n                  <stCamera:FocusDistance>1.500000</stCamera:FocusDistance>\n                  <stCamera:SensorFormatFactor>1.000000</stCamera:SensorFormatFactor>\n                  <stCamera:PerspectiveModel rdf:parseType=\"Resource\">\n                     <stCamera:Version>2</stCamera:Version>\n                     <stCamera:FocalLengthX>1.562392</stCamera:FocalLengthX>\n                     <stCamera:FocalLengthY>1.562392</stCamera:FocalLengthY>\n                     <stCamera:ImageXCenter>0.500000</stCamera:ImageXCenter>\n                     <stCamera:ImageYCenter>0.500000</stCamera:ImageYCenter>\n                     <stCamera:RadialDistortParam1>0.274361</stCamera:RadialDistortParam1>\n                     <stCamera:RadialDistortParam2>0.184367</stCamera:RadialDistortParam2>\n                     <stCamera:RadialDistortParam3>0.970584</stCamera:RadialDistortParam3>\n                     <stCamera:ResidualMeanError>0.000000</stCamera:ResidualMeanError>\n                     <stCamera:ResidualStandardDeviation>-1.000000</stCamera:ResidualStandardDeviation>\n                     <stCamera:ChromaticGreenModel rdf:parseType=\"Resource\">\n                        <stCamera:FocalLengthX>1.563755</stCamera:FocalLengthX>\n                        <stCamera:FocalLengthY>1.563755</stCamera:FocalLengthY>\n                        <stCamera:ImageXCenter>0.500000</stCamera:ImageXCenter>\n                        <stCamera:ImageYCenter>0.500000</stCamera:ImageYCenter>\n                        <stCamera:RadialDistortParam1>0.276116</stCamera:RadialDistortParam1>\n                        <stCamera:RadialDistortParam2>0.192757</stCamera:RadialDistortParam2>\n                        <stCamera:RadialDistortParam3>0.959660</stCamera:RadialDistortParam3>\n                        <stCamera:ResidualMeanError>0.000000</stCamera:ResidualMeanError>\n                        <stCamera:ResidualStandardDeviation>-1.000000</stCamera:ResidualStandardDeviation>\n                     </stCamera:ChromaticGreenModel>\n                     <stCamera:ChromaticRedGreenModel rdf:parseType=\"Resource\">\n                        <stCamera:ScaleFactor>1.000124</stCamera:ScaleFactor>\n                        <stCamera:FocalLengthX>1.563755</stCamera:FocalLengthX>\n                        <stCamera:FocalLengthY>1.563755</stCamera:FocalLengthY>\n                        <stCamera:ImageXCenter>0.500000</stCamera:ImageXCenter>\n                        <stCamera:ImageYCenter>0.500000</stCamera:ImageYCenter>\n                        <stCamera:RadialDistortParam1>-0.000773</stCamera:RadialDistortParam1>\n                        <stCamera:RadialDistortParam2>-0.006217</stCamera:RadialDistortParam2>\n                        <stCamera:RadialDistortParam3>0.046606</stCamera:RadialDistortParam3>\n                        <stCamera:ResidualMeanError>0.000000</stCamera:ResidualMeanError>\n                        <stCamera:ResidualStandardDeviation>-1.000000</stCamera:ResidualStandardDeviation>\n                     </stCamera:ChromaticRedGreenModel>\n                     <stCamera:ChromaticBlueGreenModel rdf:parseType=\"Resource\">\n                        <stCamera:ScaleFactor>1.000497</stCamera:ScaleFactor>\n                        <stCamera:FocalLengthX>1.563755</stCamera:FocalLengthX>\n                        <stCamera:FocalLengthY>1.563755</stCamera:FocalLengthY>\n                        <stCamera:ImageXCenter>0.500000</stCamera:ImageXCenter>\n                        <stCamera:ImageYCenter>0.500000</stCamera:ImageYCenter>\n                        <stCamera:RadialDistortParam1>-0.000030</stCamera:RadialDistortParam1>\n                        <stCamera:RadialDistortParam2>0.029087</stCamera:RadialDistortParam2>\n                        <stCamera:RadialDistortParam3>-0.156308</stCamera:RadialDistortParam3>\n                        <stCamera:ResidualMeanError>0.000000</stCamera:ResidualMeanError>\n                        <stCamera:ResidualStandardDeviation>-1.000000</stCamera:ResidualStandardDeviation>\n                     </stCamera:ChromaticBlueGreenModel>\n                     <stCamera:VignetteModel rdf:parseType=\"Resource\">\n                        <stCamera:FocalLengthX>1.562392</stCamera:FocalLengthX>\n                        <stCamera:FocalLengthY>1.562392</stCamera:FocalLengthY>\n                        <stCamera:ImageXCenter>0.500000</stCamera:ImageXCenter>\n                        <stCamera:ImageYCenter>0.500000</stCamera:ImageYCenter>\n                        <stCamera:VignetteModelParam1>-5.406139</stCamera:VignetteModelParam1>\n                        <stCamera:VignetteModelParam2>55.447993</stCamera:VignetteModelParam2>\n                        <stCamera:VignetteModelParam3>-355.965238</stCamera:VignetteModelParam3>\n                        <stCamera:ResidualMeanError>0.000000</stCamera:ResidualMeanError>\n                     </stCamera:VignetteModel>\n                  </stCamera:PerspectiveModel>\n               </rdf:li>\n            </rdf:Seq>\n         </photoshop:CameraProfiles>\n      </rdf:Description>\n   </rdf:RDF>\n</x:xmpmeta>\n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                                                                                                    \n                           \n<?xpacket end=\"w\"?>");
    desc1.putDouble(cTID('LnIa'), 0);
    desc1.putDouble(cTID('LnI0'), 0);
    desc1.putDouble(cTID('LnI1'), 0);
    desc1.putDouble(cTID('LnI2'), 0);
    desc1.putDouble(cTID('LnI3'), 1);
    desc1.putDouble(cTID('LnRa'), 0);
    desc1.putDouble(cTID('LnVp'), 0);
    desc1.putDouble(cTID('LnHp'), 0);
    desc1.putDouble(cTID('LnSi'), 100);
    desc1.putInteger(cTID('LnFt'), 2);
    desc1.putDouble(cTID('LnSb'), -60);
    desc1.putInteger(cTID('LnSt'), 40);
    desc1.putDouble(cTID('LnRc'), 0);
    desc1.putDouble(cTID('LnGm'), 0);
    desc1.putDouble(cTID('LnBy'), 0);
    desc1.putInteger(cTID('LnNa'), 64);
    desc1.putInteger(cTID('LnIh'), 0);
    desc1.putInteger(cTID('LnIv'), 0);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 127);
    desc2.putDouble(cTID('Grn '), 127);
    desc2.putDouble(cTID('Bl  '), 127);
    desc1.putObject(cTID('LnIs'), sTID("RGBColor"), desc2);
    desc1.putBoolean(cTID('LnNm'), false);
    executeAction(1282294642, desc1, dialogMode);
  };

  // Set
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 30);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Set
  step3();      // Merge Visible
  step4();      // Lens Correction
  step5();      // Set
  step6();      // Set
};



//
//==================== Overlay Vignette ==============
//
vignetteOverlay = function() {
	app.activeDocument.suspendHistory("Apply Overlay Layer Filter Vignette", "vignetteOverlay_hidden();" );
};
vignetteOverlay_hidden = function() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 142);
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
    desc2.putString(cTID('Nm  '), "Overlay Vignette");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Visible
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Dplc'), true);
    executeAction(sTID('mergeVisible'), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 333.333333333333);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 40);
    var desc4 = new ActionDescriptor();
    desc4.putString(cTID('Nm  '), "$$$/DefaultGradient/ForegroundToBackground=Foreground to Background");
    desc4.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc4.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc5 = new ActionDescriptor();
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Rd  '), 37.0038925856352);
    desc6.putDouble(cTID('Grn '), 37.0038925856352);
    desc6.putDouble(cTID('Bl  '), 37.0038925856352);
    desc5.putObject(cTID('Clr '), sTID("RGBColor"), desc6);
    desc5.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc5.putInteger(cTID('Lctn'), 0);
    desc5.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc5);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Rd  '), 255);
    desc8.putDouble(cTID('Grn '), 255);
    desc8.putDouble(cTID('Bl  '), 255);
    desc7.putObject(cTID('Clr '), sTID("RGBColor"), desc8);
    desc7.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc7.putInteger(cTID('Lctn'), 4096);
    desc7.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc7);
    desc4.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc9.putInteger(cTID('Lctn'), 0);
    desc9.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc10.putInteger(cTID('Lctn'), 4096);
    desc10.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc10);
    desc4.putList(cTID('Trns'), list2);
    desc3.putObject(cTID('Grad'), cTID('Grdn'), desc4);
    desc3.putUnitDouble(cTID('Angl'), cTID('#Ang'), 90);
    desc3.putEnumerated(cTID('Type'), cTID('GrdT'), cTID('Rdl '));
    desc3.putBoolean(cTID('Rvrs'), true);
    desc3.putBoolean(cTID('Dthr'), true);
    desc3.putBoolean(cTID('Algn'), true);
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 150);
    var desc11 = new ActionDescriptor();
    desc11.putUnitDouble(cTID('Hrzn'), cTID('#Prc'), 0);
    desc11.putUnitDouble(cTID('Vrtc'), cTID('#Prc'), 0);
    desc3.putObject(cTID('Ofst'), cTID('Pnt '), desc11);
    desc2.putObject(cTID('GrFl'), cTID('GrFl'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 20);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Set
  step3();      // Merge Visible
  step4();      // Set
  step5();      // Set
};