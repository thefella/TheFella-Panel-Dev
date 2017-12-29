//! Variables
var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };


//
//==================== Shadows 1 ==============
//
Shadows1 = function() {
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

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
};



//
//==================== Shadows 2 ==============
//
Shadows2 = function() {
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

  // Intersect
  function step4(enabled, withDialog) {
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

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Intersect
  step5();      // Select
  step6();      // Delete
  step7();      // Duplicate
};



//
//==================== Shadows 3 ==============
//
Shadows3 = function() {
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

  // Intersect
  function step4(enabled, withDialog) {
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

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
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
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Intersect
  step5();      // Select
  step6();      // Delete
  step7();      // Duplicate
  step8();      // Intersect
  step9();      // Select
  step10();      // Delete
  step11();      // Duplicate
};



//
//==================== Shadows 4 ==============
//
Shadows4 = function() {
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

  // Intersect
  function step4(enabled, withDialog) {
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

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
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
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step12(enabled, withDialog) {
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

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Intersect
  step5();      // Select
  step6();      // Delete
  step7();      // Duplicate
  step8();      // Intersect
  step9();      // Select
  step10();      // Delete
  step11();      // Duplicate
  step12();      // Intersect
  step13();      // Select
  step14();      // Delete
  step15();      // Duplicate
};



//
//==================== Shadows 5 ==============
//
Shadows5 = function() {
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

  // Intersect
  function step4(enabled, withDialog) {
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

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
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
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step12(enabled, withDialog) {
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

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step16(enabled, withDialog) {
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

  // Select
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Intersect
  step5();      // Select
  step6();      // Delete
  step7();      // Duplicate
  step8();      // Intersect
  step9();      // Select
  step10();      // Delete
  step11();      // Duplicate
  step12();      // Intersect
  step13();      // Select
  step14();      // Delete
  step15();      // Duplicate
  step16();      // Intersect
  step17();      // Select
  step18();      // Delete
  step19();      // Duplicate
};



//
//==================== Shadows 6 ==============
//
Shadows6 = function(mode) {
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

  // Intersect
  function step4(enabled, withDialog) {
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

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
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
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step12(enabled, withDialog) {
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

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step16(enabled, withDialog) {
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

  // Select
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step20(enabled, withDialog) {
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

  // Select
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 5");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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
  
  // Select RGB Channel
  function step24(enabled, withDialog) {
		if (enabled != undefined && !enabled)
			return;
		var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
		var desc1 = new ActionDescriptor();
		var ref1 = new ActionReference();
		ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
		desc1.putReference(cTID('null'), ref1);
		executeAction(cTID('slct'), desc1, dialogMode);
	};
  
  // Deselect
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

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Intersect
  step5();      // Select
  //step6();      // Delete
  if (mode != 'all') { step6(); } // Delete
  step7();      // Duplicate
  step8();      // Intersect
  step9();      // Select
  //step10();      // Delete
  if (mode != 'all') { step10(); } // Delete
  step11();      // Duplicate
  step12();      // Intersect
  step13();      // Select
  //step14();      // Delete
  if (mode != 'all') { step10(); } // Delete
  step15();      // Duplicate
  step16();      // Intersect
  step17();      // Select
  //step18();      // Delete
  if (mode != 'all') { step18(); } // Delete
  step19();      // Duplicate
  step20();      // Intersect
  step21();      // Select
  //step22();      // Delete
  if (mode != 'all') { step22(); } // Delete
  step23();      // Duplicate
  if (mode == 'all') { step24(); } // Select RGB Channel
  step25(); 	// Deselect
};



//
//==================== Shadows 7 ==============
//
Shadows7 = function(mode) {
	
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

  // Intersect
  function step4(enabled, withDialog) {
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

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
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
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step12(enabled, withDialog) {
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

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step16(enabled, withDialog) {
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

  // Select
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step20(enabled, withDialog) {
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

  // Select
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 5");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
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

  // Intersect
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 6");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 6");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Shadows 7");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };
  
  // Select RGB Channel
  function step28(enabled, withDialog) {
		if (enabled != undefined && !enabled)
			return;
		var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
		var desc1 = new ActionDescriptor();
		var ref1 = new ActionReference();
		ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
		desc1.putReference(cTID('null'), ref1);
		executeAction(cTID('slct'), desc1, dialogMode);
	};

  step1();      // Set
  step2();      // Inverse
  step3();      // Duplicate
  step4();      // Intersect
  step5();      // Select
  
  //step6();      // Delete
  if (mode != 'all') {
  	step6();      // Delete
  }
  
  step7();      // Duplicate
  step8();      // Intersect
  step9();      // Select
  
  //step10();      // Delete
  if (mode != 'all') {
  	step10();      // Delete
  }
  
  step11();      // Duplicate
  step12();      // Intersect
  step13();      // Select
  
  //step14();      // Delete
  if (mode != 'all') {
  	step14();      // Delete
  }
  
  step15();      // Duplicate
  step16();      // Intersect
  step17();      // Select
  
  //step18();      // Delete
  if (mode != 'all') {
  	step18();      // Delete
  }
  
  step19();      // Duplicate
  step20();      // Intersect
  step21();      // Select
  
  //step22();      // Delete
  if (mode != 'all') {
  	step22();      // Delete
  }
  
  step23();      // Duplicate
  step24();      // Intersect
  step25();      // Select
  
  //step26();      // Delete
  if (mode != 'all') {
  	step26();      // Delete
  }
  
  step27();      // Duplicate
  
  if (mode == 'all') {
	step28(); 	// Select RGB Channel
  }
  
};



//
//==================== All Shadows (Expanded) ==============
//
lumAllShadows = function() {
	Shadows6('all');
}



//
//==================== Delete Shadows ==============
//
lumDeleteShadows = function() {

	function checkForChannelName (theName) {  
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

  // Delete
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 5");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 6");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Shadows 7");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };
  
  if (checkForChannelName("Shadows 1") == true) { step1(); };
  if (checkForChannelName("Shadows 2") == true) { step2(); };
  if (checkForChannelName("Shadows 3") == true) { step3(); };
  if (checkForChannelName("Shadows 4") == true) { step4(); };
  if (checkForChannelName("Shadows 5") == true) { step5(); };
  if (checkForChannelName("Shadows 6") == true) { step6(); };
  if (checkForChannelName("Shadows 7") == true) { step7(); };  
};