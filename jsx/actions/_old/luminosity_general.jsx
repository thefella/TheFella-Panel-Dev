lumAllBasic = function() {
	
	Highlights1();
	Highlights2();
	Highlights3();
	Midtones1();
	Midtones2();
	Shadows1();
	Shadows2();
	Shadows3();
	
	OrderLayers();
}


lumDeleteAll = function() {
	lumDeleteHighlights();
	lumDeleteMidtones();
	lumDeleteShadows();
}






function OrderLayers() {
  // Move
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 4);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Move
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 5);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };
  
  // Move
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 6);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };
  
  // Move
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Midtones 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 7);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };
  
  // Move
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Midtones 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 8);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };
  
  // Move
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 9);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };
  
  // Move
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 10);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };
  
  // Move
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Chnl'), 11);
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  step1();      // Move
  step2();      // Move
  step3();      // Move
  step4();      // Move
  step5();      // Move
  step6();      // Move
  step7();      // Move
  step8();      // Move
  step9();      // Move
  step10();      // Move
  step11();      // Move
};
